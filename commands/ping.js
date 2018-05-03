module.exports.run = (bot, message, args, discord) => {
  let em = new discord.RichEmbed()
  .setTitle("Geekbot Ping")
  .setDescription(`PONG! My ping is ${bot.ping}ms!`)
  .setColor("RANDOM")
  .setTimestamp()
  .setFooter("PONG!!!")
  message.channel.send({embed: em})
}

module.exports.help = {
  name: "ping"
}
