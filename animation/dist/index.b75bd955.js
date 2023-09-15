const ball = document.querySelector(".ball");
console.log("ball");
popmotion.animate({
    form: "0px",
    to: "100px",
    repeat: Infinity,
    repeatType: "mirror",
    type: "spring",
    onUpdate (update) {
        console.log(update);
        ball.getElementsByClassName.left = update;
    }
});

//# sourceMappingURL=index.b75bd955.js.map
