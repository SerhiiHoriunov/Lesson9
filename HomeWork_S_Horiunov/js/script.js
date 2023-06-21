////////////////////// 1 //////////////////
//  Напишіть такий JavaScript, щоб після натискання на кнопку button, елемент
// <div id="text"> зникав.

/* const hideText = document.querySelector("#text");

const btnHide = document.querySelector("#hide");

btnHide.addEventListener("click", () => {
    hideText.hidden = true;
})

const btnUnhide = document.querySelector("#unhide");

btnUnhide.addEventListener("click", () => {
    hideText.hidden = false;
}) */

/////////////////////////// 2 //////////////////////////////
// Напишіть такий код, щоб після натискання на кнопку, вона зникала.

/* const btnLoss = document.querySelector("#loss");

btnLoss.addEventListener("click", () => {
    btnLoss.style.display = "none";
}) */

///////////////////////// 3 /////////////////////////////
// Створіть дерево, яке показує/приховує дочірні вузли при кліці

/* const listTree = document.querySelector(".listTree");

for (let list of listTree.querySelectorAll('li')) {
    let span = document.createElement('span');
    span.classList.add('show');
    list.prepend(span);
    span.append(span.nextSibling); 
}

       listTree.addEventListener ("click", (event)=> {

      if (event.target.tagName != 'SPAN') {
        return;
      }

      let childrenBox = event.target.parentNode.querySelector('ul');
      if (!childrenBox) return; // дітей немає

      childrenBox.hidden = !childrenBox.hidden;

      if (childrenBox.hidden) {
        event.target.classList.add('hide');
        event.target.classList.remove('show');
      }
})  */
