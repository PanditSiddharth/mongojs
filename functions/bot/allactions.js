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
        // let mem = { status: false};
        // let ctx;
        // let adm = false;

        bot.use(
            async (ctx, next) => {
                if (ctx.message) {
                    let mem;
                    const sleep = t => new Promise(r => setTimeout(r, t));
                    try{
                        
                     mem = await bot.telegram.getChatMember(ctx.message.chat.id, ctx.message.from.id)
                        await sleep(1000)
                }catch(err){ 
                            ctx.state.err = true
                            return ctx.reply('Error getChatMember' + err.message) }

                        if(ctx.state.err == true)
                        return
                        await sleep(100)
                        ctx.state.mem = mem
                       
                    if (mem.status == 'creator' || mem.status == 'administrator'){
                        ctx.state.adm = true
                    }else {
                        ctx.state.adm = false
                    }
                    next(ctx)
                }
                else
                    return
            })


            // bot.on('message', (ctx, next) => { console.log('yo'); next(ctx)})

        try {

            await bot.hears('run', ctx => { ctx.reply('running in test mode') })

            bot.command('dl', async (ctx, next) => {
                if (ctx.state.adm)
                del(bot, ctx)
                // next(ctx)

            })

            bot.command('umt', async (ctx, next) => {
                if (ctx.state.adm)
                unmute(bot, ctx)
                // next(ctx)
            })

            bot.command('mt', async (ctx, next) => {
                if (ctx.state.adm)
                mute(bot, ctx)
                // next(ctx)
            })

            bot.command('prg', async (ctx, next) => {
                if (ctx.state.adm)
                purge(bot, ctx)
                // next(ctx)
            })

            bot.command('rst', async (ctx, next) => {
                if (ctx.state.adm)
                restrict(bot, ctx)
                // next(ctx)
            })

            bot.command('kk', async (ctx, next) => {
                if (ctx.state.adm)
                kick(bot, ctx)
                // next(ctx)
            })
            bot.command('dbn', async (ctx, next) => {
                if (ctx.state.adm)
                dban(bot, ctx)
                // next(ctx)
            })
            bot.command('pmt', async (ctx, next) => {
                if (ctx.state.adm)
                promote(bot, ctx)
                // next(ctx)
            })

            bot.command('dmt', async (ctx) => {
                if (ctx.state.adm)
                demote(bot, ctx)
            })

            bot.command('bn', async (ctx, next) => {
                if (ctx.state.adm)
                ban(bot, ctx)
            })

            bot.command('ubn', async (ctx, next) => {
                if (ctx.state.adm)
                unban(bot, ctx)
            })

            bot.command('hlp', async (ctx, next) => {
                if (ctx.state.adm)
                help(bot, ctx)
            })

        } catch (errr) {
            ctx.reply("error " + errr.message)
        }

    } catch (error) {
        console.log(error)
        await bot.telegram.sendMessage('@LogicB_Support', error.message)
    }

}

module.exports = allactions


