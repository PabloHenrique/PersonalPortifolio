console.log("Olá!")

// ============================= EXIBIR E OCULTAR MENU =============================

const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

const navLink = document.querySelectorAll('.nav-link')

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(c => c.addEventListener('click', linkAction))

// ============================= QUALIFICAÇÕES =============================
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)
        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification-active')
        })
        target.classList.add('qualification-active')

        tabs.forEach(tab =>{
            tab.classList.remove('qualification-active')
        })
        tab.classList.add('qualification-active')
    })
})