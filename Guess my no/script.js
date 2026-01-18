let luckyNum = Number(Math.ceil(Math.random() * 20));
let tops = document.querySelector(".top");
// refresh
// let reset = document
//     .querySelector(".rst-btn")
//     .addEventListener("click", function () {
//         inputNum();
//         console.log("Restart...");
//     });
//refresh-end
let show = document.createElement("div");
show.textContent = "?";
show.classList.add("show-no");
tops.appendChild(show);
show.style.display = "none";
let play = document.querySelector(".st-btn");
play.addEventListener("click", function () {
    console.log("clicked");
    document.querySelector("#heading").textContent = "Guessing...";
    play.remove();
    show.style.display = "block";
    show.textContent = luckyNum;

    inputNum();
});

const inputNum = () => {
    console.log("Enter number");
    let check = document
        .querySelector(".check-btn")
        .addEventListener("click", function () {
            console.log("checked");
            let value = Number(document.querySelector(".input").value);
            console.log(value, typeof value);
            if (!value) {
                let message = (document.querySelector(".result").textContent =
                    "No Number...");
            } else if (value == luckyNum) {
                // message.textContent = "You WIN";
            }
            show.textContent = value;
        });
};
