export const state = () => ({
  subjectsList: [
    {
      img: require("@/assets/img/subjects/maths.svg"),
      name: "Mathematics"
    },
    {
      img: require("@/assets/img/subjects/physical.svg"),
      name: "Physical"
    },
    {
      img: require("@/assets/img/subjects/svt.svg"),
      name: "SVT"
    },
    {
      img: require("@/assets/img/subjects/history.svg"),
      name: "History"
    },
    {
      img: require("@/assets/img/subjects/chemistry.svg"),
      name: "Chemistry"
    },
    {
      img: require("@/assets/img/subjects/numeric.svg"),
      name: "Numeric Science"
    },
    {
      img: require("@/assets/img/subjects/technology.svg"),
      name: "Technology"
    },
    {
      img: require("@/assets/img/subjects/philosophy.svg"),
      name: "Philosophy"
    },
    {
      img: require("@/assets/img/subjects/geographi.svg"),
      name: "Geographi"
    },
    {
      img: require("@/assets/img/subjects/language.svg"),
      name: "French"
    }
  ],

  selectedSubjectInfo: {
    subjectName: "",
    subjectImg: ""
  }
});

export const mutations = {
  setSubject(state, subjectName, subjectImg) {
    state.selectedSubjectInfo.subjectName = subjectName;
    state.selectedSubjectInfo.subjectImg = subjectImg;
  }
};

export const actions = {};
