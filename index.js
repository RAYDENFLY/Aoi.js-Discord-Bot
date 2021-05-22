const Aoijs = require("aoi.js")
const app = require("./app.js")
const bot = new Aoijs.Bot({
  sharding: false, //true or false 
  shardAmount: 2, //Shard amount 
  mobile: true, //true or false - Discord Mobile Status
  token: process.env.TOKEN, //Discord Bot Token in env
  prefix: ["PREFIX"] //Change PREFIX to your Prefix
  autoUpdate: false, // set to true if version should be updated automatically after a package update
})
//rich preserence
bot.status({
  text: "AOI.JS API",
  type: "PLAYING",
  status: "idle",
  time: 12
})
bot.status({
  text: "RAYDENFLY",
  type: "COMPETING",
  status: "idle",
  time: 12
})
bot.onMessage() // Allows Commands to Executed
bot.loadCommands(`./commands/`) //Allows Commands executed by `commands` folder
