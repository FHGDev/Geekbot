const discord = require('discord.js')
const bot = new discord.Client()
const config = require('./config.json')

bot.on("ready", () => {
  console.log("Geekbot v1.0 is online!")
  bot.user.setActivity(`Loading Geekbot Alpha v1.0...`, {type: "STREAMING", url: "https://twitch.tv/freakinghulk"})
  setTimeout(() => {
    bot.user.setActivity(`for g!help | ${bot.guilds.size} server(s)`, {type: "WATCHING"})
  }, 15000)
})

bot.on("message", message => {
  if (message.content == "Hey Geekbot!") {
    message.channel.send(`Hey, <@${message.author.username}>, how are you doing?`)
  }
  if (message.author.id == config.hulk) {
    message.author.send("GET TO YOUR WORK, HULK!")
  }
})

bot.login(process.env.botToken);
