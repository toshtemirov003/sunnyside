const elHeaderNav = document.querySelector('.site-nav')
const elHeaderBtn = document.querySelector('.site-header__js-btn')

// site-header__nav--open

elHeaderBtn.addEventListener('click', () => {
  elHeaderNav.classList.toggle('site-nav--open')
})   