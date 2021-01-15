const Discord = require("discord.js");
const Client = new Discord.Client;
const prefix = "$";

const { YTSearcher } = require('ytsearcher')
const searcher = new YTSearcher({key: "AIzaSyBpKDF14e0FQGaDDVIlj8iL2KOV5sgthDk" ,revealed: true });
const ytdl = require("ytdl-core");

const Queue = new Map();
let TalkBot = true;

Client.on("ready" , () => {
    console.log("Hello");
});
Client.on("message", message => {

    let messageAdmin = 'A'
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;

    let EmbedMessage = message.content.slice(prefix.length).trim().split(/ +/g);
    const ReplyEmbed = EmbedMessage.shift().toLocaleLowerCase();
    switch (ReplyEmbed){
        case 'lil-bot':

        message.delete();

            var embed = new Discord.MessageEmbed()
            .setColor("#0099FF")
            .setTitle("**ME !!!**")
            .setAuthor("Little Bot")
            .setDescription("Can do lot of stuff \n try them all !")
            .setThumbnail("https://i.imgur.com/NYyCl9E.jpeg")

            message.channel.send(embed); 
            messageAdmin = "@"+ message.author.username + " a utiliser la commande :" + prefix + ReplyEmbed

            message.guild.channels.cache.find(channel => channel.id === "789159546378518538").send(messageAdmin)

        break;

        case 'frigo':
            message.delete();
            var embed = new Discord.MessageEmbed()
            .setColor("#0099FF")
            .setTitle("**INFO DE DERNIÈRE MINUTE!**")
            .setAuthor("Radio Canada")
            .setDescription("On m'informe à l'oreillette qu'Antoine est sur le chemin du garde-manger ou pour les intimes, de l'épicerie. Espérons qu'il revienne avant le couvre-feu...")
            .setThumbnail("https://i.imgur.com/cbasUtK.jpeg")

            message.channel.send(embed);  

            messageAdmin = "@"+ message.author.username + " a utiliser la commande :" + prefix + ReplyEmbed

            message.guild.channels.cache.find(channel => channel.id === "789159546378518538").send(messageAdmin)
        break;
        case 'lol':

        message.delete();

        message.channel.send("@everyone")

        var embed = new Discord.MessageEmbed()
        .setColor("#0099FF")
        .setTitle("**INFO DE DERNIÈRE MINUTE!**")
        .setAuthor("Radio Canada")
        .setDescription("On m'informe à l'oreillette qu'Antoine est sur le chemin du garde-manger ou pour les intimes, de l'épicerie. Espérons qu'il revienne avant le couvre-feu...")
        .setThumbnail("https://cdn.discordapp.com/attachments/798640819455524874/799286214447464478/tenor.gif")
        .setImage("https://cdn.discordapp.com/attachments/798640819455524874/799286380517261342/image0.jpg")

        message.channel.send(embed);  

        messageAdmin = "@"+ message.author.username + " a utiliser la commande :" + prefix + ReplyEmbed

        message.guild.channels.cache.find(channel => channel.id === "789159546378518538").send(messageAdmin)
           
        break;
        case 'lel':

            message.delete();
    
            message.channel.send("@everyone")
    
            var embed = new Discord.MessageEmbed()
            .setColor("#0099FF")
            .setTitle("**INFO DE DERNIÈRE MINUTE!**")
            .setAuthor("Radio Canada")
            .setDescription("On m'informe à l'oreillette qu'Antoine est sur le chemin du garde-manger ou pour les intimes, de l'épicerie. Espérons qu'il revienne avant le couvre-feu...")
            .setThumbnail("https://cdn.discordapp.com/attachments/798640819455524874/799286214447464478/tenor.gif")
            .setImage("https://media0.giphy.com/media/fUO6FNqv0McyMWxyKR/giphy.gif")
    
            message.channel.send(embed);  
    
            messageAdmin = "@"+ message.author.username + " a utiliser la commande :" + prefix + ReplyEmbed
    
            message.guild.channels.cache.find(channel => channel.id === "789159546378518538").send(messageAdmin)
           
        break;
        case '':
           
        break;
        case '':
           
        break;
        case '':
           
        break;
        case '':
           
        break;
        case '':
           
        break;
        case '':
           
        break;
    }
});
//#endregion
//=====================================================================================================================================
//#region Message Kill Bot
Client.on("message", message => {
    if(message.author.bot) return;
    if(message.member.hasPermission('ADMINISTRATOR')){
    if(message.content == prefix + "Kill_Bot"){
        message.delete();
        message.channel.send("Reeboting. . .  no more command will be process !")
    }
    }
});
Client.on("message", message => {
    if(message.author.bot){
    if(message.content == "Reeboting. . .  no more command will be process !"){
        message.delete();
        cnjrencjnc(cnrnckjencjnciew);
    }
    }
});
//#endregion
//=====================================================================================================================================
//#region Message Music Developed

