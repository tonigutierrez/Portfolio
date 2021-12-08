//enviar email////////////////////////////////

const $form = document.querySelector('#form');
const $boton = document.querySelector('#sendemail');

$form.addEventListener('submit', sendEmail);

function sendEmail(e){
    e.preventDefault();
    const form = new FormData (this);
    $boton.setAttribute('href', `mailto:antoniog.devel@gmail.com?subject=${form.get('name')} ${form.get('email')}&body=${form.get('message')}`);
    $boton.click();
    alert('Abriendo su software de emails')
}

// Boton ir al cielo //////////////////////////////////

document.getElementById('boton-up').addEventListener('click', scrollUp);

function scrollUp(){
    var currentScroll = document.documentElement.scrollTop;
    if (currentScroll > 0){
        window.scrollTo(0,0);
    }
}

var botonUp = document.getElementById('boton-up');

window.onscroll = function(){
    var scroll = document.documentElement.scrollTop;

    if (scroll > 500){
        botonUp.style.transform = 'scale(1)';
    }else{
        botonUp.style.transform = 'scale(0)';
    }
}

