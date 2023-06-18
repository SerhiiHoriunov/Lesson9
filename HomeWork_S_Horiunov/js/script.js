const hideText = document.querySelector("#text");

const btnHide = document.querySelector("#hide");

btnHide.addEventListener("click", () => {
    hideText.hidden = true;
})

const btnUnhide = document.querySelector("#unhide");

btnUnhide.addEventListener("click", () => {
    hideText.hidden = false;
})

const btnLoss = document.querySelector("#loss");

btnLoss.addEventListener("click", () => {
    btnLoss.style.display = "none";
})


