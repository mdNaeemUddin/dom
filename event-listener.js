
// Option 01 :

 function ansFunc() {
    const ans = document.getElementById('first-head');
    ans.innerText = "I am Ok";
    ans.style.backgroundColor = 'black';
    ans.style.color = 'white';
    ans.style.padding = '1rem';
}


// Option 02 : 

document.getElementById('answer').addEventListener('click', function () {
    const ans = document.getElementById('heading');
    ans.innerText = "I am fine and what's about you?";
    ans.style.backgroundColor = 'black';
    ans.style.color = 'white';
    ans.style.padding = '1rem';
})


document.getElementById('updated').addEventListener('click', function () {
    const inputText = document.getElementById('input-empty');
    const value = inputText.value;

    const yourName = document.getElementById('your-name');
    yourName.innerText = value;

    inputText.value = '';
})