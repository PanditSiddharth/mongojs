const mute = async (bot, ctxx) => {

    try {

        /* ************************************************************************************** */

        if (!ctxx.message.reply_to_message)
            return ctxx.reply('Please reply to a message from the user you want to mute');

        /* ************************************************************************************** */

        const name = ctxx.message.reply_to_message.from.first_name;
        const userId = ctxx.message.reply_to_message.from.id;

        /* ************************************************************************************** */

        try {
            ctxx.state.rmem = await bot.telegram.getChatMember(ctxx.message.chat.id, userId)
            await ctxx.state.sleep(10)
        } catch (err) {
            return await ctxx.reply(err.message)
        }

        /* ************************************************************************************** */

        if (ctxx.state.rmem.status == 'creator')
            return await ctxx.reply(name + " is Owner, I can't mute Creator")

        let m = await bot.telegram.getMe()
        if (userId == m.id)
            return await ctxx.reply("I can't mute self")

        if (ctxx.state.rmem.status == 'administrator')
            return await ctxx.reply(name + " is admin, I can't mute admin")

        if (ctxx.state.rmem.status == 'restricted')
            return await ctxx.reply(name + " is mute already")
    
        /* ************************************************************************************** */

        try {
            let y = await bot.telegram.restrictChatMember(ctxx.chat.id, userId)
            ctxx.state.sleep(10)

            if (y == true)
                return ctxx.reply(`User ${name} has been muted`)
        } catch (error) {
            return ctxx.reply(error.message)
        }

        /* ************************************************************************************** */


    } catch (err) {
        return await ctxx.reply(err.message)
    }

}

module.exports = mute