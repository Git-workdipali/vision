function hideCol() {
  var x = document.getElementById("LTR");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myFunction() {
  document.getElementById("col-8-main").style.width = "100%";
  document.getElementById("col-8-main").style.height = "100%";

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

}
//==========Full screen end=========

//============Collapsible===========
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
//============Collapsible end==========

//===========TreeView start=============
var toggler = document.getElementsByClassName("caret");
var i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function () {
    this.parentElement.querySelector(".nested").classList.toggle("active");
    this.classList.toggle("caret-down");
  });
}

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
//=========search scope popup pannel end=========

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
//==========Toggle end===========

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
//===============Hide And show content End===============
//============LTR============
function myLtr() {
  var element = document.getElementById("LTR");
  element.classList.toggle("ltr");
}

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
//=========Doughnut==========

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
// ===================menu level1===============
function updatemenu() {
  if (document.getElementById('responsive-menu').checked == true) {
    document.getElementById('menu').style.borderBottomRightRadius = '0';
    document.getElementById('menu').style.borderBottomLeftRadius = '0';
  } else {
    document.getElementById('menu').style.borderRadius = '0px';
  }
}
// ==================menu level2===================
var _hasEventListeners = !!window.addEventListener,

  _addEvent = function (elm, evt, callback) {
    if (elm == null || typeof (elm) == undefined)
      return;
    if (_hasEventListeners)
      elm.addEventListener(evt, callback, false);
    else if (elm.attachEvent)
      elm.attachEvent('on' + evt, callback);
    else
      elm['on' + evt] = callback;
  },

  _returnEvent = function (evt) {
    if (evt.stopPropagation)
      evt.stopPropagation();
    if (evt.preventDefault)
      evt.preventDefault();
    else {
      evt.returnValue = false;
      return false;
    }
  },

  _returnTrueEvent = function (evt) {
    evt.returnValue = true;
    return true;
  },

  _onMouseEnterMenu = function (evt) {
    evt = evt || window.event;
    var elms = evt.target.parentElement.children;
    for (var i = 0; i < elms.length; i++)
      if (elms[i] !== evt.target && elms[i].children.length > 1)
        _hideDescentMenus(elms[i], true);
    elms = evt.target.children;
    if (elms.length > 1)
      elms[1].classList.add('show');
    return _returnEvent(evt);
  },

  _onMouseLeaveMenu = function (evt) {
    evt = evt || window.event;
    _hideDescentMenus(evt.target, true);
    return _returnEvent(evt);
  },

  _onFocusMenu = function (evt) {
    evt = evt || window.event;
    var elm = evt.target.parentElement,
      elms = elm.parentElement.children;
    for (var i = 0; i < elms.length; i++)
      if (elms[i] !== elm && elms[i].children.length > 1)
        _hideDescentMenus(elms[i]);
    elm = elm.parentElement.parentElement;
    if (elm.tagName.toLowerCase() == 'li')
      elm.classList.add('hover');
    return _returnEvent(evt);
  },

  _onClickMenu = function (evt) {
    evt = evt || window.event;
    var target = evt.target,
      elm;
    if (target.tagName.toLowerCase() == 'span')
      target = target.parentElement;
    var id = target.href.replace(/.*(?=#)#/, '');
    if (target.parentElement.children.length == 1) {
      // removes all 'current' class
      elm = document.querySelectorAll('.menu-wrap .current');
      for (var i = 0; i < elm.length; i++)
        elm[i].classList.remove('current');
      // adds 'current' class
      elm = target.parentElement;
      while (!elm.parentElement.classList.contains('root')) {
        elm.classList.add('current');
        elm = elm.parentElement.parentElement;
      }
      elm.classList.add('current');
      // hides all sub menu
      _hideDescentMenus(elm, true);
      // shows selected content
      document.querySelector('.contents .show').classList.remove('show');
      document.getElementById(id).classList.add('show');
      // set focus to root menu
      document.querySelector('.menu-wrap>nav>ul>.current>a').focus();
    }
    else {
      var elm = target.parentElement.children[1].classList;
      if (elm.contains('show'))
        elm.remove('show');
      else
        elm.add('show');
    }
    return _returnEvent(evt);
  },

  _hideDescentMenus = function (menu, setFocus) {
    setFocus = !!setFocus;
    var menus = menu.querySelectorAll('.show'),
      i;
    for (i = 0; i < menus.length; i++)
      menus[i].classList.remove('show');
    menus = menu.querySelectorAll('.hover');
    for (i = 0; i < menus.length; i++)
      menus[i].classList.remove('hover');
    menu.classList.remove('hover');
    if (setFocus && _isChild(document.activeElement, menu))
      menu.children[0].focus();
  },

  _nextMenu = function (menu) {
    var menus = menu.parentElement.children,
      idx = _indexOf(menu, menus);
    if (idx < menus.length - 1)
      menus[idx + 1].children[0].focus();
  },

  _previousMenu = function (menu) {
    var menus = menu.parentElement.children,
      idx = _indexOf(menu, menus);
    if (idx > 0)
      menus[idx - 1].children[0].focus();
  },

  _expandMenu = function (menu) {
    var menus = menu.children;
    if (menus.length > 1) {
      if (menus[1].classList.contains('show'))
        menus[1].children[0].children[0].focus();
      else
        menus[1].classList.add('show');
    }
  },

  _collapseMenu = function (menu) {
    var menus = menu.children;
    if (menus.length > 1 && menus[1].classList.contains('show')) {
      _hideDescentMenus(menu, true);
      return;
    }
    menu = menu.parentElement.parentElement;
    if (menu.tagName.toLowerCase() == 'li')
      menu.children[0].focus();
  },

  _indexOf = function (elm, elms) {
    for (var i = 0; i < elms.length; i++) {
      if (elm === elms[i])
        return i;
    }
    return undefined;
  },

  _isChild = function (chld, prnt) {
    if (chld) {
      while (chld.tagName.toLowerCase() != 'body') {
        chld = chld.parentElement;
        if (chld === prnt)
          return true;
      }
    }
    return false;
  },

  _init = function () {
    _addEvent(document.querySelector('.menu-wrap>nav>ul'), 'click', _onClickMenu);
    var elms = document.querySelectorAll('.menu-wrap>nav>ul li'),
      i;
    for (i = 0; i < elms.length; i++)
      _addEvent(elms[i], 'mouseenter', _onMouseEnterMenu);
    elms = document.querySelectorAll('.menu-wrap>nav>ul ul');
    for (i = 0; i < elms.length; i++)
      _addEvent(elms[i].parentElement, 'mouseleave', _onMouseLeaveMenu);
    elms = document.querySelectorAll('.menu-wrap a');
    for (i = 0; i < elms.length; i++)
      _addEvent(elms[i], 'focus', _onFocusMenu);
    document.querySelector('.menu-wrap>nav>ul>.current').children[0].focus();
  };

window.document.onkeydown = function (evt) {
  evt = evt || window.event;
  var key = evt.which || evt.keyCode,
    menu = document.activeElement,
    isMenu = _isChild(menu, document.querySelector('.menu-wrap .root'));
  if (!isMenu)
    return _returnTrueEvent(evt);
  menu = menu.parentElement;
  switch (key) {
    case 27: // Esc key
      _collapseMenu(menu);
      break;
    // keyboard navigation keys
    case 37:
    case 38:
    case 39:
    case 40:
      var elm = menu.parentElement;
      var isRoot = elm.classList.contains('root'),
        isLevel1 = elm.classList.contains('level-1'),
        isFirst = _indexOf(menu, elm.children) == 0,
        isLast = _indexOf(menu, elm.children) == elm.children.length - 1,
        isParent = menu.children.length > 1,
        isExpanded = isParent && menu.children[1].classList.contains('show');
      switch (key) {
        case 37: // Left key
          if (isRoot && !isFirst)
            _previousMenu(menu);
          else
            _collapseMenu(menu);
          break;
        case 38: // Up key
          if (isRoot && isExpanded || isFirst)
            _collapseMenu(menu);
          else
            _previousMenu(menu);
          break;
        case 39: // Right key
          if (!isLast && (isRoot || !isRoot && !isParent))
            _nextMenu(menu);
          else
            _expandMenu(menu);
          break;
        case 40: // Down key
          if (isLast || isRoot && isParent)
            _expandMenu(menu);
          else
            _nextMenu(menu);
      }
      break;
    default:
      return _returnTrueEvent(evt);
  }
  return _returnEvent(evt);
}

_init();
// ==================Linegraph=====================
var trace1 = {
  x: [1, 2, 3, 4, 5, 6, 7],
  y: [40, 50, 60, 20, -10, 20],
  name: 'yaxis data',
  type: 'scatter'
};

var trace2 = {
  x: [1, 2, 3, 4, 5, 6, 7],
  y: [4, 5, 6, 9, 3, 2, 4],
  name: 'yaxis2 data',
  yaxis: 'y2',
  type: 'scatter'
};

var data = [trace1, trace2];

var layout = {
  title: 'Double Y Axis Example',
  font: { size: 14 },
  yaxis: { title: 'yaxis title' },
  yaxis2: {
    title: 'yaxis2 title',
    titlefont: { color: 'rgb(148, 103, 189)' },
    tickfont: { color: 'rgb(148, 103, 189)' },
    overlaying: 'y',
    side: 'right'
  }
};

var config = { responsive: true }


Plotly.newPlot('myDiv', data, layout, config);


