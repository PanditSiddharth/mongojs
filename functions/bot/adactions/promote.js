const promote = async (bot, ctxx, cn = -1, op1 = -1, op2 = -1, op3 = -3) => {
    try {
        if(ctxx.message.reply_to_message){
        const name = ctxx.message.reply_to_message.from.first_name;
        const userId = ctxx.message.reply_to_message.from.id;
        const chatId = ctxx.chat.id;
    bot.telegram.promoteChatMember(chatId, userId, {
        can_change_info: true,
        can_post_messages: true,
        can_edit_messages: true,
        can_delete_messages: true,
        can_invite_users: true,
        can_restrict_members: true,
        can_pin_messages: true,
        can_manage_topics: false,
        can_promote_members: false,
        can_manage_video_chats: true,

      })
        .then(() => {
          ctxx.reply(name + " you are promoted")
        })
        .catch((err) => {
          console.log(err);
          ctxx.reply('Error:' + err.message)
        });
    }
    } catch (error) {
        
    }
}

module.exports = promote