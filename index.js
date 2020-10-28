document.addEventListener("DOMContentLoaded", function() {
  // initializes the board
  init();

  const movesContainer = document.querySelector("#moves-container")
  
  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      const currentMove = document.createElement('li')
      currentMove.innerText = 'left'
      movesContainer.append(currentMove)
    } 
    
    if (e.key === "ArrowRight") {
      const currentMove = document.createElement('li')
      currentMove.innerText = 'right'
      movesContainer.append(currentMove)
    }
    
    if (e.key === "ArrowUp") {
      const currentMove = document.createElement('li')
      currentMove.innerText = 'up'
      movesContainer.append(currentMove)
    }
    
    if (e.key === "ArrowDown") {
      const currentMove = document.createElement('li')
      currentMove.innerText = 'down'
      movesContainer.append(currentMove)
    }
  });


  const button = document.getElementById('move-button')

  button.addEventListener('click', executeMove)

  // Normal move function

  function executeMove(event) {
    let nextMove = document.querySelector("ul > li")
    move(nextMove.innerText)
    nextMove.remove()
  }

  movesContainer.addEventListener('click', event => {
    if (event.target.matches("li")) {
      const selectedMove = event.target
      selectedMove.remove()
    }
  });


  // Bonus (doesnt quite work)

  // function executeMove(event) {
  //   let moves = document.querySelectorAll("ul > li")
  //   moves.forEach(nextMove => {
  //     move(nextMove.innerText)
  //     setInterval( function() { nextMove.remove() }, )
  //   })
  // }



  // ADD CODE HERE!
});
