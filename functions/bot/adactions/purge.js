const purge = (bot, ctxx, cn = -1, op1 = -1, op2 = -1, op3 = -3) => {
    try {
        const sleep = t => new Promise(r => setTimeout(r, t));
        if (ctxx.message.reply_to_message) {
            for (let i = 0; i < 20; i++) {
                try {
                    bot.telegram.deleteMessage(ctxx.chat.id, ctxx.message.reply_to_message.message_id - (20 - i))
                        .catch(async (err) => {
                            await sleep(1000)
                            bot.telegram.deleteMessage(ctxx.chat.id, ctxx.message.reply_to_message.message_id - (20 - i))
                            .catch(err => {})
                        })

                } catch (errr) {
                    console.log(errr.message)
                }
            }
            ctxx.reply('purge done')

        }
        else {
            for (let i = 0; i < 20; i++) {
                try {
                    bot.telegram.deleteMessage(ctxx.chat.id, ctxx.message.message_id - (20 - i))
                        .catch(async (err) => {
                            await sleep(1000)
                            bot.telegram.deleteMessage(ctxx.chat.id, ctxx.message.message_id - (20 - i))
                            .catch(err => {})
                        })

                } catch (errr) {
                    console.log(errr.message)
                }
            }
            ctxx.reply('purge done')
        }

        // bot.telegram.deleteMessage(ctxx.chat.id, ctxx.message.message_id)
        // .catch(async (err) => {
        //     await sleep(1000)
        //     bot.telegram.deleteMessage(ctxx.chat.id, ctxx.message.reply_to_message.message_id)
        //     })
        // }

    } catch (err) {
        console.log(err)
    }
}

module.exports = purge