// Get the UI Elements
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let activeSlide = 0;

// get the slides
const slidesList = Array.from(slides);
const slidesCount = slidesList.length;

const nextSlide = () => {
	activeSlide += 1;
	checker();
};

const prevSlide = () => {
	activeSlide -= 1;
	checker();
};

// reset the slider
const removeActive = () => {
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

const checker = () => {
	removeActive();
	slidesList[activeSlide].classList.add("active");
};

// Triggers the next & previous slide function
next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);

checker();
