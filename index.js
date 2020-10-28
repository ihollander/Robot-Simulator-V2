document.addEventListener("DOMContentLoaded", function() {
  // initializes the board
  init();
  
  let movesContainer = document.querySelector("#moves-container")
  let moves = [];

  function addMove(dir){
    moves.push(dir)
    let li = document.createElement("li")
      li.classList.add("move-list")
      li.appendChild(document.createTextNode(dir))
      movesContainer.appendChild(li)
      li.addEventListener("click",function(){
        li.remove()
        delete moves[moves.indexOf(dir)]
      })
  }
  
  document.addEventListener("keydown",function(event){
    
    if (event.key == "ArrowLeft"){
      addMove("left")
    } else if (event.key == "ArrowRight"){
      addMove("right")
    } else if (event.key == "ArrowDown"){
      addMove("down")
    } else if (event.key == "ArrowUp"){
      addMove("up")
    }
  })
   
  const moveBtn = document.querySelector("#move-button")
  moveBtn.addEventListener("click", function(){
    let moveList = movesContainer.querySelectorAll(".move-list")
    moveList.forEach(function(move){
      move.remove()
    })
    moves.forEach(function(direction){

      move(direction)
    })
    moves = []
    
  })

});
