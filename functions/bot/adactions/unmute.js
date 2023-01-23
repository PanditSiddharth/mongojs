const unban = require("./unban");
const unmute = async (bot, ctxx, cn = -1, op1 = -1, op2 = -1, op3 = -3) => {
    let n;
    const sleep = t => new Promise(r => setTimeout(r, t));

    if (ctxx.message.reply_to_message) {

        let rmem = await bot.telegram.getChatMember(ctxx.message.chat.id, ctxx.message.reply_to_message.from.id)
            .catch((err) => {
                ctxx.state.rmem = false
                return ctxx.reply('Umt admm error: ' + err.message)
            })

        if (ctxx.state.rmem == false)
            return

        ctxx.state.rmem = rmem

        if (rmem.status == 'creator' || rmem.status == 'administrator') {
            ctxx.state.admm = true
        } else {
            ctxx.state.admm = false
        }
    }
    else {
        return
    }

    if (ctxx.state.rmem == false)
        return

    if (ctxx.state.admm) {
        return ctxx.reply(ctxx.message.reply_to_message.from.first_name + ' is admin and can speak already')
    }

    try {
        if (ctxx.message.reply_to_message) {
            n = await bot.telegram.promoteChatMember(chat_id = ctxx.chat.id, user_id = ctxx.message.reply_to_message.from.id, can_send_messages = false, can_add_web_page_previews = true)
                .catch(async (err) => {
                    try {
                        return ctxx.reply(err.message)
                    } catch (error) {
                    }
                });

            await sleep(10)
            if (n != true)
                return

            await ctxx.reply(ctxx.message.reply_to_message.from.first_name + " now you can speak")
            await sleep(10)
            console.log(n)
        }
    } catch (error) {
        console.log(n)
        ctxx.reply('Error: ' + error.message)
    }

}

module.exports = unmute