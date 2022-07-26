

const a = document.getElementById(`boom`);
const s = document.getElementById(`clap`);
const d = document.getElementById(`hithat`);
const f = document.getElementById(`kick`);
const g = document.getElementById(`openhat`);
const h = document.getElementById(`ride`);
const j = document.getElementById(`snare`);
const k = document.getElementById(`tink`);
const l = document.getElementById(`tom`);
const buttons = document.getElementsByClassName(`buttons`);

let boom = new Audio("sounds/boom.wav");


document.addEventListener(`keydown`, (event) => {
    if(event.keyCode == 65){
        a.style.color = `green`;
        boom.play();
        setTimeout(() => {
            a.style.color = `#3d2820`;
            a.style.transition = `transform 0.5s`         
        }, 600);
          a.style.transform = `scale(0.8, 0.8)`
          a.style.transition = `transform 0.5s`
          setTimeout(() => {
            a.style.transform = `` 
            a.style.transition = `transform 0.5s`         
        }, 500);
    }
    else{
        
        console.log(event.keyCode)
       
    }
   
});

buttons.addEventListener(`mouseover`, () => {
    a.style.transform = `scale(0.8, 0.8)`
    a.style.transition = `transform 1s`
    setTimeout(() => {
        a.style.transform = `scale(1, 1)`
        a.style.transition = `transform 1s`
    }, 1000);
})