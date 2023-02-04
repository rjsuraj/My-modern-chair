//changing color of background and cart-btn




const color1 = document.getElementById("color-1");
const color2 = document.getElementById("color-2");
const color3 = document.getElementById("color-3");
const color4 = document.getElementById("color-4");
const color5 = document.getElementById("color-5");
const color6 = document.getElementById("color-6");

const background = document.getElementById("background");
const cartButton = document.getElementById("cartButton");
const chair = document.getElementById("chair");


const detail = document.getElementById("detail");
const detailArea = document.getElementById("details-area");
const desc = document.getElementById("desc");
const descArea = document.getElementById("description-area");

// woking on description and details section

detail.addEventListener('click',()=>{
    descArea.classList.remove("text-selected")
    detailArea.classList.add("text-selected")
    
    desc.classList.remove("visible")
    detail.classList.add("visible")

    detail.style.setProperty("--op2","1")
    desc.style.setProperty("--op1","0.8")

})

desc.addEventListener('click',()=>{
    detailArea.classList.remove("text-selected")
    descArea.classList.add("text-selected")

    detail.classList.remove("visible")
    desc.classList.add("visible")

    desc.style.setProperty("--op1","1")
    detail.style.setProperty("--op2","0.8")
})

function startanimation(element) {

    element.classList.add("shakeEffect");

    element.addEventListener( "animationend",  function() {

      element.classList.remove("shakeEffect");  	

    } );

}



color1.addEventListener('click',()=>{
    color1.classList.add("selected");
    color2.classList.remove("selected");
    color3.classList.remove("selected");
    color4.classList.remove("selected");
    color5.classList.remove("selected");
    color6.classList.remove("selected");
    cartButton.style.background = "#944852";

    chair.src = "assets/chair-1.png";
    chair.addEventListener("click", startanimation(chair));

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
    color1.classList.remove("selected");
    color3.classList.remove("selected");
    color4.classList.remove("selected");
    color5.classList.remove("selected");
    color6.classList.remove("selected");
    cartButton.style.background = "#1a1a1a";

    chair.src = "assets/chair-2.png";
    chair.addEventListener("click", startanimation(chair));

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

color3.addEventListener('click',()=>{
    color3.classList.add("selected");
    color1.classList.remove("selected");
    color2.classList.remove("selected");
    color4.classList.remove("selected");
    color5.classList.remove("selected");
    color6.classList.remove("selected");
    cartButton.style.background = "#40566e";

    chair.src = "assets/chair-3.png";
    chair.addEventListener("click", startanimation(chair));

    let opacity = window.getComputedStyle(
        document.querySelector('#background'), ':before'
    ).getPropertyValue('opacity');
    
    // console.log(opacity)    

    if(opacity == 0){
        background.style.setProperty("--gradient-color","linear-gradient(196deg, #8a9fb2, #5f7991")
        background.style.setProperty("--gradient-color1","linear-gradient(196deg, #8a9fb2, #5f7991")
        background.style.setProperty("--gradient-opacity1","1");
        background.style.setProperty("--gradient-opacity2","0");
    }
    else{
        background.style.setProperty("--gradient-color","linear-gradient(196deg, #8a9fb2, #5f7991")
        background.style.setProperty("--gradient-color2","linear-gradient(196deg, #8a9fb2, #5f7991")
        background.style.setProperty("--gradient-opacity2","1");
        background.style.setProperty("--gradient-opacity1","0");
    }

})

color4.addEventListener('click',()=>{
    color4.classList.add("selected");
    color1.classList.remove("selected");
    color3.classList.remove("selected");
    color2.classList.remove("selected");
    color5.classList.remove("selected");
    color6.classList.remove("selected");
    cartButton.style.background = "#5e89b2";

    chair.src = "assets/chair-4.png";
    chair.addEventListener("click", startanimation(chair));

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

color5.addEventListener('click',()=>{
    color5.classList.add("selected");
    color1.classList.remove("selected");
    color3.classList.remove("selected");
    color4.classList.remove("selected");
    color2.classList.remove("selected");
    color6.classList.remove("selected");
    cartButton.style.background = "#8c7f76";

    chair.src = "assets/chair-5.png";
    chair.addEventListener("click", startanimation(chair));

    let opacity = window.getComputedStyle(
        document.querySelector('#background'), ':before'
    ).getPropertyValue('opacity');
    
    // console.log(opacity)    

    if(opacity == 0){
        background.style.setProperty("--gradient-color","linear-gradient(196deg, #afa6a0, #8c7f76")
        background.style.setProperty("--gradient-color1","linear-gradient(196deg, #afa6a0, #8c7f76")
        background.style.setProperty("--gradient-opacity1","1");
        background.style.setProperty("--gradient-opacity2","0");
    }
    else{
        background.style.setProperty("--gradient-color","linear-gradient(196deg, #afa6a0, #8c7f76")
        background.style.setProperty("--gradient-color2","linear-gradient(196deg, #afa6a0, #8c7f76")
        background.style.setProperty("--gradient-opacity2","1");
        background.style.setProperty("--gradient-opacity1","0");
    }

})

color6.addEventListener('click',()=>{
    color6.classList.add("selected");
    color1.classList.remove("selected");
    color3.classList.remove("selected");
    color4.classList.remove("selected");
    color5.classList.remove("selected");
    color2.classList.remove("selected");
    cartButton.style.background = "#5d6160";

    chair.src = "assets/chair-6.png";
    chair.addEventListener("click", startanimation(chair));
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



