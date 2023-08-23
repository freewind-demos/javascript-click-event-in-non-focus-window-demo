const button = document.getElementById('button');

button.addEventListener('click', () => {
    console.log('### click', Date.now());
})


const newTabButton = document.getElementById('newTabButton');
newTabButton.addEventListener('click', () => {
    window.open('');
    setInterval(() => {
        button.click();
    }, 1000);
})