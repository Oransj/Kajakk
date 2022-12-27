let currentSlide = 1;
showSlideAt(currentSlide);

function jumpToSlidesPlus(n) {
    currentSlide += n;
    showSlideAt(currentSlide);
}

function jumpTo(n) {
    currentSlide = n;
    showSlideAt(currentSlide);
}

function showSlideAt(slide) {
    let slides = document.getElementsByClassName("slide");
    let markers = document.getElementsByClassName("dot");
    if (slide > slides.length) {
        currentSlide = 1;
    }
    else if (slide <= 0) {
        currentSlide = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].getElementsByClassName.display = "none";
    }
    for (let i = 0; i < markers.length; i++) {
        markers[i].className = markers[i].className.replace("active", "");
    }
    slides[currentSlide-1].style.display = "block";
    markers[currentSlide-1].className += "active";
}