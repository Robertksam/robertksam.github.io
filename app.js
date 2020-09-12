
let btn = document.getElementById("btn");
let hide = document.querySelector(".hide");
let two = document.querySelector(".two");

btn.addEventListener("click" , ()=>{
    btn.style.display = "none";
    hide.style.display = "none";
    two.style.display = "block";
})

const heartRain = function(){
    const heart = document.createElement("div");
    heart.innerHTML = "💜";
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "%";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
   
    document.body.appendChild(heart);
   
    setTimeout(()=>{
        heart.remove();
    }, 3000)
}


setInterval(heartRain , 70);

    window.addEventListener("click",()=>{
        document.body.style.backgroundColor = changeBackground();
    })

changeBackground=()=>{
    return `hsl(${Math.floor(Math.random() * 360)},100%,50%)`
}

