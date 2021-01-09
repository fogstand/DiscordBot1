const discord= require('discord.js');
const bot= new discord.Client();
const token= 'NzkwNDY3MjQ5MTg5MjkwMDI2.X-BB_g.4ocayXn6UEiV7NIblsCpqZg4gwA';
bot.on('guildMemberAdd', member =>
{
    const channel = member.guild.channels.find(channel=> channel.name=="general");
    if(!channel) return;

    channel.send(`Welcome to CSCI server,$(member),Introduce yourself, list classes you are in this semester and please read the rules of channel`)
})



bot.login(token);