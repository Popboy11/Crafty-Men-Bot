const Discord = require('discord.js');
const bot = new Discord.Client();
const {Client, MessageEmbed} = require('discord.js')

const token = 'sike';

const PREFIX = '+';

const ping = require('minecraft-server-util')

bot.on('ready', () =>{
    console.log('This bot is online!');
})

bot.on('message', message=>{

    if(!message.content.startsWith(PREFIX)) return;
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'mc':
            ping('your ip', 25565, (error, reponse) =>{
                if(error) bot.user.setActivity('Server Offline')
                const Embed = new MessageEmbed()
                .setTitle('Server Status')
                .addField('Server IP', '71.208.101.201')
                .addField('Server Version', '1.16.1')
                .addField('Online Players', reponse.onlinePlayers + '/20')
                var playerson = reponse.onlinePlayers;
                message.channel.send(Embed)
            })
        break;
        case 'onlineplayers':
        case 'playersonline':
        ping('your ip', 25565, (error, reponse) => {
            if(error) throw error    
        message.channel.send(reponse.onlinePlayers.toString() + '/20')
        })

    }
    switch(args[0]){
        case 'ping':
        message.channel.send('Pong! :ping_pong:')
        break;
        case 'help':
        message.channel.send('```List of commands:\n+Help: Shows list of commands\n+Mc: Shows server status\n+Version: Shows the version\n+Onlineplayers: Shows the amount of players online\n+Ip: Shows the server IP\n+Ping: Pings the bot\n+Sans: Sans```')
        break;
        case 'ip':
        message.channel.send('public ip')
        break;
        case 'version':
        message.channel.send('1.16.1')
        break;
        case 'sans':
        message.channel.send('https://www.youtube.com/watch?v=wDgQdr8ZkTw')
        break;
    }   

    })

bot.on('message', message=>{
        let args = message.content.split(" ");
        switch(args[0]){
            case 'nice':
        case 'Nice':
            case 'nice.':
        case 'Nice.':
                if (!args[1])
                message.channel.send('Very nice indeed.')
                break;
        }
    })

setInterval(function(){
    ping('192.168.0.97', 25565, (error, reponse) =>{
        if(error) bot.user.setActivity('Server Offline')//, bot.user.setStatus('dnd')
        if(!error) {const Embed = new MessageEmbed()
        .setTitle('Server Status')
        .addField('Server IP', 'public ip')
        .addField('Max players', reponse.maxPlayers)
        .addField('Online Players', reponse.onlinePlayers)
        .addField('Version', reponse.version)
        var playerson = reponse.onlinePlayers;
        var mostplayers = reponse.maxPlayers;
        var theversion = reponse.version;
        bot.user.setActivity('Players online: ' + playerson.toString() + '/' + mostplayers.toString() + ' | Version: 1.16.1' /*+ theversion.toString()*/ + ' | IP: 71.208.101.201');
    }})
}, 800);

setInterval(function(){
    ping('your ip', 25565, (error, reponse) =>{
        if(error) bot.user.setStatus('dnd');
        else if(reponse.onlinePlayers = 0) bot.user.setStatus('idle');
        else bot.user.setStatus('online');
    })
}, 800);



bot.login(token);