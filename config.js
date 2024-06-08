const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email = " lenleeslee@gmail.com"
global.location="Chinhoyi,Zimbabwe."


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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_44_06_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDM3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNixcbiAgICAgICAgOCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTIwLFxuICAgICAgICA4NyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxODYsXG4gICAgICAgIDEzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMixcbiAgICAgICAgNzQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjI2LFxuICAgICAgICA0MyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2MixcbiAgICAgICAgOTUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDkwLFxuICAgICAgICA5NixcbiAgICAgICAgNDYsXG4gICAgICAgIDcyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDcsXG4gICAgICAgIDksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA5MSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTE4LFxuICAgICAgICA2MyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDcxLFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzksXG4gICAgICAgIDE1LFxuICAgICAgICAyOSxcbiAgICAgICAgODAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTcxLFxuICAgICAgICA0MixcbiAgICAgICAgMjE2LFxuICAgICAgICA2NixcbiAgICAgICAgMjQ3LFxuICAgICAgICA5MSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTUxLFxuICAgICAgICA5NCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNixcbiAgICAgICAgNjYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDMwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTczLFxuICAgICAgICA1NixcbiAgICAgICAgMjE4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDcyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDY0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDExOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDcwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDk5LFxuICAgICAgICA2NixcbiAgICAgICAgMjAxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDk4LFxuICAgICAgICAxNzksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDM4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDM3LFxuICAgICAgICA4MixcbiAgICAgICAgNzAsXG4gICAgICAgIDgwLFxuICAgICAgICA5MixcbiAgICAgICAgMTI2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDMxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgODksXG4gICAgICAgIDI1LFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MixcbiAgICAgICAgMTI2LFxuICAgICAgICA4NCxcbiAgICAgICAgODcsXG4gICAgICAgIDI3LFxuICAgICAgICAyMyxcbiAgICAgICAgMjA0LFxuICAgICAgICAzOCxcbiAgICAgICAgODMsXG4gICAgICAgIDIwMixcbiAgICAgICAgNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTMwLFxuICAgICAgICAxNyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDY3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDI2LFxuICAgICAgICAyMTksXG4gICAgICAgIDYxLFxuICAgICAgICAxODgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNjVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjM1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjA2LFxuICAgICAgICA1LFxuICAgICAgICA0MixcbiAgICAgICAgMTMwLFxuICAgICAgICA4MCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDU5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDgxLFxuICAgICAgICAzNSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjAwLFxuICAgICAgICA3LFxuICAgICAgICA5NCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNyxcbiAgICAgICAgMjM4LFxuICAgICAgICAzMyxcbiAgICAgICAgNzEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDExNixcbiAgICAgICAgNixcbiAgICAgICAgMyxcbiAgICAgICAgMixcbiAgICAgICAgMjUzLFxuICAgICAgICAyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEwMixcbiAgICAgICAgNTksXG4gICAgICAgIDIyMixcbiAgICAgICAgODAsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIxMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJHRTd0VjBydE1vTjJweW9ncUc5T1dVUG9jMFVqL3pjSE5Gc1o1YjNWUkJRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI2MzcxNjMyNTIyMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRTQwQkE2MzcxMzFEQkM0RjhCMjk2NDUxQ0Q3QkI0RjdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE3ODQzNDU4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjYzNzE2MzI1MjIxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI0RDcwMjQ3MUZENTA0NUY1QkI1QjI2ODFBNDNDMEI2RFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTc4NDM0NThcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNjM3MTYzMjUyMjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjREQjY3OUM5QTE3QTZCRjFGRDBCMjY2MTY2QjlFQjg0XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNzg0MzQ2MlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI2MzcxNjMyNTIyMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQUM2MDY3MjFFQjJCQUM3RDEzNTg2OTg0QzM4Mjg3M0ZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE3ODQzNDYyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlVKalZhNVpnVDdlemJLbC0xVGZpSndcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTNhOTVkM2ItYTEwYS00OTcxLTk5YTYtYzViYzU5MGM2MDkwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0NyxcbiAgICAgIDIzMixcbiAgICAgIDE0MSxcbiAgICAgIDE5MixcbiAgICAgIDI0NyxcbiAgICAgIDU0LFxuICAgICAgODMsXG4gICAgICA0MCxcbiAgICAgIDE0MCxcbiAgICAgIDIxMyxcbiAgICAgIDIwLFxuICAgICAgOTgsXG4gICAgICA0OSxcbiAgICAgIDAsXG4gICAgICAxNzQsXG4gICAgICAxMDcsXG4gICAgICA4OCxcbiAgICAgIDEyOCxcbiAgICAgIDY0LFxuICAgICAgNTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA2LFxuICAgICAgNSxcbiAgICAgIDI0OSxcbiAgICAgIDIxMSxcbiAgICAgIDExMyxcbiAgICAgIDEzNSxcbiAgICAgIDE4OSxcbiAgICAgIDI1MyxcbiAgICAgIDIxNSxcbiAgICAgIDEyMyxcbiAgICAgIDEwNyxcbiAgICAgIDIzNCxcbiAgICAgIDQwLFxuICAgICAgMTQ3LFxuICAgICAgMTk3LFxuICAgICAgMTQ3LFxuICAgICAgNzQsXG4gICAgICA5NCxcbiAgICAgIDEzMyxcbiAgICAgIDM1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlExMjhMNTUxXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNjM3MTYzMjUyMjE6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjc5ODIxOTE3NjI2NDg4OjdAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiTGVlXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS2p5cjU4REVQM3JrTE1HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJxdndzNHdTdXY0OVBWeGJMVzllbU1FVkNFOUVlclllalJidnpPLzNKSVZjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInprYzF3ZEtWN09YK0NVZC9rWGNzekxoakNzejZ4R0J0aGRVNktCdTVEckxWWlEzcnNJL1dMbDNuTWJWbmE1VlV2aWEwVzVrNTFCMkVaTldabnNVakRnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm14QXlGTDUwcnBveWk1aWxSRGJ0TkdtMlFSZDNTMVV5NkV2ZTc0ck5vajVmbDgyTVJmSmZSWnBrcTQrTFpjcW5BbVJBTmNBMS9sUjR0R204MmI1cURnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2MzcxNjMyNTIyMTo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDg3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTc4NDM0NTYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKbGRcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpsZC5qc29uIjogIntcImtleURhdGFcIjpcImFVRnBCTlpiQ1AzTXR6bWhndFU1d3J2bGZLVlRLcmpJdTlzS2s2aGZNeWs9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODcxMTAyNzYwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTc4NDM0NTc4NzBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "frontas",
  ownername:process.env.OWNER_NAME|| "Ileo",


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
