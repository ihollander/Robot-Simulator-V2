document.addEventListener("DOMContentLoaded", function() {
  // initializes the board
  init();

  // ADD CODE HERE!
  
  // ***reference *****/
  const movesContainer = document.querySelector("ul#moves-container");
  

  document.addEventListener ("keydown", function(event) { 
    const movement = document.createElement('li');
    
    switch (event.code) {
    
        case "ArrowLeft": 
          movement.innerHTML = "left";
          movesContainer.appendChild(movement) 
          break; 
        case "ArrowUp": 
        movement.innerHTML = "up";
        movesContainer.appendChild(movement) 
            break; 
        case "ArrowRight": 
        movement.innerHTML = "right";
        movesContainer.appendChild(movement) 
            break; 
        case "ArrowDown": 
        movement.innerHTML = "down";
        movesContainer.appendChild(movement)  
            break; 
            
    
    } 
    movement.addEventListener("click", function(event){
      event.target.remove()
    })
  })

    const moveButton = document.querySelector("button#move-button");

    moveButton.addEventListener("click", function(){
      if (movesContainer.children.length > 0){
        let counter = movesContainer.children.length - 1
        let startMove = setInterval(function(){
        move(movesContainer.children[0].innerHTML);
        movesContainer.children[0].remove();
        if (counter === 0){ 
          clearInterval(startMove)};
        counter--;
        
      }, 500)
    }})



  


});
