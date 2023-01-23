const unban = require("./unban");

const kick = async (bot, ctxx, cn = -1, op1 = -1, op2 = -1, op3 = -3) => {
    if (ctxx.message.reply_to_message) {

        if(ctxx.botInfo.id == ctxx.message.reply_to_message.from.id){
            try {
        return ctxx.reply("You can't kick me Lol")
    } catch (error) {
                
    }
        }
       let m = false
        await bot.telegram.kickChatMember(ctxx.chat.id, ctxx.message.reply_to_message.from.id)
            .then((result) => {
                ctxx.reply(`Kicked user ${ctxx.message.reply_to_message.from.first_name}`);
                console.log(result)
            })
            .catch((err) => {
            if((err.message).includes('administrator')) {
            m = true
            return ctxx.reply("I can't kick admin") 
            }
        });
            if(!m)
            unban(bot, ctxx, {kick: true})
    }
    else {
        ctxx.reply('Please reply to user')
    }
}

module.exports = kick