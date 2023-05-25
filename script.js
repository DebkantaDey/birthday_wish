$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: [ "Student", "Developer", "Designer", ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Student", "Developer", "Designer", ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');

function showSlide(index) {
  if (index >= slides.length) {
    index = 0;
  } else if (index < 0) {
    index = slides.length - 1;
  }

  // Hide all slides except for the active one
  slides.forEach(slide => {
    slide.classList.remove('active');
  });

  // Show the active slide
  slides[index].classList.add('active');
}

function slideNext() {
  slideIndex++;
  showSlide(slideIndex);
  if (slideIndex === slides.length - 1) {
    slideIndex = -1; // Reset slideIndex to 0
  }
}

// Show the first slide
showSlide(slideIndex);

// Start the slideshow
setInterval(slideNext, 3000);




let secondHand= document.getElementById('sechand');
let rotationAngle = 270;

    // Update the rotation angle every second
    setInterval(() => {
      // Increment the rotation angle by 6 degrees (6 degrees = 1 second)
      rotationAngle += 6;

      // Rotate the second hand
      secondHand.style.transform = `rotate(${rotationAngle}deg)`;

      // Check if the rotation angle is 360 degrees
      if (rotationAngle === 360) {
        // Show the hidden picture
        const ShowingPicture = document.getElementById("showingPicture");
        ShowingPicture.style.display = "none";

        const hiddenPicture = document.getElementById("hiddenPicture");
        hiddenPicture.style.display = "block";
        
        const hiddenHand = document.getElementById("sechand");
        hiddenHand.style.display = "none";
      }
    }, 1000);

    // For gallery page sliding

   // Variables
// const image = document.querySelector('.image');
// const images = Array.from(image.children);
// const dotsContainer = document.querySelector('.dots-container');
// let currentIndex = 0;
// const intervalTime = 3000; // Change this value to adjust the interval time (in milliseconds)

// // Create dots
// function createDots() {
//   images.forEach((_, index) => {
//     const dot = document.createElement('span');
//     dot.classList.add('dot');
//     dotsContainer.appendChild(dot);
//     dot.addEventListener('click', () => {
//       currentIndex = index;
//       updateSlider();
//       updateDots();
//     });
//   });
//   dotsContainer.children[currentIndex].classList.add('active');
// }

// // Update slider
// function updateSlider() {
//   image.style.transform = `translateX(-${currentIndex * 33.33}%)`;
// }

// // Update dots
// function updateDots() {
//   dotsContainer.querySelector('.active').classList.remove('active');
//   dotsContainer.children[currentIndex].classList.add('active');
// }

// // Slide to next image
// function slideNext() {
//   currentIndex++;
//   if (currentIndex >= images.length) {
//     currentIndex = 0;
//   }
//   updateSlider();
//   updateDots();
// }

// // Auto slide
// setInterval(slideNext, intervalTime);

// // Initialize gallery slider
// createDots();

document.addEventListener("DOMContentLoaded", function() {
  var sliderTrack = document.querySelector(".slider-track");
  var sliderSlides = document.querySelectorAll(".slider-slide");
  var dotsContainer = document.querySelector(".dots");
  var dots = [];
  var currentSlide = 0;

  // Create dots and add click event listeners
  for (var i = 0; i < sliderSlides.length; i++) {
    var dot = document.createElement("span");
    dotsContainer.appendChild(dot);
    dots.push(dot);
  }

  // Set the initial active dot
  dots[currentSlide].classList.add("active");

  // Start the automatic sliding
  setInterval(function() {
    var nextSlide = (currentSlide + 1) % sliderSlides.length;
    goToSlide(nextSlide);
  }, 3000);

  // Function to go to a specific slide
  function goToSlide(slide) {
    sliderTrack.style.transform = "translateX(" + (-slide * 100) + "%)";
    dots[currentSlide].classList.remove("active");
    dots[slide].classList.add("active");
    currentSlide = slide;
  }
});
