const Search = document.querySelector('.search__form-search');
const OpenBtn = document.querySelector('#search__form-btn');

OpenBtn.addEventListener('click', () => {
    Search.style.display = Search.style.display === 'block' ? 'none' : 'block';
});


const Nav = document.querySelector('.header__nav');
const hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', () => {

    Nav.style.display = Nav.style.display === 'block' ? 'none' : 'block';
    if (hamburger.classList.contains('is-open')) {
        hamburger.classList.remove('is-open');
        hamburger.classList.add('is-closed');
        
    } else {
        hamburger.classList.remove('is-closed');
        hamburger.classList.add('is-open');
    }
});