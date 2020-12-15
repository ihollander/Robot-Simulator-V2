document.addEventListener("DOMContentLoaded", function() {  
  // initializes the board
  init();

  let moveButton = document.querySelector("#move-button")

  document.addEventListener("keydown", function(event) {
    console.log(event)
    let ul = document.querySelector("ul#moves-container")
    let eventKey = event.key

    if(eventKey.startsWith("Arrow")) {
      // event.key === "ArrowDown" || event.key === "ArrowUp" || event.key === "ArrowLeft" || event.key === "ArrowRight"
      let li = document.createElement("li")
      li.textContent = eventKey.slice(5).toLowerCase()
      ul.append(li)
      
    // else if (event.key === "ArrowUp" ) {
    //   let li = document.createElement("li")
    //   li.textContent = "up"
    //   ul.append(li)
    // }
    }
  })
  // moveButton.addEventListener("click", function(event) {
  //   if (ul.children[0]) {
  //     let li = document.querySelector("ul#moves-container li")
  //     move(li.textContent)
  //     li.remove()
  //   }
  // })

  ul.addEventListener("click", function(event) {
    console.log(event)
    if(event.target.tagName === "LI") {
      event.target.remove()
    }
  })
  
  //Bonus Strategy 1 - using setTimeout
  // moveButton.addEventListener("click", function() {
  //   const liList = ul.querySelectorAll("li")
  //   liList.forEach(function(li, index) {
  //     const direction = li.textContent
  //     setTimeout(function () {
  //       move(direction)
  //       li.remove()
  //     }, 500 * (index + 1))
      
  //   })
  // })

  //Bonus Strategy 2 - using setInterval
  moveButton.addEventListener("click", function(){
    setInterval(function(){
      let li = ul.querySelector("li")
      let liText = li.textContent
      move(liText)

    })
  })
  

 
});
