// creating a comment box or textarea

document.getElementById('comment').addEventListener('click', function () {
    const getText = document.getElementById('new-comment');
    const text = getText.value;

    const newPara = document.getElementById('comment-container');
    const para = document.createElement('p');
    para.innerText = text;
    newPara.appendChild(para);

    getText.value = '';
    
})