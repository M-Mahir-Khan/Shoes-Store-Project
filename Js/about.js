let text = document.getElementById("about-text");
let leaf = document.getElementById("leaf");
let hill1 = document.getElementById("hill1");
let hill4 = document.getElementById("hill4");
let hill5 = document.getElementById("hill5");


window.addEventListener("scroll",()=>{
    let value = window.scrollY;
    text.style.transform = `translateY(${value * 2.5}px)`;
    leaf.style.transform = `translate(${value * 1.5}px, ${value * -1.5}px)`;
    hill5.style.transform = `translateX(${value * 1.5}px)`;
    hill4.style.transform = `translateX(${-value * 1.5}px)`;
    hill1.style.transform = `translateY(${value * 1}px)`;
})