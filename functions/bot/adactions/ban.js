const ban = async (bot, ctxx, cn = -1, op1 = -1, op2 = -1, op3 = -3) => {
    if (ctxx.message.reply_to_message) {
        await bot.telegram.banChatMember(ctxx.chat.id, ctxx.message.reply_to_message.from.id)
            .then((result) => {
                ctxx.reply(`Banned user ${ctxx.message.reply_to_message.from.first_name}`);
                console.log(result)
            })
          .catch((err) => {if((err.message).includes('administrator')) ctxx.reply("I can't ban admin") });
   
}
}

module.exports = ban