// Option 1 : add even in html element direct


// Option 2 : second way use event 

function makeRed() {
    document.body.style.backgroundColor = 'red';
}

function makeYellow() {
    document.body.style.backgroundColor = 'yellow';
}

// Option 3 : third way use event

const purple = document.getElementById('purple');
purple.onclick = makePurple;

function makePurple() {
    document.body.style.backgroundColor = 'purple';
}

// Option 4 : fourth way use event

const green = document.getElementById('green');
green.onclick = function makeGreen() {
    document.body.style.backgroundColor = 'green';
}

// Option 5 : addEventListener()

const skyBlue = document.getElementById('sky-blue');
skyBlue.addEventListener('click', makeSkyBlue);

function makeSkyBlue() {
    document.body.style.backgroundColor = 'skyblue';
}

// Option 5 Another : addEventListener()

const pink = document.getElementById('pink');
pink.addEventListener('click', function makePink(){
    document.body.style.backgroundColor = 'pink';
})


// Option 6 final : addEventListener

document.getElementById('golden-rod').addEventListener('click', function makeGoldenRod(){
    document.body.style.backgroundColor = 'goldenrod';
})


const newSection = document.getElementById('container');
const sect = document.createElement('section');

newSection.appendChild(sect);

const h1 = document.createElement('h1');
h1.innerText = 'Hello Event Lisener';

sect.appendChild(h1);

const button = document.createElement('button');
button.setAttribute('id', 'red-yellow');
button.innerText = 'Click Me';

sect.appendChild(button);

document.getElementById('red-yellow').addEventListener('click', function () {
    document.body.style.backgroundColor = 'green';
})



