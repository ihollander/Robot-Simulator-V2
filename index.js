document.addEventListener("DOMContentLoaded", function() {
  // initializes the board
  init();

	const moveBtn = document.querySelector("#move-button")
	const moveCtr = document.querySelector("#moves-container")

	document.addEventListener("keydown", function(event) {
		console.log(event.key)
		const li = document.createElement("li")

		if (event.key === "ArrowDown") {
			li.textContent = "down"
			moveCtr.append(li)
		} else if (event.key === "ArrowUp") {
			li.textContent = "up"
			moveCtr.append(li)
		} else if (event.key === "ArrowLeft") {
			li.textContent = "left"
			moveCtr.append(li)
		} else if (event.key === "ArrowRight") {
			li.textContent = "right"
			moveCtr.append(li)
		}
	})

	moveBtn.addEventListener("click", function() {
		const direction = moveCtr.querySelector("li")
		move(direction.textContent)
		direction.remove()
	})
  
});
