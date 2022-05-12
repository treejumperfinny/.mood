document.addEventListener("DOMContentLoaded", () => {
  fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
    .then((response) => response.json())
    .then((quotes) => renderSwansonQuotes(quotes))
  fetch('https://favqs.com/api/qotd')
    .then((response) => response.json())
    .then((quotes) => renderQuotesOfTheDay(quotes))
  fetch('https://movie-quote-api.herokuapp.com/v1/quote/')
    .then((response) => response.json())
    .then((quotes) => renderMovieQuotes(quotes))
})

const renderSwansonQuotes = (quotes) => {
  let quoteTxt = document.getElementById("quotes-1");
  quoteTxt.innerText = `${quotes}-Ron Swanson`;
};

const renderQuotesOfTheDay = (quotes) => {
  let quoteTxt = document.getElementById("quotes-2");
  quoteTxt.innerText = `${quotes.quote.body}-${quotes.quote.author}`;
};

const renderMovieQuotes = (quotes) => {
  let quoteTxt = document.getElementById("quotes-3");
  quoteTxt.innerText = `${quotes.quote}-${quotes.show}`;
};


//Funny picture changing thing
// function emojiPic() {
//   let emoji = document.getElementById('emoji-pic');
//   if (Image.src.match("img/more.jpg")){
//     Image.src = "img/less.jpg";
//   }
//   else {
//     Image.src="img/more.jpg"
//   }
// }

//Carousel assessment pics and stuff
// const track = document.querySelector('.carousel_track');
// const slides = Array.from(track.children);
// const nextButton = document.querySelector('.carousel_button--right');
// const prevButton = document.querySelector('.carousel_button--left');
// const dotNav = document.querySelector('.carousel_nav');
// const dots = Array.from(dotNav.children);
// const slideWidth = slides[0].getBoundingClientRect().width;

// const setSlidePosition = (slide, index) => {
//   slide.style.left = slideWidth * index + 'px';
// }
// slides.forEach((setSlidePosition));

// const moveToSlide = (track, currentSlide, targetSlide) => {
//   track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
//   currentSlide.classList.remove('current-slide');
//   targetSlide.classList.add('current-slide');
// }

// const updateDots = (currentDot, targetDot) => {
//   currentDot.classList.remove('current-slide');
//   targetDot.classList.add('current-slide');
// }

// prevButton.addEventListener('click', e => {
//   const currentSlide = track.querySelector('.current-slide');
//   const prevSlide = currentSlide.previousElementSibling;
//   const currentDot = dotNav.querySelector('.current-slide');
//   const prevDot = currentDot.previousElementSibling;
  
//   moveToSlide(track, currentSlide, prevSlide)
//   updateDots(currentDot, prevDot);
// })

// nextButton.addEventListener('click', e => {
//   const currentSlide = track.querySelector('.current-slide');
//   const nextSlide = currentSlide.nextElementSibling;
//   const currentDot = dotNav.querySelector('.current-slide');
//   const nextDot = currentDot.nextElementSibling;

//   moveToSlide(track, currentSlide, nextSlide);
//   updateDots(currentDot, nextDot);
// })

// dotNav.addEventListener('click', e => {
//   const targetDot = e.target.closest('button');
//     if (!targetDot) return;

//   const currentSlide = track.querySelector('.current-slide');
//   const currentDot = dotNav.querySelector('.current-slide'); 
//   const targetIndex = dots.findIndex(dot => dot === targetDot);
//   const targetSlide = slides[targetIndex];

//   moveToSlide(track, currentSlide, targetSlide);
//   updateDots(currentDot, targetDot);

//   if (targetIndex === 0) {
//     prevButton.classList.add('is-hidden');
//     nextButton.classList.remove('is-hidden');
//   } else if (targetIndex === slides.lenght - 1) {
//     prevButton.classList.remove('is-hidden');
//     nextButton.classList.add('is-hidden');
//   } else {
//     prevButton.classList.remove('is-hidden');
//     nextButton.classList.remove('is-hidden');
//   }
// })

let form = document.getElementById('short-diary');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = document.getElementById('short-diary');
  const blurb = form.elements['blurb'];
  const entry = form.elements['entry'];
  let blurbTitle = blurb.value;
  let entryLog = entry.value;
})

form.addEventListener('submit', (happen) => {
  happen.preventDefault();
  let quiz = document.getElementById('quiz-score');
  let quizNum = form.elements['score'];
  let score = quizNum.value;
})
//FORM NEEDS POST


// let audioButton = document.querySelector(".audio-button");
// audioButton.addEventListener("click", function () {
//   var audio = document.getElementById("audio");

//   if (audio.paused) {
//     audio.play();
//   } else {
//     audio.pause();
//   }
// });

