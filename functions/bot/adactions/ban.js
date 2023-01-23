const ban = async (bot, ctxx, cn = -1, op1 = -1, op2 = -1, op3 = -3) => {

    
    if (ctxx.message.reply_to_message) {
        if(ctxx.botInfo.id == ctxx.message.reply_to_message.from.id){
            try {
        return ctxx.reply("You can't ban me Lol")
    } catch (error) {    
        return      
    }}}

    if (ctxx.message.reply_to_message) {
        const sleep = t => new Promise(r => setTimeout(r, t));
        try {
        let res = await bot.telegram.banChatMember(ctxx.chat.id, ctxx.message.reply_to_message.from.id)
        .catch(async (err) => {
            try {
            if ((err.message).includes('administrator'))
            return await ctxx.reply("I can't ban admin")

            return ctxx.reply(err.message)
            
        } catch (error) {   
        }
        });
        await sleep(10)
        if(res.from)
        return

        ctxx.reply(`Banned user ${ctxx.message.reply_to_message.from.first_name}`);
        await sleep(10)

    } catch (err) {
        try {
            ctxx.reply(err.message)
    } catch (error) {
            
    }
    }
}
else {
    ctxx.reply('Please reply to user')
}

}

module.exports = ban