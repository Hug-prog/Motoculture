"use strict";

// nav bar 
let recupNav = document.querySelector(".home_navbar");

window.addEventListener('scroll',navScroll);

function navScroll(){
    if(window.scrollY>30){
        recupNav.style.background = '#35dca2';
    }
    else{
        recupNav.style.background = 'none';
    }
}

// shop

let recupListA = document.getElementById('link-shop');
let recupLi = recupListA.querySelectorAll('li');

let tab = [];
let cpt=0;

for(let i=0;i<recupLi.length;i++){
    recupLi[i].addEventListener('click',showObj);
    function showObj(){
        cpt++;
        
        if(cpt>=2){
            let recupDivTab=document.querySelector('.shop_content_box'+tab[0]);
            recupDivTab.style.display='none';
            tab=[];
        }

        let recupAttr = recupLi[i].getAttribute('data-box');
        let recupDiv = document.querySelector('.shop_content_box'+recupAttr);
        tab.push(recupAttr);

        if(recupDiv.style.display == 'flex'){
            recupDiv.style.display ='none'; 
        }else{
            recupDiv.style.display = 'flex';
        }

    }

}


// about carousel

let arrowLeft  = document.querySelector('.aboutUs_arrowLeft');
let arrowRight = document.querySelector('.aboutUs_arrowRight');

arrowLeft.addEventListener('click',affLeft);
arrowRight.addEventListener('click',affRight);
 
let slidePos = 0;
let slides = document.getElementsByClassName('aboutUs_content_box');
let totalslide = slides.length;


function affLeft(){
    movePreviousSlide();
}

function affRight(){
    moveNextSlide();
}

function updateSlidePos(){
    for(let slide of slides){
        slide.classList.remove('aboutUs_content_box_visible');
    }
    slides[slidePos].classList.add('aboutUs_content_box_visible');
}

function moveNextSlide(){
    updateSlidePos();
    if(slidePos == totalslide-1){
        slidePos=0;
    }else{
        slidePos++;
    }
}


function movePreviousSlide(){
    updateSlidePos();
    if(slidePos == 0){
        slidePos=totalslide-1;
    }else{
        slidePos--;
    }
}

