
const Discord = require('discord.js');
//////////////////////////////////////////////////////هنا السورسvvvvvv

const client = new Discord.Client();
const client1 = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const client5 = new Discord.Client();


///تسوي الي تبي كم بوت يعني  كم توكن تبيه يشتغل



//////////////////////////////////////////////////////////هنا اوامركvvvvvvvvv;كودك اي شي
});///تجي هنا  تنسخ الكود بتاعك مرتيناو علئ الي تبي انا الي عندي 5
client.on('message', message => {
    var prefix = "#"
    if (message.content.toLowerCase() === prefix + "wwwwwwwww") {
        let embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle("اوامر المساعدة")
        .addField("الامر",' ايش يسوي ')
        .addField("الامر",' ايش يسوي ')
        .addField("الامر",' ايش يسوي ')
        .addField("الامر",' ايش يسوي ')
        .addField("الامر",' ايش يسوي ')
        .addField("الامر",' ايش يسوي ')
        .addField("الامر",' ايش يسوي ')
        .addField("الامر",' ايش يسوي ')
        message.channel.sendEmbed(embed);
    }
});
client1.on('message', message => {
    var prefix = "1"
    if (message.content.toLowerCase() === prefix + "help") {
        let embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle(" :bulb: اوامر المساعدة")
        .addField("1play",' لـتشفيل البوت ')
        .addField("1skip",' لـخطي الاغنيه ')
        .addField("1vol",' لـرفع صوت البوت')
        message.channel.sendEmbed(embed);
    }
});
client2.on('message', message => {
        ///^^نرجع هنا تشوف كلمه client
//الكود ال2
     var prefix = "2"
    if (message.content.toLowerCase() === prefix + "help") {
        let embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle(" :bulb: اوامر المساعدة")
        .addField("2play",' لـتشفيل البوت ')
        .addField("2skip",' لـخطي الاغنيه ')
        .addField("2vol",' لـرفع صوت البوت')
        message.channel.sendEmbed(embed);
    }
});
client3.on('message', message => {
        ///^^نرجع هنا تشوف كلمه client
//الكود ال3
  var prefix = "3"
    if (message.content.toLowerCase() === prefix + "help") {
        let embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle(" :bulb: اوامر المساعدة")
        .addField("3play",' لـتشفيل البوت ')
        .addField("3skip",' لـخطي الاغنيه ')
        .addField("3vol",' لـرفع صوت البوت')
        message.channel.sendEmbed(embed);
    }
});
client4.on('message', message => {
  var prefix = "4"
    if (message.content.toLowerCase() === prefix + "help") {
        let embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle(" :bulb: اوامر المساعدة")
        .addField("4play",' لـتشفيل البوت ')
        .addField("4skip",' لـخطي الاغنيه ')
        .addField("4vol",' لـرفع صوت البوت')
        message.channel.sendEmbed(embed);
    }
});





client5.on('message', message => {
  var prefix = "5"
    if (message.content.toLowerCase() === prefix + "help") {
        let embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle(" :bulb: اوامر المساعدة")
        .addField("5play",' لـتشفيل البوت ')
        .addField("5skip",' لـخطي الاغنيه ')
        .addField("5vol",' لـرفع صوت البوت')
        message.channel.sendEmbed(embed);
    }
});


//////////////////////////////////////////////////////////////هنا التوكن vvvv وهنا عددد التوكنات نفس السورس
client.login(process.env.TOKEN);
client1.login(process.env.TOKEN1);
client2.login(process.env.TOKEN2);
client3.login(process.env.TOKEN3);
client4.login(process.env.TOKEN4);
