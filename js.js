/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};


// Click the button to create a P element with some text, and append it to DIV
function myCreate1() {
    A = document.createElement("li");
    t = document.createTextNode("Hi");
    A.appendChild(t);
    document.getElementById("myUl").appendChild(A);
}

function myCreate2() {
    var A = document.createElement("li");
    var t = document.createTextNode("Hi");
    A.appendChild(t);
    document.getElementById("myUl").appendChild(A);
}

function myCreate3() {
    var A = document.createElement("li");
    var t = document.createTextNode("Hi");
    A.appendChild(t);
    document.getElementById("myUl").appendChild(A);
}

function myCreate4() {
    var A = document.createElement("li");
    var t = document.createTextNode("hi");
    A.appendChild(t);
    document.getElementById("myUl").appendChild(A);
}


// >Click one button to remove the Div element from its parent.
function removeLi() {
    var child = document.getElementById("myUl");
    child.parentNode.removeChild(child);
}

