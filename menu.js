const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
const axios = require('axios')

cmd({

    pattern: "menu",

    react: "📑",

    alias: ["panel","commands"],

    desc: "Get bot\'s command list.",

    category: "main",

    use: '.menu',

    filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, umarmd, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{
let madeMenu = `
*  *CHALAH MD WA BOT👨‍💻*
 *╭─────────────···▸*
*❖│▸🕰️* *ʀᴜɴᴛɪᴍᴇ* : *${runtime(process.uptime())}*
*❖│▸🌐* *ᴍᴏᴅᴇ* : *[${config.MODE}]*
*❖│▸🔰* *ᴘʀᴇғɪx* : *[${config.PREFIX}]*
*❖│▸📟* *ʀᴀᴍ ᴜsᴇ* : *${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*
*❖│▸👾* *ɴᴀᴍᴇ ʙᴏᴛ* : CHALAH MD 
*❖│▸👨🏻‍💻* *ᴏᴡɴᴇʀ* : CHALAH MD 
*❖│▸⛓️* *ᴠᴇʀsɪᴏɴs* : *𝐕.1.0.0*
*└──────────────···▸*
 *CHALAH MD  𝕄𝔼ℕ𝕌* *❒⁠⁠⁠⁠*   

*♡︎•━━━━━━━━━━━━━━•♡︎*
🔢 𝘙𝘌𝘗𝘓𝘠 𝘛𝘏𝘌 𝘠𝘖𝘜 𝘞𝘈𝘕𝘛 𝘕𝘜𝘔𝘉𝘌𝘙

*📥01  ➤ ||* DOWNLOAD MENU
*👥02  ➤ ||* GROUP MENU
*🔎03  ➤ ||* SEARCH MENU
*🎬04  ➤ ||* MOVIE MENU
*♻️05  ➤ ||* CONVERT MENU
*👨‍💻06  ➤ ||* OWNER MENU
*🎳07  ➤ ||* OTHER 
•━━━━━━━━━━━━━━━━━━•

> *©️ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ♤ CHALAH MD *
╰────────────────`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
