"use Strict";
import {
  rootElement,
  // regulation-17
  firstYearEven_17,
  firstYearOdd_17,
  secondYearEven_17,
  secondYearOdd_17,
  thirdYearEven_17,
  thirdYearOdd_17,
  fourthYearEven_17,
  fourthYearOdd_17,
  // regulation-21
  firstYearOdd_21,
  firstYearEven_21,
  secondYearOdd_21,
  secondYearEven_21,
  thirdYearOdd_21,
  thirdYearEven_21,
  fourthYearOdd_21,
  fourthYearEven_21,
} from "./aids.js";

// Use the subjects object

let btn = document.getElementById("btn");
const container = document.querySelector(".inputs");
let gpa = document.getElementById("gpa");

/////////////////////////////////////////////////////

function gradings(inputGrade, inputCredits) {
  if (inputGrade === "O") {
    let cal1 = 10 * inputCredits;
    return cal1;
  } else if (inputGrade === "A+") {
    let cal2 = 9 * inputCredits;
    return cal2;
  } else if (inputGrade === "A") {
    let cal3 = 8 * inputCredits;
    return cal3;
  } else if (inputGrade === "B+") {
    let cal4 = 7 * inputCredits;
    return cal4;
  } else if (inputGrade === "B") {
    let cal5 = 6 * inputCredits;
    return cal5;
  } else if (inputGrade === "U") {
    let cal6 = 0 * inputCredits;
    return cal6;
  }
}

window.addEventListener("scroll", () => {
  let currentScrollPos = window.pageYOffset;
  const box = document.querySelector(".heading");
  let sum = currentScrollPos * 1.5;
  box.style.transform = "translateY(" + `${sum}px` + ")";
});

function semisterSelection(semisterName) {
  for (const key in semisterName) {
    const label = document.createElement("label");
    label.innerText = semisterName[key]["code"];

    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", key);
    input.setAttribute("maxlength", "2");
    input.setAttribute("placeholder", "A+");

    container.appendChild(label);
    label.appendChild(input);
    gpa.innerText = "00.00";
  }

  // Add an event listener to the document that retrieves the values of the input fields
  btn.addEventListener("click", () => {
    const values = {};
    for (const key in semisterName) {
      const input = document.getElementById(key);
      values[key] = input.value;
    }
    const myArray = Object.values(values);
    for (let i = 0; i < myArray.length; i++) {
      myArray[i] = myArray[i].toUpperCase();
    }

    // console.log(myArray);
    let userCredits = [];

    let calculatedCredits = [];

    Object.keys(semisterName).forEach(function (key) {
      userCredits.push(semisterName[key].credit);
    });
    for (let i = 0; i < myArray.length; i++) {
      let hel = gradings(myArray[i], userCredits[i]);
      calculatedCredits.push(hel);
    }
    if (calculatedCredits.includes(0)) {
      gpa.innerText = "FAIL";
    } else {
      let numerator = calculatedCredits.reduce((total, num) => total + num);
      let denominator = userCredits.reduce((total, num) => total + num);
      let finalResult = (numerator / denominator).toFixed(2);
      gpa.innerText = finalResult;
      if (finalResult === "NaN") {
        gpa.innerText = "CHECK";
      }
    }

    Object.keys(semisterName).forEach(function (key) {
      const input = document.getElementById(key);
      input.value = "";
    });
  });
}
// storage
const deptInfo = localStorage.getItem("deptInfo");
const yearInfo = localStorage.getItem("yearInfo");
const regInfo = localStorage.getItem("regInfo");
const semInfo = localStorage.getItem("semInfo");

const lookupTable = {
  AIDS: {
    "FIRST YEAR": { ODD: "SEM1", EVEN: "SEM2" },
    "SECOND YEAR": { ODD: "SEM3", EVEN: "SEM4" },
    "THIRD YEAR": { ODD: "SEM5", EVEN: "SEM6" },
    "FOURTH YEAR": { ODD: "SEM7", EVEN: "SEM8" },
  },
  IT: {
    "FIRST YEAR": { ODD: "SEM1", EVEN: "SEM2" },
    "SECOND YEAR": { ODD: "SEM3", EVEN: "SEM4" },
    "THIRD YEAR": { ODD: "SEM5", EVEN: "SEM6" },
    "FOURTH YEAR": { ODD: "SEM7", EVEN: "SEM8" },
  },
};

if (regInfo === "R-17" && deptInfo === "AIDS") {
  const sem = lookupTable[deptInfo][yearInfo][semInfo];
  if (sem === "SEM1") {
    semisterSelection(firstYearOdd_17);
  } else if (sem === "SEM2") {
    semisterSelection(firstYearEven_17);
  } else if (sem === "SEM3") {
    semisterSelection(secondYearOdd_17);
  } else if (sem === "SEM4") {
    semisterSelection(secondYearEven_17);
  } else if (sem === "SEM5") {
    semisterSelection(thirdYearOdd_17);
  } else if (sem === "SEM6") {
    semisterSelection(thirdYearEven_17);
  } else if (sem === "SEM7") {
    semisterSelection(fourthYearOdd_17);
  } else if (sem === "SEM8") {
    semisterSelection(fourthYearEven_17);
  }
}
if (regInfo === "R-21" && deptInfo === "AIDS") {
  const sem = lookupTable[deptInfo][yearInfo][semInfo];
  if (sem === "SEM1") {
    semisterSelection(firstYearOdd_21);
  } else if (sem === "SEM2") {
    semisterSelection(firstYearEven_21);
  } else if (sem === "SEM3") {
    semisterSelection(secondYearOdd_21);
  } else if (sem === "SEM4") {
    semisterSelection(secondYearEven_21);
  } else if (sem === "SEM5") {
    semisterSelection(thirdYearOdd_21);
  } else if (sem === "SEM6") {
    semisterSelection(thirdYearEven_21);
  } else if (sem === "SEM7") {
    semisterSelection(fourthYearOdd_21);
  } else if (sem === "SEM8") {
    semisterSelection(fourthYearEven_21);
  }
}
