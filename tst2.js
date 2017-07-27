const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));

fs.readFileAsync('test.json', 'utf-8')
  .then(JSON.parse)
  .then(data => {
    console.log(data);
  })
  .catch(SyntaxError, e => {
    console.log('syntax error...'); 
  })
  .catch(console.log)
  .finally(() => {
    console.log('done...');
  });



