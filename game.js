document.addEventListener("DOMContentLoaded", function() {
    const player = document.getElementById('player');
    const object = document.getElementById('object');
    const scoreValue = document.getElementById('score-value');
    
  
    let score = 0;
  
    function updateScore() {
        scoreValue.textContent = score;
    }
  
    function moveObject() {
        const newPosition = Math.random() * (window.innerWidth - object.offsetWidth);
        object.style.left = newPosition + 'px';
        object.style.top = 0; // Reset the object to the top of the screen
    }
  
    function checkCollision() {
        const playerRect = player.getBoundingClientRect();
        const objectRect = object.getBoundingClientRect();
  
        if (playerRect.top <= objectRect.bottom &&
            playerRect.right >= objectRect.left &&
            playerRect.left <= objectRect.right) {
            score++;
            updateScore();
            moveObject();
        }
        
    }
  
    function fallObject() {
        const objectRect = object.getBoundingClientRect();
        const maxY = window.innerHeight;
  
        if (objectRect.bottom < maxY) {
            object.style.top = (objectRect.top + 10) + 'px'; // Incrementally move the object down
        } else {
            moveObject(); // Reset the object if it reaches the bottom
        }
  
        checkCollision();
    }
  
    function movePlayer(event) {
        let posX;
        if (event.type.startsWith('mouse')) {
            posX = event.clientX;
        } else if (event.type.startsWith('touch')) {
            posX = event.touches[0].clientX;
        }
  
        const playerRect = player.getBoundingClientRect();
  
        const halfPlayerWidth = player.offsetWidth / 2;
        const minX = halfPlayerWidth;
        const maxX = window.innerWidth - halfPlayerWidth;
  
        let newX = posX - halfPlayerWidth;
        newX = Math.max(minX, Math.min(newX, maxX));
        player.style.left = newX + 'px';
  
        checkCollision();
    }
  
    document.addEventListener('mousemove', movePlayer);
    document.addEventListener('touchmove', movePlayer);
  
    setInterval(fallObject, 150); // Call fallObject function every 50 milliseconds
  
    moveObject();
  });

  

  function homei(){
    window.location.href="index.html";
}