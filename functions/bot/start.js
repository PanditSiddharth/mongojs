const axios = require('axios');
const f = require('./cn.js')
const { message } = require('telegraf/filters');

async function strt(bot, mdb) {
  try{

  bot.help(ctx => {
    ctx.reply("I am javascript bot with mongo db\nWorking in testing mode..")
  })

  bot.start(ctx => {
    ctx.reply("I am javascript bot with mongo db\nWorking in testing mode..")
  })

  bot.on(message('text'),async (ctx) => {
    bot.telegram.sendMessage('@shabdt', 'bot starting');
    await f(bot, mdb);
    console.log('stopped');
  })

  } catch (e) {
    console.log('Some error' + e.message)
    bot.telegram.sendMessage('@shabdt', 'starting error: ' + e.message)
  }

}

module.exports = { strt }