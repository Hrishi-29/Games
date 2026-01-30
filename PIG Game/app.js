"Use Strict";

let start = document.querySelector(".st-btn");
let restart = document.querySelector(".rs-btn");
let die = document.querySelector(".dice");
let box0 = document.querySelector(".box-0");
let box1 = document.querySelector(".box-1");
let lScore = document.querySelector(".score0");
let rScore = document.querySelector(".score1");

const leftAnime = () => {
    box0.style.animation =
        "swing-in-right-bck 0.6s cubic-bezier(0.175, 0.885, 0.320, 1.275) both";
    setTimeout(() => {
        box0.style.animation = "none";
    }, 700);
};

const rightAnime = () => {
    box1.style.animation =
        "swing-in-left-bck 0.6s cubic-bezier(0.175, 0.885, 0.320, 1.275) both";
    setTimeout(() => {
        box1.style.animation = "none";
    }, 700);
};
start.addEventListener("click", () => {
    console.log("Game Start...");
    start.classList.toggle("hidden");
    restart.classList.toggle("hidden");
    die.classList.toggle("hidden");
    die.style.animation =
        "scale-in-center 0.25s cubic-bezier(0.250, 0.460, 0.450, 0.940) both";
    setTimeout(() => {
        die.style.animation = "none";
    }, 250);
    box0.classList.toggle("slider");
    leftAnime();
    box1.classList.toggle("slider");
    shuffling();
});

let shuffle = document.querySelector(".sff-btn");
let hold = document.querySelector(".h-btn");
const shuffling = () => {
    const scores = [0, 0];
    let tScore = 0;
    let active = 0;
    let playing = true;
    shuffle.addEventListener("click", () => {
        if (playing) {
            console.log("shuffling...");
            let rnum = Number(Math.ceil(Math.random() * 6));
            die.style.backgroundImage = `url('dice/${rnum}.png')`;
            if (rnum != 1) {
                tScore += rnum;
                document.querySelector(`.score${active}`).textContent = tScore;
                // console.log(tScore);
            } else {
                tScore = 0;
                document.querySelector(`.score${active}`).textContent = tScore;
                active = active === 0 ? 1 : 0;
                if (active != 0) {
                    box1.classList.toggle("slider");
                    rightAnime();
                    box0.classList.toggle("slider");
                } else {
                    box0.classList.toggle("slider");
                    leftAnime();
                    box1.classList.toggle("slider");
                }
            }
            die.style.animation =
                "rotate-in-center 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) infinite both";
            setTimeout(() => {
                die.style.animation = "none";
            }, 600);
        }
    });
    hold.addEventListener("click", () => {
        if (playing) {
            console.log("Holding...");
            if (active != 0) {
                scores[active] += tScore;
                // console.log(tScore);
                document.querySelector(`.s--${active}`).textContent =
                    scores[active];
            } else {
                scores[active] += tScore;
                // console.log(tScore);
                document.querySelector(`.s--${active}`).textContent =
                    scores[active];
            }
            if (scores[active] != 50 && scores[active] <= 49) {
                rnum = 1;
                die.style.backgroundImage = `url('dice/${rnum}.png')`;
                tScore = 0;
                document.querySelector(`.score${active}`).textContent = tScore;
                active = active === 0 ? 1 : 0;
                if (active != 0) {
                    box1.classList.toggle("slider");
                    rightAnime();
                    box0.classList.toggle("slider");
                } else {
                    box0.classList.toggle("slider");
                    leftAnime();
                    box1.classList.toggle("slider");
                }
            } else {
                console.log(`Winner...${active}`);
                tScore = 0;
                document.querySelector(`.score${active}`).textContent = tScore;
                document
                    .querySelector(`.box-${active}`)
                    .classList.toggle("slider");
                document
                    .querySelector(`.box-${active}`)
                    .classList.add("winner");
                document.querySelector(".winner").style.animation =
                    "swing-in-top-bck 0.6s cubic-bezier(0.175, 0.885, 0.320, 1.275) both";
                document
                    .querySelector(`.box-${(active = active === 0 ? 1 : 0)}`)
                    .classList.add("loser");
                document.querySelector(".loser").style.animation =
                    "swing-in-top-bck 0.6s cubic-bezier(0.175, 0.885, 0.320, 1.275) both";

                playing = false;
            }
        }
    });
};
