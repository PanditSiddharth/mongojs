const ban = require('./adactions/ban.js')
const dban = require('./adactions/dban.js')
const kick = require('./adactions/kick,js')
const del = require('./adactions/del.js')
const restrict = require('./adactions/restrict.js')
const purge = require('./adactions/purge.js')
const mute = require('./adactions/mute.js')
const unmute = require('./adactions/unmute.js')
const promote = require('./adactions/promote.js')
const demote = require('./adactions/demote.js')

const allactions = () => {
    bot.use(ctxx => {
        try {
            
        if (ctx.message.from.status === 'creator' || ctx.message.from.status === 'administrator') {
            bot.command('bdel', ctx => {  
            del(bot, ctx)
        })
           
        bot.command('bban', ctx => {  
            del(bot, ctx)
        })

        }
    } catch (error) {
        ctxx.error(error)
    }
    })
}


