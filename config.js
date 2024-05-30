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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_01_05_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTU3LFxuICAgICAgICA5NixcbiAgICAgICAgMjYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMDksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTAwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDU2LFxuICAgICAgICAzMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDUxLFxuICAgICAgICA5MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDI2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTksXG4gICAgICAgIDQ0LFxuICAgICAgICA4OSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTMzLFxuICAgICAgICAxODgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNCxcbiAgICAgICAgNTgsXG4gICAgICAgIDQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTk2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjM3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI3LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDEzMixcbiAgICAgICAgODUsXG4gICAgICAgIDUxLFxuICAgICAgICAyNyxcbiAgICAgICAgMTU0LFxuICAgICAgICA4MixcbiAgICAgICAgMjU0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNyxcbiAgICAgICAgNDUsXG4gICAgICAgIDI3LFxuICAgICAgICA3OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDMzLFxuICAgICAgICAxNDksXG4gICAgICAgIDE0OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAzMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA0MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQyLFxuICAgICAgICA4NCxcbiAgICAgICAgNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODYsXG4gICAgICAgIDE2MixcbiAgICAgICAgNjQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTkyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTk0LFxuICAgICAgICA3MixcbiAgICAgICAgMTI5LFxuICAgICAgICA4MixcbiAgICAgICAgMjIwLFxuICAgICAgICAxODgsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxLFxuICAgICAgICA1MyxcbiAgICAgICAgNyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDg1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMixcbiAgICAgICAgMTIwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTE0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTIyLFxuICAgICAgICAzNSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDM1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTAxLFxuICAgICAgICA4NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3MixcbiAgICAgICAgNzAsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTgyLFxuICAgICAgICA5NixcbiAgICAgICAgMTAzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgODUsXG4gICAgICAgIDE5NixcbiAgICAgICAgNCxcbiAgICAgICAgMzksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjgsXG4gICAgICAgIDc0LFxuICAgICAgICAyMDksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDk2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDU3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgOTJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAzNixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDc0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTc4LFxuICAgICAgICA3NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDYyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDU3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgODIsXG4gICAgICAgIDgwLFxuICAgICAgICA2LFxuICAgICAgICAxMjksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTcwLFxuICAgICAgICAzNyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNixcbiAgICAgICAgMjUsXG4gICAgICAgIDQyLFxuICAgICAgICAyMzksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDY0LFxuICAgICAgICA0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjI5LFxuICAgICAgICAzMCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDY3LFxuICAgICAgICA3NyxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjA3LFxuICAgICAgICA3NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDgzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDcxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDk1LFxuICAgICAgICAxODUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTk2LFxuICBcImFkdlNlY3JldEtleVwiOiBcInNoMWZVMzZVa2RVWHVtMTU1ZXByNW5OUHFRQkloZHdyYXpUNVUvMnJPM1E9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImY4OG5MNk1MU2JDMjhicWxzbk9FSmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMDA3NWM1MzYtN2U5YS00ZWQ1LTg3NWUtNDg5OTI5NGY2MmE2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxNixcbiAgICAgIDE3MSxcbiAgICAgIDExMSxcbiAgICAgIDIwMixcbiAgICAgIDk3LFxuICAgICAgMjMwLFxuICAgICAgMjE3LFxuICAgICAgMTcsXG4gICAgICAxOTYsXG4gICAgICAyNTMsXG4gICAgICAyMDgsXG4gICAgICA1MSxcbiAgICAgIDE0MyxcbiAgICAgIDI0NyxcbiAgICAgIDE5NixcbiAgICAgIDIwNCxcbiAgICAgIDYzLFxuICAgICAgMjMxLFxuICAgICAgMzYsXG4gICAgICA2MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDcsXG4gICAgICAzMCxcbiAgICAgIDE1NyxcbiAgICAgIDEzNSxcbiAgICAgIDIwOCxcbiAgICAgIDIwMyxcbiAgICAgIDY5LFxuICAgICAgMzIsXG4gICAgICAxMzQsXG4gICAgICAxLFxuICAgICAgMTA5LFxuICAgICAgMjE1LFxuICAgICAgMTYsXG4gICAgICAyMzMsXG4gICAgICAyMjIsXG4gICAgICAzNyxcbiAgICAgIDk0LFxuICAgICAgODUsXG4gICAgICAyMjAsXG4gICAgICAyMzZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWEFROFJYWUVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIxMjY4NDgxMzE0Mzo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMjYzODM4NTg3MDQ0NTc6NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKTHRqY2dNRU9xNDRiSUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkhlSnVXNmtUL29iUGlWcC9yekQ1WlBxZWdMQUhUTFhWazFONTZSSi9XUzQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQUxqZHVyNUdQcDlMcGovbDU5QjYycnFZSFQwbUdGNUdxZWU3TDVLUVpHUlExTEFlY2xiTkpQMUxULzBpaVZ5aklzNUpEN3hjbGNodVlDa3FLOURDZ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTkFQRE81enllUGdZbW8wQkJFQ29MWE1KSFpqMEFoRHNRRitZcmFhUGlicUtGZHpEOGdYWXB3Y2pJVzZKMGNJcERESlJRZ1NQU3NMdFI2ZmNjemhNamc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjEyNjg0ODEzMTQzOjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDQ2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNzA2Njg2MlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
