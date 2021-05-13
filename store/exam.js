export const state = () => ({
  questions: [
    {
      id: 1,
      title:
        "Over which interval does h have a negative average rateof change?",
      variants: [
        {
          title: "− 3 ≤ x ≤ 1−3 ≤ x ≤ 1",
          answer: `
            <p>
              We know that ff is a polynomial function, but it is of degree33, we do not know any analogous to the discriminant to find the roots offf. But on the graph, we can read thatff is canceled in 4 - 4 , in 2 - 2 and in 1-1.
            </p>
            <p>
              We deduce that for everythingx \ in \ mathbb {R}x∈R , f (x) = (x + 4) (x + 2) (x + 1). f ( x )=( x+4 ) ( x+2 ) ( x+1 ).
            </p>
          `
        },
        {
          title: "− 3 ≤ x ≤ 1−3 ≤ x ≤ 1",
          answer: `
            <p>
              We know that ff is a polynomial function, but it is of degree33, we do not know any analogous to the discriminant to find the roots offf. But on the graph, we can read thatff is canceled in 4 - 4 , in 2 - 2 and in 1-1. 
            </p>
          `
        }
      ]
    },
    {
      id: 2,
      title: "Translate the following sentences in terms of limits.",
      variants: [
        {
          title: "f admits a vertical asymptote in 0 ^ +0 + ",
          answer: `
            <p>
            f admits a horizontal asymptote of equationy = 42there=4 2 in+ \ Infty+ ∞ .
            </p>
          `
        },
        {
          title:
            "f admits a horizontal asymptote of equationy = 42there=4 2 in+  Infty+ ∞ .",
          answer: `
            <p>
              We know that ff is a polynomial function, but it is of degree33, we do not know any analogous to the discriminant to find the roots offf. But on the graph, we can read thatff is canceled in 4 - 4 , in 2 - 2 and in 1-1. 
            </p>
          `
        }
      ]
    },
    {
      id: 3,
      title:
        "Over which interval does h have a negative average rateof change?",
      variants: [
        {
          title: "− 3 ≤ x ≤ 1−3 ≤ x ≤ 1",
          answer: `
          <p>
            We know that ff is a polynomial function, but it is of degree33, we do not know any analogous to the discriminant to find the roots offf. But on the graph, we can read thatff is canceled in 4 - 4 , in 2 - 2 and in 1-1. 
          </p>
          <p>
            We deduce that for everythingx \ in \ mathbb {R}x∈R , f (x) = (x + 4) (x + 2) (x + 1). f ( x )=( x+4 ) ( x+2 ) ( x+1 ).
          </p>
        `
        },
        {
          title: "− 3 ≤ x ≤ 1−3 ≤ x ≤ 1",
          answer: `
          <p>
            We know that ff is a polynomial function, but it is of degree33, we do not know any analogous to the discriminant to find the roots offf. But on the graph, we can read thatff is canceled in 4 - 4 , in 2 - 2 and in 1-1. 
          </p>
          <p>
            We deduce that for everythingx \ in \ mathbb {R}x∈R , f (x) = (x + 4) (x + 2) (x + 1). f ( x )=( x+4 ) ( x+2 ) ( x+1 ).
          </p>
        `
        }
      ]
    }
  ]
});

export const getters = {
  getExamQuestions(state) {
    return state.questions;
  }
};
