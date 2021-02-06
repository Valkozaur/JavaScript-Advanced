function toggle() {
    let buttonElement = document.querySelector('#accordion > div.head > span');
    

    let textElement = document.querySelector('#extra');

    if(buttonElement.innerHTML === 'More'){
        buttonElement.innerHTML = 'Less';

        textElement.style.display = 'block';
    }
    else{
        buttonElement.innerHTML = 'More';

        textElement.style.display = 'none';
    }

}