export const state = () => ({
  subjectsList: [
    {
      id: 1,
      img: require("@/assets/img/subjects/maths.svg"),
      name: "Mathematics"
    },
    {
      id: 2,
      img: require("@/assets/img/subjects/physical.svg"),
      name: "Physical"
    },
    {
      id: 2,
      img: require("@/assets/img/subjects/svt.svg"),
      name: "SVT"
    },
    {
      id: 3,
      img: require("@/assets/img/subjects/history.svg"),
      name: "History"
    },
    {
      id: 4,
      img: require("@/assets/img/subjects/chemistry.svg"),
      name: "Chemistry"
    },
    {
      id: 5,
      img: require("@/assets/img/subjects/numeric.svg"),
      name: "Numeric Science"
    },
    {
      id: 6,
      img: require("@/assets/img/subjects/technology.svg"),
      name: "Technology"
    },
    {
      id: 7,
      img: require("@/assets/img/subjects/philosophy.svg"),
      name: "Philosophy"
    },
    {
      id: 8,
      img: require("@/assets/img/subjects/geographi.svg"),
      name: "Geographi"
    },
    {
      id: 9,
      img: require("@/assets/img/subjects/language.svg"),
      name: "French"
    }
  ]
});

export const mutations = {
  setSubject(state, { subjectName, subjectImg }) {
    state.selectedSubjectInfo.subjectName = subjectName;
    state.selectedSubjectInfo.subjectImg = subjectImg;
  }
};

export const actions = {};

export const getters = {
  getSubjectById: state => id => {
    return state.subjectsList.find(subjectId => subjectId.id == id);
  }
};
