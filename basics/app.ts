const button = document.querySelector('button');

// button?.addEventListener('click', () => {
//     console.log('Clicked!');
// })

function clickHandler(message: string) {
    console.log('Clicked! ' + message);
}

//binding
if (button) {
    button.addEventListener('click', clickHandler.bind(null, "You're welcome!"));
    // button.addEventListener('click', clickHandler.bind(null)); gives error, need to bind function with same parameter
}


