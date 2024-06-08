const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263716325221";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_55_06_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxOSxcbiAgICAgICAgNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxOCxcbiAgICAgICAgMjUzLFxuICAgICAgICA5NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDEwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDY4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTY1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTE4LFxuICAgICAgICA2MixcbiAgICAgICAgMTU2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDExMixcbiAgICAgICAgMTE2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDcwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDU0LFxuICAgICAgICAxMTksXG4gICAgICAgIDQyLFxuICAgICAgICAxNDksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxODAsXG4gICAgICAgIDg1LFxuICAgICAgICA3NixcbiAgICAgICAgOTQsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTcwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTg4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTI1LFxuICAgICAgICA3NixcbiAgICAgICAgNjIsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDg0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDg3LFxuICAgICAgICA5OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMixcbiAgICAgICAgMjcsXG4gICAgICAgIDY4LFxuICAgICAgICAxODIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTI1LFxuICAgICAgICA3MixcbiAgICAgICAgMTg1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyMixcbiAgICAgICAgNTEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzEsXG4gICAgICAgIDgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDMxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDQxLFxuICAgICAgICAzNyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDU1LFxuICAgICAgICA3OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIsXG4gICAgICAgIDQzLFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQ3LFxuICAgICAgICA4NixcbiAgICAgICAgMzgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDU2LFxuICAgICAgICAxMCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgODgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjUzLFxuICAgICAgICA5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxLFxuICAgICAgICA3OSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNSxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk5LFxuICAgICAgICAzMSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDUyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDYwLFxuICAgICAgICAxMixcbiAgICAgICAgMjQzLFxuICAgICAgICA3NyxcbiAgICAgICAgMTczLFxuICAgICAgICAxNDksXG4gICAgICAgIDIwNSxcbiAgICAgICAgODAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDM3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEzLFxuICAgICAgICAxMzksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxODYsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgOTBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDQwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTgzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDQxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTUwLFxuICAgICAgICAwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDk3LFxuICAgICAgICA1MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTAxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4NixcbiAgICAgICAgNDIsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMCxcbiAgICAgICAgMixcbiAgICAgICAgMzcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDQ0LFxuICAgICAgICAxODYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTY1LFxuICAgICAgICA0NixcbiAgICAgICAgMjEyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTg3LFxuICAgICAgICA5NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA5MixcbiAgICAgICAgMTA1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDExLFxuICAgICAgICAyMjYsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJOYjVuSWNoQjFKSWJrbXN3U3N2Q2VldmJNcmJUMXQyL295VDJNV0V2ZjRzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI2MzcxNjMyNTIyMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNEQyQkYxRTcwQTJDNTY0NTBDMjZEQTcyNDhCMEVENERcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE3ODA4MTA1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjYzNzE2MzI1MjIxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI2QkEyOEJEM0ExRjIyRDc2NENEQTAzMEE3MDJEMkQ4NFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTc4MDgxMDVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNjM3MTYzMjUyMjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjg4NjIxNTM3REMwNkFEMjg2Q0RDQTdBODBBNEVGOTA3XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNzgwODEwN1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI2MzcxNjMyNTIyMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiREFGMURBMTQ4MjMzNTUyMEFENUIzNzJGQ0VCOUE0MzdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE3ODA4MTA3XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm5CNF9pemdtU21XSDFxcUQ4aFhOQndcIixcbiAgXCJwaG9uZUlkXCI6IFwiNGM4MjMyZjktM2Q1MC00NDJiLWJmYzgtYTRiMzhiM2U2YmUxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyOSxcbiAgICAgIDIwMSxcbiAgICAgIDY4LFxuICAgICAgMjQsXG4gICAgICAyMjQsXG4gICAgICAxNSxcbiAgICAgIDIyNyxcbiAgICAgIDE1NSxcbiAgICAgIDE0NyxcbiAgICAgIDE4MixcbiAgICAgIDI0OSxcbiAgICAgIDgwLFxuICAgICAgMzQsXG4gICAgICA0OCxcbiAgICAgIDEsXG4gICAgICAyMjcsXG4gICAgICAxNDEsXG4gICAgICAxNjgsXG4gICAgICA4LFxuICAgICAgMTA2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwOCxcbiAgICAgIDQ1LFxuICAgICAgMjI0LFxuICAgICAgMjM0LFxuICAgICAgMTM5LFxuICAgICAgMjIwLFxuICAgICAgMyxcbiAgICAgIDI0OCxcbiAgICAgIDExNyxcbiAgICAgIDIyNixcbiAgICAgIDE4NixcbiAgICAgIDYsXG4gICAgICAxODMsXG4gICAgICAxNzQsXG4gICAgICAyMjksXG4gICAgICAxODksXG4gICAgICAxODcsXG4gICAgICAxNzMsXG4gICAgICAzMixcbiAgICAgIDE2N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJEVEs1M1Q2SlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYzNzE2MzI1MjIxOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI3OTgyMTkxNzYyNjQ4ODo0QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkxlZVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tmeXI1OERFT1BYanJNR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwicXZ3czR3U3V2NDlQVnhiTFc5ZW1NRVZDRTlFZXJZZWpSYnZ6Ty8zSklWYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJFK1R2Vy9PeUd4MmZNaU15cG9peW9aVWdaLzFWOExFSFN3YXRRMldpMzVkT2t0NVpnaEdxVUphRmIvQWlrMnV4UnF6Snl0dnJGbUtFdXFIK3dXdElBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJVTHFHWXN2dVYybnliSmNJTzJKMEhNVkpibXI2clEyRGx2SHhObDFORDVnSitTZXl6eHFoVkpZZ05EOFhrNEhvMXZzc2J4emlwZ3l2QXBZWm9YdWZDQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjM3MTYzMjUyMjE6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE3ODA4MTAyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUDBlXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQMGUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJTZGFWSStiZTVYRnl3YVF5T1I3Q0kyQU1IQW9PK0xNZzUyTDFYcnVNVW5VPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjg3MTEwMjc1OSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE3ODA3NjQzNTQzXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
