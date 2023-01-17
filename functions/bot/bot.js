const { Telegraf } = require("telegraf")
const bot = new Telegraf(process.env.BT_TOKEN)
const st = require('./start.js')
const { message } = require('telegraf/filters');

exports.handler = async (event, context, callback) => {
  try {
    await bot.handleUpdate(JSON.parse(event.body))
    try {
      st.strt(bot);
    } catch (error) {
      bot.telegram.sendMessage('@shabdt', 'Some error : ' + error.message)
    }
    return { statusCode: 200, body: "" }
  } catch (e) {
    console.error("error in handler:", e)
    return { statusCode: 400, body: "This endpoint is meant for bot and telegram communication" }
  }
}
