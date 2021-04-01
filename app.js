 const Discord  =  require('discord.js');
 const { Client, MessageAttachment, MessageEmbed } = require('discord.js');
 const client = new Discord.Client();
 let texto = new MessageEmbed();
 const prefijo = "$";
 
client.on('ready',()=>{

    console.log(`El bot esta listo ${client.user.tag}`);
    client.user.setStatus('online');
    

    console.log(client.user.presence.status);
});

client.on('message', message =>{


    //si el mensaje inicia con el prefijo "!"
    if(message.author.bot) return;
    if(message.content.startsWith(prefijo)){

        const [comandoMsj, ...segundoParametro ] =  message.content
        .trim()
        .substring(prefijo.length)
        .split(/\s+/);
        console.log(comandoMsj);
        console.log(segundoParametro);
        if(comandoMsj === 'sacar'){

            if(segundoParametro.length === 0) return message.reply('Porfavor ingresa el id del usuario');
            const usuario = message.guild.members.cache.get(segundoParametro[0]);
           
            console.log(usuario);
            //si existe
             if(usuario){
                console.log(usuario)
                 usuario.kick()
                .then(usuario => message.channel.send(`${usuario} fue expulsado, no merece estar aqui`))
                 .catch(error => message.channel.send('No tienes permisos para  hacer esto '));
         }else{
             message.channel.send('El usuario no existe');
          console.log(usuario);
         }
        }
    }

    
    if(message.content.startsWith(prefijo)){
        
        const [comandoMsj, ...segundoParametro ] =  message.content
        .trim()
        .substring(prefijo.length)
        .split(/\s+/);
        console.log(comandoMsj);
        console.log(segundoParametro);


        if(comandoMsj === 'palabra'){
            if(segundoParametro.length === 0) return message.reply('Ingresa la palabra a modificar');
           

            if(segundoParametro.length >= 1 ){
                 
                message.reply(`${segundoParametro}thos`)
            }

            
        }
    }

    ///Este codigo es espaguetti
    console.log(message);

    if(message.content.includes('!je')){
        // message.reply('Netxus nunca tuvo sat');
        message.channel.send('Puto el que diga Je');
        
    }

    // if(message.content === '!cheso'){

    //     message.reply('Tuvo un mal dia :(');
    // }
   
    if(message.content === '!cheso'){
        const adjuntar = new MessageAttachment('https://scontent.fver2-1.fna.fbcdn.net/v/t1.6435-1/p320x320/89022380_3273081726038868_5186283570968133632_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=7206a8&_nc_ohc=O5D5CwasXKYAX8Xinrp&_nc_ht=scontent.fver2-1.fna&tp=6&oh=76747201afd18eece537fdc7688fa1bc&oe=608A7E2C');
        
        texto.setTitle('Un rico queso')
        texto.setColor(0xff0000)
        message.channel.send(texto);
        message.channel.send(adjuntar);
    }
    
    if(message.content === '!fuckboy'){
        const imagen = new MessageAttachment('https://scontent.fver2-1.fna.fbcdn.net/v/t1.6435-1/p200x200/96838040_2457932020975431_1993195005249847296_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=7206a8&_nc_ohc=HgbdfuB6NeQAX8Bu_CP&_nc_ht=scontent.fver2-1.fna&tp=6&oh=a3c3681592ee2456dbdbfe79e5037363&oe=6088483A');
        texto.setTitle('Solivan dame a la niña');
        texto.setColor(0xff0000);
        message.channel.send(texto);
        message.channel.send(imagen);
    }

    if(message.content === 'yo'){
        const imagen = new MessageAttachment('img/yo.jpg');

        message.channel.send(imagen);
    }

    if(message.content === 'licona'){
        texto.setTitle('Pasame los partidos de hoy campeón');
        texto.setColor(0xff0000);
        const imagen = new MessageAttachment('img/licona.jpg');
        message.channel.send(imagen);
        message.channel.send(texto);
    }
    
    if(message.content === 'chingas a tu madre bot'){
        
        message.reply('Yo tambien te odio');
    }

    if(message.content === '<scorpion>'){
        const imagen = new MessageAttachment('img/xd.jpg');
        texto.setTitle('Las empresas me buscan');
        texto.setColor(0xff0000);
        message.channel.send(texto);
        message.channel.send(imagen)
        
    }
    if(message.content === '!tumtum'){
        const imagen = new MessageAttachment('img/tum.jpg');
        texto.setTitle('En windows 7 no se puede jugar');
        texto.setColor(0xff0000);
        message.channel.send(texto);
        message.channel.send(imagen)
        
    }

});

 //para que el bot inicie sesion
 client.login('ODI2NzAyMDQwMTg5MjM5Mjk3.YGQURQ.QeMejfzaX4KqJDVHij61FA_I1fE');
