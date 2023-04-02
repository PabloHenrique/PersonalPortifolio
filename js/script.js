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

// ============================= SELETOR DE CORES =============================
function ShowThemes(el) {
    var display = document.getElementById(el).style.display;
    if(display == "none")
        document.getElementById(el).style.display = 'block';
    else
        document.getElementById(el).style.display = 'none';
}

function setStyleYellow(){
    document.documentElement.style.setProperty("--main-color", 59)
}

function setStyleBasic(){
    document.documentElement.style.setProperty("--main-color", 168)
}

function setStyleBlue(){
    document.documentElement.style.setProperty("--main-color", 205)
}

// ============================= GRÁFICOS =============================
const ctxFront = document.getElementById('chartFront');
const ctxBack = document.getElementById('chartBack');
const ctxOthers = document.getElementById('chartOthers');

  new Chart(ctxFront, {
    type: 'bar',
    data: {
      labels: ['HTML', 'CSS', 'JavaScript', 'React'],
      datasets: [{
        label: 'Percentual de Skills',
        data: [90, 80, 75, 70],
        backgroundColor: 'hsla(168, 69%, 61%, 0.4)',
        hoverBackgroundColor: 'hsl(168, 69%, 61%)',
        barThickness: 18,
        borderColor: 'hsla(168, 69%, 61%, 0.4)',
        borderWidth: 1
      }]
    },
    options: {
        indexAxis: 'y',
        responsive: true
    }
  });
  
  new Chart(ctxBack, {
    type: 'bar',
    data: {
      labels: ['PHP', 'Python', 'C++', 'NodeJS'],
      datasets: [{
        label: 'Percentual de Skills',
        data: [75, 90, 70, 60],
        backgroundColor: 'hsla(168, 69%, 61%, 0.4)',
        hoverBackgroundColor: 'hsl(168, 69%, 61%)',
        barThickness: 18,
        borderColor: 'hsla(168, 69%, 61%, 0.4)',
        borderWidth: 1
      }]
    },
    options: {
        indexAxis: 'y',
        responsive: true
    }
  });

  new Chart(ctxOthers, {
    type: 'bar',
    data: {
      labels: ['MySQL', 'Figma', 'Git', 'AdobeXD'],
      datasets: [{
        label: 'Percentual de Skills',
        data: [90, 80, 90, 75],
        backgroundColor: 'hsla(168, 69%, 61%, 0.4)',
        hoverBackgroundColor: 'hsl(168, 69%, 61%)',
        barThickness: 18,
        borderColor: 'hsla(168, 69%, 61%, 0.4)',
        borderWidth: 1
      }]
    },
    options: {
        indexAxis: 'y',
        responsive: true
    }
  });

// ============================= SERVIÇOS =============================
const modalViews = document.querySelectorAll('.services-modal'),
    modalBtns = document.querySelectorAll('.services-button'),
    modalCloses = document.querySelectorAll('.services-modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) =>{
    modalBtn.addEventListener('click', () =>{
        modal(i)
    })
})

modalCloses.forEach((modalClose) =>{
    modalClose.addEventListener('click', () =>{
        modalViews.forEach((modalView) =>{
            modalView.classList.remove('active-modal')
        })
    })
})