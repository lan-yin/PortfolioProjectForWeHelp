const text=document.querySelectorAll(".thePaths");

// 測試有沒有連到這個app.js，去網站檢查
// console.log(text[0].getTotalLength())
for(let i = 0; i < text.length; i ++) {
    console.log(`text number ${i} length is ${text[i].getTotalLength()}`);
}

const lastWord = document.querySelector("#seventeenth");
// 確認是選到最後一個字
// console.log(lastWord) 
const animation = document.querySelector("div.animation");
lastWord.addEventListener("animationend", () => {
    animation.style = "transition: all 1s ease; opacity: 0; pointer-events:none; ";
})