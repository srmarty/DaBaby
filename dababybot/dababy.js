const Discord = require('discord.js');
const client = new Discord.Client();

 client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  });

 client.on('message', msg => {
  if (msg.content.toUpperCase().includes('WHERE IS DABABY')) {
    msg.reply(('Bitch I\'m DaBaby!'));
  } else if (msg.content.toUpperCase().includes('DABABY')) {
    msg.reply('LETS GOOOOO');
  }
  });

  client.on('message', msg => {
    if (msg.content.toUpperCase().includes('DABABY PLAY')) {
      const connection = msg.member.voice.channel;
    }

  })

 client.login('<insert token here>');
