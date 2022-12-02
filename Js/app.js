function hideCol() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myFunction() {
  document.getElementById("myDIV").style.width = "100%";
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
// =========Ripples=========
// function findRippleOrigin(clickEv) {
//   const buttonRect = clickEv.currentTarget.getBoundingClientRect();
//   const x = clickEv.clientX - buttonRect.x;
//   const y = clickEv.clientY - buttonRect.y;
//   return { x, y };
// }

// const button = document.querySelector(".btn-ripple");

// button.addEventListener("click", ev => {
//   const rippleEl = document.createElement("span");

//   const rippleOrigin = findRippleOrigin(ev);
//   rippleEl.style.top = `${rippleOrigin.y}px`;
//   rippleEl.style.left = `${rippleOrigin.x}px`;

//   rippleEl.classList.add("ripple");

//   rippleEl.addEventListener("animationend", ev => {
//     ev.target.remove();
//   });

//   button.appendChild(rippleEl);
// });

// ========Ripples End======
// Collapsible
// var coll = document.getElementsByClassName("collapsible");
// var i;

// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function () {
//     this.classList.toggle("active");
//     var content = this.nextElementSibling;
//     if (content.style.display === "block") {
//       content.style.display = "none";
//     } else {
//       content.style.display = "block";
//     }
//   });
// }
// Collapsible end
// TreeView start
var toggler = document.getElementsByClassName("caret");
var i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function () {
    this.parentElement.querySelector(".nested").classList.toggle("active");
    this.classList.toggle("caret-down");
  });
}
// Treeview end

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
span.onclick = function (modal) {
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

//==========dropdown button for col-3 main

//================Dashbord js=============
// form validation
function validateform() {
  var username = document.myform.name.value;

  // slider.html js ends

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
// $('textarea').keyup(function () {

//   var characterCount = $(this).val().length,
//     current = $('#current'),
//     maximum = $('#maximum'),
//     theCount = $('#the-count');

//   current.text(characterCount);
//   if (characterCount < 70) {
//     current.css('color', '#666');
//   }
//   if (characterCount > 70 && characterCount < 90) {
//     current.css('color', '#6d5555');
//   }
//   if (characterCount > 90 && characterCount < 100) {
//     current.css('color', '#793535');
//   }
//   if (characterCount > 100 && characterCount < 120) {
//     current.css('color', '#841c1c');
//   }
//   if (characterCount > 120 && characterCount < 139) {
//     current.css('color', '#8f0001');
//   }

//   if (characterCount >= 140) {
//     maximum.css('color', '#8f0001');
//     current.css('color', '#8f0001');
//     theCount.css('font-weight', 'bold');
//   } else {
//     maximum.css('color', '#666');
//     theCount.css('font-weight', 'normal');
//   }
// });

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
// ==========Notification fade js============
function fade() {
  var x = document.getElementById("fade");
  x.className = "show";
  setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}

function fade2() {
  var x = document.getElementById("fade2");
  x.className = "show";
  setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}
// =========Searchbox===========
//=======search event======
const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
searchButton.addEventListener('click', () => {
  const inputValue = searchInput.value;
  alert(inputValue);
});
//========auto complete=======
const basicAutocomplete = document.querySelector('#search-autocomplete');
const data = ['One', 'Two', 'Three', 'Four', 'Five'];
const dataFilter = (value) => {
  return data.filter((item) => {
    return item.toLowerCase().startsWith(value.toLowerCase());
  });
};

new mdb.Autocomplete(basicAutocomplete, {
  filter: dataFilter
});
// ================Progressbars===========
var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}

var RadialProgress = function (size, barSize, barColor, backgroundColor, textColor, zIndex) {
  this.radialProgress = document.createElement('div');
  this.style = document.createElement('style');
  this.progress = 0;
  var requestAnimationFrame = window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame;

  barSize = (barSize % 2 === 1) ? (barSize + 1) : barSize;
  var innerSize = size - barSize;
  var innerMargin = barSize / 2;

  this.radialProgress.className = 'radial-progress';
  this.radialProgress.innerHTML = '<div class="inner-circle">' +
    '<div class="progress">0%<' + '/div>' +
    '</div>' +
    '<div class="outer-circle">' +
    '<div class="mask full">' +
    '<div class="fill"></div>' +
    '</div>' +
    '<div class="mask">' +
    '<div class="fill"></div>' +
    '<div class="fill fix"></div>' +
    '</div>' +
    '</div>';

  this.style.type = 'text/css';
  this.style.innerHTML = '.radial-progress {' +
    'width:' + size + 'px;' +
    'height: ' + size + 'px;' +
    'position: absolute;' +
    'margin: auto;' +
    'top: 0; right: 0; bottom: 0; left: 0;' +
    'z-index: ' + zIndex + ';' +
    'background-color: #DDD;' +
    'border-radius: 50%;' +
    'box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);' +
    '}' +
    '.radial-progress .inner-circle {' +
    'width: ' + innerSize + 'px;' +
    'height: ' + innerSize + 'px;' +
    'position: absolute;' +
    'margin-top: ' + innerMargin + 'px;' +
    'margin-left: ' + innerMargin + 'px;' +
    'background-color: ' + backgroundColor + ';' +
    'border-radius: 50%;' +
    'z-index: 10;' +
    '}' +
    '.radial-progress .inner-circle .progress {' +
    'height: 1em;' +
    'position: absolute;' +
    'margin: auto;' +
    'top: 0; right: 0; bottom: 0; left: 0;' +
    'text-align: center;' +
    'color: ' + textColor + ';' +
    '}' +
    '.radial-progress .outer-circle .mask,' +
    '.radial-progress .outer-circle .fill {' +
    'width: ' + size + 'px;' +
    'height: ' + size + 'px;' +
    'position: absolute;' +
    'border-radius: 50%;' +
    '-webkit-backface-visibility: hidden;' +
    '}' +
    '.radial-progress .outer-circle .mask {' +
    'clip: rect(0px, ' + size + 'px, ' + size + 'px, ' + size / 2 + 'px);' +
    '}' +
    '.radial-progress .outer-circle .mask .fill {' +
    'clip: rect(0px, ' + size / 2 + 'px, ' + size + 'px, 0px);' +
    'background-color: ' + barColor + ';' +
    '}';

  document.getElementsByTagName('head')[0].appendChild(this.style);
  document.body.appendChild(this.radialProgress);

  this.remove = function () {
    var self = this;
    var scale = 1;
    var deltaScale = 0.1 / 10;

    function step() {
      scale += deltaScale;
      scale = (scale < 0) ? 0 : scale;
      self.radialProgress.style.transform = 'scale(' + scale + ')';

      if (scale > 1.1) {
        deltaScale = -1.1 / 8;
      }

      if (scale > 0) {
        requestAnimationFrame(step);
      } else {
        document.getElementsByTagName('head')[0].removeChild(self.style);
        document.body.removeChild(self.radialProgress);
      }
    }

    requestAnimationFrame(step);
  };

  this.setProgress = function (progress, duration) {
    progress = (progress > 100) ? 100 : progress;
    var self = this;
    var $maskFull = this.radialProgress.getElementsByClassName('mask full')[0];
    var $fill = this.radialProgress.getElementsByClassName('fill');
    var $fillFix = this.radialProgress.getElementsByClassName('fill fix')[0];
    var $progress = this.radialProgress.getElementsByClassName('progress')[0];
    var deltaProgress = (progress - this.progress) / (duration * 60);

    function step() {
      self.progress += deltaProgress;
      self.progress = (self.progress > progress) ? progress : self.progress;
      var rotate = self.progress * 1.8;
      $maskFull.style.transform = 'rotate(' + rotate + 'deg)';
      $progress.innerHTML = self.progress.toFixed() + '%';

      for (var i = 0; i < $fill.length; ++i) {
        $fill[i].style.transform = 'rotate(' + rotate + 'deg)';
      }

      $fillFix.style.transform = 'rotate(' + 2 * rotate + 'deg)';

      if (self.progress < progress) {
        requestAnimationFrame(step);
      }

      if (self.progress === 100) {
        setTimeout(function () {
          self.remove();
        }, 1000);
      }
    }

    requestAnimationFrame(step);
  };
};

// ===========name initials changes as per value===========
var inputname1 = document.getElementById("TextInput1").value;

var getInitials = function (name) {
  let initials = name.split(' ');
  let charCount = name.length;

  if (initials.length > 1) {
    initials = initials.shift().charAt(0) + initials.pop().charAt(0);
  } else if (charCount < 1) {
    initials = "na";
  } else {
    initials = name.substring(0, 2);
  }
  return initials.toUpperCase();
}

myspan1.innerHTML = getInitials(inputname1);

var inputHandler = function (event) {
  myspan1.innerHTML = getInitials(event.target.value);
}

TextInput1.addEventListener('input', inputHandler);

alert("success"); // FN


