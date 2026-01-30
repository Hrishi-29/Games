"Use Strict";

let start = document.querySelector(".st-btn");
let restart = document.querySelector(".rs-btn");
let die = document.querySelector(".dice");
let lBox = document.querySelector(".box-1");
let rBox = document.querySelector(".box-2");
let lScore = document.querySelector(".score0");
let rScore = document.querySelector(".score1");

const leftAnime = () => {
    lBox.style.animation =
        "swing-in-right-bck 0.6s cubic-bezier(0.175, 0.885, 0.320, 1.275) both";
    setTimeout(() => {
        lBox.style.animation = "none";
    }, 700);
};

const rightAnime = () => {
    rBox.style.animation =
        "swing-in-left-bck 0.6s cubic-bezier(0.175, 0.885, 0.320, 1.275) both";
    setTimeout(() => {
        rBox.style.animation = "none";
    }, 700);
};
start.addEventListener("click", () => {
    console.log("clicked to Start...");
    start.classList.toggle("hidden");
    restart.classList.toggle("hidden");
    die.classList.toggle("hidden");
    die.style.animation =
        "scale-in-center 0.25s cubic-bezier(0.250, 0.460, 0.450, 0.940) both";
    setTimeout(() => {
        die.style.animation = "none";
    }, 250);
    lBox.classList.toggle("slider");
    leftAnime();
    rBox.classList.toggle("slider");
    shuffling();
});

let shuffle = document.querySelector(".sff-btn");
let hold = document.querySelector(".h-btn");
const shuffling = () => {
    let tScore = 0;
    let active = 0;
    shuffle.addEventListener("click", () => {
        console.log("shuffling...");
        let rnum = Number(Math.ceil(Math.random() * 6));
        die.style.backgroundImage = `url('dice/${rnum}.png')`;
        if (rnum != 1) {
            tScore += rnum;
            document.querySelector(`.score${active}`).textContent = tScore;
            console.log(tScore);
        } else {
            tScore = 0;
            document.querySelector(`.score${active}`).textContent = tScore;
            active = active === 0 ? 1 : 0;
            if (active != 0) {
                rBox.classList.toggle("slider");
                rightAnime();
                lBox.classList.toggle("slider");
            } else {
                lBox.classList.toggle("slider");
                leftAnime();
                rBox.classList.toggle("slider");
            }
        }
        die.style.animation =
            "rotate-in-center 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) infinite both";
        setTimeout(() => {
            die.style.animation = "none";
        }, 600);
    });
    hold.addEventListener("click", () => {
        console.log("Holding...");
        if (active != 0) {
            console.log(document.querySelector(`.score${active}`).textContent);
            document.querySelector(`.s--${active}`).textContent =
                document.querySelector(`.score${active}`).textContent;
        } else {
            console.log(document.querySelector(`.score${active}`).textContent);
            document.querySelector(`.s--${active}`).textContent =
                document.querySelector(`.score${active}`).textContent;
        }
        rnum = 1;
        die.style.backgroundImage = `url('dice/${rnum}.png')`;
        tScore = 0;
        document.querySelector(`.score${active}`).textContent = tScore;
        active = active === 0 ? 1 : 0;
        if (active != 0) {
            rBox.classList.toggle("slider");
            rightAnime();
            lBox.classList.toggle("slider");
        } else {
            lBox.classList.toggle("slider");
            leftAnime();
            rBox.classList.toggle("slider");
        }
    });
};
