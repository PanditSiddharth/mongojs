const help = (bot, ctxx, cn = -1, op1 = -1, op2 = -1, op3 = -3) => {
   
    ctxx.reply(
`Commands in bot

/nhelp for help
/ndel for deletion
/nmute for mute
/nunmute for unmute
/nban for ban
/ndban for ban with del all msg
/nunban for unban
/npromote for promote
/ndemote for demote
/nkick for kick
`
            )
}

module.exports = help