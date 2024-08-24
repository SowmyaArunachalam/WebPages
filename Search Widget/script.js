const srch = document.querySelector('.search');
const inp = document.querySelector('.input');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    srch.classList.toggle('active');
    inp.focus();
});
