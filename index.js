document.addEventListener("DOMContentLoaded", function() {
  // initializes the board
  init();

  const moves = document.getElementById('move-button')
  const movesCont = document.getElementById('moves-container')
  const controlPanel = document.getElementById('control-panel')


  moves.addEventListener("keydown", function(x) {
    let allMoves = document.createElement('li')
    if(x.key === "ArrowLeft") {
      move("left")
      allMoves.textContent = "left"
      movesCont.append(allMoves)
    } else if (x.key === "ArrowRight") {
      move("right")
      allMoves.textContent = "right"
      movesCont.append(allMoves)
    } else if (x.key === "ArrowUp") {
      move("up")
      allMoves.textContent = "up"
      movesCont.append(allMoves)
    } else if (x.key === "ArrowDown") {
      move("down")
      allMoves.textContent = "down"
      movesCont.append(allMoves)
    }
  })

  const movesArray = moves.querySelectorAll('li')
// 
// 
// 
// 
  movesCont.addEventListener("click", function(event) {
  
    // move(movesArray[0].textContent)
    // movesArray.unshift()
    
    if (event.target.tagName === 'LI') {
      move(event.target.textContent) 
      event.target.remove()
   } 
  })
// 
  // function moveList() {
  //   let moveLeft = document.createElement('li')
  //   moveLeft.textContent = 
  // }
  
  // ADD CODE HERE!
});
