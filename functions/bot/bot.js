const { Telegraf } = require("telegraf")
const st = require('./start.js')
require('dotenv').config
const bot = new Telegraf(process.env.BT_TOKEN)
const { message } = require('telegraf/filters');
const mdb = 'mongodb+srv://sidusr:SidkaPasswordHai@sidclu.vfwkkyz.mongodb.net/?retryWrites=true&w=majority'

exports.handler = async (event, context, callback) => {
  try {
    await bot.handleUpdate(JSON.parse(event.body))
    try {
      await st.strt(bot, mdb);
    } catch (error) {
      bot.telegram.sendMessage('@shabdt', 'Some error : ' + error.message)
    }
    return { statusCode: 200, body: "" }
  } catch (e) {
    console.error("error in handler:", e)
    return { statusCode: 400, body: "This endpoint is meant for bot and telegram communication" }
  }
}
