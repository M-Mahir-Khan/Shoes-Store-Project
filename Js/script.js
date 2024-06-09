// active navbar    

let nav = document.querySelector(".navigation-wrap")
window.onscroll = function () {
    if (document.documentElement, screenTop > 20) {
        nav.classList.add("scroll-on")
    } else {
        nav.classList.remove("scroll-on")
    }
}

// nav hide
let navBar = document.querySelectorAll('.nav-link')
let newCollapse = document.querySelector(".navbar-collapse.collapse")
navBar.forEach(function (a) {
    a.addEventListener("click", function () {
        newCollapse.classList.remove("show")
    })
}
)

// rotating banner

let rotationAngle = 0;

document.getElementById('next').addEventListener('click', () => {
    rotationAngle += 90;  // 360 degrees / 4 items = 90 degrees per item
    document.querySelector('.circle-menu').style.transform = `rotate(${rotationAngle}deg)`;
    moveSlide(true)
});

document.getElementById('prev').addEventListener('click', () => {
    rotationAngle -= 90;
    document.querySelector('.circle-menu').style.transform = `rotate(${rotationAngle}deg)`;
    moveSlide(false)
});


const slides = document.getElementById("slides");
const totalSlides = document.querySelectorAll("#slides img").length;
let translateValue = 0;

function moveSlide(n) {
    if (n === true) {
        translateValue -= 100;
    } else {
        translateValue += 100;
    }

    // Check if slide needs to loop back to the start or end
    if (translateValue === -100 * totalSlides) {
        translateValue = 0;
    } else if (translateValue === 100) {
        translateValue = -100 * (totalSlides - 1);
    }

    slides.style.transform = `translateX(${translateValue}%)`;
}

//  counter design

document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range)),
            timer = setInterval(() => {
                current += increment;
                obj.textContent = current;
                if (current == end) {
                    clearInterval(timer)
                }
            }, step);
    }
    counter("count1", 0, 1287, 3000)
    counter("count2", 100, 5768, 2500)
    counter("count3", 0, 1440, 3000)
    counter("count4", 0, 7110, 3000)
})

// shoes view
const images = document.querySelectorAll(".side-img-container img");
const mainImg = document.querySelector(".img-view-container img")
// console.log(images);

const imageSources = [
    "../Images/img-view-shoes/shoe1.png",
    "../Images/img-view-shoes/shoe2.png",
    "../Images/img-view-shoes/shoe3.png",
    "../Images/img-view-shoes/shoe4.png",
    "../Images/img-view-shoes/shoe5.png"
];

// Add click event listeners to each image
images.forEach((item, index) => {
    item.addEventListener("click", () => {
        mainImg.src = imageSources[index];
    });
});



// Cloths effect 

