function unroll() {
  var inputs = document.querySelectorAll("li:not(.activePage)");
  var totalInputs = inputs.length;
  for (var i = 0; i < totalInputs; i++) {
    if (inputs[i].style.display === "block") {
      inputs[i].style.display = "none";
    } else {
      inputs[i].style.display = "block";
    }
  }
}
