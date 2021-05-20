// ANIMATE AOS
$(function () {
    AOS.init();
});
// NAVBAR COME UP AFTER SCROLLING
$(function () {
    $(document).scroll(function () {
        const nav = document.querySelector('nav');
        const banner = document.querySelector('.banner-wrapper');
        $(nav).toggleClass('scrolled', $(this).scrollTop() > ($(banner).height() / 2) - 150);
    });
});
// SHOW AND HIDE THE NAVIGATION AFTER CLICK
$(document).ready(function () {
    $('.navigate').hide();

    $('.nav-toggle').click(function () {
        $(".navigate").slideToggle("slow");
        $(".navigate").addClass("opened");
    });

    $('.close-nav').click(function () {
        $(".navigate").slideToggle("slow");
        $(".navigate").removeClass("opened");
    });

});

// HIDE THE NAVBAR IF CLICKED ANYWHERE OUTSIDE THE NAVIGATE
$(document).mouseup(function (e) {
    var container = $(".navigate");
    var openbtn = $(".nav-toggle")
    // if the target of the click isn't the container nor a descendant of the container
    if (container.hasClass("opened") && (!container.is(e.target) && container.has(e.target).length === 0)) {
        $(".navigate").removeClass("opened");
        $('.navigate').slideToggle();
    }
});


// TYPING EFFECT
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Frontend Developer.", "Student.", "Creator."];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing"))
            cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing"))
            cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(
            0,
            charIndex - 1
        );
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    // On DOM Load initiate the effect
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});


// RESUME