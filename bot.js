const discord = require('discord.js')
const bot = new discord.Client()

bot.on("ready", () => {
  console.log("Geekbot v1.0 is online!")
  bot.user.setGame("Geekbot v1.0 Loaded | Alpha Version...")
})

bot.on("message", message => {
  if (message.content == "Hey Geekbot!") {
    message.reply("hello, how are you doing?")
  }
  if (message.author.ID == '242734840829575169') {
    message.author.sendMessage("GET TO YOUR WORK, HULK!")
  }
})

bot.login(process.env.botToken);
