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