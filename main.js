/* abre e fecha menu inicial ... e close */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}
/* links do menu  */
const links = document.querySelectorAll('nav ul li a')

for (const linkmenu of links) {
  linkmenu.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/*--- mudar header da pagina quando aparecer scroll */

const header = document.querySelector('#header')
const navHeight = header.offsetheight

window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight)
    // scroll é maior que a altura do header //
    header.classList.add('scroll')
  else header.classList.remove('scroll')
  // menor que altura do header //
})

//testimonials carrosel swiper sliders//
const swiper = new Swiper('.swiper-container', {
  slidesPerview: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

//scroll reveal - mostrar elementos suavemente quando rolar a pagina //
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
   #about .image, #about .text, #services .header, #services .card,
   #testimonials .header, #testimonials .testimonials, #contact .text, #contact .links, footer .brand, footer .social
`,
  { interval: 100 }
)
//MENU com marcação conforme seção visivel //
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + '] ')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + '] ')
        .classList.remove('active')
    }
  }
}

//botão back to top arrow up//
const backToTopButton = document.querySelector('.back-to-top')
window.addEventListener('scroll', function () {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
})
/* When Scroll */
window.addEventListener('scroll', function () {
  backToTop()
  activateMenuAtCurrentSection()
})
