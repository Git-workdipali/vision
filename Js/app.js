
function hideCol() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myFunction() {
  document.getElementById("myDIV").style.width = "26%";
  document.getElementById("col-8-main").style.width = "100%";
  document.getElementById("col-8-main").style.height = "100%";
  document.getElementById("pagination").style.width = "99%";
  document.getElementById("footer").style.display = "none";
}

function hideLogo() {
  var x = document.getElementById("header");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";

  }
}

function hideOptions() {
  var x = document.getElementById("options");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}

function hideContent() {
  var x = document.getElementById("hidecol-1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
//Full screen end


//==========Hamburger css start==========
function openNav() {
  document.getElementById("mySidebar").style.width = "280px";
  document.getElementById("main").style.marginLeft = "";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
// Hamburger css end 
//========search scope popup pannel start========
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
}
span.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// search scope popup pannel end


//=========toggle starts==========
var show = function (t) {
  t.style.display = "block"
},
  hide = function (t) {
    t.style.display = "none"
  },
  toggle = function (t) {
    "block" !== window.getComputedStyle(t).display ? show(t) : hide(t)
  };
document.addEventListener("click", function (t) {
  if (t.target.classList.contains("toggle")) {
    t.preventDefault();
    var e = document.querySelector(t.target.hash);
    e && toggle(e)
  }
}, !1);
// Toggle end

//=============Change View Css============
const listViewButton = document.querySelector('.list-view-button');
const gridViewButton = document.querySelector('.grid-view-button');
const tableViewButton = document.querySelector('.table-view-button');
const list = document.querySelector('ol');

listViewButton.onclick = function () {
  list.classList.remove('grid-view-filter');
  list.classList.add('list-view-filter');
}

gridViewButton.onclick = function () {
  list.classList.remove('list-view-filter');
  list.classList.add('grid-view-filter');
}

tableViewButton.onclick = function () {
  list.classList.remove('list-view-filter');
  list.classList.remove('grid-view-filter');
  list.classList.add('table-view-filter');
}
//Change View js End


// navbar hide icon v logo
/*===========hide content and show on click=========*/
function toggleText() {
  var x = document.getElementById("Myid");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function hideMenu() {
  var x = document.getElementById("hideHumburger");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function hideUser() {
  var x = document.getElementById("hideuser");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
// Hide And show content End

//=============dropdown button for col-3-main============
[".collapsed-menu"].forEach((val) => {
  Array.prototype.forEach.call(document.querySelectorAll(val), (ele) => {
    ele.children[0].onclick = (e) => {
      ele.classList.toggle("toggled");
    };
  });
});

// dropdown button for col-3 main

//================Dashbord js=============
// form validation
function validateform() {
  var username = document.myform.name.value;

  if (username == null || username == "") {
    document.getElementById("wrong-user").style.display = "block";
    document.getElementById("user-error-tick").style.display = "none";
    document.getElementById("user-error").innerHTML = "Username can not be empty";
  } else {
    document.getElementById("wrong-user").style.display = "none";
    document.getElementById("user-error-tick").style.display = "block";
    document.getElementById("user-error").style.display = "none";
  }
  return false;

}

function validatelastname() {
  var lastname = document.myform.lastname.value;

  if (lastname == null || lastname == "") {
    document.getElementById("wrong-lastname").style.display = "block";
    document.getElementById("tick-lastname").style.display = "none";
    document.getElementById("last-error").innerHTML = "Lastname can not be empty";
  } else {
    document.getElementById("wrong-lastname").style.display = "none";
    document.getElementById("tick-lastname").style.display = "block";
    document.getElementById("last-error").style.display = "none";
  }
  return false;
}

function passwordvalidation() {
  var password = document.myform.password.value;

  if (password.length < 6) {
    document.getElementById("tick-password").style.display = "none";
    document.getElementById("ps-error").style.display = "block";
    document.getElementById("password-error").innerHTML = "Password must be at least 6 characters long";

  } else {
    document.getElementById("tick-password").style.display = "block";
    document.getElementById("password-error").style.display = "none";
    document.getElementById("ps-error").style.display = "none";
  }
  return false;
}

function emailvalidation() {
  var x = document.myform.email.value;
  var atposition = x.indexOf("@");
  var dotposition = x.lastIndexOf(".");
  if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= x.length) {
    document.getElementById("tick-email").style.display = "none";
    document.getElementById("email-error").innerHTML = "please enter valid email";
    document.getElementById("e-error").style.display = "block";
  }
  else {
    document.getElementById("tick-email").style.display = "block";
    document.getElementById("email-error").style.display = "none";
    document.getElementById("e-error").style.display = "none";
  }
  return false;
}


function contactvalidation() {
  var num = document.myform.num.value;
  if (isNaN(num)) {
    document.getElementById("contact-error").style.display = "block";
    document.getElementById("num-error").innerHTML = "Enter Numeric value only";
    document.getElementById("contact-tick").style.display = "none";
  } else {
    document.getElementById("contact-tick").style.display = "block";
    document.getElementById("contact-error").style.display = "none";
    document.getElementById("num-error").style.display = "none";
  }
  return false;
}


//=======pincode validation==========
function isUSAZipCode(str) {
  return /^\d{5}(-\d{4})?$/.test(str);
}

function validateInput() {
  console.log("validateInput");
  let zipCode = document.getElementById("zipCode").value;
  let message = "";
  if (isUSAZipCode(zipCode)) {
    document.getElementById("error-pin").style.display = "none";
    document.getElementById("tick-pin").style.display = "block";
  } else {
    message = "Invalid Zip Code";
    document.getElementById("error-pin").style.display = "block";
    document.getElementById("tick-pin").style.display = "block";
  }
  document.getElementById("error-msg").innerHTML = message;

}
// ==========Email validation================
// ==========text area validation===========
$('textarea').keyup(function () {

  var characterCount = $(this).val().length,
    current = $('#current'),
    maximum = $('#maximum'),
    theCount = $('#the-count');

  current.text(characterCount);
  if (characterCount < 70) {
    current.css('color', '#666');
  }
  if (characterCount > 70 && characterCount < 90) {
    current.css('color', '#6d5555');
  }
  if (characterCount > 90 && characterCount < 100) {
    current.css('color', '#793535');
  }
  if (characterCount > 100 && characterCount < 120) {
    current.css('color', '#841c1c');
  }
  if (characterCount > 120 && characterCount < 139) {
    current.css('color', '#8f0001');
  }

  if (characterCount >= 140) {
    maximum.css('color', '#8f0001');
    current.css('color', '#8f0001');
    theCount.css('font-weight', 'bold');
  } else {
    maximum.css('color', '#666');
    theCount.css('font-weight', 'normal');
  }
});

//==============Dashboard js=============
// Buttons
function changeIcon(anchor) {
  var icon = anchor.querySelector("i");
  icon.classList.toggle('icon-fullscreen');
  icon.classList.toggle('fa-plus');

  anchor.querySelector("span").textContent = icon.classList.contains('icon-fullscreen') ? "Expand" : "Exit";
}

//====dark mode====
function darkMode() {
  var element = document.body;
  const count = document.getElementsByClassName("card-shadow");

  for (var x = 0; x < count.length; x++) {
    count[x].classList.toggle("card-shadow-dark");
  }
  element.classList.toggle("dark-mode");
}