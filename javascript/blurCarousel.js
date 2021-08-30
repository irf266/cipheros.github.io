function blurCarousel() {
    var elem = document.querySelector('.carousel');
    var instance = M.Carousel.getInstance(elem);
    for (let i of instance.images) {
        if (i.classList.contains("active")) {
            i.style.filter = "none";
        } else {
            i.style.filter = "blur(5px)";
        }
    }
}