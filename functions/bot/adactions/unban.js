const unban = async (bot, ctxx, { cn = false, kk = false, unmute = false, op3 = false } = {}) => {

  try {
    if (!ctxx.message.reply_to_message) {
      return ctxx.reply('Please reply to user');
    }
    if (!ctxx.message.reply_to_message.from) {
      return ctxx.reply('This user cannot be unbanned');
    }
    
    if (ctxx.botInfo.id == ctxx.message.reply_to_message.from.id) {
      try {
        return ctxx.reply("I am not banned lol")
      } catch (error) {
        return false
      }
    }
  } catch (error) {
    return ctxx.reply(error.message)
  }
  
  const name = ctxx.message.reply_to_message.from.first_name;
    const sleep = t => new Promise(r => setTimeout(r, t));

    try {
      let res = await bot.telegram.unbanChatMember(ctxx.chat.id, ctxx.message.reply_to_message.from.id)
        .catch(async (err) => {
          try {
            return ctxx.reply(err.message);
          } catch (error) { }
        });

      await sleep(10)
      if (res.from)
        return

      if (!kk && !unmute)
        return ctxx.reply(`User ${name} has been unbanned`)
      if (unmute)
        return ctxx.reply(`User ${name} unmuted`)

    } catch (err) {
      try {
        ctxx.reply(err.message)
      } catch (error) {

      }
    }
  }

module.exports = unban