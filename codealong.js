// document.addEventListener("DOMContentLoaded", function() {  
// initializes the board
// }); Don't need the DOMContentLoaded because I used defer in the head script tag for both codealong.js && movement.js
init();
// global variable declarations
let moveButton = document.querySelector("#move-button")
let ul = document.querySelector("ul#moves-container")

// event listeners
document.addEventListener("keydown", function (event) {
    console.log(event)
    let eventKey = event.key
    // if(event.key === "ArrowDown" || event.key === "ArrowUp" ||event.key === "ArrowLeft" || event.key === "ArrowRight" ) 
    if (eventKey.startsWith("Arrow")) {
        let li = document.createElement("li")
        li.textContent = eventKey.slice(5).toLowerCase()
        ul.append(li)
    }
})
// Refactored this above!
// else if(event.key === "ArrowUp") {
//     let li = document.createElement("li")
//     li.textContent = "up"
//     ul.append(li)
// }
// else if(event.key === "ArrowLeft") {
//     let li = document.createElement("li")
//     li.textContent = "left"
//     ul.append(li)
// }
// else if(event.key === "ArrowRight") {
//     let li = document.createElement("li")
//     li.textContent = "right"
//     ul.append(li)
// }

moveButton.addEventListener("click", function () {
    // console.log("clicked") // always be testing!, then get li text content
    // console.log(ul.children[0]) //if (ul.children[0]) takes care of errors if a move hasn't been made yet (keydown event). This says, if an li exists then run the moves. 
    if (ul.children[0]) {
        let li = document.querySelector("#moves-container li")
        move(li.textContent)
        li.remove()
    }
})

// event delegation, put event listener on the first ancestor the move elements have in common.
ul.addEventListener("click", function (event) {
    // console.log(event)
    if (event.target.tagName === "LI") {
        event.target.remove()
    }
})

// Bonus! 
// Strategy 1 - using SetTimeout
// add event listener on moveButton, so when it's clicked this functionality triggers.
// find all the lis nested under the ul
// iterate through that list using forEach, then add our callback function. index variable just tells you at which point in the array you are at (0, 1, 2, etc)
// const dirction we're grabbing the text content of the li
// then call the setTimeout. What it does is call a callback function every xx milliseconds
// ever 500 msec we want JS to move our robot with the provided direction and then we want to remove that li from the page
// Why do we have to multiply? forEach does not work asynchronously, it'll just go through non-stop. setTimeout will ignore the forEach and just move everything in 1/2 a second without the *(index + 1) Do the first one at 500, next at 1000, next at 1500, next at 2000, etc. So we use math to tell JS to chill and do things one at a time.

// moveButton.addEventListener("click", function () {
//     const liList = ul.querySelectorAll("li")
//     liList.forEach(function (li, index) {
//         // console.log(performance.now())
//         const direction = li.textContent
//         setTimeout(function () {
//             // console.log(performance.now())
//             move(direction)
//             li.remove()
//         }, 500 * (index + 1))
//     })
// })

// Strategy 2 - using setInterval
moveButton.addEventListener('click', function(){
    const moveInterval = setInterval(function() {
        let li = ul.querySelector('li')
        if(li){
            let liText = li.textContent
        move(liText)
        li.remove() 
        } else {
            clearInterval(moveInterval) // if/else conditional and clearInterval is used so that an invisible loop doesn't keep going after you start moving.
        }
    }, 500);
})
