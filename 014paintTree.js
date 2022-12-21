"use strict"

let data = {
  "Fish": {
    "trout": {},
    "salmon": {}
  },

  "Tree": {
    "Huge": {
      "sequoia": {},
      "oak": {}
    },
    "Flowering": {
      "apple tree": {},
      "magnolia": {}
    }
  }
};

let container = document.getElementById('container');
container.append(createTree(data));  // añado dentro del div container


function createTree(obj) {
  if (obj && Object.keys(obj).length === 0) return;
  let ul = document.createElement('ul');

  for (let key in obj) { 
    let li = document.createElement('li');
    li.innerHTML = key;

    let childrenUl = createTree(obj[key]); 
    if (childrenUl) {                     
      li.append(childrenUl);
    }
    ul.append(li);
  }

  return ul;
}