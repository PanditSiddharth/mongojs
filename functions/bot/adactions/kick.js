const unban = require("./unban");

const kick = async (bot, ctxx, cn = -1, op1 = -1, op2 = -1, op3 = -3) => {


    try {

        /* ************************************************************************************** */

        if (!ctxx.message.reply_to_message)
            return ctxx.reply('Please reply to the user');

        /* ************************************************************************************** */

        const name = ctxx.message.reply_to_message.from.first_name;
        const userId = ctxx.message.reply_to_message.from.id;

        /* ************************************************************************************** */

        try {
            ctxx.state.rmem = await bot.telegram.getChatMember(ctxx.message.chat.id, userId)
            await ctxx.state.sleep(1)
        } catch (err) {
            return await ctxx.reply(err.message)
        }

        /* ************************************************************************************** */

        if (ctxx.state.rmem.status == 'creator')
            return await ctxx.reply(name + " is Owner, I can't kick them")

        let m = await bot.telegram.getMe()
        if (userId == m.id)
            return await ctxx.reply("I can't kick self")

        if (ctxx.state.rmem.status == 'administrator')
            return await ctxx.reply(name + " is admin, I can't kick admin")

        if (ctxx.state.rmem.status == 'left')
            return await ctxx.reply(name + " is not a member")

        /* ************************************************************************************** */

        try {

            let res = await bot.telegram.kickChatMember(ctxx.chat.id, userId)
            await ctxx.state.sleep(1)

            if (res == true) {
                var ubn = await bot.telegram.unbanChatMember(ctxx.chat.id, userId)
                await ctxx.state.sleep(1)
            }

            if(ubn == true){
            let my = await bot.telegram.sendMessage(userId, 'You are kicked from chat ' + (ctxx.chat.username ? '@' + ctxx.chat.username : ctxx.chat.title))
            console.log(ctxx.chat)
            
            return ctxx.reply(`Kicked user ${name}`);
            }

        } catch (err) {
            return await ctxx.reply(err.message)
        }

        /* ************************************************************************************** */

    } catch (error){
        return await ctxx.reply(error.message)
    }
}

module.exports = kick