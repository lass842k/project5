function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Brugernavn og adgangskode skal udfyldes");
    return false;
  }
}

let documentHeight = window.document.body.scrollHeight;
let windowHeight = window.innerHeight;
let maxHeight = documentHeight - windowHeight;

document.getElementById("progressBar").max = maxHeight;
document.getElementById("progressBar").value = window.scrollY;

document.addEventListener("scroll", function() {
    document.getElementById("progressBar").value = window.scrollY;
    
})