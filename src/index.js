
import { numbers as data, votes } from './data.js'
import { reverse, voteCounter } from './utils.js'
import { contentblock } from './content.js'



const div = document.createElement("div");
div.innerText = "hello there...";

const listitems = reverse(data).map( i => {
    let li = document.createElement("li");
    li.innerText = i;
    return li;
});

const list = document.createElement("ul");

listitems.forEach( i => list.appendChild(i) );


const voteResults = voteCounter(votes);
console.log(voteResults);



document.body.appendChild(div);
document.body.appendChild(list);

const results = document.createElement("div");
results.innerText = JSON.stringify(voteResults);

document.body.appendChild(results);

document.body.appendChild(contentblock)
