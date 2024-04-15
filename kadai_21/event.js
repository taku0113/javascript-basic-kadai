const addbtn = document.getElementById('btn');

const addtext = document.getElementById('text');

addbtn.addEventListener('click', () => {


setTimeout(() => {
    addtext.textContent = 'ボタンがクリックされました';
},2000);

})