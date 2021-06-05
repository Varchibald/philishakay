function unroll() {
  var inputs = document.querySelectorAll("li:not(.activePage)");
  var totalInputs = inputs.length;
  for (var i = 0; i < totalInputs; i++) {
    if (inputs[i].style.display === "block") {
      inputs[i].style.display = "none";
    }
    else {
      inputs[i].style.display = "block";
    }
  }
}


var modal = document.getElementById("imprintModal");
var trigger = document.getElementById("imprintTrigger");
var span = document.getElementsByClassName("close")[0];

trigger.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
