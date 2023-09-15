import { animate } from "./animate.js";
 
const ball = document.querySelector(".box");
animate({
    from: 0,
    to: 100,
    onUpdate: latest => ball.style.transform = `translateX(${latest}px)`
});
