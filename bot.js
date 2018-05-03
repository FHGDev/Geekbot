const discord = require('discord.js')
const bot = new discord.Client()
const config = require('./config.json')
const prefix = config.prefix

// Gather commands
bot.commands = new discord.Collection();

require('fs').readdir("./commands/", (err, files) => {
  console.log("Loading commands...");
  if (err) return console.log(`Command loading failed!`);
  files.filter(f => f.split(".").pop() === "js").forEach((f, i) => {
    bot.commands.set(require(`./commands/${f}`).help.name, require(`./commands/${f}`));
  });
});

bot.on("ready", () => {
  console.log("Geekbot v1.0 is online!")
  bot.user.setActivity(`Loading Geekbot Alpha v1.0...`, {type: "STREAMING", url: "https://twitch.tv/freakinghulk"})
  setTimeout(() => {
    bot.user.setActivity(`for g!help | ${bot.guilds.size} server(s)`, {type: "WATCHING"})
  }, 15000)
})

bot.on("message", message => {
  let mArray = message.content.split(" ");
  let args = mArray.slice(1)
  let cmd = bot.commands.get(mArray[0].slice(prefix.length))
  
  if (cmd) {
    if (config.ubl.includes(message.author.id)) {
      return;
    } else {
      cmd.run(bot, message, args, discord)
      console.log(`${message.author.username} just used the ${mArray[0].slice(prefix.length)} command.`)
    }
  }
  
  if (message.content == "Hey Geekbot!") {
    message.channel.send(`Hey, <@${message.author.username}>, how are you doing?`)
  }
})

bot.login(process.env.botToken);
