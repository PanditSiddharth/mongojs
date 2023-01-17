async function strt(bot) {

  try{

  bot.help(ctx => {
    ctx.reply("I am javascript bot with mongo db\nWorking in testing mode..")
  })

  bot.start(ctx => {
    ctx.reply("I am javascript bot with mongo db\nWorking in testing mode..")
  })

  } catch (e) {
    console.log('Some error' + e.message)
  }

}

module.exports = { strt }