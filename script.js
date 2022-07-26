

const boom = document.getElementById(`boom`);
const clap = document.getElementById(`clap`);
const hithat = document.getElementById(`hithat`);
const kick = document.getElementById(`kick`);
const openhat = document.getElementById(`openhat`);
const ride = document.getElementById(`ride`);
const snare = document.getElementById(`snare`);
const tink = document.getElementById(`tink`);
const tom = document.getElementById(`tom`);
const buttons = document.getElementsByClassName(`buttons`);



document.addEventListener(`keydown`, (event) => {
    if(event.keyCode == 65){
        boom.style.color = `green`;
        setTimeout(() => {
            boom.style.color = `#3d2820`;
            boom.style.transition = `transform 1s`         
        }, 1200);
          boom.style.transform = `scale(0.8, 0.8)`
          boom.style.transition = `transform 1s`
          setTimeout(() => {
            boom.style.transform = `scale(1, 1)` 
            boom.style.transition = `transform 1s`         
        }, 1000);
    }
    else{
        
        console.log(event.keyCode)
       
    }
   
});

buttons.addEventListener(`mouseover`, () => {
    boom.style.transform = `scale(0.8, 0.8)`
    boom.style.transition = `transform 1s`
    setTimeout(() => {
        boom.style.transform = `scale(1, 1)`
        boom.style.transition = `transform 1s`
    }, 1000);
})