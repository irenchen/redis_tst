const redis = require('redis');
const client = redis.createClient();


client.on('error', err => console.log);

client.set('name', 'Bob', redis.print);

client.get('name', (err, name) => {
  console.log('user name : ' + name);
});

client.hset('user:1000', 'name', 'Alice', redis.print);
client.hset('user:1000', 'age', 20, redis.print);
client.hkeys('user:1000', (err, replies) => {
  console.log('replies length : ' + replies.length);

  replies.forEach((field, i) => {
    console.log(" field " + i + " : " + field);
    client.hget(field, (err, value) => {
      console.log(" value : " + value);
    });
  });
  
});

setTimeout(function() {
  client.quit();
}, 5000);




