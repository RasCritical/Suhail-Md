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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233534880838";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_36_06_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDMsXG4gICAgICAgIDk4LFxuICAgICAgICA4MixcbiAgICAgICAgMTA0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMixcbiAgICAgICAgMTk0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDgxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDI1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMzIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTcsXG4gICAgICAgIDE5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDksXG4gICAgICAgIDUxLFxuICAgICAgICAxNCxcbiAgICAgICAgMTkyLFxuICAgICAgICA0OSxcbiAgICAgICAgODUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxODgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMixcbiAgICAgICAgMjIwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjE3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDczLFxuICAgICAgICA4NyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMSxcbiAgICAgICAgODUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTkwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDc0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDM4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjQwLFxuICAgICAgICA5NixcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDk5LFxuICAgICAgICA4NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDI4LFxuICAgICAgICAzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjM1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTM3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDk3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDQ4LFxuICAgICAgICA2MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjA0LFxuICAgICAgICA2MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTcwLFxuICAgICAgICA0NixcbiAgICAgICAgMTI3LFxuICAgICAgICAzNyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMzUsXG4gICAgICAgIDUwLFxuICAgICAgICAxMDksXG4gICAgICAgIDYyLFxuICAgICAgICAzMixcbiAgICAgICAgMTk2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQzLFxuICAgICAgICAyMCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDM0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTcwLFxuICAgICAgICAzOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDc1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDQ0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTU4LFxuICAgICAgICA1NSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgODcsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDkwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTEyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODUsXG4gICAgICAgIDg4LFxuICAgICAgICA2OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjUxLFxuICAgICAgICA4LFxuICAgICAgICAxNixcbiAgICAgICAgMTcxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDgwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDQ0LFxuICAgICAgICA0NixcbiAgICAgICAgMixcbiAgICAgICAgMTI3LFxuICAgICAgICAyOSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxODYsXG4gICAgICAgIDI4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDg1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDc0LFxuICAgICAgICAwLFxuICAgICAgICAxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTc1LFxuICAgICAgICAxMjksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA5NSxcbiAgICAgICAgMSxcbiAgICAgICAgMTc5LFxuICAgICAgICA3OCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTM5LFxuICAgICAgICA3NixcbiAgICAgICAgOTgsXG4gICAgICAgIDc1LFxuICAgICAgICAzMixcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTY4LFxuICAgICAgICA3MSxcbiAgICAgICAgMjE4LFxuICAgICAgICAzMCxcbiAgICAgICAgODYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEyOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTg0LFxuICBcImFkdlNlY3JldEtleVwiOiBcImZNcGUvZGIrR0FGejlHNk1pK3VySG81WFcrS2RGcENWVThJc1c0N3BDRmM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjMzNTM0ODgwODM4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJGNTgxOEE3MUExMjJBQ0I3NUZFODM1RDYzMEI0QjdCRVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTc1ODAyMDZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzM1MzQ4ODA4MzhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkM2RTNCMzk3MDlFOUM4MzgwNzIyOTMxMkVFRDlCOUI5XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNzU4MDIwOFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIwT2hrWVBxM1NjQ0NLblF5UW9SaGRnXCIsXG4gIFwicGhvbmVJZFwiOiBcImY0ODk1MDA5LTc1MzktNGJlNy1hYWViLWUwZmMwNTA2YTEzZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1OCxcbiAgICAgIDcyLFxuICAgICAgMTAwLFxuICAgICAgMjEwLFxuICAgICAgMjQzLFxuICAgICAgMTMwLFxuICAgICAgMjE2LFxuICAgICAgMjA2LFxuICAgICAgNjMsXG4gICAgICAyMjYsXG4gICAgICA1MixcbiAgICAgIDI0NCxcbiAgICAgIDI2LFxuICAgICAgMTI1LFxuICAgICAgMjM3LFxuICAgICAgNzcsXG4gICAgICAzNixcbiAgICAgIDIxMSxcbiAgICAgIDksXG4gICAgICAyMTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTIsXG4gICAgICAzOSxcbiAgICAgIDIzMixcbiAgICAgIDE1OSxcbiAgICAgIDI0MCxcbiAgICAgIDEzMSxcbiAgICAgIDExNCxcbiAgICAgIDE0OCxcbiAgICAgIDYyLFxuICAgICAgMTEzLFxuICAgICAgMjM0LFxuICAgICAgMTAyLFxuICAgICAgMTM4LFxuICAgICAgOCxcbiAgICAgIDExNyxcbiAgICAgIDEzMSxcbiAgICAgIDcyLFxuICAgICAgMTE2LFxuICAgICAgMjA0LFxuICAgICAgMzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQlEzM0Q2M0RcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzMzUzNDg4MDgzODozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNjgzMjg3NjA5Nzk1ODg6M0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCJMYXJyeVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0liOHlMMENFS2pqZ0xNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiajJxOGkwZlpPRmZoR0RZKzNyYVROcEtaTW1MYm9nSG9iK1pKZFZBUkdsQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJWN3RoWmxiV3loZWwycFZwOU5MR0JQRVV0VVlMRmNnNDgrbEpZNVpVdGdLSlpaZmt5WTA5ZmNrZHhwZzBmU3RPRGh1bUNSd1B3OE51d09MNG45aUtDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJxZkdhRFFQaEM2cDlEVjdQWFJmYU1kNjJ2em5qUTgxWXRyekd4WWNNU1pQZVRlVXBmQld6TllWVE9DaGFEWDUwUE41Ym5hQzZaaGxBMitwY3JRd3RqUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzM1MzQ4ODA4Mzg6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA4MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE3NTgwMjA0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSXBjXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJcGMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJnZEV3bVVveVd5QmVWR1pMWWdDS0ZESDhORGdQTDhOQU9Ea3ZneFd6ZDZzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjY2NTk5MjcxMCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE3NTgwMjA1NDI3XCJ9Igp9"  // PUT your SESSION_ID 


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
