
/*let input = document.querySelector('input'); // get the input element
input.addEventListener('input', resizeInput); // bind the "resizeInput" callback on "input" event
resizeInput.call(input); // immediately call the function*/

document.querySelectorAll('input').forEach(input => {
  input.addEventListener('input', resizeInput);
  resizeInput.call(input);
})

function resizeInput(input) {
  //console.log(this.value)
  //if (this.id == "username") {
    //this.style.minWidth = "63px"
    //this.style.maxWidth = "100px"
  //} else {
    //this.style.minWidth = "100px"
  //}
  //this.style.width = (this.value.length + 0.4) + "ch";
  if (this.value.length <= 3) {
    this.style.width = "3.5ch"; // test
  } else {
    this.style.width = (this.value.length + 0.4) + "ch";
  }
}
  //this.style.minwidth = (this.value.length + 1) + "ch";
