const unban = require("./unban");
const unmute = async (bot, ctxx, cn = -1, op1 = -1, op2 = -1, op3 = -3) => {

    const sleep = t => new Promise(r => setTimeout(r, t));
    if (ctxx.message.reply_to_message) {
        let rmem;
        try{
        rmem = await bot.telegram.getChatMember(ctxx.message.chat.id, ctxx.message.reply_to_message.from.id)
        await sleep(1000)
        }catch(err) {
                ctxx.state.rmem = false
                return ctxx.reply('Umt admm error: ' + err.message)
            }

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
           
            try {
              
               let n = await bot.telegram.promoteChatMember(chat_id = ctxx.chat.id, user_id = ctxx.message.reply_to_message.from.id, can_send_messages = false, can_add_web_page_previews = true)
                await sleep(1000)
              
                await ctxx.reply(ctxx.message.reply_to_message.from.first_name + " now you can speak")
            } catch (err) {
                try {
                    return ctxx.reply(err.message)
                } catch (error) {
                }
            };

            // await sleep(500)
            // if (n != true)
            //     return

            // await sleep(500)
            // if (n == true)
            //     await ctxx.reply(ctxx.message.reply_to_message.from.first_name + " now you can speak")

            // await sleep(100)
            // console.log(n)
        }
    } catch (error) {
        ctxx.reply('Error: ' + error.message)
    }

}

module.exports = unmute