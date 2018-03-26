exports.run = (client, message, args, tools) => {
  
  
  
  
  if (isNaN(args[0])) return message.channel.send('**Vui lòng cung cấp số lượng cmt hợp lệ để Cen Xóa**');
  
  
  if (args[0] > 100) return message.channel.send('**Vui lòng cung cấp một số dưới 100**');
 
  
 
  message.channel.bulkDelete(args[0])
    .then( messages => message.channel.send(`**Successfully deleted \`${messages.size}/${args[0]}\` messages**`).then( msg => msg.delete({ timeout: 10000 })))
          
} 
