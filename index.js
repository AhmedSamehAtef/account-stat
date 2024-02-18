const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() { 
  const date = new Date();
  const options = {
    timeZone: 'America/New_York',
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1125479277421404310')
    .setType('STREAMING')
    .setURL('https://bit.ly/dsh_official')
    .setState('KRYPTON-Online')
    .setName('KRYPTONSRO')
    .setDetails(`PVP-Server`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://cdn.discordapp.com/icons/1014983575680077824/c785dbff8bace7a335b3698aee658a35.png') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('PVP-Server') //Text when you hover the Large image
    .setAssetsSmallImage('https://cdn.discordapp.com/icons/1014983575680077824/c785dbff8bace7a335b3698aee658a35.png') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('KRYPTON-ONLINE') //Text when you hover the Small image
    .addButton('Website', 'https://krypton-sro.online/')
    .addButton('Facebook', 'https://www.facebook.com/groups/shixro');

  client.user.setActivity(r);
  client.user.setPresence({ status: "online" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `KRYPTON-Online`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
