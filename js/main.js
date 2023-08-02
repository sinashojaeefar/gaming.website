let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.menu');

menu.onclick = () => {
   navbar.classList.toggle('active');
   menu.classList.toggle('move'); 
   bell.classList.remove('active');
}


// notification
let bell = document.querySelector('.notification');

document.querySelector("#bell-icon").onclick = () => {
   bell.classList.toggle('active');
}


//slider
const sliderContainer = document.querySelector('.slider-container');
const sliderTrack = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.slider-slide');
const buyButtons = document.querySelectorAll('.buy-button');
let currentIndex = 0;

function updateSliderPosition() {
  const slideWidth = slides[0].clientWidth;
  sliderTrack.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
}

function showSlide(index) {
  currentIndex = index;
  updateSliderPosition();
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSliderPosition();
}

// Automatic slide change every 5 seconds
setInterval(nextSlide, 3000);

// Add click event listeners to Buy buttons
buyButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // Replace this alert with your desired action for the Buy button.
    alert(`You clicked Buy for Game ${index + 1}`);
  });
});


//swiper

var swiper = new Swiper(".trending-content", {
   slidesPerView: 1,
   spaceBetween: 10,
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },

   autoplay: {
      delay: 4000,
      disableOnInteraction: false,
   },

   breakpoints: {
     640: {
       slidesPerView: 2,
       spaceBetween: 10,
     },
     768: {
       slidesPerView: 3,
       spaceBetween: 15,
     },
     1024: {
       slidesPerView: 4,
       spaceBetween: 20,
     },
   },
 });


 //sellers
 const bestSellersData = [
  { 
    title: "Pubg", 
    price: "$14.99", 
    rating: "4.9/5", 
    image: "img/pubg.png" 
  },

  { 
    title: "nba23", 
    price: "$49.99", 
    rating: "4.7/5", 
    image: "img/nba23.jpg" 
  },

  { 
    title: "clash royale", 
    price: "free", 
    rating: "4.8/5", 
    image: "img/clashroyale.jpg" 
  },

  { 
    title: "W2K23", 
    price: "$59.99", 
    rating: "4.7/5", 
    image: "img/w2k23.jpg" 
  },

  { 
    title: "FC24", 
    price: "$69.99", 
    rating: "4.8/5", 
    image: "img/FC24.jpg" 
  },

  { 
    title: "Call of Duty", 
    price: "$59.99", 
    rating: "4.7/5", 
    image: "img/callofduty.webp" 
  },

  { 
    title: "Rocket League", 
    price: "free", 
    rating: "4.9/5", 
    image: "img/rocketleague.jpg" 
  },

  { 
    title: "GTA V", 
    price: "$14.99", 
    rating: "4.7/5", 
    image: "img/gta.png" 
  },

];


//blog
document.addEventListener('DOMContentLoaded', function() {
  const readMoreLinks = document.querySelectorAll('.read-more');
  readMoreLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      // You can implement logic to display the full blog post or navigate to a specific URL here.
    });
  });
});

// Function to generate the game cards
function generateGameCards() {
  const bestSellersContainer = document.getElementById("bestSellers");

  bestSellersData.forEach((game) => {
    const gameCard = document.createElement("div");
    gameCard.classList.add("game-card");

    const gameImage = document.createElement("img");
    gameImage.src = game.image;
    gameImage.alt = game.title;
    gameImage.classList.add("game-image");

    const gameDetails = document.createElement("div");
    gameDetails.classList.add("game-details");

    const titleElement = document.createElement("div");
    titleElement.classList.add("game-title");
    titleElement.textContent = game.title;

    const genreElement = document.createElement("div");
    genreElement.classList.add("game-genre");
    genreElement.textContent = game.genre;

    const developerElement = document.createElement("div");
    developerElement.textContent = game.developer;

    const priceElement = document.createElement("div");
    priceElement.classList.add("game-price");
    priceElement.textContent = game.price;

    const ratingElement = document.createElement("div");
    ratingElement.classList.add("game-rating");
    ratingElement.textContent = game.rating;

    gameDetails.appendChild(titleElement);
    gameDetails.appendChild(genreElement);
    gameDetails.appendChild(developerElement);
    gameDetails.appendChild(priceElement);
    gameDetails.appendChild(ratingElement);

    gameCard.appendChild(gameImage);
    gameCard.appendChild(gameDetails);

    bestSellersContainer.appendChild(gameCard);
  });
}

// Call the function to generate the game cards
generateGameCards();


// footer

const columns = document.querySelectorAll('.footer-column');

function animateFooterColumns() {
    columns.forEach((column) => {
        const columnTop = column.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (columnTop < windowHeight) {
            column.style.opacity = 1;
            column.style.transform = 'translateY(0)';
        }
    });
}

window.addEventListener('scroll', animateFooterColumns);




