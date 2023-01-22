const unban = async (bot, ctxx,{ cn= false, kick= false, unmute = false, op3 = false} = {}) => {

    try {
        
    if (!ctxx.message.reply_to_message) {
        return ctxx.reply('Please reply to a message from the user you want to unban');
      }
      if (!ctxx.message.reply_to_message.from) {
        return ctxx.reply('This user cannot be unbanned');
      }
      const userId = ctxx.message.reply_to_message.from.id;
      const name = ctxx.message.reply_to_message.from.first_name;
      bot.telegram.unbanChatMember(ctxx.chat.id, userId)
        .then(() => {
            if(!kick && !unmute)
            return ctxx.reply(`User ${name} has been unbanned`)   
            if(unmute)
            return ctxx.reply(`User ${name} unmuted`)  
        
        })
        .catch((err) => ctxx.reply(`An error occurred: ${err.message}`));

    } catch (error) {
        ctxx.reply('Error: ' + error.message)
    }
}

module.exports = unban