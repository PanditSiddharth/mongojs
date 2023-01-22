const del = (bot, ctxx, cn = -1, op1 = -1, op2 = -1, op3 = -3) => {
    console.log('running')
    try{
    if(ctxx.message.reply_to_message){
    bot.telegram.deleteMessage(ctxx.chat.id, ctxx.message.reply_to_message.message_id)
    bot.telegram.deleteMessage(ctxx.chat.id, ctxx.message.message_id)
    }
    else
    console.log('not replied')
    } catch(err){
        console.log(err)
    }
}

module.exports = del