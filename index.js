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
    .setState(' **Second Type** ')
    .setName(' **Name** ')
    .setDetails(` **Three Type** `)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage(' **Large Image Link** ') //You can put links in tenor or discord and etc.
    .setAssetsLargeText(' **Three Type** ') //Text when you hover the Large image
    .setAssetsSmallImage(' **Small Image Link** ') //You can put links in tenor or discord and etc.
    .setAssetsSmallText(' **Second Type** ') //Text when you hover the Small image
    .addButton(' **Name Type** ', ' **Link** ')
    .addButton(' **Name Type** ', ' **Link** ');

  client.user.setActivity(r);
  client.user.setPresence({ status: "online" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = ` **Name** `;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
