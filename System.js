const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
cmd({
    pattern: "system",
    react: "⚙️",
    alias: ["uptime" ,"runtime"],
    desc: "cheack uptime",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let status = `*⚙️ CHALAH MD  𝐒𝐘𝐒𝐓𝐄𝐌 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍*
*╭─────────────────────*
  ⏰𝚄𝙿𝚃𝙸𝙼𝙴 : ${runtime(process.uptime())}
  
  📟 𝚁𝙰𝙼 𝚄𝚂𝙰𝙶𝙴 : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB

  🖥️𝙳𝙴𝙿𝙻𝙾𝚈 𝙿𝙻𝙰𝚃𝙵𝙾𝚁𝙼 : ${os.hostname()}

  👨‍💻𝙾𝚆𝙽𝙴𝚁 : CHALANA INDUWARA 
*╰─────────────────────*

> *© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ៚ CHALAH MD *`
await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:`${status}`},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
