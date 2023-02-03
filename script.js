//changing color of background and cart-btn

// color6
// linear-gradient(196deg, #aaadac, #838786);


const color1 = document.getElementById("color-1");
const color2 = document.getElementById("color-2");
const color3 = document.getElementById("color-3");
const color4 = document.getElementById("color-4");
const color5 = document.getElementById("color-5");
const color6 = document.getElementById("color-6");

const background = document.getElementById("background");
const cartButton = document.getElementById("cartButton");





color1.addEventListener('click',()=>{
    color1.classList.add("selected");
    cartButton.style.background = "#944852";

    let opacity = window.getComputedStyle(
        document.querySelector('#background'), ':before'
    ).getPropertyValue('opacity');
    
    // console.log(opacity)    

    if(opacity == 0){
        background.style.setProperty("--gradient-color","linear-gradient(196deg, #f1a9a9, #e66767)")
        background.style.setProperty("--gradient-color1","linear-gradient(196deg, #f1a9a9, #e66767)")
        background.style.setProperty("--gradient-opacity1","1");
        background.style.setProperty("--gradient-opacity2","0");
    }
    else{
        background.style.setProperty("--gradient-color","linear-gradient(196deg, #f1a9a9, #e66767)")
        background.style.setProperty("--gradient-color2","linear-gradient(196deg, #f1a9a9, #e66767)")
        background.style.setProperty("--gradient-opacity2","1");
        background.style.setProperty("--gradient-opacity1","0");
    }

})

color2.addEventListener('click',()=>{
    color2.classList.add("selected");
    cartButton.style.background = "#1a1a1a";

    let opacity = window.getComputedStyle(
        document.querySelector('#background'), ':before'
    ).getPropertyValue('opacity');
    
    // console.log(opacity)    

    if(opacity == 0){
        background.style.setProperty("--gradient-color","linear-gradient(196deg, #4c4c4c, #262626)")
        background.style.setProperty("--gradient-color1","linear-gradient(196deg, #4c4c4c, #262626)")
        background.style.setProperty("--gradient-opacity1","1");
        background.style.setProperty("--gradient-opacity2","0");
    }
    else{
        background.style.setProperty("--gradient-color","linear-gradient(196deg, #4c4c4c, #262626)")
        background.style.setProperty("--gradient-color2","linear-gradient(196deg, #4c4c4c, #262626)")
        background.style.setProperty("--gradient-opacity2","1");
        background.style.setProperty("--gradient-opacity1","0");
    }

})

color4.addEventListener('click',()=>{
    color4.classList.add("selected");
    cartButton.style.background = "#5e89b2";

    let opacity = window.getComputedStyle(
        document.querySelector('#background'), ':before'
    ).getPropertyValue('opacity');
    
    // console.log(opacity)    

    if(opacity == 0){
        background.style.setProperty("--gradient-color","linear-gradient(196deg, #97afc3, #6789a7)")
        background.style.setProperty("--gradient-color1","linear-gradient(196deg, #97afc3, #6789a7)")
        background.style.setProperty("--gradient-opacity1","1");
        background.style.setProperty("--gradient-opacity2","0");
    }
    else{
        background.style.setProperty("--gradient-color","linear-gradient(196deg, #97afc3, #6789a7)")
        background.style.setProperty("--gradient-color2","linear-gradient(196deg, #97afc3, #6789a7)")
        background.style.setProperty("--gradient-opacity2","1");
        background.style.setProperty("--gradient-opacity1","0");
    }

})

color6.addEventListener('click',()=>{
    color6.classList.add("selected");
    cartButton.style.background = "#5d6160";

    let opacity = window.getComputedStyle(
        document.querySelector('#background'), ':before'
    ).getPropertyValue('opacity');
    
    // console.log(opacity)    

    if(opacity == 0){
        background.style.setProperty("--gradient-color","linear-gradient(196deg, #aaadac, #838786)")
        background.style.setProperty("--gradient-color1","linear-gradient(196deg, #aaadac, #838786)")
        background.style.setProperty("--gradient-opacity1","1");
        background.style.setProperty("--gradient-opacity2","0");
    }
    else{
        background.style.setProperty("--gradient-color","linear-gradient(196deg, #aaadac, #838786)")
        background.style.setProperty("--gradient-color2","linear-gradient(196deg, #aaadac, #838786)")
        background.style.setProperty("--gradient-opacity2","1");
        background.style.setProperty("--gradient-opacity1","0");
    }

})



