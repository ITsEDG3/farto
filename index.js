const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv/config');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.on('ready', () => {
    console.log('The bot is ready');
});

client.on('messageCreate', message => {
    if (message.content === 'dato ylea?') {
        message.reply('ki yle var nu shemecit!');
    }
});

client.on('messageCreate', message => {
    if (message.content === 'kvijiaze ras ityvi?') {
        message.reply('bevrs jvams da iphone bolo araaqvs!');
    }
});

client.on('messageCreate', message => {
    if (message.content === 'messi tu ronaldo?') {
        message.reply('magas ra tqma unda. MESSI IS THE BEST !');
    }
});

client.on('messageCreate', message => {
    if (message.content === 'gigaze ragas ityvi?') {
        message.reply('gigaa? gigaze yle aravinaa jer ronaldo betero mere geytnites akvdeba!');
    }
});

client.on('messageCreate', message => {
    if (message.content === 'edgeze ras ityvi?') {
        message.reply('eg magari kacia dzmao! suli chambera naxe vsuntqav!');
    }
});

client.on('messageCreate', message => {
    if (message.content === 'mtyuans') {
        message.reply('mtyuans? ra mtyuans ginda chavicucqot?!');
    }
});

client.on('messageCreate', message => {
    if (message.content === 'ras ityvi es sloti moitans?') {
        message.reply('ki dzmao uechveli kushi vici jer 50 tetri daka mere lari');
    }
});

client.on('messageCreate', message => {
    if (message.content === 'kvijia su gamoylevda ra') {
        message.reply('მოიცა კაცო ეგ სულ ყლე არ იყო?');
    }
});

client.on('messageCreate', message => {
    if (message.content === 'დოლარები?') {
        message.reply('დოლარებიო? ვინმემ ფული ახსენა აქა?');
    }
});

client.on('messageCreate', message => {
    if (message.content === 'am banebit da kikebit xo tvini maityna') {
        message.reply('მერე მომეცი ძმაო ეგ როლი მივხედავ აქაურობას გეფიცები ორ შვილს');
    }
});

client.on('messageCreate', message => {
    if (message.content === 'დაიჯვი შენ მანდ') {
        message.reply('კაი ხო აღარ ვიზავ');
    }
});

client.on('messageCreate', message => {
    if (message.content === 'giga sadgaa') {
        message.reply('სად უნდა იყოს უეჭველი რონალდოს ვარჯიშებს უყურებს ან მის შეყვარებულზე აკაჩავებს');
    }
});

client.on('messageCreate', message => {
    if (message.content === 'კაი დავიღალე გავთიშავ ეხლა ამ ყლე ფართოს') {
        message.reply('ვის გათიშავ ბიჭო აქეთ არ გაგთიშოთ ეხლა, ვეტოოო..ოოო.ოო.ო.....');
    }
});

client.on('messageCreate', message => {
    if (message.content === 'ვანდა') {
        message.reply('ვინმემ ვანდა ახსენა?? უფფ რას გადავკუზავდი');
    }
});

client.on('messageCreate', message => {
    if (message.content === 'ყლიფონ გათენდა აქა ხარ?') {
        message.reply('მე სუ აქა ვარ დღეცა და ღამეცა');
    }
});

client.on('messageCreate', message => {
    if (message.content === 'dick') {
        message.reply('dick ები და რაღაცეები არვიცი მე გიგას მიმართეთ');
    }
});


client.login(process.env.TOKEN);


