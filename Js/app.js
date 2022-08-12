
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
//   Full screen end


// Hamburger css start
function openNav() {
  document.getElementById("mySidebar").style.width = "280px";
  document.getElementById("main").style.marginLeft = "";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
// Hamburger css end 


// search scope popup pannel start
// var modal = document.getElementById("myModal");
// var btn = document.getElementById("myBtn");
// var span = document.getElementsByClassName("close")[0];

// btn.onclick = function () {
//   modal.style.display = "block";
// }
// span.onclick = function () {
//   modal.style.display = "none";
// }

// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
// search scope popup pannel end


// toggle starts
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

//=====Change View Css======= 
// const listViewButton = document.querySelector('.list-view-button');
// const gridViewButton = document.querySelector('.grid-view-button');
// const tableViewButton = document.querySelector('.table-view-button');
// const list = document.querySelector('ol');

// listViewButton.onclick = function () {
//   list.classList.remove('grid-view-filter');
//   list.classList.add('list-view-filter');
// }

// gridViewButton.onclick = function () {
//   list.classList.remove('list-view-filter');
//   list.classList.add('grid-view-filter');
// }

// tableViewButton.onclick = function () {
//   list.classList.remove('list-view-filter');
//   list.classList.remove('grid-view-filter');
//   list.classList.add('table-view-filter');
// }
//==========Change View Css End=========


// navbar hide icon v logo
/* hide content and show on click */
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

// dropdown button for col-3-main
[".collapsed-menu"].forEach((val) => {
  Array.prototype.forEach.call(document.querySelectorAll(val), (ele) => {
    ele.children[0].onclick = (e) => {
      ele.classList.toggle("toggled");
    };
  });
});

// dropdown button for col-3 main

// slider.html js starts

// slider.html js ends