// truc qui demande dans le terminal : 
// npm i Discord.js (ok)
// npm i ytdl-core  ()   
// npm i ytsearcher ()

// const Queue = new Map();
// let TalkBot = true;


// constante a rajouter au debut :
// const { YTSearcher } = require('ytsearcher')
// const searcher = new YTSearcher({key: "Demande la moi" ,revealed: true });
// const ytdl = require("ytdl-core");


Client.on("message" , async(message) =>{
    const Playtime = 0;
if(message.content.startsWith(prefix)){
    if(message.content.startsWith(prefix + "Play Help")){
        message.delete();
        message.reply(`How to use $Play ?
           1- Tap the command $Play
           2- Tap the thing you want to listen, the program will find the link by himself
           3- press enter, if you did a mystake, I'll tell you!
           ------------------------------------------------------------------------------------------------------------------------------------------
           List of the command of $Play:

           $Stop              : Stop everything, and clear the Queue
           $Skip               : Skip to the next song
           $Pause            : Pause the song that is in play
           $Resume        : Resume the song that as been paused
           $Queue           :Show you the Queue
           $Join             :Make the bot join an other channel when he is playing
           `) ;
    }else if(message.content.startsWith(prefix + "Stop Help")){
        message.delete();
        message.reply(`How to use $Stop ?
           1- Tap the command $Stop
           It will clear all the songs in the queue and stop playing in that instant
           3- press enter.
           `) ;
    }else if(message.content.startsWith(prefix + "Skip Help")){
        message.delete();
        message.reply(`How to use $Skip ?
           1- Tap the command $Skip
           It will skip to the next song in the list.
           If you are in a loop, it will just loop around the same songs.
           3- press enter.
           `) ;
    }else if(message.content.startsWith(prefix + "Pause Help")){
        message.delete();
        message.reply(`How to use $Pause ?
           1- Tap the command $pause
           It will pause the song that is playing.
           3- press enter.
           `) ;
    }else if(message.content.startsWith(prefix + "Resume Help")){
        message.delete();
        message.reply(`How to use $Resume ?
           1- Tap the command $Resume
           It will resume the song if it is on pause.
           3- press enter.
           `) ;
    }else if(message.content.startsWith(prefix + "Join Help")){
        message.delete();
        message.reply(`How to use $Join ?
           1- Tap the command $Join
           It will make the bot join the conversation instantly.
           2- press enter.
           `) ;
    }else if(message.content.startsWith(prefix + "Queue Help")){
        message.delete();
        message.reply(`How to use $Queue ?
           1- Tap the command $Queue
           It will show you the queue of all song added and comming.
           3- press enter.
           `) ;
    }else{
         const prefix = '$';
         const serverQueue = Queue.get(message.guild.id);
         const args = message.content.slice(prefix.length).trim().split(/ +/g);
         const command = args.shift().toLocaleLowerCase();
        
        switch(command){
            case 'play':
                execute(message, serverQueue);
            break;
            case 'stop':
                stop(message, serverQueue);
            break;
            case 'skip':
                skip(message, serverQueue);
            break;
            case 'pause':
                pause(serverQueue);
            break;
            case 'resume':
                resume(serverQueue);
            break;
            case 'loop':
                Loop(args, serverQueue);
            break;
            case 'queue':
                queue(serverQueue);
            break;
            case 'join':
                JoinBack(serverQueue);
            break;
        }
         async function execute(message , serverQueue){
             let vc = message.member.voice.channel;
             if(!vc){
                 return message.reply("Please join a voice channel first !");
             }else{
                let result = await searcher.search(args.join(" ") , {type: "video"});
                console.log(result.first.url + "  ||||  " + args.join(" "));
                const songInfo = await ytdl.getInfo(result.first.url)
                let song ={
                    title: songInfo.videoDetails.title,
                    url: songInfo.videoDetails.video_url
                };
                if(!serverQueue){
                    const queueConstructor = {
                        txtChannel: message.channel,
                        VChannel: vc,
                        connection: null,
                        songs: [],
                        volume: 5,
                        playing: true,
                        loopall: false,
                        talk: false
                    };
                    Queue.set(message.guild.id, queueConstructor);
                    queueConstructor.songs.push(song);
                    try{
                        let connection = await vc.join();
                        queueConstructor.connection = connection;
                        play(message.guild, queueConstructor.songs[0]);
                    }catch (err){
                        console.error(err);
                        Queue.delete(message.guild.id);
                        return console.log("Unable to join the Voice Channel !")
                    }
                }else{
                    console.log("Adding a song")
                    serverQueue.songs.push(song);
                    return message.reply("The selected song as been added !")                   
                 }
             }
         }
         function play(guild, song){
             const serverQueue = Queue.get(guild.id);
             if(!song){
                 serverQueue.VChannel.leave();
                 Queue.delete(guild.id);
                 if(TalkBot == true){
                     message.channel.send("I am now disconnected !")
                 }
                 return;
             }
            if(TalkBot == true){
              message.reply("Now Playing !");  
            }
            console.log("Now Playing : " );
            let dispatcher = serverQueue.connection
             .play(ytdl(song.url))
             .on('finish', () =>{
                if(serverQueue.loopone){
                    play(guild, serverQueue.songs[0]);             
                }
                else if(serverQueue.loopall){
                    serverQueue.songs.push(serverQueue.songs[0]);
                    serverQueue.songs.shift();      
                }else{
                    serverQueue.songs.shift();
                }
                 play(guild, serverQueue.songs[0]);
             })
         }
         function stop (message, serverQueue){
             if(!message.member.voice.channel){
             return message.reply("You need to be in a Voice Channel first !")}
             serverQueue.songs =[];
             console.log("List Clear and Stop") 
             serverQueue.songs.shift();
             serverQueue.connection.dispatcher.end();
             serverQueue = null;
             console.log("Loops as been disable");     
            }     
         function skip (message, serverQueue){
            if(!message.member.voice.channel)
            return message.reply("You need to be in a Voice Channel first !");
            if(!serverQueue)
            return
            serverQueue.connection.dispatcher.end();
            if(TalkBot == true){
                message.channel.send("Next. . .")
            }
            console.log("Skiping the next song: " )   
         }
         function pause(serverQueue){
            if(!serverQueue.connection)
                return message.channel.send("There is no music currently playing !");
            if(!message.member.voice.channel)
                return message.channel.send("You are not in the Voice Channel !");
            if(!serverQueue.connection.dispatcher.pause)
                return message.channel.send("The song is already paused !")
            serverQueue.connection.dispatcher.pause();
            message.channel.send("The song as been paused !")
         }
         function resume(serverQueue){
            if(!serverQueue.connection)
                return message.channel.send("There is no music currently playing !");
            if(!message.member.voice.channel)
                return message.channel.send("You are not in the Voice Channel !");
            if(serverQueue.connection.dispatcher.resumed)
                return message.channel.send("The song is already playing !")
            serverQueue.connection.dispatcher.resume();
            message.channel.send("The song as been resumed !")
         }
         function queue(serverQueue){
            if(!message.member.voice.channel)
            return message.channel.send("You are not in the Voice Channel !");
            if(!serverQueue.songs[0])
            return message.channel.send('```No song register\n-----------------------------------------```');
            let nowPlaying = serverQueue.songs[0];
            let qmsg =` Now playing : ${nowPlaying.title}\n-----------------------------------------\n`
            for(var index = 1; index < serverQueue.songs.length; index++){
                qmsg += `${index}. ${serverQueue.songs[index].title}\n`
            }
            message.channel.send('```' + qmsg + '```')
         }
            function JoinBack(serverQueue){
                if(!message.member.voice.channel){
                    message.reply("You are not in the Voice Channel !")
                }else if(!serverQueue){
                    message.reply("There is no songs in the queue !")
                }else{

                message.member.voice.channel.join();

                if(TalkBot == true){
                    message.channel.send("Now joining you !")
                }
                }
            }
        }   
        function Loop(args, serverQueue){
            if(!serverQueue.connection)
            return message.channel.send("There is no music currently playing !");
            if(!message.member.voice.channel)
            return message.channel.send("You are not in the Voice Channel !");
            switch(args[0]){
            case 'All':
                serverQueue.loopall = !serverQueue.loopall;                 
                if(serverQueue.loopall === true){
                message.channel.send("Loop has been turned on !");
                console.log("Loop All ennable ");
                }
                else{
                message.channel.send("Loop All has been turned off !");
                console.log("Loop disable");
                }
            break;
            default:
                console.log("error as occure in loop zone")
            break;
            } 
        }
    }
});
Client.on("message" , message => {
    if(message.content.startsWith(prefix + "Talk")){
        if(TalkBot == true){
            TalkBot = false
        }else{
            TalkBot = true
        }
        if(TalkBot === false){
            message.reply("Bot will not talk by his own !")
        }else{
            message.reply("Bot will talk by his own !")
        }
    }
});
//#endregion
//#region Command Bot Key
Client.login("Nzg3NDg3OTg4ODUwMjI5Mjc4.X9VrVw.cYliZV56aE9oUxCw0kfVCyu19iU");
//#endregion