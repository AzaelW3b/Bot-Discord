 const Discord  =  require('discord.js');
 const client = new Discord.Client();
 
client.on('ready',()=>{

    console.log(`El bot esta listo ${client.user.tag}`);
    client.user.setStatus('dnd');

    console.log(client.user.presence.status);
});

client.on('message', message =>{

    console.log(message);

    if(message.content.includes('je')){
        message.reply('Netxus nunca tuvo sat');
        
    }

    if(message.content === '!python'){

        message.reply('Lenguaje de geis');
    }
   
});

 //para que el bot inicie sesion
 client.login('ODI2NzAyMDQwMTg5MjM5Mjk3.YGQURQ.Y-2TdrJWCIwS522KkTslYR_ul6U');
