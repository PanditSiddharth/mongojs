const unban = require("./unban");

const kick = async (bot, ctxx, cn = -1, op1 = -1, op2 = -1, op3 = -3) => {
    if (ctxx.message.reply_to_message) {
        await bot.telegram.kickChatMember(ctxx.chat.id, ctxx.message.reply_to_message.from.id)
            .then((result) => {
                ctxx.reply(`Kicked user ${ctxx.message.reply_to_message.from.first_name}`);
                console.log(result)
            })
            .catch((err) => {
                console.log(err);
            });
        unban(bot, ctxx, {kick: true})
    }
    else {
        ctxx.reply('Please reply to user')
    }
}

module.exports = kick