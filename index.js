console.log('hello world');

console.log(global.luckyNum);
global.luckyNum = 7;
console.log(global.luckyNum);

console.log(process.platform);

const { readFile } = require('fs').promises;
async function hello() {
    const data = await readFile('./hello.txt');
    console.log(data.toString());
}
hello();

const myModule = require('./my-module');
console.log(myModule);

const express = require('express');
const app = express();
app.get('/', async (request, response) => {
    response.send(await readFile('./home.html', 'utf8'));
});
app.listen(process.env.PORT || 3000, () => console.log(`App available on http://localhost:3000`));
