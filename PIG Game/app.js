"Use Strict";

let start = document.querySelector(".st-btn");
let restart = document.querySelector(".rs-btn");
let die = document.querySelector(".dice");
let box0 = document.querySelector(".box-0");
let box1 = document.querySelector(".box-1");
let lScore = document.querySelector(".score0");
let rScore = document.querySelector(".score1");

const scores = [0, 0];
let tScore = 0;
let active = 0;
let playing = false;
let newGame = false;

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

const left = () => {
    box0.classList.add("slider");
    leftAnime();
};

const switching = () => {
    tScore = 0;
    document.querySelector(`.score${active}`).textContent = tScore;
    active = active === 0 ? 1 : 0;
    if (active != 0) {
        box1.classList.add("slider");
        rightAnime();
        box0.classList.remove("slider");
    } else {
        left();
        box1.classList.remove("slider");
    }
};

const addScore = () => {
    scores[active] += tScore;
    // console.log(tScore);
    document.querySelector(`.s--${active}`).textContent = scores[active];
};

//start
start.addEventListener("click", () => {
    console.log("Game Start...");
    playing = true;

    start.classList.toggle("hidden");
    restart.classList.toggle("hidden");
    die.classList.toggle("hidden");
    die.style.animation =
        "scale-in-center 0.25s cubic-bezier(0.250, 0.460, 0.450, 0.940) both";
    setTimeout(() => {
        die.style.animation = "none";
    }, 250);
    left();
    box1.classList.remove("slider");
    document.querySelector(".sff-btn").style.animation =
        "shake-horizontal 0.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) 2s both";
    setTimeout(() => {
        document.querySelector(".sff-btn").style.animation = "none";
    }, 2800);
    // shuffling();
});

let shuffle = document.querySelector(".sff-btn");
let hold = document.querySelector(".h-btn");

//shuffle & hold
// const shuffling = () => {
// tScore = 0;
// active = 0;
// newGame = false;

//shuffle
shuffle.addEventListener("click", () => {
    document.querySelector(".st-btn").style.animation =
        "shake-horizontal 0.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) both";
    setTimeout(() => {
        start.style.animation = "none";
    }, 800);
    if (playing) {
        console.log("shuffling...");
        let rnum = Number(Math.ceil(Math.random() * 6));
        die.style.backgroundImage = `url('dice/${rnum}.png')`;
        if (rnum != 1) {
            tScore += rnum;
            document.querySelector(`.score${active}`).textContent = tScore;
            // console.log(tScore);
        } else {
            switching();
        }
        die.style.animation =
            "rotate-in-center 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) infinite both";
        setTimeout(() => {
            die.style.animation = "none";
        }, 600);
        document.querySelector(".h-btn").style.animation =
            "shake-horizontal 0.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) 1s infinite both";
        setTimeout(() => {
            hold.style.animation = "none";
        }, 1800);
    }
});

//hold
hold.addEventListener("click", () => {
    document.querySelector(".st-btn").style.animation =
        "shake-horizontal 0.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) both";
    setTimeout(() => {
        start.style.animation = "none";
    }, 800);
    if (playing) {
        console.log("Holding...");
        if (active != 0) {
            addScore();
        } else {
            addScore();
        }
        if (scores[active] != 10 && scores[active] <= 9) {
            rnum = 1;
            die.style.backgroundImage = `url('dice/${rnum}.png')`;
            switching();
        } else {
            console.log(`Winner...${active}`);

            die.style.animation =
                "scale-out-center 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both";
            setTimeout(() => {
                die.style.animation = "none";
                die.classList.toggle("hidden");
            }, 500);
            tScore = 0;
            document.querySelector(`.score${active}`).textContent = tScore;
            document.querySelector(`.box-${active}`).classList.toggle("slider");
            document.querySelector(`.box-${active}`).classList.add("winner");
            document.querySelector(`#s-head${active}`).innerHTML =
                `<i class="fa-solid fa-trophy "></i>`;
            document.querySelector(`.score${active}`).textContent = "Winner";
            document.querySelector(".winner").style.animation =
                "swing-in-top-bck 0.6s cubic-bezier(0.175, 0.885, 0.320, 1.275) both";
            document
                .querySelector(`.box-${(active = active === 0 ? 1 : 0)}`)
                .classList.add("loser");
            document.querySelector(`#s-head${active}`).innerHTML =
                `<i class="fa-solid fa-thumbs-down"></i>`;
            document.querySelector(`.score${active}`).textContent = "Loser";
            document.querySelector(".loser").style.animation =
                "swing-in-top-bck 0.6s cubic-bezier(0.175, 0.885, 0.320, 1.275) both";
            document.querySelector(".rs-btn").style.animation =
                "shake-horizontal 0.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) 3s both";
            setTimeout(() => {
                restart.style.animation = "none";
            }, 800);
            newGame = true;
            playing = false;
        }
    }
});
// };

//restart
document.querySelector(".rs-btn").addEventListener("click", () => {
    if (newGame) {
        console.log("restarted...");
        scores[0] = 0;
        scores[1] = 0;
        tScore = 0;
        active = 0;
        playing = true;
        die.classList.remove("hidden");
        die.style.animation =
            "scale-in-center 0.25s cubic-bezier(0.250, 0.460, 0.450, 0.940) both";
        setTimeout(() => {
            die.style.animation = "none";
        }, 250);
        left();
        document.querySelector(".score0").textContent = tScore;
        document.querySelector(".score1").textContent = tScore;
        document.querySelector(".s--0").textContent = scores[0];
        document.querySelector(".s--1").textContent = scores[1];
        document.querySelector("#s-head0").innerHTML = "Score";
        document.querySelector("#s-head1").innerHTML = "Score";
        document.querySelector(".box-0").classList.remove("winner");
        document.querySelector(".box-1").classList.remove("winner");
        document.querySelector(".box-0").classList.remove("loser");
        document.querySelector(".box-1").classList.remove("loser");
        shuffling();
    }
});
