let slideIndex = 0;

const showSlides =() => {

    const slides = document.getElementsByClassName("myslides")
    for(let i=0; i < slides.length; i++){
        slides[i].style.display = "none"
    }

    slideIndex++;

    if(slideIndex > slides.length-1){
        slideIndex = 1;
    }

    slides[slideIndex-1].style.display = "block";



    setTimeout(showSlides, 4000);
};

showSlides();