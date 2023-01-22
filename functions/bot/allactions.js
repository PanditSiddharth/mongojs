const ban = require('./adactions/ban.js')
const unban = require('./adactions/unban.js')
const dban = require('./adactions/dban.js')
const kick = require('./adactions/kick.js')
const del = require('./adactions/del.js')
const restrict = require('./adactions/restrict.js')
const purge = require('./adactions/purge.js')
const mute = require('./adactions/mute.js')
const unmute = require('./adactions/unmute.js')
const promote = require('./adactions/promote.js')
const demote = require('./adactions/demote.js')
const help = require('./adactions/help.js')

const allactions = async (bot) => {
    console.log('allactions')
    try {
        let mem;

        await bot.use(

            async (ctx, next) => {
                if (ctx.message) {
                    mem = await bot.telegram.getChatMember(ctx.message.chat.id, ctx.message.from.id)
                    if (mem.status === 'creator' || mem.status === 'administrator') {
                        // ctx.reply(ctx.message.from.first_name + ' You are ' + mem.status)
                        await bot.hears('run', ctx => { ctx.reply('running in test mode') })

                        bot.command('ndel', async (ctx, next) => {
                            del(bot, ctx)
                            // next(ctx)
                            
                        })

                        bot.command('nunmute', async (ctx, next) => {
                            unmute(bot, ctx)
                            // next(ctx)
                        })
                        
                        bot.command('nmute', async (ctx, next) => {
                            mute(bot, ctx)
                            // next(ctx)
                        })

                        bot.command('npurge', async (ctx, next) => {
                            purge(bot, ctx)
                            // next(ctx)
                        })

                        bot.command('restrict', async (ctx, next) => {
                            restrict(bot, ctx)
                            // next(ctx)
                        })

                        bot.command('nkick', async (ctx, next) => {
                            kick(bot, ctx)
                            // next(ctx)
                        })                        
                        bot.command('dban', async (ctx, next) => {
                            dban(bot, ctx)
                            // next(ctx)
                        })                        
                        bot.command('npromote', async (ctx, next) => {
                            promote(bot, ctx)
                            // next(ctx)
                        })

                        bot.command('ndemote', async (ctx) => {
                            demote(bot, ctx)
                        })

                        bot.command('nban', async (ctx, next) => {
                            ban(bot, ctx)
                        })                       
                        
                        bot.command('nunban', async (ctx, next) => {
                            unban(bot, ctx)
                        }) 
                       bot.command('nhelp', async (ctx, next) => {
                            help(bot, ctx)
                        })
                    }
                    else{
                        // ctx.reply('its members message')
                        console.log('yo')
                    }
                }
                next(ctx)
            }

        )

    } catch (error) {
        console.log(error)
        await bot.telegram.sendMessage('@LogicB_Support', error.message)
    }

}

module.exports = allactions


