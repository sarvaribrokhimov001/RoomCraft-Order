  "use strict";
  
    Toastify({
    text: "RoomCraft mebel do'koniga xush kelibsiz !",
    duration: 3500,
    gravity: "top",
    position: "center",
    close: true,
    style: {
      background: "linear-gradient(to right, black, black)",
      color: "red",
      border: "1px solid red",
      boxShadow: "0 0 12px rgba(255, 0, 0, 0.6)"
    }
  }).showToast();

  Toastify({
    text: "Assalomu alaykum",
    duration: 3500,
    gravity: "top",
    position: "center",
    close: true,
    style: {
      background: "linear-gradient(to right, black, black)",
      color: "green",
      border: "1px solid green",
      boxShadow: "0 0 12px rgba(0, 255, 0, 0.6)"
    }
  }).showToast();
  
  
document.querySelector('.index__previous__btn').addEventListener('click', () => {
  window.location.href = '/index.html'; 
});

document.querySelector('.index__next__btn').addEventListener('click', () => {
  window.location.href = 'document.html'; 
});











const xScroll = document.getElementById("xScroll");
const xNext = document.getElementById("xNext");
const xPrev = document.getElementById("xPrev");

const scrollAmount = 360;

xNext.addEventListener("click", () => {
  xScroll.scrollBy({ left: scrollAmount, behavior: "smooth" });
});

xPrev.addEventListener("click", () => {
  xScroll.scrollBy({ left: -scrollAmount, behavior: "smooth" });
});


const hScroll = document.getElementById("hScroll");
const hNext = document.getElementById("hNext");
const hPrev = document.getElementById("hPrev");

const moveSize = 340;

hNext.addEventListener("click", () => {
  hScroll.scrollBy({
    left: moveSize,
    behavior: "smooth"
  });
});

hPrev.addEventListener("click", () => {
  hScroll.scrollBy({
    left: -moveSize,
    behavior: "smooth"
  });
});








const searchInput = document.querySelector(".navbar__input");
const searchableItems = document.querySelectorAll(
  ".x-card, .h-card, .collaborations__card"
);

searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase().trim();

  searchableItems.forEach(card => {
    const text = card.innerText.toLowerCase();

    if (text.includes(value)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});






