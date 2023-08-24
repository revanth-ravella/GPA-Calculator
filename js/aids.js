const rootElement = document.documentElement;
rootElement.style.setProperty("--background", " #ffc815");
rootElement.style.setProperty("--card", "#ffffff");
rootElement.style.setProperty("--pri_let", "#292929");
rootElement.style.setProperty("--sen_let", "black");

const firstYearOdd_17 = {
  s1: {
    code: " BS8161",
    credit: 2,
  },
  s2: {
    code: " CY8151",
    credit: 3,
  },
  s3: {
    code: "GE8151",
    credit: 3,
  },
  s4: {
    code: "GE8152",
    credit: 4,
  },
  s5: {
    code: "GE8161",
    credit: 2,
  },
  s6: {
    code: "HS8151",
    credit: 4,
  },
  s7: {
    code: "MA8151",
    credit: 4,
  },
  s8: {
    code: " PH8151",
    credit: 3,
  },
};
const firstYearEven_17 = {
  s1: {
    code: "AD8251",
    credit: 3,
  },
  s2: {
    code: "AD8252",
    credit: 4,
  },
  s3: {
    code: "AD8261",
    credit: 2,
  },
  s4: {
    code: "BE8255",
    credit: 3,
  },
  s5: {
    code: "GE8152",
    credit: 3,
  },
  s6: {
    code: "GE8261",
    credit: 2,
  },
  s7: { code: "HS8251", credit: 4 },
  s8: { code: "MA8252", credit: 4 },
};
// sem 3
const secondYearOdd_17 = {
  s1: {
    code: "AD8301",
    credit: 4,
  },
  s2: {
    code: "AD8302",
    credit: 3,
  },
  s3: {
    code: "AD8311",
    credit: 2,
  },
  s4: {
    code: "AD8351",
    credit: 4,
  },
  s5: {
    code: "CS8383",
    credit: 2,
  },
  s6: {
    code: "CS8392",
    credit: 3,
  },
  s7: {
    code: "MA8351",
    credit: 4,
  },
  s8: {
    code: "HS8381",
    credit: 1,
  },
};
// sem4
const secondYearEven_17 = {
  s1: {
    code: "AD8401",
    credit: 3,
  },
  s2: {
    code: "AD8402",
    credit: 3,
  },
  s3: {
    code: "AD8403",
    credit: 3,
  },
  s4: {
    code: "AD8411",
    credit: 2,
  },
  s5: {
    code: "AD8412",
    credit: 2,
  },
  s6: {
    code: "AD8413",
    credit: 2,
  },
  s7: {
    code: "MA8391",
    credit: 4,
  },
  s8: {
    code: "HS8461",
    credit: 1,
  },
  s9: {
    code: "ELECTIVE",
    credit: 3,
  },
};
// sem5
const thirdYearOdd_17 = {
  s1: {
    code: "AD8501",
    credit: 4,
  },
  s2: {
    code: "AD8502",
    credit: 4,
  },
  s3: {
    code: "AD8551",
    credit: 3,
  },
  s4: {
    code: "AD8511",
    credit: 2,
  },
  s5: {
    code: "AD8512",
    credit: 2,
  },
  s6: {
    code: "AD8552",
    credit: 3,
  },
  s7: {
    code: "CW8691",
    credit: 4,
  },
  s8: {
    code: "ELECTIVE",
    credit: 3,
  },
  s9: {
    code: " SB8017",
    credit: 1,
  },
};
// sem6
const thirdYearEven_17 = {
  s1: {
    code: "AD8601",
    credit: 3,
  },
  s2: {
    code: "AD8602",
    credit: 3,
  },
  s3: {
    code: "AD8611",
    credit: 2,
  },
  s4: {
    code: "AD8612",
    credit: 2,
  },
  s5: {
    code: "IT8501",
    credit: 3,
  },
  s6: {
    code: "IT8511",
    credit: 2,
  },
  s7: {
    code: "HS8581",
    credit: 1,
  },
  s8: {
    code: "ELECTIVE",
    credit: 3,
  },
  s9: {
    code: "ELECTIVE",
    credit: 3,
  },
  s10: {
    code: " SB8017",
    credit: 1,
  },
};
// sem7
const fourthYearOdd_17 = {
  s1: {
    code: "AD8701",
    credit: 3,
  },
  s2: {
    code: "AD8702",
    credit: 3,
  },
  s3: {
    code: "AD8703",
    credit: 3,
  },
  s4: {
    code: "AD8704",
    credit: 4,
  },
  s5: {
    code: "AD8705",
    credit: 4,
  },
  s6: {
    code: "AD8711",
    credit: 2,
  },
  s7: {
    code: "AD8712",
    credit: 2,
  },
  s8: {
    code: "ELECTIVE",
    credit: 3,
  },
  s9: {
    code: " SB8017",
    credit: 1,
  },
};
// sem8
const fourthYearEven_17 = {
  s1: {
    code: "AD8811",
    credit: 10,
  },
  s2: {
    code: "ELECTIVE",
    credit: 3,
  },
  s3: {
    code: "ELECTIVE",
    credit: 3,
  },
  s4: {
    code: " SB8017",
    credit: 1,
  },
};
// regulation21//////////////////////////////////////////////////////////////////////////////
const firstYearOdd_21 = {
  s1: {
    code: " BS3171",
    credit: 2,
  },
  s2: {
    code: " CY3151",
    credit: 3,
  },
  s3: {
    code: "GE3151",
    credit: 3,
  },
  s4: {
    code: "GE3152",
    credit: 1,
  },
  s5: {
    code: "GE3171",
    credit: 2,
  },
  s7: {
    code: "GE3172",
    credit: 1,
  },

  s8: {
    code: "HS3151",
    credit: 3,
  },
  s9: {
    code: "MA3151",
    credit: 4,
  },
  s10: {
    code: " PH3151",
    credit: 3,
  },
};
const firstYearEven_21 = {
  s1: {
    code: "AD3251",
    credit: 3,
  },
  s2: {
    code: "AD3271",
    credit: 2,
  },
  s3: {
    code: "BE3251",
    credit: 3,
  },
  s4: {
    code: "GE3251",
    credit: 4,
  },
  s5: {
    code: "GE3271",
    credit: 2,
  },
  s6: {
    code: "HS3251",
    credit: 2,
  },
  s7: {
    code: "MA3251",
    credit: 4,
  },
  s8: {
    code: "PH3256",
    credit: 3,
  },
};
// sem 3
const secondYearOdd_21 = {
  s1: {
    code: "AD3301",
    credit: 4,
  },
  s2: {
    code: "AD3311",
    credit: 1.5,
  },
  s3: {
    code: "AD3351",
    credit: 4,
  },
  s4: {
    code: "AD3381",
    credit: 1.5,
  },
  s5: {
    code: "AD3391",
    credit: 3,
  },
  s6: {
    code: "AL3391",
    credit: 3,
  },
  s7: {
    code: "CS3351",
    credit: 4,
  },
  s8: {
    code: "GE3361",
    credit: 1,
  },
  s9: {
    code: "MA3354",
    credit: 4,
  },
};
// sem4
const secondYearEven_21 = {
  s1: {
    code: "AD3411",
    credit: 4,
  },
  s2: {
    code: "AD3491",
    credit: 3,
  },
  s3: {
    code: "AL3451",
    credit: 3,
  },
  s4: {
    code: "AD8403",
    credit: 3,
  },
  s5: {
    code: "AL3452",
    credit: 3,
  },
  s6: {
    code: "CS3591",
    credit: 2,
  },
  s7: {
    code: "GE3451",
    credit: 2,
  },
  s8: {
    code: "MA3391",
    credit: 2,
  },
};
// sem5
const thirdYearOdd_21 = {
  s1: {
    code: "AD3501",
    credit: 3,
  },
  s2: {
    code: "AD3511",
    credit: 3,
  },
  s3: {
    code: "AD3512",
    credit: 2,
  },
  s4: {
    code: "CCS334",
    credit: 3,
  },
  s5: {
    code: "CS3551",
    credit: 3,
  },
  s6: {
    code: "CW3551",
    credit: 3,
  },
  s7: {
    code: "ELECTIVE",
    credit: 3,
  },
  s8: {
    code: "ELECTIVE",
    credit: 3,
  },
};
// sem6
const thirdYearEven_21 = {
  s1: {
    code: "CS3691",
    credit: 4,
  },
  s2: {
    code: "ELECTIVE",
    credit: 3,
  },
  s3: {
    code: "ELECTIVE",
    credit: 3,
  },
  s4: {
    code: "ELECTIVE",
    credit: 3,
  },
  s5: {
    code: "ELECTIVE",
    credit: 3,
  },
  s6: {
    code: "ELECTIVE",
    credit: 3,
  },
};
// sem7
const fourthYearOdd_21 = {
  s1: {
    code: "GE3791",
    credit: 2,
  },
  s2: {
    code: "ELECTIVE",
    credit: 3,
  },
  s3: {
    code: "ELECTIVE",
    credit: 3,
  },
  s4: {
    code: "ELECTIVE",
    credit: 4,
  },
  s5: {
    code: "ELECTIVE",
    credit: 4,
  },
};
// sem8
const fourthYearEven_21 = {
  s1: {
    code: "PROJECT",
    credit: 10,
  },
};
export {
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
};
