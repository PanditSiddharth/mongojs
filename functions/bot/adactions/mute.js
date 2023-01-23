const mute = async (bot, ctxx, cn = -1, op1 = -1, op2 = -1, op3 = -3) => {
    // bot.telegram.
    try {
        
        if (!ctxx.message.reply_to_message)
            return ctxx.reply('Please reply to a message from the user you want to mute');

        else{

          const userId = ctxx.message.reply_to_message.from.id;

          let y = await bot.telegram.restrictChatMember(ctxx.chat.id, ctxx.message.reply_to_message.from.id)
          .catch(async (err) => {
            try {
                ctxx.state.error = true
                if ((err.message).includes('administrator'))
                return await ctxx.reply("I can't mute admin")

                if ((err.message).includes('restrict'))
                return await ctxx.reply("I can't mute self")

                return ctxx.reply(err.message)
                
            } catch (error) {   
            }
        });
           
            if(ctxx.state.error == true)
            return

           return ctxx.reply(`User ${ctxx.message.reply_to_message.from.first_name} has been muted`)  


        }
    
        } catch (error) {
            ctxx.reply('Error: ' + error.message)
        }

}

module.exports = mute