const mute = async (bot, ctxx, cn = -1, op1 = -1, op2 = -1, op3 = -3) => {
    // bot.telegram.
    try {
        
        if (!ctxx.message.reply_to_message)
            return ctxx.reply('Please reply to a message from the user you want to mute');
        else{
          const userId = ctxx.message.reply_to_message.from.id;
          bot.telegram.restrictChatMember(ctxx.chat.id, ctxx.message.reply_to_message.from.id)
            .then(() => {
                return ctxx.reply(`User ${userId} has been muted`)     })
            .catch((err) => ctxx.reply(`An error occurred: ${err.message}`));

        }
    
        } catch (error) {
            ctxx.reply('Error: ' + error.message)
        }

}

module.exports = mute