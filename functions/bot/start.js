const axios = require('axios');
const f = require('./cn.js')
const { message } = require('telegraf/filters');

async function strt(bot, mdb) {
  try {

    await bot.help(async ctx => {
      await ctx.reply("I am javascript bot with mongo db\nWorking in testing mode..")
      console.log(ctx)
    })

   
    bot.command('st', (ctx) => { 
      let t = 1;
      let m = ctx.message.message_id

      let del = async (ctx) => { 
      let mid = m - ((10 - t) * 10)
      console.log(mid)
      for (let i = 0; i < 9; i++) {
      bot.telegram.deleteMessage(ctx.chat.id, mid + i)
      .then((y)=> console.log(y + mid))
      .catch(error => {
          // console.error(error)
          ctx.reply("Error occured" + error.message)
      });
    }
  }

  for (let j = 0; j < 10; j++) {
    del(ctx)
  }

    })

    bot.start(async (ctx) => {
      try {

const sleep = t => new Promise(r => setTimeout(r, t));
const msg = await ctx.reply("Bot starting");

let arr = [
           'bot is starting for you..',
           'Please wait...',
           'Only 3 seconds...',
           'Only 2 seconds...',
           'Only 1 seconds...',
           'Bot Started..  :)',
           'Please enter any pincode to see details\nExample: send 226101'
         ]

for(let i = 0; i< 7; i++){
await sleep(1000);
try{
await bot.telegram.editMessageText(ctx.chat.id, msg.message_id, undefined, arr[i]);
// if(i>5)
// return
} catch (ere) {   }

}
             
} catch (e) {
  ctx.reply("Error occured")
}
})


   await bot.on(message('sticker'), async (ctx) => {
      let str = 'this bot is starting soon please wait while i am doing some processes in our backend for responding you in good manner which you want to see'
      let msgg = []
      msgg = str.split(' ')

      let i = 1;
      let ms = [];
      let y = await ctx.reply('bot starting...')
      let i_d = await setInterval(async () => {

        if (i > 40)
          clearInterval(i_d);

        ms.push(msgg[i++])
        ms.push(msgg[i++])
        ms.push(msgg[i++])
        ms.push(msgg[i++])

        try {
          
          await bot.telegram.editMessageText('@shabdt', y.message_id, undefined, ms.join(' '));
        } catch (error) {
            console.log('same message')
        }

      }, 500)

      await setTimeout(async () => {
        await bot.telegram.editMessageText('@shabdt', y.message_id, undefined, 'Bot Started now...');
      }, 7000)

      // await f(bot, mdb);
      // console.log(ctx.message.reply_to_message);
    })

  } catch (e) {
    console.log('Some error' + e.message)
    await bot.telegram.sendMessage('@shabdt', 'starting error: ' + e.message)
  }

}

module.exports = { strt }