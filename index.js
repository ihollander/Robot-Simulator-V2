document.addEventListener("DOMContentLoaded", function() {
  // initializes the board
  init();
  
  let moves = []
  // ADD CODE HERE!
  let movesContainer = document.querySelector('#moves-container')
  
  document.onkeydown = function() {
    let node = document.createElement("LI"); 
    let direction;
    switch(window.event.keyCode) { 
      case 37: 
        //left key
        direction = 'left'
        break;
      case 38: 
        //up key
        direction = 'up'
        break;
      case 39: 
      // right key
        direction = 'right'
        break;
      case 40: 
        // down key7
        direction = 'down'
      break;
  }
  if(direction !== undefined) { 
    moves.push(direction) 
    let textNode = document.createTextNode(direction);
    node.appendChild(textNode)
    movesContainer.appendChild(node)
}
  }

  moveButton = document.querySelector('#move-button')

  moveButton.addEventListener("click", () => { 
    // myChildNode.parentNode.removeChild(myChildNode);
    movesContainer.childNodes[0].remove()
    move(moves.shift())
  })

  movesContainer.querySelectorAll('li')
});
