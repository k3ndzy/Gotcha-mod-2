const Discord = require('discord.js');
const tools = require('./functions.js');
const client = new Discord.Client();
const prefix = 'CHECK.';
const db = require('quick.db');

client.on('message', message => {
  
  
  let msg = message.content.toUpperCase();
  let sender = message.author;
  let args = message.content.slice(prefix.length).trim().split(' ');
  let cmd = args.shift().toLowerCase();
  
  if (!msg.startsWith(prefix)) return;
  if (message.author.bot) return;
  
//check iv
   //Groudon  no weather
 if (msg === prefix + 'IV GROUDON 2328') {
    message.channel.send('Checking Groudon With CP 2328 :mag_right:'),
    message.channel.send({embed:{
        title: "```Rain Boss Groudon level 20, CP 2328 [100%] (No Weather Bonus)```",
        description: "***Move + Database From Battle***",
        color:0xFF0000,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=100%  Atk: 15  Def: 15  Stm: 15 (Level 20) ",
                inline: true
            },            
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'https://cdn.bulbagarden.net/upload/thumb/7/70/383Groudon.png/250px-383Groudon.png'
        }
    }})
}
//End 1

 if (msg === prefix + 'IV GROUDON 2323') {
    message.channel.send('Checking Groudon With CP 2323 :mag_right:'),
    message.channel.send({embed:{
        title: "```Rain Boss Groudon level 20, CP 2323 [98%] (No Weather Bonus)```",
        description: "***Move + Database From Battle***",
        color:0xFF0000,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=98%  Atk: 15  Def: 14  Stm: 15 (Level 20) ",
                inline: true
            },            
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'https://cdn.bulbagarden.net/upload/thumb/7/70/383Groudon.png/250px-383Groudon.png'
        }
    }})
}
//End 2

 if (msg === prefix + 'IV GROUDON 2322') {
    message.channel.send('Checking Groudon With CP 2322 :mag_right:'),
    message.channel.send({embed:{
        title: "```Rain Boss Groudon level 20, CP 2322 [98%] (No Weather Bonus)```",
        description: "***Move + Database From Battle***",
        color:0xFF0000,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=98%  Atk: 15  Def: 15  Stm: 14 (Level 20) ",
                inline: true
            },            
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'https://cdn.bulbagarden.net/upload/thumb/7/70/383Groudon.png/250px-383Groudon.png'
        }
    }})
}
//End 3

 if (msg === prefix + 'IV GROUDON 2320') {
    message.channel.send('Checking Groudon With CP 2320 :mag_right:'),
    message.channel.send({embed:{
        title: "```Rain Boss Groudon level 20, CP 2320 [98%] (No Weather Bonus)```",
        description: "***Move + Database From Battle***",
        color:0xFF0000,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=98%  Atk: 14  Def: 15  Stm: 15 (Level 20) ",
                inline: true
            },            
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'https://cdn.bulbagarden.net/upload/thumb/7/70/383Groudon.png/250px-383Groudon.png'
        }
    }})
}
//End 4

 if (msg === prefix + 'IV GROUDON 2319') {
    message.channel.send('Checking Groudon With CP 2319 :mag_right:'),
    message.channel.send({embed:{
        title: "```Rain Boss Groudon level 20, CP 2319 [96%] (No Weather Bonus)```",
        description: "***Move + Database From Battle***",
        color:0xFF0000,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=96%  Atk: 15  Def: 13  Stm: 15 (Level 20) ",
                inline: true
            },            
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'https://cdn.bulbagarden.net/upload/thumb/7/70/383Groudon.png/250px-383Groudon.png'
        }
    }})
}
//End 5

 if (msg === prefix + 'IV GROUDON 2318') {
    message.channel.send('Checking Groudon With CP 2318 :mag_right:'),
    message.channel.send({embed:{
        title: "```Rain Boss Groudon level 20, CP 2318 [96%] (No Weather Bonus)```",
        description: "***Move + Database From Battle***",
        color:0xFF0000,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=96%  Atk: 15  Def: 14  Stm: 14 (Level 20) ",
                inline: true
            },            
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'https://cdn.bulbagarden.net/upload/thumb/7/70/383Groudon.png/250px-383Groudon.png'
        }
    }})
}
//End 6

 if (msg === prefix + 'IV GROUDON 2316') {
    message.channel.send('Checking Groudon With CP 2316 :mag_right:'),
    message.channel.send({embed:{
        title: "```Rain Boss Groudon level 20, CP 2316 [96%] (No Weather Bonus)```",
        description: "***Move + Database From Battle***",
        color:0xFF0000,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=96%  Atk: 15  Def: 15  Stm: 13 (Level 20) ",
                inline: true
            },            
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'https://cdn.bulbagarden.net/upload/thumb/7/70/383Groudon.png/250px-383Groudon.png'
        }
    }})
}
//End 7

 if (msg === prefix + 'IV GROUDON 2315') {
    message.channel.send('Checking Groudon With CP 2315 :mag_right:'),
    message.channel.send({embed:{
        title: "```Rain Boss Groudon level 20, CP 2315 [93-96%] (No Weather Bonus)```",
        description: "***Move + Database From Battle***",
        color:0xFF0000,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=96%  Atk: 14  Def: 14  Stm: 15 (Level 20) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=93%  Atk: 15  Def: 12  Stm: 15 (Level 20) ",
                inline: true
            },            
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'https://cdn.bulbagarden.net/upload/thumb/7/70/383Groudon.png/250px-383Groudon.png'
        }
    }})
}
//End 8

 if (msg === prefix + 'IV GROUDON 2314') {
    message.channel.send('Checking Groudon With CP 2314 :mag_right:'),
    message.channel.send({embed:{
        title: "```Rain Boss Groudon level 20, CP 2314 [96%] (No Weather Bonus)```",
        description: "***Move + Database From Battle***",
        color:0xFF0000,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=96%  Atk: 14  Def: 15  Stm: 14 (Level 20) ",
                inline: true
            },            
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'https://cdn.bulbagarden.net/upload/thumb/7/70/383Groudon.png/250px-383Groudon.png'
        }
    }})
}
//End 9

 if (msg === prefix + 'IV GROUDON 2313') {
    message.channel.send('Checking Groudon With CP 2313 :mag_right:'),
    message.channel.send({embed:{
        title: "```Rain Boss Groudon level 20, CP 2313 [93%] (No Weather Bonus)```",
        description: "***Move + Database From Battle***",
        color:0xFF0000,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=93%  Atk: 15  Def: 13  Stm: 14 (Level 20) ",
                inline: true
            },            
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'https://cdn.bulbagarden.net/upload/thumb/7/70/383Groudon.png/250px-383Groudon.png'
        }
    }})
}
//End 10

 if (msg === prefix + 'IV GROUDON 2312') {
    message.channel.send('Checking Groudon With CP 2312 :mag_right:'),
    message.channel.send({embed:{
        title: "```Rain Boss Groudon level 20, CP 2312 [93-96%] (No Weather Bonus)```",
        description: "***Move + Database From Battle***",
        color:0xFF0000,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=96%  Atk: 13  Def: 15  Stm: 15 (Level 20) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=93%  Atk: 15  Def: 14  Stm: 13 (Level 20) ",
                inline: true
            },            
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'https://cdn.bulbagarden.net/upload/thumb/7/70/383Groudon.png/250px-383Groudon.png'
        }
    }})
}
//End 11

 if (msg === prefix + 'IV GROUDON 2311') {
    message.channel.send('Checking Groudon With CP 2311 :mag_right:'),
    message.channel.send({embed:{
        title: "```Rain Boss Groudon level 20, CP 2311 [93%] (No Weather Bonus)```",
        description: "***Move + Database From Battle***",
        color:0xFF0000,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=93%  Atk: 14  Def: 13  Stm: 15 (Level 20) ",
                inline: true
            },            
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'https://cdn.bulbagarden.net/upload/thumb/7/70/383Groudon.png/250px-383Groudon.png'
        }
    }})
}
//End 12

 if (msg === prefix + 'IV GROUDON 2310') {
    message.channel.send('Checking Groudon With CP 2310 :mag_right:'),
    message.channel.send({embed:{
        title: "```Rain Boss Groudon level 20, CP 2310 [91-93%] (No Weather Bonus)```",
        description: "***Move + Database From Battle***",
        color:0xFF0000,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=93%  Atk: 15  Def: 15  Stm: 12 (Level 20) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=91%  Atk: 15  Def: 11  Stm: 15 (Level 20) ",
                inline: true
            },            
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'https://cdn.bulbagarden.net/upload/thumb/7/70/383Groudon.png/250px-383Groudon.png'
        }
    }})
}
//End 13

 if (msg === prefix + 'IV GROUDON 2309') {
    message.channel.send('Checking Groudon With CP 2309 :mag_right:'),
    message.channel.send({embed:{
        title: "```Rain Boss Groudon level 20, CP 2309 [91-93%] (No Weather Bonus)```",
        description: "***Move + Database From Battle***",
        color:0xFF0000,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=93%  Atk: 14  Def: 14  Stm: 14 (Level 20) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=91%  Atk: 15  Def: 12  Stm: 14 (Level 20) ",
                inline: true
            },            
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'https://cdn.bulbagarden.net/upload/thumb/7/70/383Groudon.png/250px-383Groudon.png'
        }
    }})
}
//End 14

 if (msg === prefix + 'IV GROUDON 2308') {
    message.channel.send('Checking Groudon With CP 2308 :mag_right:'),
    message.channel.send({embed:{
        title: "```Rain Boss Groudon level 20, CP 2308 [93%] (No Weather Bonus)```",
        description: "***Move + Database From Battle***",
        color:0xFF0000,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=93%  Atk: 14  Def: 15  Stm: 13 (Level 20) ",
                inline: true
            },          
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'https://cdn.bulbagarden.net/upload/thumb/7/70/383Groudon.png/250px-383Groudon.png'
        }
    }})
}
//End 15

 if (msg === prefix + 'IV GROUDON 2307') {
    message.channel.send('Checking Groudon With CP 2307 :mag_right:'),
    message.channel.send({embed:{
        title: "```Rain Boss Groudon level 20, CP 2307 [91-93%] (No Weather Bonus)```",
        description: "***Move + Database From Battle***",
        color:0xFF0000,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=93%  Atk: 13  Def: 14  Stm: 15 (Level 20) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=91%  Atk: 14  Def: 12  Stm: 15 (Level 20) ",
                inline: true
            },
            {
                name:"Found 3:",
                value:":point_right: IV=91%  Atk: 15  Def: 13  Stm: 13 (Level 20) ",
                inline: true
            },           
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'https://cdn.bulbagarden.net/upload/thumb/7/70/383Groudon.png/250px-383Groudon.png'
        }
    }})
}
//End 16

 if (msg === prefix + 'IV GROUDON 2306') {
    message.channel.send('Checking Groudon With CP 2306 :mag_right:'),
    message.channel.send({embed:{
        title: "```Rain Boss Groudon level 20, CP 2306 [89-93%] (No Weather Bonus)```",
        description: "***Move + Database From Battle***",
        color:0xFF0000,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=93%  Atk: 13  Def: 15  Stm: 14 (Level 20) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=91%  Atk: 15  Def: 14  Stm: 12 (Level 20) ",
                inline: true
            },
            {
                name:"Found 3:",
                value:":point_right: IV=89%  Atk: 15  Def: 10  Stm: 15 (Level 20) ",
                inline: true
            },           
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'https://cdn.bulbagarden.net/upload/thumb/7/70/383Groudon.png/250px-383Groudon.png'
        }
    }})
}
//End 17

 if (msg === prefix + 'IV GROUDON 2305') {
    message.channel.send('Checking Groudon With CP 2305 :mag_right:'),
    message.channel.send({embed:{
        title: "```Rain Boss Groudon level 20, CP 2305 [91%] (No Weather Bonus)```",
        description: "***Move + Database From Battle***",
        color:0xFF0000,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=91%  Atk: 14  Def: 13  Stm: 14 (Level 20) ",
                inline: true
            },           
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'https://cdn.bulbagarden.net/upload/thumb/7/70/383Groudon.png/250px-383Groudon.png'
        }
    }})
}
//End 18

 if (msg === prefix + 'IV GROUDON 2304') {
    message.channel.send('Checking Groudon With CP 2304 :mag_right:'),
    message.channel.send({embed:{
        title: "```Rain Boss Groudon level 20, CP 2304 [89-91%] (No Weather Bonus)```",
        description: "***Move + Database From Battle***",
        color:0xFF0000,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=91%  Atk: 14  Def: 14  Stm: 13 (Level 20) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=91%  Atk: 15  Def: 15  Stm: 11 (Level 20) ",
                inline: true
            },
            {
                name:"Found 3:",
                value:":point_right: IV=89%  Atk: 15  Def: 11  Stm: 14 (Level 20) ",
                inline: true
            },           
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'https://cdn.bulbagarden.net/upload/thumb/7/70/383Groudon.png/250px-383Groudon.png'
        }
    }})
}
//End 19

 if (msg === prefix + 'IV GROUDON 2303') {
    message.channel.send('Checking Groudon With CP 2303 :mag_right:'),
    message.channel.send({embed:{
        title: "```Rain Boss Groudon level 20, CP 2303 [89-93%] (No Weather Bonus)```",
        description: "***Move + Database From Battle***",
        color:0xFF0000,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=93%  Atk: 12  Def: 15  Stm: 15 (Level 20) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=91%  Atk: 13  Def: 13  Stm: 15 (Level 20) ",
                inline: true
            },
            {
                name:"Found 3:",
                value:":point_right: IV=89%  Atk: 15  Def: 12  Stm: 13 (Level 20) ",
                inline: true
            },           
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'https://cdn.bulbagarden.net/upload/thumb/7/70/383Groudon.png/250px-383Groudon.png'
        }
    }})
}
//End 20

 if (msg === prefix + 'IV GROUDON 2302') {
    message.channel.send('Checking Groudon With CP 2302 :mag_right:'),
    message.channel.send({embed:{
        title: "```Rain Boss Groudon level 20, CP 2302 [89-91%] (No Weather Bonus)```",
        description: "***Move + Database From Battle***",
        color:0xFF0000,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=91%  Atk: 14  Def: 15  Stm: 12 (Level 20) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=89%  Atk: 14  Def: 11  Stm: 15 (Level 20) ",
                inline: true
            },          
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'https://cdn.bulbagarden.net/upload/thumb/7/70/383Groudon.png/250px-383Groudon.png'
        }
    }})
}
//End 21

 if (msg === prefix + 'IV GROUDON 2301') {
    message.channel.send('Checking Groudon With CP 2301 :mag_right:'),
    message.channel.send({embed:{
        title: "```Rain Boss Groudon level 20, CP 2301 [89-91%] (No Weather Bonus)```",
        description: "***Move + Database From Battle***",
        color:0xFF0000,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=91%  Atk: 13  Def: 14  Stm: 14 (Level 20) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=89%  Atk: 14  Def: 12  Stm: 14 (Level 20) ",
                inline: true
            },
            {
                name:"Found 3:",
                value:":point_right: IV=89%  Atk: 15  Def: 13  Stm: 12 (Level 20) ",
                inline: true
            },          
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'https://cdn.bulbagarden.net/upload/thumb/7/70/383Groudon.png/250px-383Groudon.png'
        }
    }})
}
//End 22

 if (msg === prefix + 'IV GROUDON 2300') {
    message.channel.send('Checking Groudon With CP 2300 :mag_right:'),
    message.channel.send({embed:{
        title: "```Rain Boss Groudon level 20, CP 2300 [87-91%] (No Weather Bonus)```",
        description: "***Move + Database From Battle***",
        color:0xFF0000,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=91%  Atk: 13  Def: 15  Stm: 13 (Level 20) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=89%  Atk: 15  Def: 14  Stm: 11 (Level 20) ",
                inline: true
            },
            {
                name:"Found 3:",
                value:":point_right: IV=87%  Atk: 15  Def: 10  Stm: 14 (Level 20) ",
                inline: true
            },          
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'https://cdn.bulbagarden.net/upload/thumb/7/70/383Groudon.png/250px-383Groudon.png'
        }
    }})
}
//End 23

 if (msg === prefix + 'IV GROUDON 2299') {
    message.channel.send('Checking Groudon With CP 2299 :mag_right:'),
    message.channel.send({embed:{
        title: "```Rain Boss Groudon level 20, CP 2299 [87-91%] (No Weather Bonus)```",
        description: "***Move + Database From Battle***",
        color:0xFF0000,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=91%  Atk: 12  Def: 14  Stm: 15 (Level 20) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=89%  Atk: 14  Def: 13  Stm: 13 (Level 20) ",
                inline: true
            },
            {
                name:"Found 3:",
                value:":point_right: IV=87%  Atk: 15  Def: 11  Stm: 13 (Level 20) ",
                inline: true
            },          
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'https://cdn.bulbagarden.net/upload/thumb/7/70/383Groudon.png/250px-383Groudon.png'
        }
    }})
}
//End 24

 if (msg === prefix + 'IV GROUDON 2298') {
    message.channel.send('Checking Groudon With CP 2298 :mag_right:'),
    message.channel.send({embed:{
        title: "```Rain Boss Groudon level 20, CP 2298 [87-89%] (No Weather Bonus)```",
        description: "***Move + Database From Battle***",
        color:0xFF0000,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=89%  Atk: 13  Def: 12  Stm: 15 (Level 20) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=89%  Atk: 14  Def: 14  Stm: 12 (Level 20) ",
                inline: true
            },
            {
                name:"Found 3:",
                value:":point_right: IV=89%  Atk: 15  Def: 15  Stm: 10 (Level 20) ",
                inline: true
            },
            {
                name:"Found 4:",
                value:":point_right: IV=87%  Atk: 14  Def: 10  Stm: 15 (Level 20) ",
                inline: true
            },          
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'https://cdn.bulbagarden.net/upload/thumb/7/70/383Groudon.png/250px-383Groudon.png'
        }
    }})
}
//End 25

 if (msg === prefix + 'IV GROUDON 2297') {
    message.channel.send('Checking Groudon With CP 2297 :mag_right:'),
    message.channel.send({embed:{
        title: "```Rain Boss Groudon level 20, CP 2297 [87-91%] (No Weather Bonus)```",
        description: "***Move + Database From Battle***",
        color:0xFF0000,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=91%  Atk: 12  Def: 15  Stm: 14 (Level 20) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=89%  Atk: 13  Def: 13  Stm: 14 (Level 20) ",
                inline: true
            },
            {
                name:"Found 3:",
                value:":point_right: IV=87%  Atk: 15  Def: 12  Stm: 12 (Level 20) ",
                inline: true
            },          
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'https://cdn.bulbagarden.net/upload/thumb/7/70/383Groudon.png/250px-383Groudon.png'
        }
    }})
}
//End 26

 if (msg === prefix + 'IV GROUDON 2296') {
    message.channel.send('Checking Groudon With CP 2296 :mag_right:'),
    message.channel.send({embed:{
        title: "```Rain Boss Groudon level 20, CP 2296 [87-89%] (No Weather Bonus)```",
        description: "***Move + Database From Battle***",
        color:0xFF0000,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=89%  Atk: 14  Def: 15  Stm: 11 (Level 20) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=87%  Atk: 14  Def: 11  Stm: 14 (Level 20) ",
                inline: true
            },          
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'https://cdn.bulbagarden.net/upload/thumb/7/70/383Groudon.png/250px-383Groudon.png'
        }
    }})
}
//End 27

 if (msg === prefix + 'IV GROUDON 2295') {
    message.channel.send('Checking Groudon With CP 2295 :mag_right:'),
    message.channel.send({embed:{
        title: "```Rain Boss Groudon level 20, CP 2295 [87-91%] (No Weather Bonus)```",
        description: "***Move + Database From Battle***",
        color:0xFF0000,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=91%  Atk: 11  Def: 15  Stm: 15 (Level 20) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=89%  Atk: 12  Def: 13  Stm: 15 (Level 20) ",
                inline: true
            },
            {
                name:"Found 3:",
                value:":point_right: IV=89%  Atk: 13  Def: 14  Stm: 13 (Level 20) ",
                inline: true
            },
            {
                name:"Found 4:",
                value:":point_right: IV=87%  Atk: 14  Def: 12  Stm: 13 (Level 20) ",
                inline: true
            },
            {
                name:"Found 5:",
                value:":point_right: IV=87%  Atk: 15  Def: 13  Stm: 11 (Level 20) ",
                inline: true
            },          
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'https://cdn.bulbagarden.net/upload/thumb/7/70/383Groudon.png/250px-383Groudon.png'
        }
    }})
}
//End 28

 if (msg === prefix + 'IV GROUDON 2294') {
    message.channel.send('Checking Groudon With CP 2294 :mag_right:'),
    message.channel.send({embed:{
        title: "```Rain Boss Groudon level 20, CP 2294 [84-89%] (No Weather Bonus)```",
        description: "***Move + Database From Battle***",
        color:0xFF0000,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=89%  Atk: 13  Def: 15  Stm: 12 (Level 20) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=87%  Atk: 13  Def: 11  Stm: 15 (Level 20) ",
                inline: true
            },
            {
                name:"Found 3:",
                value:":point_right: IV=87%  Atk: 15  Def: 14  Stm: 10 (Level 20) ",
                inline: true
            },
            {
                name:"Found 4:",
                value:":point_right: IV=84%  Atk: 15  Def: 10  Stm: 13 (Level 20) ",
                inline: true
            },          
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'https://cdn.bulbagarden.net/upload/thumb/7/70/383Groudon.png/250px-383Groudon.png'
        }
    }})
}
//End 29

 if (msg === prefix + 'IV GROUDON 2293') {
    message.channel.send('Checking Groudon With CP 2293 :mag_right:'),
    message.channel.send({embed:{
        title: "```Rain Boss Groudon level 20, CP 2293 [84-89%] (No Weather Bonus)```",
        description: "***Move + Database From Battle***",
        color:0xFF0000,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=89%  Atk: 12  Def: 14  Stm: 14 (Level 20) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=87%  Atk: 13  Def: 12  Stm: 14 (Level 20) ",
                inline: true
            },
            {
                name:"Found 3:",
                value:":point_right: IV=87%  Atk: 14  Def: 13  Stm: 12 (Level 20) ",
                inline: true
            },
            {
                name:"Found 4:",
                value:":point_right: IV=84%  Atk: 15  Def: 11  Stm: 12 (Level 20) ",
                inline: true
            },          
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'https://cdn.bulbagarden.net/upload/thumb/7/70/383Groudon.png/250px-383Groudon.png'
        }
    }})
}
//End 30

 if (msg === prefix + 'IV GROUDON 2292') {
    message.channel.send('Checking Groudon With CP 2292 :mag_right:'),
    message.channel.send({embed:{
        title: "```Rain Boss Groudon level 20, CP 2292 [84-89%] (No Weather Bonus)```",
        description: "***Move + Database From Battle***",
        color:0xFF0000,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=89%  Atk: 12  Def: 15  Stm: 13 (Level 20) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=87%  Atk: 14  Def: 14  Stm: 11 (Level 20) ",
                inline: true
            },
            {
                name:"Found 3:",
                value:":point_right: IV=84%  Atk: 14  Def: 10  Stm: 14 (Level 20) ",
                inline: true
            },          
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'https://cdn.bulbagarden.net/upload/thumb/7/70/383Groudon.png/250px-383Groudon.png'
        }
    }})
}
//End 31

 if (msg === prefix + 'IV GROUDON 2291') {
    message.channel.send('Checking Groudon With CP 2291 :mag_right:'),
    message.channel.send({embed:{
        title: "```Rain Boss Groudon level 20, CP 2291 [84-89%] (No Weather Bonus)```",
        description: "***Move + Database From Battle***",
        color:0xFF0000,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=89%  Atk: 11  Def: 14  Stm: 15 (Level 20) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=87%  Atk: 13  Def: 13  Stm: 13 (Level 20) ",
                inline: true
            },
            {
                name:"Found 3:",
                value:":point_right: IV=84%  Atk: 15  Def: 12  Stm: 11 (Level 20) ",
                inline: true
            },          
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'https://cdn.bulbagarden.net/upload/thumb/7/70/383Groudon.png/250px-383Groudon.png'
        }
    }})
}
//End 32

 if (msg === prefix + 'IV GROUDON 2290') {
    message.channel.send('Checking Groudon With CP 2290 :mag_right:'),
    message.channel.send({embed:{
        title: "```Rain Boss Groudon level 20, CP 2290 [84-87%] (No Weather Bonus)```",
        description: "***Move + Database From Battle***",
        color:0xFF0000,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=87%  Atk: 12  Def: 12  Stm: 15 (Level 20) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=87%  Atk: 13  Def: 14  Stm: 12 (Level 20) ",
                inline: true
            },
            {
                name:"Found 3:",
                value:":point_right: IV=87%  Atk: 14  Def: 15  Stm: 10 (Level 20) ",
                inline: true
            },
            {
                name:"Found 4:",
                value:":point_right: IV=84%  Atk: 13  Def: 10  Stm: 15 (Level 20) ",
                inline: true
            },
            {
                name:"Found 5:",
                value:":point_right: IV=84%  Atk: 14  Def: 11  Stm: 13 (Level 20) ",
                inline: true
            },          
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'https://cdn.bulbagarden.net/upload/thumb/7/70/383Groudon.png/250px-383Groudon.png'
        }
    }})
}
//End 33

 if (msg === prefix + 'IV GROUDON 2289') {
    message.channel.send('Checking Groudon With CP 2289 :mag_right:'),
    message.channel.send({embed:{
        title: "```Rain Boss Groudon level 20, CP 2289 [84-89%] (No Weather Bonus)```",
        description: "***Move + Database From Battle***",
        color:0xFF0000,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=89%  Atk: 11  Def: 15  Stm: 14 (Level 20) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=87%  Atk: 12  Def: 13  Stm: 14 (Level 20) ",
                inline: true
            },
            {
                name:"Found 3:",
                value:":point_right: IV=84%  Atk: 14  Def: 12  Stm: 12 (Level 20) ",
                inline: true
            },
            {
                name:"Found 4:",
                value:":point_right: IV=84%  Atk: 15  Def: 13  Stm: 10 (Level 20) ",
                inline: true
            },          
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'https://cdn.bulbagarden.net/upload/thumb/7/70/383Groudon.png/250px-383Groudon.png'
        }
    }})
}
//End 34

 if (msg === prefix + 'IV GROUDON 2288') {
    message.channel.send('Checking Groudon With CP 2288 :mag_right:'),
    message.channel.send({embed:{
        title: "```Rain Boss Groudon level 20, CP 2288 [82-87%] (No Weather Bonus)```",
        description: "***Move + Database From Battle***",
        color:0xFF0000,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=87%  Atk: 13  Def: 15  Stm: 11 (Level 20) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=84%  Atk: 13  Def: 11  Stm: 14 (Level 20) ",
                inline: true
            },
            {
                name:"Found 3:",
                value:":point_right: IV=82%  Atk: 15  Def: 10  Stm: 12 (Level 20) ",
                inline: true
            },         
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'https://cdn.bulbagarden.net/upload/thumb/7/70/383Groudon.png/250px-383Groudon.png'
        }
    }})
}
//End 35

 if (msg === prefix + 'IV GROUDON 2287') {
    message.channel.send('Checking Groudon With CP 2287 :mag_right:'),
    message.channel.send({embed:{
        title: "```Rain Boss Groudon level 20, CP 2287 [82-89%] (No Weather Bonus)```",
        description: "***Move + Database From Battle***",
        color:0xFF0000,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=89%  Atk: 10  Def: 15  Stm: 15 (Level 20) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=87%  Atk: 11  Def: 13  Stm: 15 (Level 20) ",
                inline: true
            },
            {
                name:"Found 3:",
                value:":point_right: IV=87%  Atk: 12  Def: 14  Stm: 13 (Level 20) ",
                inline: true
            },
            {
                name:"Found 4:",
                value:":point_right: IV=84%  Atk: 13  Def: 12  Stm: 13 (Level 20) ",
                inline: true
            },
            {
                name:"Found 5:",
                value:":point_right: IV=84%  Atk: 14  Def: 13  Stm: 11 (Level 20) ",
                inline: true
            },
            {
                name:"Found 6:",
                value:":point_right: IV=82%  Atk: 15  Def: 11  Stm: 11 (Level 20) ",
                inline: true
            },         
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'https://cdn.bulbagarden.net/upload/thumb/7/70/383Groudon.png/250px-383Groudon.png'
        }
    }})
}
//End 36

 if (msg === prefix + 'IV GROUDON 2286') {
    message.channel.send('Checking Groudon With CP 2286 :mag_right:'),
    message.channel.send({embed:{
        title: "```Rain Boss Groudon level 20, CP 2286 [82-87%] (No Weather Bonus)```",
        description: "***Move + Database From Battle***",
        color:0xFF0000,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=87%  Atk: 12  Def: 15  Stm: 12 (Level 20) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=84%  Atk: 12  Def: 11  Stm: 15 (Level 20) ",
                inline: true
            },
            {
                name:"Found 3:",
                value:":point_right: IV=84%  Atk: 14  Def: 14  Stm: 10 (Level 20) ",
                inline: true
            },
            {
                name:"Found 4:",
                value:":point_right: IV=82%  Atk: 14  Def: 10  Stm: 13 (Level 20) ",
                inline: true
            },         
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'https://cdn.bulbagarden.net/upload/thumb/7/70/383Groudon.png/250px-383Groudon.png'
        }
    }})
}
//End 37

 if (msg === prefix + 'IV GROUDON 2285') {
    message.channel.send('Checking Groudon With CP 2285 :mag_right:'),
    message.channel.send({embed:{
        title: "```Rain Boss Groudon level 20, CP 2285 [82-87%] (No Weather Bonus)```",
        description: "***Move + Database From Battle***",
        color:0xFF0000,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=87%  Atk: 11  Def: 14  Stm: 14 (Level 20) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=84%  Atk: 13  Def: 13  Stm: 12 (Level 20) ",
                inline: true
            },
            {
                name:"Found 3:",
                value:":point_right: IV=82%  Atk: 14  Def: 12  Stm: 11 (Level 20) ",
                inline: true
            },
            {
                name:"Found 4:",
                value:":point_right: IV=82%  Atk: 15  Def: 12  Stm: 10 (Level 20) ",
                inline: true
            },         
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'https://cdn.bulbagarden.net/upload/thumb/7/70/383Groudon.png/250px-383Groudon.png'
        }
    }})
}
//End 38

 if (msg === prefix + 'IV GROUDON 2284') {
    message.channel.send('Checking Groudon With CP 2284 :mag_right:'),
    message.channel.send({embed:{
        title: "```Rain Boss Groudon level 20, CP 2284 [82-84%] (No Weather Bonus)```",
        description: "***Move + Database From Battle***",
        color:0xFF0000,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=84%  Atk: 12  Def: 12  Stm: 14 (Level 20) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=84%  Atk: 13  Def: 14  Stm: 11 (Level 20) ",
                inline: true
            },
            {
                name:"Found 3:",
                value:":point_right: IV=82%  Atk: 13  Def: 10  Stm: 14 (Level 20) ",
                inline: true
            },         
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'https://cdn.bulbagarden.net/upload/thumb/7/70/383Groudon.png/250px-383Groudon.png'
        }
    }})
}
//End 39

 if (msg === prefix + 'IV GROUDON 2283') {
    message.channel.send('Checking Groudon With CP 2283 :mag_right:'),
    message.channel.send({embed:{
        title: "```Rain Boss Groudon level 20, CP 2283 [82-87%] (No Weather Bonus)```",
        description: "***Move + Database From Battle***",
        color:0xFF0000,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=87%  Atk: 14  Def: 10  Stm: 15 (Level 20) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=87%  Atk: 11  Def: 15  Stm: 13 (Level 20) ",
                inline: true
            },
            {
                name:"Found 3:",
                value:":point_right: IV=84%  Atk: 12  Def: 13  Stm: 13 (Level 20) ",
                inline: true
            },
            {
                name:"Found 4:",
                value:":point_right: IV=82%  Atk: 14  Def: 12  Stm: 11 (Level 20) ",
                inline: true
            },         
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'https://cdn.bulbagarden.net/upload/thumb/7/70/383Groudon.png/250px-383Groudon.png'
        }
    }})
}
//End 40

 if (msg === prefix + 'IV GROUDON 2282') {
    message.channel.send('Checking Groudon With CP 2282 :mag_right:'),
    message.channel.send({embed:{
        title: "```Rain Boss Groudon level 20, CP 2282 [80-84%] (No Weather Bonus)```",
        description: "***Move + Database From Battle***",
        color:0xFF0000,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=84%  Atk: 11  Def: 12  Stm: 15 (Level 20) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=84%  Atk: 13  Def: 15  Stm: 10 (Level 20) ",
                inline: true
            },
            {
                name:"Found 3:",
                value:":point_right: IV=82%  Atk: 12  Def: 10  Stm: 15 (Level 20) ",
                inline: true
            },
            {
                name:"Found 4:",
                value:":point_right: IV=82%  Atk: 13  Def: 11  Stm: 13 (Level 20) ",
                inline: true
            },
            {
                name:"Found 5:",
                value:":point_right: IV=80%  Atk: 15  Def: 10  Stm: 11 (Level 20) ",
                inline: true
            },         
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'https://cdn.bulbagarden.net/upload/thumb/7/70/383Groudon.png/250px-383Groudon.png'
        }
    }})
}
//End 41

 if (msg === prefix + 'IV GROUDON 2281') {
    message.channel.send('Checking Groudon With CP 2281 :mag_right:'),
    message.channel.send({embed:{
        title: "```Rain Boss Groudon level 20, CP 2281 [80-87%] (No Weather Bonus)```",
        description: "***Move + Database From Battle***",
        color:0xFF0000,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=87%  Atk: 10  Def: 15  Stm: 14 (Level 20) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=84%  Atk: 11  Def: 13  Stm: 14 (Level 20) ",
                inline: true
            },
            {
                name:"Found 3:",
                value:":point_right: IV=84%  Atk: 12  Def: 14  Stm: 12 (Level 20) ",
                inline: true
            },
            {
                name:"Found 4:",
                value:":point_right: IV=82%  Atk: 13  Def: 12  Stm: 12 (Level 20) ",
                inline: true
            },
            {
                name:"Found 5:",
                value:":point_right: IV=82%  Atk: 14  Def: 13  Stm: 10 (Level 20) ",
                inline: true
            },
            {
                name:"Found 6:",
                value:":point_right: IV=80%  Atk: 15  Def: 11  Stm: 10 (Level 20) ",
                inline: true
            },         
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'https://cdn.bulbagarden.net/upload/thumb/7/70/383Groudon.png/250px-383Groudon.png'
        }
    }})
}
//End 42

 if (msg === prefix + 'IV GROUDON 2280') {
    message.channel.send('Checking Groudon With CP 2280 :mag_right:'),
    message.channel.send({embed:{
        title: "```Rain Boss Groudon level 20, CP 2280 [80-84%] (No Weather Bonus)```",
        description: "***Move + Database From Battle***",
        color:0xFF0000,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=84%  Atk: 12  Def: 15  Stm: 11 (Level 20) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=82%  Atk: 12  Def: 11  Stm: 14 (Level 20) ",
                inline: true
            },
            {
                name:"Found 3:",
                value:":point_right: IV=80%  Atk: 14  Def: 10  Stm: 12 (Level 20) ",
                inline: true
            },        
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'https://cdn.bulbagarden.net/upload/thumb/7/70/383Groudon.png/250px-383Groudon.png'
        }
    }})
}
//End 43

 if (msg === prefix + 'IV GROUDON 2279') {
    message.channel.send('Checking Groudon With CP 2279 :mag_right:'),
    message.channel.send({embed:{
        title: "```Rain Boss Groudon level 20, CP 2279 [80-84%] (No Weather Bonus)```",
        description: "***Move + Database From Battle***",
        color:0xFF0000,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=84%  Atk: 11  Def: 14  Stm: 13 (Level 20) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=82%  Atk: 12  Def: 12  Stm: 13 (Level 20) ",
                inline: true
            },
            {
                name:"Found 3:",
                value:":point_right: IV=82%  Atk: 13  Def: 13  Stm: 11 (Level 20) ",
                inline: true
            },
            {
                name:"Found 4:",
                value:":point_right: IV=80%  Atk: 14  Def: 11  Stm: 11 (Level 20) ",
                inline: true
            },        
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'https://cdn.bulbagarden.net/upload/thumb/7/70/383Groudon.png/250px-383Groudon.png'
        }
    }})
}
//End 44

 if (msg === prefix + 'IV GROUDON 2278') {
    message.channel.send('Checking Groudon With CP 2278 :mag_right:'),
    message.channel.send({embed:{
        title: "```Rain Boss Groudon level 20, CP 2278 [80-84%] (No Weather Bonus)```",
        description: "***Move + Database From Battle***",
        color:0xFF0000,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=84%  Atk: 10  Def: 13  Stm: 15 (Level 20) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=84%  Atk: 11  Def: 15  Stm: 12 (Level 20) ",
                inline: true
            },
            {
                name:"Found 3:",
                value:":point_right: IV=82%  Atk: 11  Def: 11  Stm: 15 (Level 20) ",
                inline: true
            },
            {
                name:"Found 4:",
                value:":point_right: IV=82%  Atk: 13  Def: 14  Stm: 10 (Level 20) ",
                inline: true
            },
            {
                name:"Found 5:",
                value:":point_right: IV=80%  Atk: 13  Def: 10  Stm: 13 (Level 20) ",
                inline: true
            },        
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'https://cdn.bulbagarden.net/upload/thumb/7/70/383Groudon.png/250px-383Groudon.png'
        }
    }})
}
//End 45

 if (msg === prefix + 'IV GROUDON 2277') {
    message.channel.send('Checking Groudon With CP 2277 :mag_right:'),
    message.channel.send({embed:{
        title: "```Rain Boss Groudon level 20, CP 2277 [80-84%] (No Weather Bonus)```",
        description: "***Move + Database From Battle***",
        color:0xFF0000,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=84%  Atk: 10  Def: 14  Stm: 14 (Level 20) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=82%  Atk: 12  Def: 13  Stm: 12 (Level 20) ",
                inline: true
            },
            {
                name:"Found 3:",
                value:":point_right: IV=80%  Atk: 13  Def: 11  Stm: 12 (Level 20) ",
                inline: true
            },
            {
                name:"Found 4:",
                value:":point_right: IV=80%  Atk: 14  Def: 12  Stm: 10 (Level 20) ",
                inline: true
            },        
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'https://cdn.bulbagarden.net/upload/thumb/7/70/383Groudon.png/250px-383Groudon.png'
        }
    }})
}
//End 46

 if (msg === prefix + 'IV GROUDON 2276') {
    message.channel.send('Checking Groudon With CP 2276 :mag_right:'),
    message.channel.send({embed:{
        title: "```Rain Boss Groudon level 20, CP 2276 [78-82%] (No Weather Bonus)```",
        description: "***Move + Database From Battle***",
        color:0xFF0000,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=82%  Atk: 11  Def: 12  Stm: 14 (Level 20) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=82%  Atk: 12  Def: 14  Stm: 11 (Level 20) ",
                inline: true
            },
            {
                name:"Found 3:",
                value:":point_right: IV=80%  Atk: 12  Def: 10  Stm: 14 (Level 20) ",
                inline: true
            },
            {
                name:"Found 4:",
                value:":point_right: IV=78%  Atk: 15  Def: 10  Stm: 10 (Level 20) ",
                inline: true
            },        
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'https://cdn.bulbagarden.net/upload/thumb/7/70/383Groudon.png/250px-383Groudon.png'
        }
    }})
}
//End 47

 if (msg === prefix + 'IV GROUDON 2275') {
    message.channel.send('Checking Groudon With CP 2275 :mag_right:'),
    message.channel.send({embed:{
        title: "```Rain Boss Groudon level 20, CP 2275 [80-84%] (No Weather Bonus)```",
        description: "***Move + Database From Battle***",
        color:0xFF0000,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=84%  Atk: 10  Def: 15  Stm: 13 (Level 20) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=82%  Atk: 11  Def: 13  Stm: 13 (Level 20) ",
                inline: true
            },
            {
                name:"Found 3:",
                value:":point_right: IV=80%  Atk: 13  Def: 12  Stm: 11 (Level 20) ",
                inline: true
            },        
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'https://cdn.bulbagarden.net/upload/thumb/7/70/383Groudon.png/250px-383Groudon.png'
        }
    }})
}
//End 48

 if (msg === prefix + 'IV GROUDON 2274') {
    message.channel.send('Checking Groudon With CP 2274 :mag_right:'),
    message.channel.send({embed:{
        title: "```Rain Boss Groudon level 20, CP 2274 [78-82%] (No Weather Bonus)```",
        description: "***Move + Database From Battle***",
        color:0xFF0000,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=82%  Atk: 10  Def: 12  Stm: 15 (Level 20) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=82%  Atk: 12  Def: 15  Stm: 10 (Level 20) ",
                inline: true
            },
            {
                name:"Found 3:",
                value:":point_right: IV=80%  Atk: 12  Def: 11  Stm: 13 (Level 20) ",
                inline: true
            },
            {
                name:"Found 4:",
                value:":point_right: IV=78%  Atk: 14  Def: 10  Stm: 11 (Level 20) ",
                inline: true
            },        
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'https://cdn.bulbagarden.net/upload/thumb/7/70/383Groudon.png/250px-383Groudon.png'
        }
    }})
}
//End 49

 if (msg === prefix + 'IV GROUDON 2273') {
    message.channel.send('Checking Groudon With CP 2273 :mag_right:'),
    message.channel.send({embed:{
        title: "```Rain Boss Groudon level 20, CP 2273 [78-82%] (No Weather Bonus)```",
        description: "***Move + Database From Battle***",
        color:0xFF0000,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=82%  Atk: 10  Def: 13  Stm: 14 (Level 20) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=82%  Atk: 11  Def: 14  Stm: 12 (Level 20) ",
                inline: true
            },
            {
                name:"Found 3:",
                value:":point_right: IV=80%  Atk: 11  Def: 10  Stm: 15 (Level 20) ",
                inline: true
            },
            {
                name:"Found 4:",
                value:":point_right: IV=80%  Atk: 12  Def: 12  Stm: 12 (Level 20) ",
                inline: true
            },
            {
                name:"Found 5:",
                value:":point_right: IV=80%  Atk: 13  Def: 13  Stm: 10 (Level 20) ",
                inline: true
            },
            {
                name:"Found 6:",
                value:":point_right: IV=78%  Atk: 14  Def: 11  Stm: 10 (Level 20) ",
                inline: true
            },        
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'https://cdn.bulbagarden.net/upload/thumb/7/70/383Groudon.png/250px-383Groudon.png'
        }
    }})
}
//End 50

 if (msg === prefix + 'IV GROUDON 2272') {
    message.channel.send('Checking Groudon With CP 2272 :mag_right:'),
    message.channel.send({embed:{
        title: "```Rain Boss Groudon level 20, CP 2272 [78-82%] (No Weather Bonus)```",
        description: "***Move + Database From Battle***",
        color:0xFF0000,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=82%  Atk: 11  Def: 15  Stm: 11 (Level 20) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=80%  Atk: 11  Def: 11  Stm: 14 (Level 20) ",
                inline: true
            },
            {
                name:"Found 3:",
                value:":point_right: IV=78%  Atk: 13  Def: 10  Stm: 12 (Level 20) ",
                inline: true
            },        
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'https://cdn.bulbagarden.net/upload/thumb/7/70/383Groudon.png/250px-383Groudon.png'
        }
    }})
}
//End 51

 if (msg === prefix + 'IV GROUDON 2271') {
    message.channel.send('Checking Groudon With CP 2271 :mag_right:'),
    message.channel.send({embed:{
        title: "```Rain Boss Groudon level 20, CP 2271 [78-82%] (No Weather Bonus)```",
        description: "***Move + Database From Battle***",
        color:0xFF0000,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=82%  Atk: 10  Def: 14  Stm: 13 (Level 20) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=80%  Atk: 11  Def: 12  Stm: 13 (Level 20) ",
                inline: true
            },
            {
                name:"Found 3:",
                value:":point_right: IV=80%  Atk: 12  Def: 13  Stm: 11 (Level 20) ",
                inline: true
            },
            {
                name:"Found 4:",
                value:":point_right: IV=78%  Atk: 13  Def: 11  Stm: 11 (Level 20) ",
                inline: true
            },        
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'https://cdn.bulbagarden.net/upload/thumb/7/70/383Groudon.png/250px-383Groudon.png'
        }
    }})
}
//End 52

 if (msg === prefix + 'IV GROUDON 2270') {
    message.channel.send('Checking Groudon With CP 2270 :mag_right:'),
    message.channel.send({embed:{
        title: "```Rain Boss Groudon level 20, CP 2270 [78-82%] (No Weather Bonus)```",
        description: "***Move + Database From Battle***",
        color:0xFF0000,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=82%  Atk: 10  Def: 15  Stm: 12 (Level 20) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=80%  Atk: 10  Def: 11  Stm: 15 (Level 20) ",
                inline: true
            },
            {
                name:"Found 3:",
                value:":point_right: IV=80%  Atk: 12  Def: 14  Stm: 10 (Level 20) ",
                inline: true
            },
            {
                name:"Found 4:",
                value:":point_right: IV=78%  Atk: 12  Def: 10  Stm: 13 (Level 20) ",
                inline: true
            },        
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'https://cdn.bulbagarden.net/upload/thumb/7/70/383Groudon.png/250px-383Groudon.png'
        }
    }})
}
//End 53

 if (msg === prefix + 'IV GROUDON 2269') {
    message.channel.send('Checking Groudon With CP 2269 :mag_right:'),
    message.channel.send({embed:{
        title: "```Rain Boss Groudon level 20, CP 2269 [78-80%] (No Weather Bonus)```",
        description: "***Move + Database From Battle***",
        color:0xFF0000,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=80%  Atk: 11  Def: 13  Stm: 12 (Level 20) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=78%  Atk: 13  Def: 12  Stm: 10 (Level 20) ",
                inline: true
            },        
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'https://cdn.bulbagarden.net/upload/thumb/7/70/383Groudon.png/250px-383Groudon.png'
        }
    }})
}
//End 54

 if (msg === prefix + 'IV GROUDON 2268') {
    message.channel.send('Checking Groudon With CP 2268 :mag_right:'),
    message.channel.send({embed:{
        title: "```Rain Boss Groudon level 20, CP 2268 [76-80%] (No Weather Bonus)```",
        description: "***Move + Database From Battle***",
        color:0xFF0000,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=80%  Atk: 10  Def: 12  Stm: 14 (Level 20) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=78%  Atk: 11  Def: 10  Stm: 14 (Level 20) ",
                inline: true
            },
            {
                name:"Found 3:",
                value:":point_right: IV=78%  Atk: 12  Def: 11  Stm: 12 (Level 20) ",
                inline: true
            },
            {
                name:"Found 4:",
                value:":point_right: IV=76%  Atk: 14  Def: 10  Stm: 10 (Level 20) ",
                inline: true
            },        
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'https://cdn.bulbagarden.net/upload/thumb/7/70/383Groudon.png/250px-383Groudon.png'
        }
    }})
}
//End 55

 if (msg === prefix + 'IV GROUDON 2267') {
    message.channel.send('Checking Groudon With CP 2267 :mag_right:'),
    message.channel.send({embed:{
        title: "```Rain Boss Groudon level 20, CP 2267 [78-80%] (No Weather Bonus)```",
        description: "***Move + Database From Battle***",
        color:0xFF0000,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=80%  Atk: 10  Def: 13  Stm: 13 (Level 20) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=80%  Atk: 11  Def: 14  Stm: 11 (Level 20) ",
                inline: true
            },
            {
                name:"Found 3:",
                value:":point_right: IV=78%  Atk: 12  Def: 12  Stm: 11 (Level 20) ",
                inline: true
            },        
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'https://cdn.bulbagarden.net/upload/thumb/7/70/383Groudon.png/250px-383Groudon.png'
        }
    }})
}
//End 56

 if (msg === prefix + 'IV GROUDON 2266') {
    message.channel.send('Checking Groudon With CP 2266 :mag_right:'),
    message.channel.send({embed:{
        title: "```Rain Boss Groudon level 20, CP 2266 [76-80%] (No Weather Bonus)```",
        description: "***Move + Database From Battle***",
        color:0xFF0000,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=80%  Atk: 11  Def: 15  Stm: 10 (Level 20) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=78%  Atk: 11  Def: 11  Stm: 13 (Level 20) ",
                inline: true
            },
            {
                name:"Found 3:",
                value:":point_right: IV=76%  Atk: 13  Def: 10  Stm: 11 (Level 20) ",
                inline: true
            },        
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'https://cdn.bulbagarden.net/upload/thumb/7/70/383Groudon.png/250px-383Groudon.png'
        }
    }})
}
//End 57

 if (msg === prefix + 'IV GROUDON 2265') {
    message.channel.send('Checking Groudon With CP 2265 :mag_right:'),
    message.channel.send({embed:{
        title: "```Rain Boss Groudon level 20, CP 2265 [76-80%] (No Weather Bonus)```",
        description: "***Move + Database From Battle***",
        color:0xFF0000,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=80%  Atk: 10  Def: 14  Stm: 12 (Level 20) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=78%  Atk: 10  Def: 10  Stm: 15 (Level 20) ",
                inline: true
            },
            {
                name:"Found 3:",
                value:":point_right: IV=78%  Atk: 11  Def: 12  Stm: 12 (Level 20) ",
                inline: true
            },
            {
                name:"Found 4:",
                value:":point_right: IV=78%  Atk: 12  Def: 13  Stm: 10 (Level 20) ",
                inline: true
            },
            {
                name:"Found 5:",
                value:":point_right: IV=76%  Atk: 13  Def: 11  Stm: 10 (Level 20) ",
                inline: true
            },        
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'https://cdn.bulbagarden.net/upload/thumb/7/70/383Groudon.png/250px-383Groudon.png'
        }
    }})
}
//End 58

 if (msg === prefix + 'IV GROUDON 2264') {
    message.channel.send('Checking Groudon With CP 2265 :mag_right:'),
    message.channel.send({embed:{
        title: "```Rain Boss Groudon level 20, CP 2265 [76-80%] (No Weather Bonus)```",
        description: "***Move + Database From Battle***",
        color:0xFF0000,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=80%  Atk: 10  Def: 15  Stm: 11 (Level 20) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=78%  Atk: 10  Def: 11  Stm: 14 (Level 20) ",
                inline: true
            },
            {
                name:"Found 3:",
                value:":point_right: IV=76%  Atk: 12  Def: 10  Stm: 12 (Level 20) ",
                inline: true
            },        
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'https://cdn.bulbagarden.net/upload/thumb/7/70/383Groudon.png/250px-383Groudon.png'
        }
    }})
}
//End 59

 if (msg === prefix + 'IV GROUDON 2263') {
    message.channel.send('Checking Groudon With CP 2263 :mag_right:'),
    message.channel.send({embed:{
        title: "```Rain Boss Groudon level 20, CP 2263 [76-78%] (No Weather Bonus)```",
        description: "***Move + Database From Battle***",
        color:0xFF0000,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=78%  Atk: 11  Def: 13  Stm: 11 (Level 20) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=76%  Atk: 12  Def: 11  Stm: 11 (Level 20) ",
                inline: true
            },        
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'https://cdn.bulbagarden.net/upload/thumb/7/70/383Groudon.png/250px-383Groudon.png'
        }
    }})
}
//End 60

 if (msg === prefix + 'IV GROUDON 2262') {
    message.channel.send('Checking Groudon With CP 2262 :mag_right:'),
    message.channel.send({embed:{
        title: "```Rain Boss Groudon level 20, CP 2262 [76-78%] (No Weather Bonus)```",
        description: "***Move + Database From Battle***",
        color:0xFF0000,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=78%  Atk: 10  Def: 12  Stm: 13 (Level 20) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=78%  Atk: 11  Def: 14  Stm: 10 (Level 20) ",
                inline: true
            },
            {
                name:"Found 3:",
                value:":point_right: IV=76%  Atk: 11  Def: 10  Stm: 13 (Level 20) ",
                inline: true
            },        
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'https://cdn.bulbagarden.net/upload/thumb/7/70/383Groudon.png/250px-383Groudon.png'
        }
    }})
}
//End 61

 if (msg === prefix + 'IV GROUDON 2261') {
    message.channel.send('Checking Groudon With CP 2261 :mag_right:'),
    message.channel.send({embed:{
        title: "```Rain Boss Groudon level 20, CP 2261 [76-78%] (No Weather Bonus)```",
        description: "***Move + Database From Battle***",
        color:0xFF0000,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=78%  Atk: 10  Def: 13  Stm: 12 (Level 20) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=76%  Atk: 12  Def: 12  Stm: 10 (Level 20) ",
                inline: true
            },        
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'https://cdn.bulbagarden.net/upload/thumb/7/70/383Groudon.png/250px-383Groudon.png'
        }
    }})
}
//End 62

 if (msg === prefix + 'IV GROUDON 2260') {
    message.channel.send('Checking Groudon With CP 2260 :mag_right:'),
    message.channel.send({embed:{
        title: "```Rain Boss Groudon level 20, CP 2260 [73-76%] (No Weather Bonus)```",
        description: "***Move + Database From Battle***",
        color:0xFF0000,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=76%  Atk: 10  Def: 10  Stm: 14 (Level 20) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=76%  Atk: 11  Def: 11  Stm: 12 (Level 20) ",
                inline: true
            },
            {
                name:"Found 3:",
                value:":point_right: IV=73%  Atk: 13  Def: 10  Stm: 10 (Level 20) ",
                inline: true
            },        
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'https://cdn.bulbagarden.net/upload/thumb/7/70/383Groudon.png/250px-383Groudon.png'
        }
    }})
}
//End 63

 if (msg === prefix + 'IV GROUDON 2259') {
    message.channel.send('Checking Groudon With CP 2259 :mag_right:'),
    message.channel.send({embed:{
        title: "```Rain Boss Groudon level 20, CP 2259 [76-78%] (No Weather Bonus)```",
        description: "***Move + Database From Battle***",
        color:0xFF0000,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=78%  Atk: 10  Def: 14  Stm: 11 (Level 20) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=76%  Atk: 11  Def: 12  Stm: 12 (Level 20) ",
                inline: true
            },        
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'https://cdn.bulbagarden.net/upload/thumb/7/70/383Groudon.png/250px-383Groudon.png'
        }
    }})
}
//End 64

 if (msg === prefix + 'IV GROUDON 2258') {
    message.channel.send('Checking Groudon With CP 2258 :mag_right:'),
    message.channel.send({embed:{
        title: "```Rain Boss Groudon level 20, CP 2258 [73-78%] (No Weather Bonus)```",
        description: "***Move + Database From Battle***",
        color:0xFF0000,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=78%  Atk: 10  Def: 15  Stm: 10 (Level 20) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=76%  Atk: 11  Def: 10  Stm: 13 (Level 20) ",
                inline: true
            },
            {
                name:"Found 3:",
                value:":point_right: IV=73%  Atk: 12  Def: 10  Stm: 11 (Level 20) ",
                inline: true
            },        
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'https://cdn.bulbagarden.net/upload/thumb/7/70/383Groudon.png/250px-383Groudon.png'
        }
    }})
}
//End 65

 if (msg === prefix + 'IV GROUDON 2257') {
    message.channel.send('Checking Groudon With CP 2257 :mag_right:'),
    message.channel.send({embed:{
        title: "```Rain Boss Groudon level 20, CP 2257 [73-76%] (No Weather Bonus)```",
        description: "***Move + Database From Battle***",
        color:0xFF0000,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=76%  Atk: 10  Def: 12  Stm: 12 (Level 20) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=76%  Atk: 11  Def: 13  Stm: 10 (Level 20) ",
                inline: true
            },
            {
                name:"Found 3:",
                value:":point_right: IV=73%  Atk: 12  Def: 11  Stm: 10 (Level 20) ",
                inline: true
            },        
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'https://cdn.bulbagarden.net/upload/thumb/7/70/383Groudon.png/250px-383Groudon.png'
        }
    }})
}
//End 66

 if (msg === prefix + 'IV GROUDON 2256') {
    message.channel.send('Checking Groudon With CP 2256 :mag_right:'),
    message.channel.send({embed:{
        title: "```Rain Boss Groudon level 20, CP 2256 [73%] (No Weather Bonus)```",
        description: "***Move + Database From Battle***",
        color:0xFF0000,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=73%  Atk: 11  Def: 10  Stm: 12 (Level 20) ",
                inline: true
            },        
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'https://cdn.bulbagarden.net/upload/thumb/7/70/383Groudon.png/250px-383Groudon.png'
        }
    }})
}
//End 67

 if (msg === prefix + 'IV GROUDON 2255') {
    message.channel.send('Checking Groudon With CP 2255 :mag_right:'),
    message.channel.send({embed:{
        title: "```Rain Boss Groudon level 20, CP 2255 [73-76%] (No Weather Bonus)```",
        description: "***Move + Database From Battle***",
        color:0xFF0000,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=76%  Atk: 10  Def: 13  Stm: 11 (Level 20) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=73%  Atk: 11  Def: 11  Stm: 11 (Level 20) ",
                inline: true
            },        
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'https://cdn.bulbagarden.net/upload/thumb/7/70/383Groudon.png/250px-383Groudon.png'
        }
    }})
}
//End 68

 if (msg === prefix + 'IV GROUDON 2254') {
    message.channel.send('Checking Groudon With CP 2254 :mag_right:'),
    message.channel.send({embed:{
        title: "```Rain Boss Groudon level 20, CP 2254 [73-76%] (No Weather Bonus)```",
        description: "***Move + Database From Battle***",
        color:0xFF0000,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=76%  Atk: 10  Def: 14  Stm: 10 (Level 20) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=73%  Atk: 10  Def: 10  Stm: 13 (Level 20) ",
                inline: true
            },        
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'https://cdn.bulbagarden.net/upload/thumb/7/70/383Groudon.png/250px-383Groudon.png'
        }
    }})
}
//End 69

 if (msg === prefix + 'IV GROUDON 2253') {
    message.channel.send('Checking Groudon With CP 2253 :mag_right:'),
    message.channel.send({embed:{
        title: "```Rain Boss Groudon level 20, CP 2253 [73%] (No Weather Bonus)```",
        description: "***Move + Database From Battle***",
        color:0xFF0000,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=73%  Atk: 11  Def: 12  Stm: 10 (Level 20) ",
                inline: true
            },        
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'https://cdn.bulbagarden.net/upload/thumb/7/70/383Groudon.png/250px-383Groudon.png'
        }
    }})
}
//End 70

 if (msg === prefix + 'IV GROUDON 2252') {
    message.channel.send('Checking Groudon With CP 2252 :mag_right:'),
    message.channel.send({embed:{
        title: "```Rain Boss Groudon level 20, CP 2252 [71-73%] (No Weather Bonus)```",
        description: "***Move + Database From Battle***",
        color:0xFF0000,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=73%  Atk: 10  Def: 11  Stm: 12 (Level 20) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=71%  Atk: 12  Def: 10  Stm: 10 (Level 20) ",
                inline: true
            },        
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'https://cdn.bulbagarden.net/upload/thumb/7/70/383Groudon.png/250px-383Groudon.png'
        }
    }})
}
//End 71

 if (msg === prefix + 'IV GROUDON 2251') {
    message.channel.send('Checking Groudon With CP 2251 :mag_right:'),
    message.channel.send({embed:{
        title: "```Rain Boss Groudon level 20, CP 2251 [73%] (No Weather Bonus)```",
        description: "***Move + Database From Battle***",
        color:0xFF0000,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=73%  Atk: 10  Def: 12  Stm: 11 (Level 20) ",
                inline: true
            },        
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'https://cdn.bulbagarden.net/upload/thumb/7/70/383Groudon.png/250px-383Groudon.png'
        }
    }})
}
//End 72

 if (msg === prefix + 'IV GROUDON 2250') {
    message.channel.send('Checking Groudon With CP 2250 :mag_right:'),
    message.channel.send({embed:{
        title: "```Rain Boss Groudon level 20, CP 2250 [71%] (No Weather Bonus)```",
        description: "***Move + Database From Battle***",
        color:0xFF0000,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=71%  Atk: 11  Def: 10  Stm: 11 (Level 20) ",
                inline: true
            },        
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'https://cdn.bulbagarden.net/upload/thumb/7/70/383Groudon.png/250px-383Groudon.png'
        }
    }})
}
//End 73

 if (msg === prefix + 'IV GROUDON 2249') {
    message.channel.send('Checking Groudon With CP 2249 :mag_right:'),
    message.channel.send({embed:{
        title: "```Rain Boss Groudon level 20, CP 2249 [71-73%] (No Weather Bonus)```",
        description: "***Move + Database From Battle***",
        color:0xFF0000,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=73%  Atk: 10  Def: 13  Stm: 10 (Level 20) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=71%  Atk: 11  Def: 11  Stm: 10 (Level 20) ",
                inline: true
            },        
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'https://cdn.bulbagarden.net/upload/thumb/7/70/383Groudon.png/250px-383Groudon.png'
        }
    }})
}
//End 74

 if (msg === prefix + 'IV GROUDON 2248') {
    message.channel.send('Checking Groudon With CP 2248 :mag_right:'),
    message.channel.send({embed:{
        title: "```Rain Boss Groudon level 20, CP 2248 [71%] (No Weather Bonus)```",
        description: "***Move + Database From Battle***",
        color:0xFF0000,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=71%  Atk: 10  Def: 10  Stm: 12 (Level 20) ",
                inline: true
            },        
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'https://cdn.bulbagarden.net/upload/thumb/7/70/383Groudon.png/250px-383Groudon.png'
        }
    }})
}
//End 75

 if (msg === prefix + 'IV GROUDON 2247') {
    message.channel.send('Checking Groudon With CP 2247 :mag_right:'),
    message.channel.send({embed:{
        title: "```Rain Boss Groudon level 20, CP 2247 [71%] (No Weather Bonus)```",
        description: "***Move + Database From Battle***",
        color:0xFF0000,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=71%  Atk: 10  Def: 11  Stm: 11 (Level 20) ",
                inline: true
            },        
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'https://cdn.bulbagarden.net/upload/thumb/7/70/383Groudon.png/250px-383Groudon.png'
        }
    }})
}
//End 76

 if (msg === prefix + 'IV GROUDON 2245') {
    message.channel.send('Checking Groudon With CP 2245 :mag_right:'),
    message.channel.send({embed:{
        title: "```Rain Boss Groudon level 20, CP 2245 [71%] (No Weather Bonus)```",
        description: "***Move + Database From Battle***",
        color:0xFF0000,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=71%  Atk: 10  Def: 12  Stm: 10 (Level 20) ",
                inline: true
            },        
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'https://cdn.bulbagarden.net/upload/thumb/7/70/383Groudon.png/250px-383Groudon.png'
        }
    }})
}
//End 77

 if (msg === prefix + 'IV GROUDON 2244') {
    message.channel.send('Checking Groudon With CP 2244 :mag_right:'),
    message.channel.send({embed:{
        title: "```Rain Boss Groudon level 20, CP 2244 [69%] (No Weather Bonus)```",
        description: "***Move + Database From Battle***",
        color:0xFF0000,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=69%  Atk: 11  Def: 10  Stm: 10 (Level 20) ",
                inline: true
            },        
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'https://cdn.bulbagarden.net/upload/thumb/7/70/383Groudon.png/250px-383Groudon.png'
        }
    }})
}
//End 78

 if (msg === prefix + 'IV GROUDON 2242') {
    message.channel.send('Checking Groudon With CP 2242 :mag_right:'),
    message.channel.send({embed:{
        title: "```Rain Boss Groudon level 20, CP 2242 [69%] (No Weather Bonus)```",
        description: "***Move + Database From Battle***",
        color:0xFF0000,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=69%  Atk: 10  Def: 10  Stm: 11 (Level 20) ",
                inline: true
            },        
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'https://cdn.bulbagarden.net/upload/thumb/7/70/383Groudon.png/250px-383Groudon.png'
        }
    }})
}
//End 79

 if (msg === prefix + 'IV GROUDON 2241') {
    message.channel.send('Checking Groudon With CP 2241 :mag_right:'),
    message.channel.send({embed:{
        title: "```Rain Boss Groudon level 20, CP 2241 [69%] (No Weather Bonus)```",
        description: "***Move + Database From Battle***",
        color:0xFF0000,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=69%  Atk: 10  Def: 11  Stm: 10 (Level 20) ",
                inline: true
            },        
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'https://cdn.bulbagarden.net/upload/thumb/7/70/383Groudon.png/250px-383Groudon.png'
        }
    }})
}
//End 80

 if (msg === prefix + 'IV GROUDON 2236') {
    message.channel.send('Checking Groudon With CP 2236 :mag_right:'),
    message.channel.send({embed:{
        title: "```Rain Boss Groudon level 20, CP 2236 [67%] (No Weather Bonus)```",
        description: "***Move + Database From Battle***",
        color:0xFF0000,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:"Dragon Tail / Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=67%  Atk: 10  Def: 10  Stm: 10 (Level 20) ",
                inline: true
            },        
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'https://cdn.bulbagarden.net/upload/thumb/7/70/383Groudon.png/250px-383Groudon.png'
        }
    }})
}
//Mew boosted
 if (msg === prefix + 'IV MEW 2207') {
    message.channel.send({embed:{
        title: "***Raid Boss Mew level 25, CP 2207 [100%] ( Weather Bonus )***",
        description: "***Move + Database From Battle***",
        color:0x17A589,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:" Pound/Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:" Pound/Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=100%  Atk:15   Def:15   Stm:15   Hp:143  (Level 25) ",
                inline: true
            },
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team :heavy_check_mark: ',
            icon_url:'http://play.pokemonshowdown.com/sprites/xyani/mew.gif'
        }

    }})
}
//(1)END
 if (msg === prefix + 'IV MEW 2202') {
    message.channel.send({embed:{
        title: "***Raid Boss Mew level 25, CP 2202 [98%] ( Weather Bonus )***",
        description: "***Move + Database From Battle***",
        color:0x17A589,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:" Pound/Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:" Pound/Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=98%  Atk:15   Def:14   Stm:15   Hp:143  (Level 25) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=98%  Atk:15   Def:15   Stm:14   Hp:142  (Level 25) ",
                inline: true
            },  
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'http://play.pokemonshowdown.com/sprites/xyani/mew.gif'
        }

    }})
}
//(2)END
 if (msg === prefix + 'IV MEW 2197') {
    message.channel.send({embed:{
        title: "***Raid Boss Mew level 25, CP 2197 [96-98%] ( Weather Bonus )***",
        description: "***Move + Database From Battle***",
        color:0x17A589,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:" Pound/Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:" Pound/Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=98%  Atk:14   Def:15   Stm:15   Hp:143  (Level 25) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=96%  Atk:15   Def:13   Stm:15   Hp:143  (Level 25) ",
                inline: true
            },
            {
                name:"Found 3:",
                value:":point_right: IV=96%  Atk:15   Def:14   Stm:14   Hp:142  (Level 25) ",
                inline: true
            },
            {
                name:"Found 4:",
                value:":point_right: IV=96%  Atk:15   Def:15   Stm:13   Hp:142  (Level 25) ",
                inline: true
            },    
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'http://play.pokemonshowdown.com/sprites/xyani/mew.gif'
        }

    }})
}
//(3)END
 if (msg === prefix + 'IV MEW 2193') {
    message.channel.send({embed:{
        title: "***Raid Boss Mew level 25, CP 2193 [96%] ( Weather Bonus )***",
        description: "***Move + Database From Battle***",
        color:0x17A589,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:" Pound/Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:" Pound/Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=96%  Atk:14   Def:14   Stm:15   Hp:143  (Level 25) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=96%  Atk:15   Def:12   Stm:15   Hp:143  (Level 25) ",
                inline: true
            },    
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'http://play.pokemonshowdown.com/sprites/xyani/mew.gif'
        }

    }})
}
//(4)END
 if (msg === prefix + 'IV MEW 2192') {
    message.channel.send({embed:{
        title: "***Raid Boss Mew level 25, CP 2192 [93-96%] ( Weather Bonus )***",
        description: "***Move + Database From Battle***",
        color:0x17A589,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:" Pound/Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:" Pound/Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=96%  Atk:14   Def:15   Stm:14   Hp:142  (Level 25) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=93%  Atk:15   Def:13   Stm:14   Hp:142  (Level 25) ",
                inline: true
            },
            {
                name:"Found 3:",
                value:":point_right: IV=93%  Atk:15   Def:14   Stm:13   Hp:142  (Level 25) ",
                inline: true
            },
            {
                name:"Found 4:",
                value:":point_right: IV=93%  Atk:15   Def:15   Stm:12   Hp:141  (Level 25) ",
                inline: true
            },    
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'http://play.pokemonshowdown.com/sprites/xyani/mew.gif'
        }

    }})
}
//(5)END
 if (msg === prefix + 'IV MEW 2188') {
    message.channel.send({embed:{
        title: "***Raid Boss Mew level 25, CP 2188 [91-96%] ( Weather Bonus )***",
        description: "***Move + Database From Battle***",
        color:0x17A589,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:" Pound/Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:" Pound/Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=96%  Atk:13   Def:15   Stm:15   Hp:143  (Level 25) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=93%  Atk:14   Def:13   Stm:15   Hp:143  (Level 25) ",
                inline: true
            },
            {
                name:"Found 3:",
                value:":point_right: IV=93%  Atk:15   Def:11   Stm:15   Hp:143  (Level 25) ",
                inline: true
            },    
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'http://play.pokemonshowdown.com/sprites/xyani/mew.gif'
        }

    }})
}
//(6)END
 if (msg === prefix + 'IV MEW 2187') {
    message.channel.send({embed:{
        title: "***Raid Boss Mew level 25, CP 2187 [91-93%] ( Weather Bonus )***",
        description: "***Move + Database From Battle***",
        color:0x17A589,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:" Pound/Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:" Pound/Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=93%  Atk:14   Def:14   Stm:14   Hp:142  (Level 25) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=93%  Atk:14   Def:15   Stm:13   Hp:142  (Level 25) ",
                inline: true
            },
            {
                name:"Found 3:",
                value:":point_right: IV=91%  Atk:15   Def:12   Stm:14   Hp:142  (Level 25) ",
                inline: true
            },
            {
                name:"Found 4:",
                value:":point_right: IV=91%  Atk:15   Def:13   Stm:13   Hp:142  (Level 25) ",
                inline: true
            },
            {
                name:"Found 5:",
                value:":point_right: IV=91%  Atk:15   Def:14   Stm:12   Hp:141  (Level 25) ",
                inline: true
            },
            {
                name:"Found 6:",
                value:":point_right: IV=91%  Atk:15   Def:15   Stm:11   Hp:140  (Level 25) ",
                inline: true
            },    
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'http://play.pokemonshowdown.com/sprites/xyani/mew.gif'
        }

    }})
}
//(7)END
 if (msg === prefix + 'IV MEW 2183') {
    message.channel.send({embed:{
        title: "***Raid Boss Mew level 25, CP 2183 [89-93%] ( Weather Bonus )***",
        description: "***Move + Database From Battle***",
        color:0x17A589,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:" Pound/Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:" Pound/Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=93%  Atk:13   Def:14   Stm:15   Hp:143  (Level 25) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=93%  Atk:13   Def:15   Stm:14   Hp:142  (Level 25) ",
                inline: true
            },
            {
                name:"Found 3:",
                value:":point_right: IV=91%  Atk:14   Def:12   Stm:15   Hp:143  (Level 25) ",
                inline: true
            },
            {
                name:"Found 4:",
                value:":point_right: IV=91%  Atk:14   Def:13   Stm:14   Hp:142  (Level 25) ",
                inline: true
            },
            {
                name:"Found 5:",
                value:":point_right: IV=89%  Atk:15   Def:10   Stm:15   Hp:143  (Level 25) ",
                inline: true
            },   
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'http://play.pokemonshowdown.com/sprites/xyani/mew.gif'
        }

    }})
}
//(8)END
 if (msg === prefix + 'IV MEW 2182') {
    message.channel.send({embed:{
        title: "***Raid Boss Mew level 25, CP 2182 [89-91%] ( Weather Bonus )***",
        description: "***Move + Database From Battle***",
        color:0x17A589,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:" Pound/Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:" Pound/Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=91%  Atk:14   Def:14   Stm:13   Hp:142  (Level 25) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=91%  Atk:14   Def:15   Stm:12   Hp:141  (Level 25) ",
                inline: true
            },
            {
                name:"Found 3:",
                value:":point_right: IV=89%  Atk:15   Def:11   Stm:14   Hp:142  (Level 25) ",
                inline: true
            },
            {
                name:"Found 4:",
                value:":point_right: IV=89%  Atk:15   Def:12   Stm:13   Hp:142  (Level 25) ",
                inline: true
            },
            {
                name:"Found 5:",
                value:":point_right: IV=89%  Atk:15   Def:13   Stm:12   Hp:141  (Level 25) ",
                inline: true
            },
            {
                name:"Found 6:",
                value:":point_right: IV=89%  Atk:15   Def:14   Stm:11   Hp:140  (Level 25) ",
                inline: true
            },     
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'http://play.pokemonshowdown.com/sprites/xyani/mew.gif'
        }

    }})
}
//(9)END
 if (msg === prefix + 'IV MEW 2181') {
    message.channel.send({embed:{
        title: "***Raid Boss Mew level 25, CP 2181 [89%] ( Weather Bonus )***",
        description: "***Move + Database From Battle***",
        color:0x17A589,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:" Pound/Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:" Pound/Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=89%  Atk:15   Def:15   Stm:10   Hp:140  (Level 25) ",
                inline: true
            },    
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'http://play.pokemonshowdown.com/sprites/xyani/mew.gif'
        }

    }})
}
//(10)END
 if (msg === prefix + 'IV MEW 2178') {
    message.channel.send({embed:{
        title: "***Raid Boss Mew level 25, CP 2178 [87-93%] ( Weather Bonus )***",
        description: "***Move + Database From Battle***",
        color:0x17A589,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:" Pound/Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:" Pound/Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=93%  Atk:12   Def:15   Stm:15   Hp:143  (Level 25) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=91%  Atk:13   Def:13   Stm:15   Hp:143  (Level 25) ",
                inline: true
            },
            {
                name:"Found 3:",
                value:":point_right: IV=91%  Atk:13   Def:14   Stm:14   Hp:142  (Level 25) ",
                inline: true
            },
            {
                name:"Found 4:",
                value:":point_right: IV=89%  Atk:14   Def:11   Stm:15   Hp:143  (Level 25) ",
                inline: true
            },
            {
                name:"Found 5:",
                value:":point_right: IV=89%  Atk:14   Def:12   Stm:14   Hp:142  (Level 25) ",
                inline: true
            },
            {
                name:"Found 6:",
                value:":point_right: IV=87%  Atk:15   Def:10   Stm:14   Hp:142  (Level 25) ",
                inline: true
            },     
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'http://play.pokemonshowdown.com/sprites/xyani/mew.gif'
        }

    }})
}
//(11)END
 if (msg === prefix + 'IV MEW 2177') {
    message.channel.send({embed:{
        title: "***Raid Boss Mew level 25, CP 2177 [87-91%] ( Weather Bonus )***",
        description: "***Move + Database From Battle***",
        color:0x17A589,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:" Pound/Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:" Pound/Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=91%  Atk:13   Def:15   Stm:13   Hp:142  (Level 25) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=89%  Atk:14   Def:13   Stm:13   Hp:142  (Level 25) ",
                inline: true
            },
            {
                name:"Found 3:",
                value:":point_right: IV=89%  Atk:14   Def:14   Stm:12   Hp:141  (Level 25) ",
                inline: true
            },
            {
                name:"Found 4:",
                value:":point_right: IV=89%  Atk:14   Def:15   Stm:11   Hp:140  (Level 25) ",
                inline: true
            },
            {
                name:"Found 5:",
                value:":point_right: IV=87%  Atk:15   Def:11   Stm:13   Hp:142  (Level 25) ",
                inline: true
            },
            {
                name:"Found 6:",
                value:":point_right: IV=87%  Atk:15   Def:12   Stm:12   Hp:141  (Level 25) ",
                inline: true
            },
            {
                name:"Found 7:",
                value:":point_right: IV=87%  Atk:15   Def:13   Stm:11   Hp:140  (Level 25) ",
                inline: true
            },
            {
                name:"Found 8:",
                value:":point_right: IV=87%  Atk:15   Def:14   Stm:10   Hp:140  (Level 25) ",
                inline: true
            },     
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'http://play.pokemonshowdown.com/sprites/xyani/mew.gif'
        }

    }})
}
//(12)END
 if (msg === prefix + 'IV MEW 2173') {
    message.channel.send({embed:{
        title: "***Raid Boss Mew level 25, CP 2173 [87-91%] ( Weather Bonus )***",
        description: "***Move + Database From Battle***",
        color:0x17A589,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:" Pound/Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:" Pound/Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=91%  Atk:12   Def:14   Stm:15   Hp:143  (Level 25) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=91%  Atk:12   Def:15   Stm:14   Hp:142  (Level 25) ",
                inline: true
            },
            {
                name:"Found 3:",
                value:":point_right: IV=89%  Atk:13   Def:12   Stm:15   Hp:143  (Level 25) ",
                inline: true
            },
            {
                name:"Found 4:",
                value:":point_right: IV=89%  Atk:13   Def:13   Stm:14   Hp:142  (Level 25) ",
                inline: true
            },
            {
                name:"Found 5:",
                value:":point_right: IV=89%  Atk:13   Def:14   Stm:13   Hp:142  (Level 25) ",
                inline: true
            },
            {
                name:"Found 6:",
                value:":point_right: IV=87%  Atk:14   Def:10   Stm:15   Hp:143  (Level 25) ",
                inline: true
            },
            {
                name:"Found 7:",
                value:":point_right: IV=87%  Atk:14   Def:11   Stm:14   Hp:142  (Level 25) ",
                inline: true
            },
            {
                name:"Found 8:",
                value:":point_right: IV=87%  Atk:14   Def:12   Stm:13   Hp:142  (Level 25) ",
                inline: true
            },     
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'http://play.pokemonshowdown.com/sprites/xyani/mew.gif'
        }

    }})
}
//(13)END
 if (msg === prefix + 'IV MEW 2172') {
    message.channel.send({embed:{
        title: "***Raid Boss Mew level 25, CP 2172 [84-89%] ( Weather Bonus )***",
        description: "***Move + Database From Battle***",
        color:0x17A589,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:" Pound/Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:" Pound/Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=89%  Atk:13   Def:15   Stm:12   Hp:141  (Level 25) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=87%  Atk:14   Def:13   Stm:12   Hp:141  (Level 25) ",
                inline: true
            },
            {
                name:"Found 3:",
                value:":point_right: IV=87%  Atk:14   Def:14   Stm:11   Hp:140  (Level 25) ",
                inline: true
            },
            {
                name:"Found 4:",
                value:":point_right: IV=87%  Atk:14   Def:15   Stm:10   Hp:140  (Level 25) ",
                inline: true
            },
            {
                name:"Found 5:",
                value:":point_right: IV=84%  Atk:15   Def:10   Stm:13   Hp:142  (Level 25) ",
                inline: true
            },
            {
                name:"Found 6:",
                value:":point_right: IV=84%  Atk:15   Def:11   Stm:12   Hp:141  (Level 25) ",
                inline: true
            },
            {
                name:"Found 7:",
                value:":point_right: IV=84%  Atk:15   Def:12   Stm:11   Hp:140  (Level 25) ",
                inline: true
            },
            {
                name:"Found 8:",
                value:":point_right: IV=84%  Atk:15   Def:13   Stm:10   Hp:140  (Level 25) ",
                inline: true
            },     
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'http://play.pokemonshowdown.com/sprites/xyani/mew.gif'
        }

    }})
}
//(14)END
 if (msg === prefix + 'IV MEW 2168') {
    message.channel.send({embed:{
        title: "***Raid Boss Mew level 25, CP 2168 [84-91%] ( Weather Bonus )***",
        description: "***Move + Database From Battle***",
        color:0x17A589,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:" Pound/Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:" Pound/Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=91%  Atk:11   Def:15   Stm:1   Hp:143  (Level 25) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=89%  Atk:12   Def:13   Stm:15   Hp:143  (Level 25) ",
                inline: true
            },
            {
                name:"Found 3:",
                value:":point_right: IV=89%  Atk:12   Def:14   Stm:14   Hp:142  (Level 25) ",
                inline: true
            },
            {
                name:"Found 4:",
                value:":point_right: IV=89%  Atk:12   Def:15   Stm:13   Hp:142  (Level 25) ",
                inline: true
            },
            {
                name:"Found 5:",
                value:":point_right: IV=87%  Atk:13   Def:11   Stm:15   Hp:143  (Level 25) ",
                inline: true
            },
            {
                name:"Found 6:",
                value:":point_right: IV=87%  Atk:13   Def:12   Stm:14   Hp:142  (Level 25) ",
                inline: true
            },
            {
                name:"Found 7:",
                value:":point_right: IV=87%  Atk:13   Def:13   Stm:13   Hp:142  (Level 25) ",
                inline: true
            },
            {
                name:"Found 8:",
                value:":point_right: IV=87%  Atk:13   Def:14   Stm:12   Hp:141  (Level 25) ",
                inline: true
            },
            {
                name:"Found 9:",
                value:":point_right: IV=84%  Atk:14   Def:10   Stm:14   Hp:142  (Level 25) ",
                inline: true
            },
            {
                name:"Found 10:",
                value:":point_right: IV=84%  Atk:14   Def:11   Stm:13   Hp:142  (Level 25) ",
                inline: true
            },
            {
                name:"Found 11:",
                value:":point_right: IV=84%  Atk:14   Def:12   Stm:12   Hp:141  (Level 25) ",
                inline: true
            },     
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'http://play.pokemonshowdown.com/sprites/xyani/mew.gif'
        }

    }})
}
//(15)END
 if (msg === prefix + 'IV MEW 2167') {
    message.channel.send({embed:{
        title: "***Raid Boss Mew level 25, CP 2167 [82-87%] ( Weather Bonus )***",
        description: "***Move + Database From Battle***",
        color:0x17A589,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:" Pound/Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:" Pound/Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=87%  Atk:13   Def:15   Stm:11   Hp:140  (Level 25) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=84%  Atk:14   Def:13   Stm:11   Hp:140  (Level 25) ",
                inline: true
            },
            {
                name:"Found 3:",
                value:":point_right: IV=84%  Atk:14   Def:14   Stm:10   Hp:140  (Level 25) ",
                inline: true
            },
            {
                name:"Found 4:",
                value:":point_right: IV=82%  Atk:15   Def:10   Stm:12   Hp:141  (Level 25) ",
                inline: true
            },
            {
                name:"Found 5:",
                value:":point_right: IV=82%  Atk:15   Def:11   Stm:11   Hp:140  (Level 25) ",
                inline: true
            },
            {
                name:"Found 6:",
                value:":point_right: IV=82%  Atk:15   Def:12   Stm:10   Hp:140  (Level 25) ",
                inline: true
            },     
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'http://play.pokemonshowdown.com/sprites/xyani/mew.gif'
        }

    }})
}
//(16)END
 if (msg === prefix + 'IV MEW 2163') {
    message.channel.send({embed:{
        title: "***Raid Boss Mew level 25, CP 2163 [82-89%] ( Weather Bonus )***",
        description: "***Move + Database From Battle***",
        color:0x17A589,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:" Pound/Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:" Pound/Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=89%  Atk:11   Def:14   Stm:15   Hp:143  (Level 25) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=89%  Atk:11   Def:15   Stm:14   Hp:142  (Level 25) ",
                inline: true
            },
            {
                name:"Found 3:",
                value:":point_right: IV=87%  Atk:12   Def:12   Stm:15   Hp:143  (Level 25) ",
                inline: true
            },
            {
                name:"Found 4:",
                value:":point_right: IV=87%  Atk:12   Def:13   Stm:14   Hp:142  (Level 25) ",
                inline: true
            },
            {
                name:"Found 5:",
                value:":point_right: IV=87%  Atk:12   Def:14   Stm:13   Hp:142  (Level 25) ",
                inline: true
            },
            {
                name:"Found 6:",
                value:":point_right: IV=87%  Atk:12   Def:15   Stm:12   Hp:141  (Level 25) ",
                inline: true
            },
            {
                name:"Found 7:",
                value:":point_right: IV=84%  Atk:13   Def:10   Stm:15   Hp:143  (Level 25) ",
                inline: true
            },
            {
                name:"Found 8:",
                value:":point_right: IV=84%  Atk:13   Def:11   Stm:14   Hp:142  (Level 25) ",
                inline: true
            },
            {
                name:"Found 9:",
                value:":point_right: IV=84%  Atk:13   Def:12   Stm:13   Hp:142  (Level 25) ",
                inline: true
            },
            {
                name:"Found 10:",
                value:":point_right: IV=84%  Atk:13   Def:13   Stm:12   Hp:141  (Level 25) ",
                inline: true
            },
            {
                name:"Found 11:",
                value:":point_right: IV=82%  Atk:14   Def:10   Stm:13   Hp:142  (Level 25) ",
                inline: true
            },
            {
                name:"Found 12:",
                value:":point_right: IV=82%  Atk:14   Def:11   Stm:12   Hp:141  (Level 25) ",
                inline: true
            },     
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'http://play.pokemonshowdown.com/sprites/xyani/mew.gif'
        }

    }})
}
//(17)END
 if (msg === prefix + 'IV MEW 2162') {
    message.channel.send({embed:{
        title: "***Raid Boss Mew level 25, CP 2162 [80-84%] ( Weather Bonus )***",
        description: "***Move + Database From Battle***",
        color:0x17A589,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:" Pound/Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:" Pound/Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=84%  Atk:13   Def:14   Stm:11   Hp:140  (Level 25) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=84%  Atk:13   Def:15   Stm:10   Hp:140  (Level 25) ",
                inline: true
            },
            {
                name:"Found 3:",
                value:":point_right: IV=82%  Atk:14   Def:12   Stm:11   Hp:140  (Level 25) ",
                inline: true
            },
            {
                name:"Found 4:",
                value:":point_right: IV=82%  Atk:14   Def:13   Stm:10   Hp:140  (Level 25) ",
                inline: true
            },
            {
                name:"Found 5:",
                value:":point_right: IV=80%  Atk:15   Def:10   Stm:11   Hp:140  (Level 25) ",
                inline: true
            },
            {
                name:"Found 6:",
                value:":point_right: IV=80%  Atk:15   Def:11   Stm:10   Hp:140  (Level 25) ",
                inline: true
            },    
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'http://play.pokemonshowdown.com/sprites/xyani/mew.gif'
        }

    }})
}
//(18)END
 if (msg === prefix + 'IV MEW 2158') {
    message.channel.send({embed:{
        title: "***Raid Boss Mew level 25, CP 2158 [80-89%] ( Weather Bonus )***",
        description: "***Move + Database From Battle***",
        color:0x17A589,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:" Pound/Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:" Pound/Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=89%  Atk:10   Def:15   Stm:15   Hp:143  (Level 25) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=87%  Atk:11   Def:13   Stm:15   Hp:143  (Level 25) ",
                inline: true
            },
            {
                name:"Found 3:",
                value:":point_right: IV=87%  Atk:11   Def:14   Stm:14   Hp:142  (Level 25) ",
                inline: true
            },
            {
                name:"Found 4:",
                value:":point_right: IV=87%  Atk:11   Def:15   Stm:13   Hp:142  (Level 25) ",
                inline: true
            },
            {
                name:"Found 5:",
                value:":point_right: IV=84%  Atk:12   Def:11   Stm:15   Hp:143  (Level 25) ",
                inline: true
            },
            {
                name:"Found 6:",
                value:":point_right: IV=84%  Atk:12   Def:12   Stm:14   Hp:142  (Level 25) ",
                inline: true
            },
            {
                name:"Found 7:",
                value:":point_right: IV=84%  Atk:12   Def:13   Stm:13   Hp:142  (Level 25) ",
                inline: true
            },
            {
                name:"Found 8:",
                value:":point_right: IV=84%  Atk:12   Def:14   Stm:12   Hp:141  (Level 25) ",
                inline: true
            },
            {
                name:"Found 9:",
                value:":point_right: IV=84%  Atk:12   Def:15   Stm:11   Hp:140  (Level 25) ",
                inline: true
            },
            {
                name:"Found 10:",
                value:":point_right: IV=82%  Atk:13   Def:10   Stm:14   Hp:142  (Level 25) ",
                inline: true
            },
            {
                name:"Found 11:",
                value:":point_right: IV=82%  Atk:13   Def:11   Stm:13   Hp:142  (Level 25) ",
                inline: true
            },
            {
                name:"Found 12:",
                value:":point_right: IV=82%  Atk:13   Def:12   Stm:12   Hp:141  (Level 25) ",
                inline: true
            },
            {
                name:"Found 13:",
                value:":point_right: IV=82%  Atk:13   Def:13   Stm:11   Hp:140  (Level 25) ",
                inline: true
            },
            {
                name:"Found 14:",
                value:":point_right: IV=80%  Atk:14   Def:10   Stm:12   Hp:141  (Level 25) ",
                inline: true
            },
            {
                name:"Found 15:",
                value:":point_right: IV=80%  Atk:14   Def:11   Stm:11   Hp:140  (Level 25) ",
                inline: true
            },    
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'http://play.pokemonshowdown.com/sprites/xyani/mew.gif'
        }

    }})
}
//(19)END
 if (msg === prefix + 'IV MEW 2157') {
    message.channel.send({embed:{
        title: "***Raid Boss Mew level 25, CP 2157 [78-82%] ( Weather Bonus )***",
        description: "***Move + Database From Battle***",
        color:0x17A589,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:" Pound/Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:" Pound/Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=82%  Atk:13   Def:14   Stm:10   Hp:140  (Level 25) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=80%  Atk:14   Def:12   Stm:10   Hp:140  (Level 25) ",
                inline: true
            },
            {
                name:"Found 3:",
                value:":point_right: IV=78%  Atk:15   Def:10   Stm:10   Hp:140  (Level 25) ",
                inline: true
            },   
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'http://play.pokemonshowdown.com/sprites/xyani/mew.gif'
        }

    }})
}
//(20)END
 if (msg === prefix + 'IV MEW 2154') {
    message.channel.send({embed:{
        title: "***Raid Boss Mew level 25, CP 2154 [84%] ( Weather Bonus )***",
        description: "***Move + Database From Battle***",
        color:0x17A589,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:" Pound/Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:" Pound/Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=84%  Atk:11   Def:12   Stm:15   Hp:143  (Level 25) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=82%  Atk:12   Def:10   Stm:15   Hp:143  (Level 25) ",
                inline: true
            },  
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'http://play.pokemonshowdown.com/sprites/xyani/mew.gif'
        }

    }})
}
//(21)END
 if (msg === prefix + 'IV MEW 2153') {
    message.channel.send({embed:{
        title: "***Raid Boss Mew level 25, CP 2153 [78-87%] ( Weather Bonus )***",
        description: "***Move + Database From Battle***",
        color:0x17A589,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:" Pound/Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:" Pound/Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=87%  Atk:10   Def:14   Stm:15   Hp:143  (Level 25) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=87%  Atk:10   Def:15   Stm:14   Hp:142  (Level 25) ",
                inline: true
            },
            {
                name:"Found 3:",
                value:":point_right: IV=84%  Atk:11   Def:13   Stm:14   Hp:142  (Level 25) ",
                inline: true
            },
            {
                name:"Found 4:",
                value:":point_right: IV=84%  Atk:11   Def:14   Stm:13   Hp:142  (Level 25) ",
                inline: true
            },
            {
                name:"Found 5:",
                value:":point_right: IV=84%  Atk:11   Def:15   Stm:12   Hp:141  (Level 25) ",
                inline: true
            },
            {
                name:"Found 6:",
                value:":point_right: IV=82%  Atk:12   Def:11   Stm:14   Hp:142  (Level 25) ",
                inline: true
            },
            {
                name:"Found 7:",
                value:":point_right: IV=82%  Atk:12   Def:12   Stm:13   Hp:142  (Level 25) ",
                inline: true
            },
            {
                name:"Found 8:",
                value:":point_right: IV=82%  Atk:12   Def:13   Stm:12   Hp:141  (Level 25) ",
                inline: true
            },
            {
                name:"Found 9:",
                value:":point_right: IV=82%  Atk:12   Def:14   Stm:11   Hp:140  (Level 25) ",
                inline: true
            },
            {
                name:"Found 10:",
                value:":point_right: IV=80%  Atk:13   Def:10   Stm:13   Hp:142  (Level 25) ",
                inline: true
            },
            {
                name:"Found 11:",
                value:":point_right: IV=80%  Atk:13   Def:11   Stm:12   Hp:141  (Level 25) ",
                inline: true
            },
            {
                name:"Found 12:",
                value:":point_right: IV=80%  Atk:13   Def:12   Stm:11   Hp:140  (Level 25) ",
                inline: true
            },
            {
                name:"Found 13:",
                value:":point_right: IV=78%  Atk:14   Def:10   Stm:11   Hp:140  (Level 25) ",
                inline: true
            },  
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'http://play.pokemonshowdown.com/sprites/xyani/mew.gif'
        }

    }})
}
//(22)END
 if (msg === prefix + 'IV MEW 2152') {
    message.channel.send({embed:{
        title: "***Raid Boss Mew level 25, CP 2152 [78-82%] ( Weather Bonus )***",
        description: "***Move + Database From Battle***",
        color:0x17A589,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:" Pound/Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:" Pound/Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=82%  Atk:12   Def:15   Stm:10   Hp:140  (Level 25) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=80%  Atk:13   Def:13   Stm:10   Hp:140  (Level 25) ",
                inline: true
            },
            {
                name:"Found 3:",
                value:":point_right: IV=78%  Atk:14   Def:11   Stm:10   Hp:140  (Level 25) ",
                inline: true
            },  
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'http://play.pokemonshowdown.com/sprites/xyani/mew.gif'
        }

    }})
}
//(23)END
 if (msg === prefix + 'IV MEW 2149') {
    message.channel.send({embed:{
        title: "***Raid Boss Mew level 25, CP 2149 [80-84%] ( Weather Bonus )***",
        description: "***Move + Database From Battle***",
        color:0x17A589,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:" Pound/Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:" Pound/Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=84%  Atk:10   Def:13   Stm:15   Hp:143  (Level 25) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=82%  Atk:11   Def:11   Stm:15   Hp:143  (Level 25) ",
                inline: true
            },
            {
                name:"Found 3:",
                value:":point_right: IV=82%  Atk:11   Def:12   Stm:14   Hp:142  (Level 25) ",
                inline: true
            },
            {
                name:"Found 4:",
                value:":point_right: IV=80%  Atk:12   Def:10   Stm:14   Hp:142  (Level 25) ",
                inline: true
            },  
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'http://play.pokemonshowdown.com/sprites/xyani/mew.gif'
        }

    }})
}
//(24)END
 if (msg === prefix + 'IV MEW 2148') {
    message.channel.send({embed:{
        title: "***Raid Boss Mew level 25, CP 2148 [76-84%] ( Weather Bonus )***",
        description: "***Move + Database From Battle***",
        color:0x17A589,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:" Pound/Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:" Pound/Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=84%  Atk:10   Def:14   Stm:14   Hp:142  (Level 25) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=84%  Atk:10   Def:15   Stm:13   Hp:142  (Level 25) ",
                inline: true
            },
            {
                name:"Found 3:",
                value:":point_right: IV=82%  Atk:11   Def:13   Stm:13   Hp:142  (Level 25) ",
                inline: true
            },
            {
                name:"Found 4:",
                value:":point_right: IV=82%  Atk:11   Def:14   Stm:12   Hp:141  (Level 25) ",
                inline: true
            },
            {
                name:"Found 5:",
                value:":point_right: IV=82%  Atk:11   Def:15   Stm:11   Hp:140  (Level 25) ",
                inline: true
            },
            {
                name:"Found 6:",
                value:":point_right: IV=80%  Atk:12   Def:11   Stm:13   Hp:142  (Level 25) ",
                inline: true
            },
            {
                name:"Found 7:",
                value:":point_right: IV=80%  Atk:12   Def:12   Stm:12   Hp:141  (Level 25) ",
                inline: true
            },
            {
                name:"Found 8:",
                value:":point_right: IV=80%  Atk:12   Def:13   Stm:11   Hp:140  (Level 25) ",
                inline: true
            },
            {
                name:"Found 9:",
                value:":point_right: IV=80%  Atk:12   Def:14   Stm:10   Hp:140  (Level 25) ",
                inline: true
            },
            {
                name:"Found 10:",
                value:":point_right: IV=78%  Atk:13   Def:10   Stm:12   Hp:141  (Level 25) ",
                inline: true
            },
            {
                name:"Found 11:",
                value:":point_right: IV=78%  Atk:13   Def:11   Stm:11   Hp:140  (Level 25) ",
                inline: true
            },
            {
                name:"Found 12:",
                value:":point_right: IV=78%  Atk:13   Def:12   Stm:10   Hp:140  (Level 25) ",
                inline: true
            },
            {
                name:"Found 13:",
                value:":point_right: IV=76%  Atk:14   Def:10   Stm:10   Hp:140  (Level 25) ",
                inline: true
            },  
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'http://play.pokemonshowdown.com/sprites/xyani/mew.gif'
        }

    }})
}
//(25)END
 if (msg === prefix + 'IV MEW 2144') {
    message.channel.send({embed:{
        title: "***Raid Boss Mew level 25, CP 2144 [80-82%] ( Weather Bonus )***",
        description: "***Move + Database From Battle***",
        color:0x17A589,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:" Pound/Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:" Pound/Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=82%  Atk:10   Def:12   Stm:15   Hp:143  (Level 25) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=82%  Atk:10   Def:13   Stm:14   Hp:142  (Level 25) ",
                inline: true
            },
            {
                name:"Found 3:",
                value:":point_right: IV=80%  Atk:11   Def:10   Stm:15   Hp:143  (Level 25) ",
                inline: true
            },
            {
                name:"Found 4:",
                value:":point_right: IV=80%  Atk:11   Def:11   Stm:14   Hp:142  (Level 25) ",
                inline: true
            },
            {
                name:"Found 5:",
                value:":point_right: IV=80%  Atk:11   Def:12   Stm:13   Hp:142  (Level 25) ",
                inline: true
            },
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'http://play.pokemonshowdown.com/sprites/xyani/mew.gif'
        }

    }})
}
//(26)END
 if (msg === prefix + 'IV MEW 2143') {
    message.channel.send({embed:{
        title: "***Raid Boss Mew level 25, CP 2143 [76-82%] ( Weather Bonus )***",
        description: "***Move + Database From Battle***",
        color:0x17A589,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:" Pound/Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:" Pound/Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=82%  Atk:10   Def:14   Stm:13   Hp:142  (Level 25) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=82%  Atk:10   Def:15   Stm:12   Hp:141  (Level 25) ",
                inline: true
            },
            {
                name:"Found 3:",
                value:":point_right: IV=80%  Atk:11   Def:13   Stm:12   Hp:141  (Level 25) ",
                inline: true
            },
            {
                name:"Found 4:",
                value:":point_right: IV=80%  Atk:11   Def:14   Stm:11   Hp:140  (Level 25) ",
                inline: true
            },
            {
                name:"Found 5:",
                value:":point_right: IV=80%  Atk:11   Def:15   Stm:10   Hp:142  (Level 25) ",
                inline: true
            },
            {
                name:"Found 6:",
                value:":point_right: IV=78%  Atk:12   Def:10   Stm:13   Hp:142  (Level 25) ",
                inline: true
            },
            {
                name:"Found 7:",
                value:":point_right: IV=78%  Atk:12   Def:11   Stm:12   Hp:141  (Level 25) ",
                inline: true
            },
            {
                name:"Found 8:",
                value:":point_right: IV=78%  Atk:12   Def:12   Stm:11   Hp:140  (Level 25) ",
                inline: true
            },
            {
                name:"Found 9:",
                value:":point_right: IV=78%  Atk:12   Def:13   Stm:10   Hp:140  (Level 25) ",
                inline: true
            },
            {
                name:"Found 10:",
                value:":point_right: IV=76%  Atk:13   Def:10   Stm:11   Hp:140  (Level 25) ",
                inline: true
            },
            {
                name:"Found 11:",
                value:":point_right: IV=76%  Atk:13   Def:11   Stm:10   Hp:140  (Level 25) ",
                inline: true
            },
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'http://play.pokemonshowdown.com/sprites/xyani/mew.gif'
        }

    }})
}
//(27)END
 if (msg === prefix + 'IV MEW 2139') {
    message.channel.send({embed:{
        title: "***Raid Boss Mew level 25, CP 2139 [78-80%] ( Weather Bonus )***",
        description: "***Move + Database From Battle***",
        color:0x17A589,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:" Pound/Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:" Pound/Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=80%  Atk:10   Def:11   Stm:15   Hp:143  (Level 25) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=80%  Atk:10   Def:12   Stm:14   Hp:142  (Level 25) ",
                inline: true
            },
            {
                name:"Found 3:",
                value:":point_right: IV=80%  Atk:10   Def:13   Stm:13   Hp:142  (Level 25) ",
                inline: true
            },
            {
                name:"Found 4:",
                value:":point_right: IV=78%  Atk:11   Def:10   Stm:14   Hp:142  (Level 25) ",
                inline: true
            },
            {
                name:"Found 5:",
                value:":point_right: IV=78%  Atk:11   Def:11   Stm:13   Hp:142  (Level 25) ",
                inline: true
            },
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'http://play.pokemonshowdown.com/sprites/xyani/mew.gif'
        }

    }})
}
//(28)END
 if (msg === prefix + 'IV MEW 2138') {
    message.channel.send({embed:{
        title: "***Raid Boss Mew level 25, CP 2138 [73-80%] ( Weather Bonus )***",
        description: "***Move + Database From Battle***",
        color:0x17A589,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:" Pound/Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:" Pound/Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=80%  Atk:10   Def:14   Stm:12   Hp:141  (Level 25) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=80%  Atk:10   Def:15   Stm:11   Hp:140  (Level 25) ",
                inline: true
            },
            {
                name:"Found 3:",
                value:":point_right: IV=78%  Atk:11   Def:12   Stm:12   Hp:141  (Level 25) ",
                inline: true
            },
            {
                name:"Found 4:",
                value:":point_right: IV=78%  Atk:11   Def:13   Stm:11   Hp:140  (Level 25) ",
                inline: true
            },
            {
                name:"Found 5:",
                value:":point_right: IV=78%  Atk:11   Def:14   Stm:10   Hp:140  (Level 25) ",
                inline: true
            },
            {
                name:"Found 6:",
                value:":point_right: IV=76%  Atk:12   Def:10   Stm:12   Hp:141  (Level 25) ",
                inline: true
            },
            {
                name:"Found 7:",
                value:":point_right: IV=76%  Atk:12   Def:11   Stm:11   Hp:140  (Level 25) ",
                inline: true
            },
            {
                name:"Found 8:",
                value:":point_right: IV=76%  Atk:12   Def:12   Stm:10   Hp:140  (Level 25) ",
                inline: true
            },
            {
                name:"Found 9:",
                value:":point_right: IV=73%  Atk:13   Def:10   Stm:10   Hp:140  (Level 25) ",
                inline: true
            },
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'http://play.pokemonshowdown.com/sprites/xyani/mew.gif'
        }

    }})
}
//(29)END
 if (msg === prefix + 'IV MEW 2134') {
    message.channel.send({embed:{
        title: "***Raid Boss Mew level 25, CP 2134 [76-78%] ( Weather Bonus )***",
        description: "***Move + Database From Battle***",
        color:0x17A589,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:" Pound/Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:" Pound/Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=78%  Atk:10   Def:10   Stm:15   Hp:143  (Level 25) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=78%  Atk:10   Def:11   Stm:14   Hp:142  (Level 25) ",
                inline: true
            },
            {
                name:"Found 3:",
                value:":point_right: IV=78%  Atk:10   Def:12   Stm:13   Hp:142  (Level 25) ",
                inline: true
            },
            {
                name:"Found 4:",
                value:":point_right: IV=78%  Atk:10   Def:13   Stm:12   Hp:141  (Level 25) ",
                inline: true
            },
            {
                name:"Found 5:",
                value:":point_right: IV=76%  Atk:11   Def:10   Stm:13   Hp:142  (Level 25) ",
                inline: true
            },
            {
                name:"Found 6:",
                value:":point_right: IV=76%  Atk:11   Def:11   Stm:12   Hp:141  (Level 25) ",
                inline: true
            },
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'http://play.pokemonshowdown.com/sprites/xyani/mew.gif'
        }

    }})
}
//(30)END
 if (msg === prefix + 'IV MEW 2133') {
    message.channel.send({embed:{
        title: "***Raid Boss Mew level 25, CP 2133 [73-78%] ( Weather Bonus )***",
        description: "***Move + Database From Battle***",
        color:0x17A589,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:" Pound/Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:" Pound/Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=78%  Atk:10   Def:14   Stm:11   Hp:140  (Level 25) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=78%  Atk:10   Def:15   Stm:10   Hp:140  (Level 25) ",
                inline: true
            },
            {
                name:"Found 3:",
                value:":point_right: IV=76%  Atk:11   Def:12   Stm:11   Hp:140  (Level 25) ",
                inline: true
            },
            {
                name:"Found 4:",
                value:":point_right: IV=76%  Atk:11   Def:13   Stm:10   Hp:140  (Level 25) ",
                inline: true
            },
            {
                name:"Found 5:",
                value:":point_right: IV=73%  Atk:12   Def:10   Stm:11   Hp:140  (Level 25) ",
                inline: true
            },
            {
                name:"Found 6:",
                value:":point_right: IV=73%  Atk:12   Def:11   Stm:10   Hp:140  (Level 25) ",
                inline: true
            },
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'http://play.pokemonshowdown.com/sprites/xyani/mew.gif'
        }

    }})
}
//(31)END
 if (msg === prefix + 'IV MEW 2129') {
    message.channel.send({embed:{
        title: "***Raid Boss Mew level 25, CP 2129 [73-76%] ( Weather Bonus )***",
        description: "***Move + Database From Battle***",
        color:0x17A589,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:" Pound/Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:" Pound/Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=76%  Atk:10   Def:10   Stm:14   Hp:142  (Level 25) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=76%  Atk:10   Def:11   Stm:13   Hp:142  (Level 25) ",
                inline: true
            },
            {
                name:"Found 3:",
                value:":point_right: IV=76%  Atk:10   Def:12   Stm:12   Hp:141  (Level 25) ",
                inline: true
            },
            {
                name:"Found 4:",
                value:":point_right: IV=76%  Atk:10   Def:13   Stm:11   Hp:140  (Level 25) ",
                inline: true
            },
            {
                name:"Found 5:",
                value:":point_right: IV=73%  Atk:11   Def:10   Stm:12   Hp:141  (Level 25) ",
                inline: true
            },
            {
                name:"Found 6:",
                value:":point_right: IV=73%  Atk:11   Def:11   Stm:11   Hp:140  (Level 25) ",
                inline: true
            },
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'http://play.pokemonshowdown.com/sprites/xyani/mew.gif'
        }

    }})
}
//(32)END
 if (msg === prefix + 'IV MEW 2128') {
    message.channel.send({embed:{
        title: "***Raid Boss Mew level 25, CP 2128 [71-76%] ( Weather Bonus )***",
        description: "***Move + Database From Battle***",
        color:0x17A589,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:" Pound/Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:" Pound/Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=76%  Atk:10   Def:14   Stm:10   Hp:140  (Level 25) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=73%  Atk:11   Def:12   Stm:10   Hp:140  (Level 25) ",
                inline: true
            },
            {
                name:"Found 3:",
                value:":point_right: IV=71%  Atk:12   Def:10   Stm:10   Hp:140  (Level 25) ",
                inline: true
            },
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'http://play.pokemonshowdown.com/sprites/xyani/mew.gif'
        }

    }})
}
//(33)END
 if (msg === prefix + 'IV MEW 2124') {
    message.channel.send({embed:{
        title: "***Raid Boss Mew level 25, CP 2124 [71-73%] ( Weather Bonus )***",
        description: "***Move + Database From Battle***",
        color:0x17A589,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:" Pound/Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:" Pound/Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=73%  Atk:10   Def:10   Stm:13   Hp:142  (Level 25) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=73%  Atk:10   Def:11   Stm:12   Hp:141  (Level 25) ",
                inline: true
            },
            {
                name:"Found 3:",
                value:":point_right: IV=73%  Atk:10   Def:12   Stm:11   Hp:140  (Level 25) ",
                inline: true
            },
            {
                name:"Found 4:",
                value:":point_right: IV=71%  Atk:11   Def:10   Stm:11   Hp:140  (Level 25) ",
                inline: true
            },
            {
                name:"Found 5:",
                value:":point_right: IV=71%  Atk:11   Def:11   Stm:10   Hp:140  (Level 25) ",
                inline: true
            },
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'http://play.pokemonshowdown.com/sprites/xyani/mew.gif'
        }

    }})
}
//(34)END
 if (msg === prefix + 'IV MEW 2123') {
    message.channel.send({embed:{
        title: "***Raid Boss Mew level 25, CP 2123 [73%] ( Weather Bonus )***",
        description: "***Move + Database From Battle***",
        color:0x17A589,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:" Pound/Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:" Pound/Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=73%  Atk:10   Def:13   Stm:10   Hp:140  (Level 25) ",
                inline: true
            },
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'http://play.pokemonshowdown.com/sprites/xyani/mew.gif'
        }

    }})
}
//(35)END
 if (msg === prefix + 'IV MEW 2119') {
    message.channel.send({embed:{
        title: "***Raid Boss Mew level 25, CP 2119 [69-71%] ( Weather Bonus )***",
        description: "***Move + Database From Battle***",
        color:0x17A589,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:" Pound/Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:" Pound/Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=71%  Atk:10   Def:10   Stm:12   Hp:141  (Level 25) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=71%  Atk:10   Def:11   Stm:11   Hp:140  (Level 25) ",
                inline: true
            },
            {
                name:"Found 3:",
                value:":point_right: IV=71%  Atk:10   Def:12   Stm:10   Hp:140  (Level 25) ",
                inline: true
            },
            {
                name:"Found 4:",
                value:":point_right: IV=69%  Atk:11   Def:10   Stm:10   Hp:140  (Level 25) ",
                inline: true
            },
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'http://play.pokemonshowdown.com/sprites/xyani/mew.gif'
        }

    }})
}
//(36)END
 if (msg === prefix + 'IV MEW 2114') {
    message.channel.send({embed:{
        title: "***Raid Boss Mew level 25, CP 2114 [69%] ( Weather Bonus )***",
        description: "***Move + Database From Battle***",
        color:0x17A589,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:" Pound/Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:" Pound/Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=69%  Atk:10   Def:10   Stm:11   Hp:140  (Level 25) ",
                inline: true
            },
            {
                name:"Found 2:",
                value:":point_right: IV=69%  Atk:10   Def:11   Stm:10   Hp:140  (Level 25) ",
                inline: true
            },
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'http://play.pokemonshowdown.com/sprites/xyani/mew.gif'
        }

    }})
}
//(37)END
 if (msg === prefix + 'IV MEW 2109') {
    message.channel.send({embed:{
        title: "***Raid Boss Mew level 25, CP 2109 [67%] ( Weather Bonus )***",
        description: "***Move + Database From Battle***",
        color:0x17A589,
        fields: [
            {
                name:":pushpin:  Move Attack",
                value:" Pound/Solar Beam ",
                inline: true
            },
            {
                name:":boom:  Move Defence",
                value:" Pound/Solar Beam ",
                inline: true
            },
            {
                name:"Found 1:",
                value:":point_right: IV=67%  Atk:10   Def:10   Stm:10   Hp:140  (Level 25) ",
                inline: true
            },
        ],
        timestamp: new Date(),
        footer: {
            text:'Made by Gotcha Team ✔',
            icon_url:'http://play.pokemonshowdown.com/sprites/xyani/mew.gif'
        }

    }})
}
//(38)END



 
  
  
 //login 
 try {
    let commandFile = require(`./commands/${cmd}.js`);
    commandFile.run(client, message, args ,tools);
    client.on('ready', () => {
   console.log('Cen Đẹp Troai Runing')
   client.user.setStatus('Online')
   client.user.setGame('Gotcha Mod')
  });
  
  } catch (e) {
    console.log(e.message);
    
  } finally {
    console.log(`${message.author.tag} Đẹp Troai Chạy Code ${cmd}`);
}
})
client.login(process.env.BOT_TOKEN);
