const axios = require('axios');
const {Composer} = require('telegraf');
// const f = require('./cn.js')
const { message } = require('telegraf/filters');
const allactions = require('./allactions')

async function strt(bot, mdb) {
  try {
    console.log('run')
    Composer.admin((ctx, next)=>{  
      bot.start((ctx) => {ctx.reply('Logic.B Group management bot\n\nUse: /nhelp for all helps and commands')})
      next(ctx)
     })

  //  await allactions(bot)


  // Composer.admin((ctx)=>{  
  //  bot.start((ctx) => {ctx.reply('Logic.B Group management bot\n\nUse: /nhelp for all helps and commands')})
  // })
   await bot.hears('run', ctx => { ctx.reply('running in test mode') })
/*
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
            .then((y) => console.log(y + mid))
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
          'Working in test mode'
        ]

        for (let i = 0; i < 7; i++) {
          await sleep(1000);
          try {
            await bot.telegram.editMessageText(ctx.chat.id, msg.message_id, undefined, arr[i]);
          } catch (ere) { }

        }

      } catch (e) {
        ctx.reply("Error occured")
      }
    })
*/

  } catch (e) {
    console.log('Some error' + e.message)
    await bot.telegram.sendMessage('@shabdt', 'starting error: ' + e.message)
  }

}

module.exports = { strt }