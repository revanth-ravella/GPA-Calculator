// Aids
const aiYearBtns = document.querySelectorAll(".year .btn0");
const airegBtns = document.querySelectorAll(".reg .btn1");
const aisemBtns = document.querySelectorAll(".sem .btn2");
const aisubmitBtn = document.querySelector("#btn9");

const ailogobtn = document.querySelector(".logo1");
const aicontent = document.querySelector(".card1");
const aidetails = document.querySelector(".details1");

const aiclose = document.querySelector(".close");
const aiclosebtn = document.getElementById("close1");

// information technology
const itYearBtns = document.querySelectorAll(".year .btn_0");
const itregBtns = document.querySelectorAll(".reg .btn_1");
const itsemBtns = document.querySelectorAll(".sem .btn_2");
const itsubmitBtn = document.querySelector("#btn_9");

const itlogobtn = document.querySelector(".logo2");
const itcontent = document.querySelector(".card2");
const itdetails = document.querySelector(".details2");

const itclose = document.querySelector(".close2");
const itclosebtn = document.getElementById("close2");

const heading=document.querySelector(".heading")

// functions---------------
function addCardEffects(contentElement, detailsElement, closeElement) {
  contentElement.classList.add("card-hover-effect");
  detailsElement.classList.add("card-detail-hover-effect");
  closeElement.classList.add("closebtn-hover-effect");

}
function removeCardEffects(contentElement, detailsElement, closeElement) {
  contentElement.classList.remove("card-hover-effect");
  detailsElement.classList.remove("card-detail-hover-effect");
  closeElement.classList.remove("closebtn-hover-effect");

}

function call() {
  addCardEffects(aicontent, aidetails, aiclose);
}
function recall() {
  removeCardEffects(aicontent, aidetails, aiclose);
}
function itcall() {
  addCardEffects(itcontent, itdetails, itclose);
}
function itrecall() {
  removeCardEffects(itcontent, itdetails, itclose);
}

function callActive(btnName) {
  btnName.forEach((btn) => {
    btn.addEventListener("click", () => {
      btnName.forEach((btnClass) => btnClass.classList.remove("active"));
      btn.classList.add("active");
    });
  });
}

// aids
callActive(aiYearBtns);
callActive(aisemBtns);
callActive(airegBtns);

// it
callActive(itYearBtns);
callActive(itsemBtns);
callActive(itregBtns);

ailogobtn.addEventListener("click", function () {
  addCardEffects(aicontent, aidetails, aiclose);
  removeCardEffects(itcontent, itdetails, itclose);
});
aiclosebtn.addEventListener("click", function () {
  removeCardEffects(aicontent, aidetails, aiclose);
});
itlogobtn.addEventListener("click", function () {
  addCardEffects(itcontent, itdetails, itclose);
  removeCardEffects(aicontent, aidetails, aiclose);
});
itclosebtn.addEventListener("click", function () {
  removeCardEffects(itcontent, itdetails, itclose);
});

// aids submit buttons
aisubmitBtn.addEventListener("click", () => {
  const department = "aids";
  const selectedYearBtn = document.querySelector(".year .btn0.active");
  const selectedregBtn = document.querySelector(".reg .btn1.active");
  const selectedSemBtn = document.querySelector(".sem .btn2.active");

  localStorage.setItem("deptInfo", department.toUpperCase());
  localStorage.setItem(
    "yearInfo",
    selectedYearBtn.textContent.trim().toUpperCase()
  );
  localStorage.setItem(
    "regInfo",
    selectedregBtn.textContent.trim().toUpperCase()
  );
  localStorage.setItem(
    "semInfo",
    selectedSemBtn.textContent.trim().toUpperCase()
  );

  window.location.href = "../html/calculate.html";
});

// It submit buttons
itsubmitBtn.addEventListener("click", () => {
  // Get the selected year and semister buttons
  const selectedYearBtn = document.querySelector(".year .btn_0.active");
  const selectedregBtn = document.querySelector(".reg .btn_1.active");
  const selectedSemBtn = document.querySelector(".sem .btn_2.active");
  const department = "it";
  // Do something with the selected year and semister
  localStorage.setItem("deptInfo", department.toUpperCase());
  localStorage.setItem(
    "yearInfo",
    selectedYearBtn.textContent.trim().toUpperCase()
  );
  localStorage.setItem(
    "regInfo",
    selectedregBtn.textContent.trim().toUpperCase()
  );
  localStorage.setItem(
    "semInfo",
    selectedSemBtn.textContent.trim().toUpperCase()
  );

  window.location.href = "../html/calculate.html";
});
