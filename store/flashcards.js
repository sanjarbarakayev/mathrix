export const state = () => ({
  flashcardsList: [
    {
      id: 1,
      question: "Give the formula of gravitational attraction.",
      answer: `
      <div>
      F = <div style="display: inline-block; position: relative; vertical-align: middle; letter-spacing: 0.001em; text-align: center;">
          <span style="display: block; padding: 0.1em;">GMm</span>
          <span style="display: block; padding: 0.1em; display: none;">/</span>
          <span style="display: block; padding: 0.1em; border-top: 2px solid black;">r<sup>2</sup></span>
        </div>
      </div>
      `
    },
    {
      id: 2,
      question:
        "Over which interval does h have a negative average rateof change?",
      answer: `
        <p>  
          We know that ff is a polynomial function, but it is of degree33, we do not know any analogous to the discriminant to find the roots offf. But on the graph, we can read thatff is canceled in 4 - 4 , in 2 - 2 and in 1-1.
        </p>
      `
    },
    {
      id: 3,
      question:
        "Over which interval does h have a negative average rateof change?.",
      answer: `
      <div>
      F = <div style="display: inline-block; position: relative; vertical-align: middle; letter-spacing: 0.001em; text-align: center;">
          <span style="display: block; padding: 0.1em;">GMm</span>
          <span style="display: block; padding: 0.1em; display: none;">/</span>
          <span style="display: block; padding: 0.1em; border-top: 2px solid black;">r<sup>2</sup></span>
        </div>
      </div>
      `
    },
    {
      id: 4,
      question: "Give the formula of gravitational attraction.",
      answer: `
        <p>  
          We know that ff is a polynomial function, but it is of degree33, we do not know any analogous to the discriminant to find the roots offf. But on the graph, we can read thatff is canceled in 4 - 4 , in 2 - 2 and in 1-1.
        </p>
      `
    }
  ]
});

export const getters = {
  getFlashcardsListById: state => id => {
    return state.flashcardsList.find(flashcard => flashcard.id == id);
  },
  getFlashcardsList(state) {
    return state.flashcardsList;
  }
};
