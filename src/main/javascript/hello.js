define(["helloText"], function(helloText) {
  return function _hello() {
    var html = "<h1 class='bordered'>" + helloText() + "</h1>";
	html = html + "<img src='images/world.jpg' />";
    document.body.innerHTML += html;
  };
});