
// Scroll to top button
// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.documentElement.scrollTop = 0;
  document.documentElement.scrollLeft = 0; // For Chrome, Firefox, IE and Opera
}

// Input Validation
function validateForm() {
  var x = document.forms["myForm"]["Name"].value;
  console.log(x);
  if (x == "") {
    alert("Formular muss vollständig abgegeben werden.");
    return false;
  }
}

function validateForm() {
  var y = document.forms["myForm"]["email"].value;
  console.log(y);
  if (y == "") {
    alert("Formular muss vollständig abgegeben werden.");
    return false;
  }
}

function validateForm() {
  var z = document.forms["myForm"]["text"].value;
  console.log(z);
  if (z == "") {
    alert("Formular muss vollständig abgegeben werden.");
    return false;
  }
}

