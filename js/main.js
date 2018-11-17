let toast = document.querySelector('#btn-toast');
let noti = document.querySelector('#toast');
let cerrar = document.querySelector('#cerrar');

toast.addEventListener('click', () => {
    noti.classList.add('mostrar');
    setTimeout(() => {
        noti.classList.remove('mostrar');
    }, 6000);
});

cerrar.addEventListener('click', () => {
    noti.classList.remove('mostrar');
});