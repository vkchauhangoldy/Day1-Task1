
document.getElementById("h1").innerHTML = document.body.nodeName;


const nodes = document.body.childNodes;
let text = "";
for (let i = 0; i < nodes.length; i++) {
    text += nodes[i].nodeType + " " + nodes[i].nodeName + "<br>";
}
document.getElementById("task").innerHTML = text;