const redis = require('redis');
const client = redis.createClient();

console.log('listening on ch1...');

client.subscribe('ch1');

client.on('message', (channel, message) => {
  console.log(channel + " : " + message);
  if(message === 'bye') {
    client.quit(); 
  }
});




