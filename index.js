// Write your code here!
let node = document.getElementById("main");
if (node.parentNode) 
  node.parentNode.removeChild(node);

const newHeader = document.createElement("H1");

newHeader.id = "victory";

  const newContent = document.createTextNode("JEMEL is the champion");

  newHeader.appendChild(newContent);



