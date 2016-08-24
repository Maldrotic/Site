window.onload = function onload() {

  var tl = new TimelineMax({repeat: -1});

  var main = document.getElementById('main');
  var dot = document.getElementById('dot');

  tl.to(main, 1, {css: { backgroundColor: '#222' }});
  tl.to(main, 2, {css: { backgroundColor: '#454545' }});
  tl.to(main, 1, {css: { backgroundColor: '#222' }});
  tl.to(main, 2, {css: { backgroundColor: '#454545' }});
  tl.to(main, 1, {css: { backgroundColor: '#222' }});
  tl.to(main, 2, {css: { backgroundColor: '#454545' }});

  // tl.to(main, 3, {css: { backgroundColor: '#fff'}});
  // tl.from(dot, 4, {css: { x: '-10px'}});

  tl.play();
};