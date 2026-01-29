"Use Strict";

let start = document.querySelector(".st-btn");
let restart = document.querySelector(".rs-btn");
let die = document.querySelector(".dice");
let rBox = document.querySelector(".box-1");
let lBox = document.querySelector(".box-2");
start.addEventListener("click", () => {
    console.log("clicked to Start...");
    start.classList.toggle("hidden");
    restart.classList.toggle("hidden");
    die.classList.toggle("hidden");
    die.style.animation =
        "scale-in-center 0.25s cubic-bezier(0.250, 0.460, 0.450, 0.940) both";
    rBox.classList.toggle("slider");
    rBox.style.animation =
        "swing-in-right-bck 0.6s cubic-bezier(0.175, 0.885, 0.320, 1.275) both";
    lBox.classList.toggle("slider");
});
