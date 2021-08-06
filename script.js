// get random number between 0 and 1

function getRandomInt() {
  return Math.floor(Math.random() * 2);
}
// Returns a reference to the first object with the specified value of the ID attribute.
let button = document.getElementById("flip");
let result = document.getElementById("result");

// adding eventlistener
button.addEventListener("click", function () {
  let num = getRandomInt();

  if (num === 0) {
    //alert("Its head");
    result.innerHTML = "Yay! You got HEAD";
    result.style.backgroundColor = "Turquoise";
  } else {
    //alert("Its tail");
    result.innerHTML = "Oops! You got Tail";
    result.style.backgroundColor = "Tomato";
  }
});
