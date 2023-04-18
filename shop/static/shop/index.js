// variable initialization
let arrow_left = [...document.getElementsByClassName('carousel-control-prev')];
let arrow_right = [...document.getElementsByClassName('carousel-control-next')];
let wrappers = Array.from(document.getElementsByClassName('carousel-wrapper'));
let slides = [...document.getElementsByClassName('carousel-slide')];
// let cards = [...document.getElementsByClassName('card')];

let slideIndex = 0;

wrappers.forEach((wrap) =>{
    let nSlides = wrap.children.length;
    // console.log(nSlides);
    let wrapper_len = 1400 * nSlides;
    wrap.style.width = wrapper_len + "px";
})


// Sliding the carousel
let slideRight = function(){
    slideIndex--;
    let Position = 1400 * slideIndex;
    wrappers.forEach(wrap =>{
        wrap.style.transform = "translateX(" + Position + "px)"
    })
}

let slideLeft = function(){
    slideIndex++;
    let Position = 1400 * slideIndex;
    wrappers.forEach(wrap =>{
        wrap.style.transform = "translateX(" + Position + "px)"
    })
}

arrow_left.forEach(left =>{
    if(slideIndex == 0){
        left.removeEventListener('click', slideRight)
    }
    else if(slideIndex > 0){
        left.addEventListener('click', slideRight)
    }  
})

arrow_right.forEach(right =>{
    if(slideIndex == slides.length -1){
        right.removeEventListener('click', slideLeft)
    }
    else if(slideIndex < slides.length -1){
        right.addEventListener('click', slideLeft)
    }   
})