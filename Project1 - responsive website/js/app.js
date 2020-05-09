const hero = document.querySelector(".hero");
const hamburger = document.querySelector(".hamburger");

const tl = new TimelineMax({});
tl.fromTo(hero, 1, {height:'0%'}, {height: '90%'});