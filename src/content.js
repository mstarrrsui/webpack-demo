import './content.css';

const top = document.createElement("div");
top.innerText = "Top of Content";
const bottom = document.createElement("div");
bottom.innerText = "Bottom of Content";

const contentstyle = "border: 2px black solid; margin: 20px; padding: 10px"


const contentblock = document.createElement("div");
contentblock.className="maincontent"
contentblock.style = contentstyle;
contentblock.appendChild(top);
contentblock.appendChild(bottom);



export { top, bottom, contentblock };