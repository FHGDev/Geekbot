const discord = require('discord.js')
const bot = new discord.Client()

bot.on("ready", () => {
  console.log("Geekbot v1.0 is online!")
  bot.user.setGame("Geekbot v1.0 Loaded | Still testing")
})

bot.on("message", message => {
  if (message.content == "Hey Geekbot!") {
    message.reply("Hello, how are you doing?")
  }
})

bot.login(process.env.botToken);
