const mute = async (bot, ctxx) => {

    try {

        /* ************************************************************************************** */

        if (!ctxx.message.reply_to_message)
            return ctxx.reply('Please reply to a message from the user you want to mute');

        /* ************************************************************************************** */

        try {
            ctxx.state.rmem = await bot.telegram.getChatMember(ctxx.message.chat.id, ctxx.message.reply_to_message.from.id)
            await ctxx.state.sleep(10)
        } catch (err) {
            return await ctxx.reply('Umt admm error: ' + err.message)
        }

        /* ************************************************************************************** */

        if (ctxx.state.rmem.status == 'creator' || ctxx.state.rmem.status == 'administrator') {
            let m = await bot.telegram.getMe()
            if(ctxx.message.reply_to_message.from.id == m.id) 
            return await ctxx.reply("I can't mute self")
            return await ctxx.reply(ctxx.message.reply_to_message.from.first_name + " is admin, I can't mute admin")
        } else {
            ctxx.state.admm = false
        }

        /* ************************************************************************************** */

        try {
            const userId = ctxx.message.reply_to_message.from.id;
            let y = await bot.telegram.restrictChatMember(ctxx.chat.id, userId)
            ctxx.state.sleep(10)
            return ctxx.reply(`User ${ctxx.message.reply_to_message.from.first_name} has been muted`)
        } catch (error) {
            return ctxx.reply(error.message)
        }

        /* ************************************************************************************** */


    } catch (err) {
        return await ctxx.reply(err.message)
    }

}

module.exports = mute