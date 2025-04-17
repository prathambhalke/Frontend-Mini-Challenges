const outsideClick = document.getElementById("outsideClick");
const ecapeClick = document.getElementById("ecapeClick");
const iconClick = document.getElementById("iconClick");
const backdropClick = document.getElementById("backdropClick");

const dialogClickBtn = document.getElementById("dialogClickBtn");
const dialogCloseIconBtn = document.getElementById("dialogCloseIconBtn");
const dialogCloseBtn = document.getElementById("dialogCloseBtn");
const dialog = document.querySelector("dialog");

function showDialogClick() {
    dialog.showModal()
}

function closeDialogBox() {
    dialog.close();
}

dialogClickBtn.addEventListener("click", showDialogClick);
dialogCloseIconBtn.addEventListener("click", closeDialogBox);
dialogCloseBtn.addEventListener("click", closeDialogBox);



// closeOnOutsideClick
checkCloseOnOutside();
function checkCloseOnOutside() {
  dialog.addEventListener('click', closeOnOutsideClickListener);
}
function closeOnOutsideClickListener(event) {
  if (event.target.nodeName === 'DIALOG') {
    dialog.close();
  }
}
outsideClick.addEventListener('click', () => {
  if (outsideClick.checked) {
    checkCloseOnOutside();
  } else {
    dialog.removeEventListener('click', closeOnOutsideClickListener);
  }
});
// closeOnEscape
checkCloseOnEscape();
function checkCloseOnEscape() {
  dialog.removeEventListener('keydown', closeOnEscapeListener);
}
function closeOnEscapeListener(event) {
  if (event.key === 'Escape') {
    event.preventDefault();
  }
}
ecapeClick.addEventListener('click', () => {
  if (ecapeClick.checked) {
    checkCloseOnEscape();
  } else {
    dialog.addEventListener('keydown', closeOnEscapeListener);
  }
});


iconClick.addEventListener("click", () => {
    dialogCloseIconBtn.style.display = iconClick.checked ? "block" : "none";
})

backdropClick.addEventListener("click", () => {
    if (backdropClick.checked) {
        dialog.style.setProperty("--backdrop-opacity", 0.5)
    } else {
        dialog.style.setProperty("--backdrop-opacity", 0)
    }
})
