var box1 = document.querySelector('.box1');
var box2 = document.querySelector('.box2');
var box3 = document.querySelector('.box3');
var building = document.querySelector('.building');

var domNode1 = anime({
    targets: box1,
    translateY: 600,
    translateX: 0,
    easing: 'easeOutBounce',
    delay:18000,
    duration:1000
  });

  var domNode2 = anime({
    targets: box2,
    translateY: 600,
    translateX: 0,
    easing: 'easeOutBounce',
    delay:19000,
    duration:1000
});

  var domNode3 = anime({
    targets: box3,
    translateY: 555,
    translateX: 0,
    easing: 'easeOutBounce',
    delay:20000,
    duration:1000
});

var domNode4 = anime({
    targets: building,
    translateY: 555,
    translateX: 0,
    easing: 'easeOutBounce',
    delay:22000,
    duration:2000
});