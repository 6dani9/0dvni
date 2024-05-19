function contacti(){
    window.location.href="contact.html";
}
function worki(){
    window.location.href="game.html";
}
function prototypesi(){
    window.location.href="prototypes.html";
}
function aboutmei(){
    window.location.href="whyme.html";
}
function homei(){
    window.location.href="index.html";
}
function reviewsi(){
    window.location.href="reviews.html";
}

const sound = document.getElementById('hoverSound');
const bckg=document.getElementById('rainbckg');
const buttons = [];

for (let i = 1; i <= 4; i++) {
    const button = document.getElementById(`hoverButton${i}`);
    buttons.push(button);
    
    button.addEventListener('mouseenter', function() {
        sound.currentTime = 0;
        sound.play();
        bckg.play();
    });
}
document.addEventListener('DOMContentLoaded', function() {
    // Add the "active" class to trigger the fade-in effect after a short delay
    setTimeout(function() {
      document.body.classList.add('active');
    }, 100); // Delay in milliseconds
  });

