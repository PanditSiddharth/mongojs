
const unmute = async (bot, ctxx) => {
    if (!ctxx.message.reply_to_message)
        return ctxx.reply('Please reply to user')


    try {
        ctxx.state.rmem = bot.telegram.getChatMember(ctxx.message.chat.id, ctxx.message.reply_to_message.from.id)
        await ctxx.state.sleep(100)
        // if(ctxx.state.rmem)
        return await ctxx.reply(ctxx.message.reply_to_message.from.first_name + ' is admin and can speak already')
    } catch (err) {
        ctxx.state.rmem = false
        return ctxx.reply('Umt admm error: ' + err.message)
    }
}


//     if (ctxx.state.rmem == false)
//         return

//     if (ctxx.state.rmem.status == 'creator' || ctxx.state.rmem.status == 'administrator') {
//         ctxx.state.admm = true
//         return await ctxx.reply(ctxx.message.reply_to_message.from.first_name + ' is admin and can speak already')
//     } else {
//         ctxx.state.admm = false
//     }

//     try {
//         try {
//             let n = await bot.telegram.promoteChatMember(ctxx.chat.id, ctxx.message.reply_to_message.from.id, 
//                 {can_send_messages : false,
//                 can_add_web_page_previews : true
//             })
            
//             await ctxx.state.sleep(100)
//             if (n == true)
//                return await ctxx.reply(ctxx.message.reply_to_message.from.first_name + " now you can speak")
//         } catch (err) {
//                 return ctxx.reply(err.message)
//         };

//     } catch (error) {
//         ctxx.reply('Error: ' + error.message)
//     }

// }

module.exports = unmute