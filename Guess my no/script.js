let luckyNum = Number(Math.ceil(Math.random() * 20));
let score = 5;
let highscore = 0;
// console.log(luckyNum);
let tops = document.querySelector(".top");

let show = document.createElement("div");
show.textContent = "?";
show.classList.add("show-no");
tops.appendChild(show);
show.style.display = "none";

let play = document.querySelector(".st-btn");
play.addEventListener("click", function () {
    // console.log("clicked");
    document.querySelector("#heading").textContent = "Guessing...";
    play.remove();
    show.style.display = "block";
    inputNum();
});

const inputNum = () => {
    // console.log("Enter number");
    let check = document
        .querySelector(".check-btn")
        .addEventListener("click", function () {
            // console.log("checked");
            let value = Number(document.querySelector(".input").value);
            document.querySelector(".input").value = "";
            // console.log(value, typeof value);
            if (!value) {
                document.querySelector(".result").textContent = "No Number...";
            } else if (value == luckyNum) {
                document.querySelector(".result").textContent = "YOU WIN";
                document.querySelector("body").style.animation =
                    "color-change-2x 3s linear infinite alternate both";
                document.querySelector("#heading").textContent =
                    "CONGRATULATIONS!";
                document.querySelector(".target").textContent =
                    "Increase your Score...";
                show.textContent = luckyNum;

                if (highscore < score) {
                    highscore = score;
                    document.querySelector(".hscore-no").textContent = score;
                }
            } else if (value <= luckyNum) {
                if (score > 1) {
                    document.querySelector(".result").textContent =
                        "Too Low...";
                    score--;
                    document.querySelector(".score-no").textContent = score;
                } else {
                    document.querySelector(".result").textContent = "YOU LOST";
                    document.querySelector("body").style.background = "#222";
                    document.querySelector("body").style.color = "#fff";
                    document.querySelector("#heading").textContent =
                        "GAME OVER!";
                    document.querySelector(".target").textContent =
                        "Well Played...";
                    document.querySelector(".rst-btn").style.color = "#fff";
                    show.textContent = luckyNum;
                    document.querySelector(".score-no").textContent = 0;
                }
            } else if (value >= luckyNum) {
                if (score > 1) {
                    document.querySelector(".result").textContent =
                        "Too High...";
                    score--;
                    document.querySelector(".score-no").textContent = score;
                } else {
                    document.querySelector(".result").textContent = "YOU LOST";
                    document.querySelector("body").style.background = "#222";
                    document.querySelector("body").style.color = "#fff";
                    document.querySelector("#heading").textContent =
                        "GAME OVER!";
                    document.querySelector(".target").textContent =
                        "Well Played...";
                    document.querySelector(".rst-btn").style.color = "#fff";
                    show.textContent = luckyNum;
                    document.querySelector(".score-no").textContent = 0;
                }
            }
            // show.textContent = value;
        });
};

let reset = document
    .querySelector(".rst-btn")
    .addEventListener("click", function () {
        // console.log("Restart...");
        show.textContent = "?";
        score = 5;
        luckyNum = Number(Math.ceil(Math.random() * 20));
        document.querySelector("#heading").textContent = "Guessing...";
        document.querySelector(".result").textContent = "Your Results...";
        document.querySelector(".target").textContent = "Guess (1 to 20)";
        document.querySelector(".score-no").textContent = 5;
        document.querySelector("body").style.background = "#2a7b9b";
        document.querySelector("body").style.color = "#000";
        document.querySelector("body").style.animation = "none";
    });
