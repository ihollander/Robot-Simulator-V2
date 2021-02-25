document.addEventListener("DOMContentLoaded", function() {
  // initializes the board
  init();

  const robot = document.querySelector('div.tile.robot');
  const ul = document.querySelector('ul#moves-container')
  const moveBtn = document.querySelector('button#move-button')

  document.addEventListener('keydown', function(e) {
      if (e.key === 'ArrowDown') { 
        let li = document.createElement('li')
        li.textContent = "Down"
        ul.append(li)
      }
      if (e.key === 'ArrowUp') { 
        let li = document.createElement('li')
        li.textContent = "Up"
        ul.append(li)
      }
      if (e.key === 'ArrowLeft') { 
        let li = document.createElement('li')
        li.textContent = "Left"
        ul.append(li)
      }
      if (e.key === 'ArrowRight') { 
        let li = document.createElement('li')
        li.textContent = "Right"
        ul.append(li)
      }
  })

  // Working deliverable Move the Robot 

  // moveBtn.addEventListener('click', function(e) {
  //   const firstMove = ul.children[0]
  //   move(firstMove.textContent.toLowerCase())
  //   firstMove.remove()
  // })

  ul.addEventListener('click', function(e) {
    if (e.target.tagName === "LI") {
      e.target.remove()
    }
  })

  
  // Bonus

  function moveRobot() { 
    moveBtn.onclick = interval 
    }
    
  function interval() {
        setInterval(function() {        
          const firstMove = ul.children[0]
          move(firstMove.textContent.toLowerCase())
          firstMove.remove()
        }, 500)}

  moveRobot();

})


