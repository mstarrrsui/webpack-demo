
import { numbers as data } from './data.js'
import { reverse } from './utils.js'



const div = document.createElement("div");
div.innerText = "hello there...";

const listitems = reverse(data).map( i => {
    let li = document.createElement("li");
    li.innerText = i;
    return li;
});

const list = document.createElement("ul");

listitems.forEach( i => list.appendChild(i) );

document.body.appendChild(div);
document.body.appendChild(list);

