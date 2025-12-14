// 全域變數
// -----------------------------------------------------------
const time = document.getElementById("time");
const combo = document.getElementById("combo");
const animals = document.querySelectorAll(".imgs-box>img");
const startBtn = document.querySelector("button");


startBtn.addEventListener("click", startGame);

function startGame() {
    console.log("遊戲開始");
    startBtn.disabled = true;
    let sec = 10;
    time.textContent = sec;

    // let time = setInterval(() => {
    //     sec--;
    //     time.textContent = sec;
    // }, 1000);

    const timeID = setInterval(() => {
        time.textContent = --sec;

        if (sec === 0)
            clearInterval(timeID);
        console.log("時間到! 遊戲結束!");
    }, 1000);

    //規劃紅色事件
    for (let i = 0; i < 100; i++) {

        const space = Math.floor(Math.random() * 9); // rand 0~8
        const showTime = Math.floor(Math.random() * 57000); // rand 0~56999(ms)
        const delay = Math.floor(Math.random() * 3) + 2; // rand 2 ~ 4 sec

        // console.log(space, showTime, delay);

        // setTimeout(() => {
        //     toRedEvent(space, delay);
        // }, showTime);

        setTimeout(() => toRedEvent(space, delay), showTime);
    }


}
// 專門處理把畫面上的指定位置變紅色且曝光多久函示
// function toRedEvent(data) {
// console.log(space,delay);
function toRedEvent({ space, delay }) {
    animals[space].src = './img/on.png';
    setTimeout(() => animals[space].src = './img/state.png', delay * 1000);
}

// -----------------------------------------------------------
