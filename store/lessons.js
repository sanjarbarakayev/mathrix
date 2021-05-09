export const state = () => ({
  lessonTopics: [
    {
      id: 1,
      title: "Increasing and decreasing function",
      topics: [
        {
          id: 1,
          title: "Powers of the imaginary unit",
          status: "checked",
          isPremium: true,
          type: "video",
          active: true
        },
        {
          id: 2,
          title:
            "In such a case, it is necessary tospecify on which interval it is ...",
          status: "reviseAgain",
          isPremium: true,
          type: "video",
          active: false
        },
        {
          id: 3,
          title: "The complex plane",
          status: "notStarted",
          isPremium: false,
          type: "exercise",
          active: false
        },
        {
          id: 4,
          title: "Powers of the imaginaryunit",
          status: "checked",
          isPremium: false,
          type: "video",
          active: false
        }
      ]
    },
    {
      id: 2,
      title: "Polynomials",
      topics: [
        {
          id: 1,
          title: "Increasing and decreasing functions",
          status: "notStarted",
          isPremium: false,
          type: "video"
        },
        {
          id: 2,
          title:
            "In such a case, it is necessary tospecify on which interval it is ...",
          status: "reviseAgain",
          isPremium: true,
          type: "video"
        },
        {
          id: 3,
          title: "The complex plane",
          status: "notStarted",
          isPremium: false,
          type: "exercise"
        }
      ]
    },
    {
      id: 3,
      title: "Composite functions",
      topics: [
        {
          id: 1,
          title: "Powers of the imaginary unit",
          status: "checked",
          isPremium: true,
          type: "video"
        },
        {
          id: 2,
          title: "What are the imaginary numbers?",
          status: "checked",
          isPremium: true,
          type: "video"
        },
        {
          id: 3,
          title: "The complex plane",
          status: "notStarted",
          isPremium: false,
          type: "exercise"
        }
      ]
    }
  ],
  lessonContents: [
    {
      id: 1,
      title: "Powers of the imaginary unit",
      poster: require("@/assets/img/posters/topic-poster-1.jpg"),
      summaries: [
        {
          delay: 20,
          title: "average atomic mass"
        },
        {
          delay: 296,
          title: "thinking about a mass"
        },
        {
          delay: 552,
          title: "a molecular level"
        },
        {
          delay: 765,
          title: "average atomic mass"
        },
        {
          delay: 1202,
          title: "a molecular level"
        }
      ],
      sections: [
        {
          id: 1,
          title: "Increasing and decreasing functions",
          text: `For increasing functions, imagine that we are climbing a mountain. In this case, the more time passes, the higher we are. This is exactly the principle of an increasing function: more <span>x  grows</span> (time in our example), <span>plus f (x) increases</span> (altitude). Graphically, we have seen that it gives an upward curve, like a mountain slope.</p> <p>For decreasing functions, imagine this time that you are going down a mountain. The more time passes, the lower we find ourselves. So more <span>x grows</span> (over time), more <span>f ( x ) (the altitude always) decreases.</span> The graph this time reminds us of a mountain we are going down.`,
          images: [
            {
              img: require("@/assets/img/topic-images/topic-image-1.jpg"),
              title: "The complex plane"
            }
          ],
          definitionTitle: "Is f a function and I an interval. We say that :",
          definitionList: [
            "<p><span>f</span> is increasing on <span>I</span> when for all the reals a, b in Ia ,b I : <span>if a < bat < b, then f (a)  leq f (b) f (a) ≤f (b);</span>",
            "<span>f  is strictly</span> increasing on I when for all the real numbers a, b  in Ia, b : if a < bat < b , then f (a) < f (b) f (a) < f (b);",
            "<span>f</span> is strictly increasing on II when for all the real numbers a, b  in Ia ,b∈I  : if a <bat<b, <span>then f (a) < f (b) f (a) < f (b);</span>",
            "<span>f  is strictly</span> increasing on I when for all the real numbers a, b  in Ia, b : if a < bat < b , then f (a) < f (b) f (a) < f (b);",
            "<span>f</span> is strictly increasing on II when for all the real numbers a, b  in Ia ,b∈I  : if a <bat<b, <span>then f (a) < f (b) f (a) < f (b);</span></p>"
          ],
          tips: [
            "There are functions, like x2 , which may be decreasing in one place and increasing in another. In such a case, it is necessary to specify on which interval it is increasing, and on which interval it is decreasing."
          ],
          examples: [
            "<p>Gégé went to climb Mont-Blanc. It leaves at noon from the bottom, and climbs to 100m altitude in one hour. We want to write this with a function. Let's put x as time, and f (x) f (x) as the altitude. So we have x = 0x=0  (the starting time), the altitude of Gégé is also worth 0, so f (0) = f (0)= 0 . For x = 1x=1 (after one hour), we have f (x) = 100f (x)=10, because Gégé went up 100m. And so f (1) = 100f (1)=1 0 0.</p><p>If Gégé continues at this rate, we have f (2) = 200, f (3) = 300, f (4) = 400f (2) = 200, f (3) = 300 ,f (4) = 400, and so on. The rise function of Gégé is therefore f (x) = 100xf (x)=100x , where x represents the hours spent climbing and f (x) f (x) its altitude per hour xx .</p>"
          ]
        },
        {
          id: 2,
          title: "Minimums and maximums",
          text:
            "Now imagine a function ff , with a maximum in athas  on an interval II . According to our definition, f (a)f ( a )  is the greatest value reached by this function over the interval II . So we can also say that if we take another number bb  in this interval, f (b) f ( b )  will be smaller than f (a) f ( a ) . This being true regardless of the number bb  that we take (as long as it remains in the interval II ) we can therefore rewrite the definition as follows:",
          images: [
            {
              img: require("@/assets/img/topic-images/topic-image-1.jpg"),
              title: "The complex plane"
            }
          ],
          theorems: [
            "The hypotenuse is the largest leg in in a right triangle and is always opposite the right angle. (Only right triangles have a hypotenuse). In the triangle on the left, the hypotenuse is the side AB which is opposite the right angle, angle."
          ],
          images: [
            {
              img: require("@/assets/img/topic-images/topic-image-2.jpg"),
              title: "Pythagorean theorem"
            }
          ]
        }
      ],
      conclusions: [
        {
          id: 1,
          title:
            "Now imagine a function ff , with a maximum in athas  on an interval"
        },
        {
          id: 2,
          title:
            "For increasing functions, imagine that we are climbing a mountain. In this case, the more time passes."
        },
        {
          id: 3,
          title:
            "Now imagine a function ff , with a maximum in athas  on an interval"
        },
        {
          id: 4,
          title:
            "For increasing functions, imagine that we are climbing a mountain. In this case, the more time passes."
        }
      ]
    },
    {
      id: 2,
      title:
        "In such a case, it is necessary tospecify on which interval it is ...",
      // poster: require("@/assets/img/posters/topic-poster-1.jpg"),
      summaries: [
        {
          delay: 20,
          title: "average atomic mass"
        },
        {
          delay: 296,
          title: "thinking about a mass at an atomic level"
        },
        {
          delay: 552,
          title: "a molecular level"
        },
        {
          delay: 765,
          title: "average atomic mass"
        },
        {
          delay: 1202,
          title: "a molecular level"
        }
      ],
      sections: [
        {
          id: 1,
          title: "Increasing and decreasing functions",
          text: `For increasing functions, imagine that we are climbing a mountain. In this case, the more time passes, the higher we are. This is exactly the principle of an increasing function: more <span>x  grows</span> (time in our example), <span>plus f (x) increases</span> (altitude). Graphically, we have seen that it gives an upward curve, like a mountain slope.</p> <p>For decreasing functions, imagine this time that you are going down a mountain. The more time passes, the lower we find ourselves. So more <span>x grows</span> (over time), more <span>f ( x ) (the altitude always) decreases.</span> The graph this time reminds us of a mountain we are going down.`,
          images: [
            {
              img: require("@/assets/img/topic-images/topic-image-1.jpg"),
              title: "The complex plane"
            }
          ],
          definitionTitle: "Is f a function and I an interval. We say that :",
          definitionList: [
            "<p><span>f</span> is increasing on <span>I</span> when for all the reals a, b in Ia ,b I : <span>if a < bat < b, then f (a)  leq f (b) f (a) ≤f (b);</span>",
            "<span>f  is strictly</span> increasing on I when for all the real numbers a, b  in Ia, b : if a < bat < b , then f (a) < f (b) f (a) < f (b);",
            "<span>f</span> is strictly increasing on II when for all the real numbers a, b  in Ia ,b∈I  : if a <bat<b, <span>then f (a) < f (b) f (a) < f (b);</span>",
            "<span>f  is strictly</span> increasing on I when for all the real numbers a, b  in Ia, b : if a < bat < b , then f (a) < f (b) f (a) < f (b);",
            "<span>f</span> is strictly increasing on II when for all the real numbers a, b  in Ia ,b∈I  : if a <bat<b, <span>then f (a) < f (b) f (a) < f (b);</span></p>"
          ],
          tips: [
            "There are functions, like x2 , which may be decreasing in one place and increasing in another. In such a case, it is necessary to specify on which interval it is increasing, and on which interval it is decreasing."
          ],
          examples: [
            "<p>Gégé went to climb Mont-Blanc. It leaves at noon from the bottom, and climbs to 100m altitude in one hour. We want to write this with a function. Let's put x as time, and f (x) f (x) as the altitude. So we have x = 0x=0  (the starting time), the altitude of Gégé is also worth 0, so f (0) = f (0)= 0 . For x = 1x=1 (after one hour), we have f (x) = 100f (x)=10, because Gégé went up 100m. And so f (1) = 100f (1)=1 0 0.</p><p>If Gégé continues at this rate, we have f (2) = 200, f (3) = 300, f (4) = 400f (2) = 200, f (3) = 300 ,f (4) = 400, and so on. The rise function of Gégé is therefore f (x) = 100xf (x)=100x , where x represents the hours spent climbing and f (x) f (x) its altitude per hour xx .</p>"
          ]
        },
        {
          id: 2,
          title: "Minimums and maximums",
          text:
            "Now imagine a function ff , with a maximum in athas  on an interval II . According to our definition, f (a)f ( a )  is the greatest value reached by this function over the interval II . So we can also say that if we take another number bb  in this interval, f (b) f ( b )  will be smaller than f (a) f ( a ) . This being true regardless of the number bb  that we take (as long as it remains in the interval II ) we can therefore rewrite the definition as follows:",
          images: [
            {
              img: require("@/assets/img/topic-images/topic-image-1.jpg"),
              title: "The complex plane"
            }
          ],
          theorems: [
            "The hypotenuse is the largest leg in in a right triangle and is always opposite the right angle. (Only right triangles have a hypotenuse). In the triangle on the left, the hypotenuse is the side AB which is opposite the right angle, angle."
          ],
          images: [
            {
              img: require("@/assets/img/topic-images/topic-image-2.jpg"),
              title: "Pythagorean theorem"
            }
          ]
        }
      ],
      conclusion: [
        {
          id: 1,
          title:
            "Now imagine a function ff , with a maximum in athas  on an interval"
        },
        {
          id: 2,
          title:
            "For increasing functions, imagine that we are climbing a mountain. In this case, the more time passes."
        },
        {
          id: 3,
          title:
            "Now imagine a function ff , with a maximum in athas  on an interval"
        },
        {
          id: 4,
          title:
            "For increasing functions, imagine that we are climbing a mountain. In this case, the more time passes."
        }
      ]
    },
    {
      id: 3,
      title: "The complex plane",
      poster: require("@/assets/img/posters/topic-poster-1.jpg"),
      summaries: [
        {
          delay: 20,
          title: "average atomic mass"
        },
        {
          delay: 296,
          title: "thinking about a mass at an atomic level"
        },
        {
          delay: 552,
          title: "a molecular level"
        },
        {
          delay: 765,
          title: "average atomic mass"
        },
        {
          delay: 1202,
          title: "a molecular level"
        }
      ],
      sections: [
        {
          id: 1,
          title: "Increasing and decreasing functions",
          text: `For increasing functions, imagine that we are climbing a mountain. In this case, the more time passes, the higher we are. This is exactly the principle of an increasing function: more <span>x  grows</span> (time in our example), <span>plus f (x) increases</span> (altitude). Graphically, we have seen that it gives an upward curve, like a mountain slope.</p> <p>For decreasing functions, imagine this time that you are going down a mountain. The more time passes, the lower we find ourselves. So more <span>x grows</span> (over time), more <span>f ( x ) (the altitude always) decreases.</span> The graph this time reminds us of a mountain we are going down.`,
          images: [
            {
              img: require("@/assets/img/topic-images/topic-image-1.jpg"),
              title: "The complex plane"
            }
          ],
          definitionTitle: "Is f a function and I an interval. We say that :",
          definitionList: [
            "<p><span>f</span> is increasing on <span>I</span> when for all the reals a, b in Ia ,b I : <span>if a < bat < b, then f (a)  leq f (b) f (a) ≤f (b);</span>",
            "<span>f  is strictly</span> increasing on I when for all the real numbers a, b  in Ia, b : if a < bat < b , then f (a) < f (b) f (a) < f (b);",
            "<span>f</span> is strictly increasing on II when for all the real numbers a, b  in Ia ,b∈I  : if a <bat<b, <span>then f (a) < f (b) f (a) < f (b);</span>",
            "<span>f  is strictly</span> increasing on I when for all the real numbers a, b  in Ia, b : if a < bat < b , then f (a) < f (b) f (a) < f (b);",
            "<span>f</span> is strictly increasing on II when for all the real numbers a, b  in Ia ,b∈I  : if a <bat<b, <span>then f (a) < f (b) f (a) < f (b);</span></p>"
          ],
          tips: [
            "There are functions, like x2 , which may be decreasing in one place and increasing in another. In such a case, it is necessary to specify on which interval it is increasing, and on which interval it is decreasing."
          ],
          examples: [
            "<p>Gégé went to climb Mont-Blanc. It leaves at noon from the bottom, and climbs to 100m altitude in one hour. We want to write this with a function. Let's put x as time, and f (x) f (x) as the altitude. So we have x = 0x=0  (the starting time), the altitude of Gégé is also worth 0, so f (0) = f (0)= 0 . For x = 1x=1 (after one hour), we have f (x) = 100f (x)=10, because Gégé went up 100m. And so f (1) = 100f (1)=1 0 0.</p><p>If Gégé continues at this rate, we have f (2) = 200, f (3) = 300, f (4) = 400f (2) = 200, f (3) = 300 ,f (4) = 400, and so on. The rise function of Gégé is therefore f (x) = 100xf (x)=100x , where x represents the hours spent climbing and f (x) f (x) its altitude per hour xx .</p>"
          ]
        },
        {
          id: 2,
          title: "Minimums and maximums",
          text:
            "Now imagine a function ff , with a maximum in athas  on an interval II . According to our definition, f (a)f ( a )  is the greatest value reached by this function over the interval II . So we can also say that if we take another number bb  in this interval, f (b) f ( b )  will be smaller than f (a) f ( a ) . This being true regardless of the number bb  that we take (as long as it remains in the interval II ) we can therefore rewrite the definition as follows:",
          images: [
            {
              img: require("@/assets/img/topic-images/topic-image-1.jpg"),
              title: "The complex plane"
            }
          ],
          theorems: [
            "The hypotenuse is the largest leg in in a right triangle and is always opposite the right angle. (Only right triangles have a hypotenuse). In the triangle on the left, the hypotenuse is the side AB which is opposite the right angle, angle."
          ],
          images: [
            {
              img: require("@/assets/img/topic-images/topic-image-2.jpg"),
              title: "Pythagorean theorem"
            }
          ]
        }
      ],
      conclusion: [
        {
          id: 1,
          title:
            "Now imagine a function ff , with a maximum in athas  on an interval"
        },
        {
          id: 2,
          title:
            "For increasing functions, imagine that we are climbing a mountain. In this case, the more time passes."
        },
        {
          id: 3,
          title:
            "Now imagine a function ff , with a maximum in athas  on an interval"
        },
        {
          id: 4,
          title:
            "For increasing functions, imagine that we are climbing a mountain. In this case, the more time passes."
        }
      ]
    },
    {
      id: 4,
      title: "Powers of the imaginaryunit",
      poster: require("@/assets/img/posters/topic-poster-1.jpg"),
      summaries: [
        {
          delay: 20,
          title: "average atomic mass"
        },
        {
          delay: 296,
          title: "thinking about a mass at an atomic level"
        },
        {
          delay: 552,
          title: "a molecular level"
        },
        {
          delay: 765,
          title: "average atomic mass"
        },
        {
          delay: 1202,
          title: "a molecular level"
        }
      ],
      sections: [
        {
          id: 1,
          title: "Increasing and decreasing functions",
          text: `For increasing functions, imagine that we are climbing a mountain. In this case, the more time passes, the higher we are. This is exactly the principle of an increasing function: more <span>x  grows</span> (time in our example), <span>plus f (x) increases</span> (altitude). Graphically, we have seen that it gives an upward curve, like a mountain slope.</p> <p>For decreasing functions, imagine this time that you are going down a mountain. The more time passes, the lower we find ourselves. So more <span>x grows</span> (over time), more <span>f ( x ) (the altitude always) decreases.</span> The graph this time reminds us of a mountain we are going down.`,
          images: [
            {
              img: require("@/assets/img/topic-images/topic-image-1.jpg"),
              title: "The complex plane"
            }
          ],
          definitionTitle: "Is f a function and I an interval. We say that :",
          definitionList: [
            "<p><span>f</span> is increasing on <span>I</span> when for all the reals a, b in Ia ,b I : <span>if a < bat < b, then f (a)  leq f (b) f (a) ≤f (b);</span>",
            "<span>f  is strictly</span> increasing on I when for all the real numbers a, b  in Ia, b : if a < bat < b , then f (a) < f (b) f (a) < f (b);",
            "<span>f</span> is strictly increasing on II when for all the real numbers a, b  in Ia ,b∈I  : if a <bat<b, <span>then f (a) < f (b) f (a) < f (b);</span>",
            "<span>f  is strictly</span> increasing on I when for all the real numbers a, b  in Ia, b : if a < bat < b , then f (a) < f (b) f (a) < f (b);",
            "<span>f</span> is strictly increasing on II when for all the real numbers a, b  in Ia ,b∈I  : if a <bat<b, <span>then f (a) < f (b) f (a) < f (b);</span></p>"
          ],
          tips: [
            "There are functions, like x2 , which may be decreasing in one place and increasing in another. In such a case, it is necessary to specify on which interval it is increasing, and on which interval it is decreasing."
          ],
          examples: [
            "<p>Gégé went to climb Mont-Blanc. It leaves at noon from the bottom, and climbs to 100m altitude in one hour. We want to write this with a function. Let's put x as time, and f (x) f (x) as the altitude. So we have x = 0x=0  (the starting time), the altitude of Gégé is also worth 0, so f (0) = f (0)= 0 . For x = 1x=1 (after one hour), we have f (x) = 100f (x)=10, because Gégé went up 100m. And so f (1) = 100f (1)=1 0 0.</p><p>If Gégé continues at this rate, we have f (2) = 200, f (3) = 300, f (4) = 400f (2) = 200, f (3) = 300 ,f (4) = 400, and so on. The rise function of Gégé is therefore f (x) = 100xf (x)=100x , where x represents the hours spent climbing and f (x) f (x) its altitude per hour xx .</p>"
          ]
        },
        {
          id: 2,
          title: "Minimums and maximums",
          text:
            "Now imagine a function ff , with a maximum in athas  on an interval II . According to our definition, f (a)f ( a )  is the greatest value reached by this function over the interval II . So we can also say that if we take another number bb  in this interval, f (b) f ( b )  will be smaller than f (a) f ( a ) . This being true regardless of the number bb  that we take (as long as it remains in the interval II ) we can therefore rewrite the definition as follows:",
          images: [
            {
              img: require("@/assets/img/topic-images/topic-image-1.jpg"),
              title: "The complex plane"
            }
          ],
          theorems: [
            "The hypotenuse is the largest leg in in a right triangle and is always opposite the right angle. (Only right triangles have a hypotenuse). In the triangle on the left, the hypotenuse is the side AB which is opposite the right angle, angle."
          ],
          images: [
            {
              img: require("@/assets/img/topic-images/topic-image-2.jpg"),
              title: "Pythagorean theorem"
            }
          ]
        }
      ],
      conclusion: [
        {
          id: 1,
          title:
            "Now imagine a function ff , with a maximum in athas  on an interval"
        },
        {
          id: 2,
          title:
            "For increasing functions, imagine that we are climbing a mountain. In this case, the more time passes."
        },
        {
          id: 3,
          title:
            "Now imagine a function ff , with a maximum in athas  on an interval"
        },
        {
          id: 4,
          title:
            "For increasing functions, imagine that we are climbing a mountain. In this case, the more time passes."
        }
      ]
    }
  ]
});

export const mutations = {};

export const getters = {
  getCurrentContent: state => id => {
    return state.lessonContents.find(lesson => lesson.id == id);
  },
  getCurrentLesson: state => id => {
    return state.lessonTopics.find(lesson => lesson.id == id);
  },
  getCurrentLessons: state => state.lessonTopics
};
