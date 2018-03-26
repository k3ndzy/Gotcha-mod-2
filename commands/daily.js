const db = require('quick.db'),
      ms = require('parse-ms');
                   
                   
exports.run = async (client, message, args, tools) => {
        
        let cooldown = 8.64e+7,
            amount = 250;
        
        let lastDaily = await db.fetch(`lastDaily_${message.author.id}`);
        
        if (lastDaily != null && cooldown - (Date.now() - lastDaily) > 0) {
          let timeObj = ms(cooldown - (Date.now() - lastDaily));
          
          message.channel.send(`bạn đã thu thập xong, vui lòng đợi **${timeObj.hours}h ${timeObj.minutes}m để nhận $ tiếp theo!**!`);
          
        } else {
          message.channel.send(`Gotcha Team give $${amount} cho bạn!`);
          
          db.set(`lastDaily_${message.author.id}`, Date.now());
          db.add(`userBalance_${message.author.id}`, 250);
          
        }
      }
