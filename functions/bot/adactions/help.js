const help = (bot, ctxx, cn = -1, op1 = -1, op2 = -1, op3 = -3) => {

    ctxx.reply(
        `Commands in bot

/hlp for help
/dl for deletion
/mt for mute
/umt for unmute
/bn for ban
/dbn for ban with del all msg
/ubn for unban
/pmt for promote
/dmt for demote
/kk for kick
`
    )
}

module.exports = help