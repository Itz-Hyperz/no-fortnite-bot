const NoFortnite = require('discord.js')
const client = new NoFortnite.Client()

client.on('ready', ready => {

  client.guilds.cache.forEach(g => {
    console.log(`${g.name} is now protected from Fortnite Kids.`)
  })
  console.log(`${client.user.username} is now Ready!`)
});

client.on('message', message => {
  if(message.content.includes("fortnite")) {
    message.delete()
  } else if(message.content.includes("Fortnite")) {
    message.delete()
  } else if(message.content.includes("fortnight")) {
    message.delete()
  } else if(message.content.includes("Fortnight")) {
    message.delete()
  } else console.log("A message was sent, but it wasnt containing fortnite.")
  
  console.log(`Deleted a Fortnite Message in ${message.guild.name}`)
  
});

client.login('bot-token')
