document.addEventListener("DOMContentLoaded", function() {
  // initializes the board
  init();

  // ADD CODE HERE!

  const moves = document.querySelector("#moves-container")

  document.addEventListener("keydown", function(event){

    if (event.key === "ArrowLeft") {
      const currentMove = document.createElement('li')
      currentMove.innerText = 'left'
      moves.append(currentMove)
    }

    if (event.key === "ArrowRight") {
      const currentMove = document.createElement('li')
      currentMove.innerText = 'right'
      moves.append(currentMove)
    }
    
    if (event.key === "ArrowDown") {
      const currentMove = document.createElement('li')
      currentMove.innerText = 'down'
      moves.append(currentMove)
    }
    
    if (event.key === "ArrowUp") {
      const currentMove = document.createElement('li')
      currentMove.innerText = 'up'
      moves.append(currentMove)
    }
  })

  const button = document.querySelector('#move-button')

  button.addEventListener('click', moveRobot)

  function moveRobot() {
    const li = document.querySelector('li')
    const direction = li.innerText
    move(direction)
    li.remove()
  }

});
