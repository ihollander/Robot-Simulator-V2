document.addEventListener("DOMContentLoaded", function() {
  // initializes the board
  init();

  // DOM ELEMENTS
  const movesContainer = document.querySelector("#moves-container")
  const moveButton = document.querySelector("#move-button")

  // EVENT LISTENERS
  document.addEventListener("keydown", addMoves)

  // document.addEventListener("keydown", function(event) {
  //   const keyPress = event.key
  //   addMoves(keyPress)
  // })

  moveButton.addEventListener("click", moveRobot)

  // EVENT HANDLERS
  function addMoves(event) {
    const keyPress = event.key
    let direction;
    if (keyPress === "ArrowUp") {
      direction = "up"
    } else if (keyPress === "ArrowDown") {
      direction = "down"
    } else if (keyPress === "ArrowLeft") {
      direction = "left"
    } else if (keyPress === "ArrowRight") {
      direction = "right"
    }
    const listItem = document.createElement("li")
    listItem.textContent = direction
    movesContainer.append(listItem)

    listItem.addEventListener("click", function() {
      listItem.remove()
        })
  }

  // function addMoves(direction) {
  //   const listItem = document.createElement("li")
  //   listItem.textContent = direction
  //   movesContainer.append(listItem)
  // }

  function moveRobot() {
    const topLiInContainer = document.querySelector("#moves-container li")
    const direction = topLiInContainer.textContent
    move(direction)
    topLiInContainer.remove()
  }
  
});
