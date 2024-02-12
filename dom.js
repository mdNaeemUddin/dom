// DOM : document object model 

console.log("External DOM = Here");
// console.log(document.body);


// node - parentNode, firstChild, lastChild, nextSibling, createElement, appendChild, createElement

// setAttribute(), getAttribute(), add, remove

const bookList = document.getElementById('book-list');

const li = document.createElement('li');
li.innerText = 'list - 4';
bookList.appendChild(li);

bookList.style.border = '2px solid red';
bookList.style.color = 'white';
bookList.style.backgroundColor = 'black';
bookList.style.padding = '2rem';
bookList.style.margin = '2rem';