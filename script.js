
// buttons
const a = document.getElementById(`boom`);
const s = document.getElementById(`clap`);
const d = document.getElementById(`hihat`);
const f = document.getElementById(`kick`);
const g = document.getElementById(`openhat`);
const h = document.getElementById(`ride`);
const j = document.getElementById(`snare`);
const k = document.getElementById(`tink`);
const l = document.getElementById(`tom`);
const buttons = document.getElementsByClassName(`buttons`);

// sounds
let boom = new Audio("sounds/boom.wav"); 
let clap = new Audio("sounds/clap.wav");
let hihat = new Audio("sounds/hihat.wav");
let kick = new Audio("sounds/kick.wav");
let openhat = new Audio("sounds/openhat.wav");
let ride = new Audio("sounds/ride.wav");
let snare = new Audio("sounds/snare.wav");
let tink = new Audio("sounds/tink.wav");
let tom = new Audio("sounds/tom.wav");


// keyspressed
document.addEventListener(`keydown`, (event) => {
    // a -------------------------------------------
    if(event.keyCode == 65){
        a.style.color = `green`;
        a.style.transform = `scale(0.8, 0.8)`
        a.style.transition = `transform 0.5s`
        boom.pause()
        boom.currentTime = 0
        boom.play();
        setTimeout(() => {
            a.style.color = `#3d2820`; 
            a.style.transform = `` 
        }         
        , 500);
    }
        // s -------------------------------------------
        else if(event.keyCode == 83){
            s.style.color = `green`;
            s.style.transform = `scale(0.8, 0.8)`
            s.style.transition = `transform 0.5s`
            clap.pause()
            clap.currentTime = 0
            clap.play();
            setTimeout(() => {
                s.style.color = `#3d2820`; 
                s.style.transform = `` 
            }         
            , 500);
        }
        // d -------------------------------------------
        else if(event.keyCode == 68){
            d.style.color = `green`;
            d.style.transform = `scale(0.8, 0.8)`
            d.style.transition = `transform 0.5s`
            hihat.pause()
            hihat.currentTime = 0
            hihat.play();
            setTimeout(() => {
                d.style.color = `#3d2820`; 
                d.style.transform = `` 
            }         
            , 500);            
        }
        // f -------------------------------------------
        else if(event.keyCode == 70){
            f.style.color = `green`;
            f.style.transform = `scale(0.8, 0.8)`
            f.style.transition = `transform 0.5s`
            kick.pause()
            kick.currentTime = 0
            kick.play();
            setTimeout(() => {
                f.style.color = `#3d2820`; 
                f.style.transform = `` 
            }         
            , 500);            
        }
        // g -------------------------------------------
        else if(event.keyCode == 71){
            g.style.color = `green`;
            g.style.transform = `scale(0.8, 0.8)`
            g.style.transition = `transform 0.5s`
            openhat.pause()
            openhat.currentTime = 0
            openhat.play();
            setTimeout(() => {
                g.style.color = `#3d2820`; 
                g.style.transform = `` 
            }         
            , 500);            
        }
        // h -------------------------------------------
        else if(event.keyCode == 72){
            h.style.color = `green`;
            h.style.transform = `scale(0.8, 0.8)`
            h.style.transition = `transform 0.5s`
            ride.pause()
            ride.currentTime = 0
            ride.play();
            setTimeout(() => {
                h.style.color = `#3d2820`; 
                h.style.transform = `` 
            }         
            , 500);            
        }
        // j -------------------------------------------
        else if(event.keyCode == 74){
            j.style.color = `green`;
            j.style.transform = `scale(0.8, 0.8)`
            j.style.transition = `transform 0.5s`
            snare.pause()
            snare.currentTime = 0
            snare.play();
            setTimeout(() => {
                j.style.color = `#3d2820`; 
                j.style.transform = `` 
            }         
            , 500);            
        }
        // k -------------------------------------------
        else if(event.keyCode == 75){
            k.style.color = `green`;
            k.style.transform = `scale(0.8, 0.8)`
            k.style.transition = `transform 0.5s`
            tink.pause()
            tink.currentTime = 0
            tink.play();
            setTimeout(() => {
                k.style.color = `#3d2820`; 
                k.style.transform = `` 
            }         
            , 500);            
        }
        // l -------------------------------------------
        else if(event.keyCode == 76){
            l.style.color = `green`;
            l.style.transform = `scale(0.8, 0.8)`
            l.style.transition = `transform 0.5s`
            tom.pause()
            tom.currentTime = 0
            tom.play();
            setTimeout(() => {
                l.style.color = `#3d2820`; 
                l.style.transform = `` 
            }         
            , 500);            
        }
        console.log(`KeyPressed ${event.key.toUpperCase()} ${event.keyCode}`);
    })
    
    // buttons clicked
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener(`click`, () => {
            // a ------------------------------------------- 0
            if(i == 0){
                a.style.color = `green`;
                a.style.transform = `scale(0.8, 0.8)`
                a.style.transition = `transform 0.5s`
                boom.pause()
                boom.currentTime = 0
                boom.play();
                setTimeout(() => {
                    a.style.color = `#3d2820`; 
                    a.style.transform = `` 
                }         
                , 500);
                console.log("Clicked button A")  
            }
            // s ------------------------------------------- 1
            else if(i == 1){
                s.style.color = `green`;
                s.style.transform = `scale(0.8, 0.8)`
                s.style.transition = `transform 0.5s`
                clap.pause()
                clap.currentTime = 0
                clap.play();
                setTimeout(() => {
                    s.style.color = `#3d2820`; 
                    s.style.transform = `` 
                }         
                , 500);
                console.log("Clicked button S")
            }
                // d ------------------------------------------- 2
            else if(i == 2){
                d.style.color = `green`;
                d.style.transform = `scale(0.8, 0.8)`
                d.style.transition = `transform 0.5s`
                hihat.pause()
                hihat.currentTime = 0
                hihat.play();
                setTimeout(() => {
                    d.style.color = `#3d2820`; 
                    d.style.transform = `` 
                }         
                , 500);
                console.log("Clicked button D")          
            }
            // f ------------------------------------------- 3
            else if(i == 3){
                f.style.color = `green`;
                f.style.transform = `scale(0.8, 0.8)`
                f.style.transition = `transform 0.5s`
                kick.pause()
                kick.currentTime = 0
                kick.play();
                setTimeout(() => {
                    f.style.color = `#3d2820`; 
                    f.style.transform = `` 
                }         
                , 500);
                console.log("Clicked button F")            
            }
            // g ------------------------------------------- 4
            else if(i == 4){
                g.style.color = `green`;
                g.style.transform = `scale(0.8, 0.8)`
                g.style.transition = `transform 0.5s`
                openhat.pause()
                openhat.currentTime = 0
                openhat.play();
                setTimeout(() => {
                    g.style.color = `#3d2820`; 
                    g.style.transform = `` 
                }         
                , 500);
                console.log("Clicked button G")            
            }
            // h ------------------------------------------- 5
            else if(i == 5){
                h.style.color = `green`;
                h.style.transform = `scale(0.8, 0.8)`
                h.style.transition = `transform 0.5s`
                ride.pause()
                ride.currentTime = 0
                ride.play();
                setTimeout(() => {
                    h.style.color = `#3d2820`; 
                    h.style.transform = `` 
                }         
                , 500);
                console.log("Clicked button H")            
            }
            // j ------------------------------------------- 6
            else if(i == 6){
                j.style.color = `green`;
                j.style.transform = `scale(0.8, 0.8)`
                j.style.transition = `transform 0.5s`
                snare.pause()
                snare.currentTime = 0
                snare.play();
                setTimeout(() => {
                    j.style.color = `#3d2820`; 
                    j.style.transform = `` 
                }         
                , 500);
                console.log("Clicked button J")            
            }
            // k ------------------------------------------- 7
            else if(i == 7){
                k.style.color = `green`;
                k.style.transform = `scale(0.8, 0.8)`
                k.style.transition = `transform 0.5s`
                tink.pause()
                tink.currentTime = 0
                tink.play();
                setTimeout(() => {
                    k.style.color = `#3d2820`; 
                    k.style.transform = `` 
                }         
                , 500);
                console.log("Clicked button K")            
            }
            // l ------------------------------------------- 8
            else if(i == 8){
                l.style.color = `green`;
                l.style.transform = `scale(0.8, 0.8)`
                l.style.transition = `transform 0.5s`
                tom.pause()
                tom.currentTime = 0
                tom.play();
                setTimeout(() => {
                    l.style.color = `#3d2820`; 
                    l.style.transform = `` 
                }         
                , 500);
                console.log("Clicked button L")            
            }                               
        })
    }