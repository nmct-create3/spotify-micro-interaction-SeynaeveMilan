let button = document.querySelector('.js-toggle'); 
let toggleIconAdd = document.querySelector('.icon--add');
let toggleIconCheck = document.querySelector('.icon--check');

const init = () => {
    button.addEventListener('click', function() {
        toggleIconAdd.classList.toggle("added");
        
        toggleIconCheck.classList.toggle("added");
        
    });
}

document.addEventListener('DOMContentLoaded', init);
