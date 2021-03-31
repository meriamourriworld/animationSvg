

let son = document.querySelector("#chouetteSon")
setTimeout(() =>{
    son.play();
}, 3500);

let son1 = document.querySelector("#pub")
setTimeout(() =>{
    son1.play();
}, 18000);

let box1 = document.querySelector('.box1');
let box2 = document.querySelector('.box2');
let box3 = document.querySelector('.box3');
let building = document.querySelector('.building');


let domNode1 = anime({
    targets: box1,
    translateY: 600,
    translateX: 0,
    easing: 'easeOutBounce',
    delay:18000,
    duration:1000
  });

  let domNode2 = anime({
    targets: box2,
    translateY: 600,
    translateX: 0,
    easing: 'easeOutBounce',
    delay:19000,
    duration:1000
});

  let domNode3 = anime({
    targets: box3,
    translateY: 555,
    translateX: 0,
    easing: 'easeOutBounce',
    delay:20000,
    duration:1000
});

let domNode4 = anime({
    targets: building,
    translateY: 555,
    translateX: 0,
    easing: 'easeOutBounce',
    delay:22000,
    duration:2000
});