function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Brugernavn og adgangskode skal udfyldes");
    return false;
  }
}

let documentHeight = window.document.body.scrollHeight;
let windowHeight = window.innerHeight;
let maxHeight = windowHeight - documentHeight;

document.getElementById("progressBar").max = maxHeight;
document.getElementById("progressBar").value = window.scrollY;

document.addEventListener("scroll", function() {
    document.getElementById("progressBar").value = window.scrollY;
    
})

/* Resten af javascript koderne er i <script> i HTML-filen da javascripten ikke loader mere herfra, pga. en fejl i progressBar javascripten. Har prøvet alt, og kan ikke få det maxHeighten til at virke */