$(document).ready(function () {
    var currentIndex = 0;
    var slides = $(".slider-inner img");
    var totalSlides = slides.length;

    function updateSlide() {
        slides.removeClass("active");
        slides.eq(currentIndex).addClass("active");
    }

    $(".next").click(function () {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlide();
        $(".prev").show(); // Show the left arrow when moving forward
    });

    $(".prev").click(function () {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlide();
        if (currentIndex === 0) {
            $(".prev").hide(); // Hide the left arrow at the beginning
        }
    });
});
