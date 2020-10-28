document.addEventListener("DOMContentLoaded", function() {
  // initializes the board
  init();
  
  let movesContainer = document.querySelector("#moves-container")
  let moves = [];
  
  document.addEventListener("keydown",function(event){
    
    if (event.key == "ArrowLeft"){
      moves.push("left")
      let li = document.createElement("li")
      li.classList.add("move-list")
      li.appendChild(document.createTextNode("left"))
      movesContainer.appendChild(li)
      li.addEventListener("click",function(){
        li.remove()
        delete moves[moves.indexOf("left")]
      })
    } else if (event.key == "ArrowRight"){
      moves.push("right")
      let li = document.createElement("li")
      li.appendChild(document.createTextNode("right"))
      movesContainer.appendChild(li)
      li.classList.add("move-list")
      li.addEventListener("click",function(){
        li.remove()
        delete moves[moves.indexOf("right")]
      })
    } else if (event.key == "ArrowDown"){
      moves.push("down")
      let li = document.createElement("li")
      li.appendChild(document.createTextNode("down"))
      movesContainer.appendChild(li)
      li.classList.add("move-list")

      li.addEventListener("click",function(){
        li.remove()
        delete moves[moves.indexOf("down")]
        })
    } else if (event.key == "ArrowUp"){
      moves.push("up")
      let li = document.createElement("li")
      li.appendChild(document.createTextNode("up"))
      movesContainer.appendChild(li)
      li.classList.add("move-list")
      li.addEventListener("click",function(){
        li.remove()
        delete moves[moves.indexOf("up")]
      })
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
