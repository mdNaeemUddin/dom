// more events :

// focus

// document.getElementById('btn-more').addEventListener('focus', function () {
//     console.log('event triggered 1 : focus');
// })

// blur

// document.getElementById('btn-more').addEventListener('blur', function () {
//     console.log('event triggered 2 : blur');
// })


// mousemove 

// document.getElementById('btn-more').addEventListener('mousemove', function () {
//     console.log();
// })

// keydown 

// document.getElementById('text-field').addEventListener('keypress', function (event) {
//     console.log(event.target.value);
// })


document.getElementById('confirm').addEventListener('keyup', function (event) {
    const text = event.target.value;

    const item = document.getElementById('btn-delete');

    if (text === 'box') {
        item.removeAttribute('disabled');
    } else {
        item.setAttribute('disabled', true);
    }

})

document.getElementById('btn-delete').addEventListener('click', function (){
    const empty = document.getElementById('info');

    empty.style.display = 'none';
})