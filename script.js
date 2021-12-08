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

$(document).ready(function() {
    $('.gotop').click(function() {
        $('body, html').animate({
            scrollTop: 0
        }, 300)
    });
    $(window).scroll(function() {
        if($(this).scrollTop()> 300){
            $('.gotop').slideDown(300);
        }else{
            $('.gotop').slideUp(300);
        }
    })
})