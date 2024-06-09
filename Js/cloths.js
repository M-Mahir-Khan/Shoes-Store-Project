const clothsCard = document.querySelectorAll("#cloths .card")

clothsCard.forEach((card) => {
    const smallImg = card.querySelectorAll("#cloths .card-imgs-container img");
    const mainImg = card.querySelector("#cloths .product-img img")

    smallImg.forEach((img)=>{
        img.addEventListener("mouseenter",()=>{
            
            mainImg.src = img.src

        })
    })

})