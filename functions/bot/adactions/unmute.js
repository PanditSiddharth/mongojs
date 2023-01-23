const unban = require("./unban");
const unmute = async (bot, ctxx, cn = -1, op1 = -1, op2 = -1, op3 = -3) => {
    let n;
    const sleep = t => new Promise(r => setTimeout(r, t));
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
            if (n == true)
                return

            ctxx.reply(ctxx.message.reply_to_message.from.first_name + " now you can speak")
            await sleep(10)
            console.log(n)
        }
    } catch (error) {
        console.log(n)
        ctxx.reply('Error: ' + error.message)
    }

}

module.exports = unmute