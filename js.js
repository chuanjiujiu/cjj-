/*===== MENU SHOW Y HIDDEN =====*/
const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('nav-toggle'),
    closeMenu = document.getElementById('nav-close');

// SHOW
toggleMenu.addEventListener('click',()=>{
    navMenu.classList.toggle('show');
})

// HIDDEN
closeMenu.addEventListener('click',()=>{
    navMenu.classList.remove('show');
})


/*===== ACTIVE AND REMOVE MENU =====*/
const navList = document.querySelectorAll('.nav__link')

function linkAction(){
    navMenu.classList.remove('show')
}
navList.forEach(n => n.addEventListener('click', linkAction))

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(currrnt =>{
        const sectionHeight = currrnt.offsetHeight
        const sectionTop = currrnt.offsetTop - 50
        sectionId = currrnt.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId +']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}