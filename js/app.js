 const btn = document.querySelector(".btn");
const selectionModal = document.querySelector(".selection-modal");
const successModal = document.querySelector(".success-modal");
const continueBtn = document.querySelector(".selected-pledge .btn2");
const back = document.querySelector(".back-modal .img");
const gotBtn = document.querySelector(".got-btn");
const section1 = document.querySelector(".section-1");
const section2 = document.querySelector(".section-2");
const section3 = document.querySelector(".section-3");
const btnDesk = document.querySelector(".btn-desk");


function show() {
    selectionModal.style.display = 'block';
    section1.style.opacity = 0.3;
    section2.style.opacity = 0.3;
    section3.style.opacity = 0.3;
}

btn.addEventListener("click", show);

function success() {
     successModal.style.display = "block";
     selectionModal.style.display = "none";
}

continueBtn.addEventListener("click", success);

function hide() {
    selectionModal.style.display = "none";
    section1.style.opacity = 1;
    section2.style.opacity = 1;
    section3.style.opacity = 1;
}

back.addEventListener("click", hide);

function hideSuccess() {
    successModal.style.display = "none";
    section1.style.opacity = 1;
    section2.style.opacity = 1;
    section3.style.opacity = 1;
}

gotBtn.addEventListener("click", hideSuccess);

btnDesk.addEventListener("click", () => {
    btnDesk.innerText = "Bookmarked";
})


