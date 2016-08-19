window.onload = function onload() {

  var tl = new TimelineMax({
    repeat: -1
  });

  var main = document.getElementById('darker');

  tl.to(main, 1, {css: { opacity: 0 }});
  tl.to(main, 2,{css: { opacity: 1 }});
  // tl.to(main, 1, {css: { opacity: 0 }});

  tl.play();
};