const express = require('express')
const app = express();
const port = 3000

app.get('/', (req, res) => res.send('Your Bots Is Online!!!'))

app.listen(port, () =>
console.log(`Your app is listening a http://localhost:${port}`)
);
const { Client, RichEmbed } = require('discord.js');

const client = new Client();

client.on('ready', () => {
 client.user.setActivity(`CKMMRP`, { type: 'WATCHING' })
}) 

client.on('ready', () => {
    console.log('Bot Now connected!');
    console.log('Logged In as', client.user.tag)
    client.user.setStatus('online'); // online, idle, invisible, dnd

    console.log('Bot status: ', client.user.presence.status);

    // Bot sending a Message to a text channel called test
    const testChannel = client.channels.find(x => x.name === 'test')
    console.log(testChannel)
    // client.channels.find(c => c.name === 'test').send('Hello Server!')

});

// Bot listenning messages
client.on('message', msg => {
    console.log(msg.content)
    if (msg.content === 'Killadi') {
        msg.reply(`IGNITE aan Killadi ${msg.author}`)
    }

    if (msg.content === 'hello') {
        msg.channel.send(`Hai ${msg.author}`);
    }

    if (msg.content === 'hi') {
        msg.channel.send(`Hello ${msg.author}`);
    }

    if (msg.content === 'server on') {
        msg.channel.send(`Server ippol on akkam! ${msg.author}`);
    }

    if (msg.content === 'yt') {
        msg.channel.send('https://www.youtube.com/channel/UC6c1a_7PYDVx-49HoIkE_Hg');
        msg.channel.send('Like And Subscribe!');
    }

    if (msg.content === 'myre') {
        msg.channel.send(`Oode Noobe`);
    }

    if (msg.content === '!pretty') {
        const embed = new RichEmbed()
            // .setTitle('A pretty message')
            // .setColor(0xFF0000)
            // .setDescription('Hello', msg.author);
            .addField('Something One', 'Some content', true)
            .addField('Something Two', 'Some content Two', true)
            .addField('Something Three', 'Some content Three', false)
            .setAuthor('IGNITE 999', 'https://cdn.discordapp.com/attachments/840078337883111475/900668443576119326/IMG-20210621-WA0099-removebg-preview.png');
        msg.channel.send(embed);
    }

    if (msg.content === 'ignite') {
        msg.channel.send('https://www.youtube.com/channel/UC6c1a_7PYDVx-49HoIkE_Hg');
        msg.channel.send('Like And Subscribe!');
    }

    if (msg.content === 'ignite') {
        msg.channel.send(`I Know Him He Is My Creator! ${msg.author}`);
    }

    // Deleting 100 messages
    if (msg.content.startsWith('!clean')) {
        async function clear() {
            try {
                // await msg.delete();
                const fetched = await msg.channel.fetchMessages({limit: 1000});
                msg.channel.bulkDelete(fetched);;
                console.log('Messages deleted');
            }
            catch (e) {
                console.log(e);
            }
        }
        clear();
    }
});


const token = 'YOUR TOKEN';
client.login(token);
