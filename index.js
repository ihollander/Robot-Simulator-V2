  // initializes the board
  init();

    // ADD CODE HERE!

//Grab nodes from DOM

const movesUl = document.querySelector('#moves-container')
const movesBtn = document.querySelector('#move-button')

//Add and Handle events

document.addEventListener("keydown", handleArrowPress);
// movesBtn.addEventListener("click", moveRobot);
movesBtn.addEventListener("click", autoMoveRobot);


function handleArrowPress(e){

  if (e.code === "ArrowRight"){
    createLi("right")
  }else if (e.code === "ArrowLeft"){
    createLi("left")
  }else if (e.code === "ArrowUp"){
    createLi("up")
  }else if (e.code === "ArrowDown"){
    createLi("down")
  }
}
// Manipulate or change dom
function createLi(direction){
  let li = document.createElement('li')
  li.innerText = direction

  movesUl.append(li)
}

//move (moved to mouvement.js)
// moveRobot()

// function moveRobot(e){
//   let moveLi = movesUl.querySelector('li')

//   move(moveLi.innerText)
//   moveLi.remove()
// }


//automate move

function autoMoveRobot(){

  let moveTime = setInterval(robot, 1000);
  function robot(){
    if (movesUl.children.length === 0){
      clearInterval(moveTime)
    }else{
      moveRobot()
    }
  }
}
