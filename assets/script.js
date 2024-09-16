const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const prev = document.querySelector('#arrow_left');
const next = document.querySelector('#arrow_right');
const img = document.querySelector('#banner').querySelector('img');
const text = document.querySelector('#banner').querySelector('p');
const dots = document.querySelector('.dots');
let currentSlide = 0;


slides.forEach(() => {
	dots.innerHTML += `<span class="dot" value="${currentSlide++}"></span>`
})

const dotsClick = document.querySelectorAll('.dot');

currentSlide = 0;

dotsClick.forEach(el => {
	el.addEventListener('click',dot)
})

dotsClick[0].classList.add('active');

function slide(){
	if((slides.length-1) == currentSlide )
		currentSlide = -1
	dotsClick[++currentSlide].click()

	return true;
}

function dot(event){
	dotsClick.forEach(el => {
		el.classList.remove('active');
	})
	currentSlide = event.target.getAttribute('value');

	img.setAttribute('src', `./assets/images/slideshow/${slides[currentSlide].image}`);
	text.innerHTML = slides[currentSlide].tagLine

	event.target.classList.toggle('active');
	return true;
}

function slide_left(){
	if(currentSlide == 0)
		currentSlide = slides.length
	dotsClick[--currentSlide].click()

	return true;
}

setInterval(slide,3000)

next.addEventListener('click', slide);
prev.addEventListener('click', slide_left);
