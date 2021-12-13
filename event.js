document.querySelectorAll('input').forEach(input => {
  input.addEventListener('input', resizeInput);
  resizeInput.call(input);
})

function resizeInput(input) {
  if (this.value.length <= 3) {
    this.style.width = "3.5ch"; // test
  } else {
    this.style.width = (this.value.length + 0.4) + "ch";
  }
}
