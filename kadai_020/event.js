const addBtn = document.getElementById('btn');

const addtext = document.getElementById('text');

addBtn.addEventListener('click', () => {
    addtext.textContent = 'ボタンをクリックしました';
})