const del = (bot, ctxx, cn = -1, op1 = -1, op2 = -1, op3 = -3) => {
    bot.deleteMessage(ctxx.chat.id, ctxx.message.reply_to_message.message_id)
}

module.exports = del