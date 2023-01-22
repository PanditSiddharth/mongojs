const unban = require("./unban");
const unmute = (bot, ctxx, cn = -1, op1 = -1, op2 = -1, op3 = -3) => {
    try {
        unban(bot, ctxx, { unmute: true})
        } catch (error) {
            ctxx.reply('Error: ' + error.message)
        }

}

module.exports = unmute