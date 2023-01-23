const unban = require("./unban");

const kick = async (bot, ctxx, cn = -1, op1 = -1, op2 = -1, op3 = -3) => {

    if (!ctxx.message.reply_to_message) 
    return

    if (ctxx.botInfo.id == ctxx.message.reply_to_message.from.id) {
        try {
            return ctxx.reply("You can't kick me Lol")
        } catch (error) {
            return
        }
    }

    if (ctxx.message.reply_to_message) {

        const sleep = t => new Promise(r => setTimeout(r, t));
        try {
            
            let res = await bot.telegram.kickChatMember(ctxx.chat.id, ctxx.message.reply_to_message.from.id)
            .catch(async (err) => {
                try {
                if ((err.message).includes('administrator'))
                return await ctxx.reply("I can't kick admin")

                return ctxx.reply(err.message)
                
            } catch (error) {   
            }
            });
            await sleep(300)
            if(res.from)
            return
            
            console.log(res)

            if (res)
            await unban(bot, ctxx, { kk: true })

            await sleep(300)
            ctxx.reply(`Kicked user ${ctxx.message.reply_to_message.from.first_name}`);
               

        } catch (err) {
            try {
              

            } catch (error) {

            }
        }
    }
    else {
        ctxx.reply('Please reply to user')
    }

}

module.exports = kick