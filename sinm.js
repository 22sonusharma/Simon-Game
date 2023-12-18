let gameSeq = [];
let userSeq = [];
let high = [];
let btns = ["yellow", "red", "green", "purple"];
let started = false;
let level = 0;
let highscore = 1;
let btn = document.querySelector("button");
let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3"); 

btn.addEventListener("click", function () {
    if (started == false) {
        console.log("game Stat");
        started = true;
        levelUp();
    }
});

function levelUp() {
    userSeq = [];
    level++;
    if (level >= highscore) {
        highscore = level;
    }
    h2.innerText = `Level ${level}`;

    //random  btn..
    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}

function btnPress() {
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userColor);
    checkAns(userSeq.length - 1);
}

function checkAns(idx) {
    if (userSeq[idx] == gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    }
    else {
        for (let i = 0; i < 10; i++) {
            high[i] = h2.innerText = `${level}`;
        }
        h2.innerHTML = `Game Over! Your Score was <b>${level}</b> <br>Press any key to Restart`;
        h3.innerHTML = `HighScore = ${highscore}`;
        document.querySelector("h2").style.color = "red";
        setTimeout(function () {
            document.querySelector("h2").style.color = "black";
        }, 1000);
        reset();
    }
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}