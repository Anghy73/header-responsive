const burger = document.querySelector('.header__burger');
const navigation = document.querySelector('.header__navigation');

burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  navigation.classList.toggle('active');
});

const anclas = document.querySelectorAll('.header__link');

for (let i = 0; i < anclas.length; i++) {
  anclas[i].addEventListener('click', (e) => {
    if (!e.target.classList.contains('border')) {
      for (let i = 0; i < anclas.length; i++) {
        anclas[i].classList.remove('border');
      }
      e.target.classList.add('border');
    }
  });
}