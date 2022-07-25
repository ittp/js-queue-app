// Import stylesheets
import './style.css';

let ci = {};
// Write Javascript code!
const appDiv = document.getElementById('app');

console.log(require('./s.html'));

let req = fetch('https://api.github.com/meta')
  .then((d) => d.json())
  .then((b) => JSON.stringify(b));
console.log(req);
// appDiv.innerHTML = `<div>456556</divIvanov</code><div>0/0</div><div></div>`

appDiv.innerText = 200;

// const a = require('axios');
// async () => {
//   a.get('localhost:1337/api');
// };
