document.addEventListener("DOMContentLoaded", function() {
  // initializes the board
  init();

  // ADD CODE HERE!
  const moveContainer = document.querySelector('#moves-container')
  const moveButton = document.querySelector('#move-button')

  document.addEventListener("keydown", event => {
    const movesli = document.createElement('li')

    if (event.key === 'ArrowRight') {
      moveContainer.append(movesli)
      movesli.innerHTML = "right"
    } else if (event.key === 'ArrowLeft') {
      moveContainer.append(movesli)
      movesli.innerHTML = "left"
    } else if (event.key === 'ArrowUp') {
      moveContainer.append(movesli)
      movesli.innerHTML = "up"
    } else if (event.key === 'ArrowDown') {
      moveContainer.append(movesli)
      movesli.innerHTML = "down"
    } 
  })

  moveButton.addEventListener("click", function() {
    let moveList = moveContainer.querySelectorAll("li")
    moveList.forEach(function(movement, i) {
      setTimeout(function(){ 
        move(movement.innerText);
        movement.remove();
       }, 500 * (i + 1));
  
    })
  })

  moveContainer.addEventListener("click", function(event) {
    if (event.target.tagName === "LI"){
      event.target.remove()
    }
  })

});
