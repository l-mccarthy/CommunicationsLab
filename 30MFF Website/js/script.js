////Mouse Interaction

function getRelativeCoordinates(mouse, element) {
    let rect = element.getBoundingClientRect();
    return {
        x: mouse.clientX - rect.left,
        y: mouse.clientY - rect.top
    };
}

var sections = document.getElementsByClassName('tdItem');
for (let i = 0; i < sections.length; i++) {
    sections[i].addEventListener('mouseenter', function () {
    });
    sections[i].addEventListener('mousemove', function (mouse) {
        coords = getRelativeCoordinates(mouse, sections[i]);
        coords.x /= sections[i].clientWidth;
        coords.y /= sections[i].clientHeight;
        sections[i].style.color = 'rgb(' + 211 / coords.y + ', ' + 211 / coords.y + ', ' + 211 / coords.y + ')';
        sections[i].style.backgroundColor = 'rgb(' + 211 * coords.y + ', ' + 211 * coords.y + ', ' + 211 * coords.y + ')';
    });
    sections[i].addEventListener('mouseleave', function () {
    });
}

////Slideshow Interaction

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

////Smooth Scroll

$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // 800 specifies no. of milliseconds it takes to scroll to specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});
