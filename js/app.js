// Get the UI Elements
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let activeSlide = 0;

// reset the slider
const slidesList = Array.from(slides);
const slidesCount = slidesList.length;

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);

function nextSlide() {
	activeSlide += 1;
	checker();
}

function prevSlide() {
	activeSlide -= 1;
	checker();
}

function checker() {
	removeActive();
	slidesList[activeSlide].classList.add("active");
}

checker();

function removeActive() {
	slidesList.forEach(function removeActive(slide) {
		slide.classList.remove("active");
	});
  console.log(activeSlide);
	// check if the current slide is the first one
	if (activeSlide == 0) {
    prev.classList.add("disabled");
	} else {
    prev.classList.remove("disabled");
  }
  
	// check if the current slide is the last one
	if (activeSlide == slidesCount - 1) {
		next.classList.add("disabled");
	} else {
		next.classList.remove("disabled");
	}
}
