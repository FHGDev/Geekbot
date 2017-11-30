const discord = require('discord.js')
const bot = new discord.Client()
const config = require('./config.json')

bot.on("ready", () => {
  console.log("Geekbot v1.0 is online!")
  bot.user.setGame("Geekbot v1.0 Loaded | Alpha Version...")
})

bot.on("message", message => {
  if (message.content == "Hey Geekbot!") {
    message.reply("hello, how are you doing?")
  }
  if (message.author.id == config.hulk) {
    message.author.send("GET TO YOUR WORK, HULK!")
  }
})

bot.login(process.env.botToke);
