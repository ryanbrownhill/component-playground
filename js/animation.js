// window.onbeforeunload = function (e) {
//     document.querySelectorAll('.box1').className = 'fadein';
// }
// 
// http://www.onextrapixel.com/2010/02/23/how-to-use-jquery-to-make-slick-page-transitions/
// 
console.log("test");

//INDEX JS

// var box1 = document.getElementById("box1");

// box1.onclick = function () {
// 	console.log("test2");
//  if (classie.has(box1,"fadeinup")) {
//     classie.remove(box1,"fadeinup");
// } else {
//     classie.add(box1,"fadeinup");
// }
// };

///

var navItems = document.querySelectorAll("ul li");
var slider = document.querySelectorAll(".slider");
var ripple = document.querySelectorAll(".ripple");

//For Loop To run through all the nav items

for (var i = 0; i < navItems.length; i++) {

//For each nav item Run this function on click

navItems[i].onclick = (function(i) {
	return function(e) {

		 console.log("clicked!");

//If it contains slider already do nothing.
if (this.classList.contains('slider')){
	return;
}

//Translate Slider Element across list
var howFar = 160 * i ;
slider[0].style.left = howFar + "px";

//Remove Ripple Class


//Ripple Setup

  var posX = this.getBoundingClientRect().left + document.body.scrollLeft,
      posY = this.getBoundingClientRect().top + document.body.scrollTop,
      buttonWidth = this.clientWidth,
      buttonHeight = this.clientHeight;

// Create the element 
span = document.createElement("span");
// Add class to the element created
span.className = "ripple";
//insert element before the clicked element
this.insertBefore(span, this.firstChild);

// Making element round
  if (buttonWidth >= buttonHeight) {
    buttonHeight = buttonWidth;
  } else {
    buttonWidth = buttonHeight;
  }

//Get the center of the element
var x = e.pageX - posX - buttonWidth / 2;
var y = e.pageY - posY - buttonHeight / 2;

//Add styling to position the span element
span.style.width = buttonWidth + 'px';
span.style.height = buttonHeight + 'px';
span.style.top = y + 'px';
span.style.left = x + 'px';
span.classList.add('rippleEffect');

	}
})(i);
}


