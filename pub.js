const redis = require('redis');
const client = redis.createClient();

client.publish('ch1', 'hello from publisher');

client.publish('ch1', 'bye');

client.quit();



