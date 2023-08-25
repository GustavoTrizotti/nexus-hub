const db = {
  decks: [
    {
      id: 1,
      name: "Trigonometry",
      ownerId: 1,
      cards: [
        {
          id: 1,
          question: "What is the sine of 0 degrees?",
          answer: "0",
          nextRevisionDate: "2021-01-02:00:00:00",
          status: "LEARNING",
          maturity: 0.2,
          tags: ["math", "trigonometry"]
        },
        {
          id: 2,
          question: "What is the cosine of 0 degrees?",
          answer: "1",
          nextRevisionDate: "2021-01-01:00:00:00",
          status: "NEW",
          maturity: 0,
          tags: ["math", "trigonometry"]
        },
        {
          id: 3,
          question: "What is the tangent of 0 degrees?",
          answer: "0",
          nextRevisionDate: "2021-01-01:00:00:00",
          status: "NEW",
          maturity: 0,
          tags: ["math", "trigonometry"]
        },
      ],
      childDeck: {
        id: 2,
        name: "Geometry",
        ownerId: 1,
        cards: [
            {
                id: 1,
                question: "Whats the triangle area formula?",
                answer: "b * h / 2",
                nextRevisionDate: "2021-01-04:00:00:00",
                status: "LEARNING",
                maturity: 0.4,
                tags: ["math", "geometry"]
            },
            {
                id: 2,
                question: "What is the area of a circle?",
                answer: "pi * r^2",
                nextRevisionDate: "2021-01-03:00:00:00",
                status: "LEARNING",
                maturity: 0.3,
                tags: ["math", "geometry"]
            },
        ],
      },
    },
    {
      id: 2,
      name: "Calculus",
      ownerId: 1,
      cards: [
        {
          id: 4,
          question: "What is the derivative of x^2?",
          answer: "2x",
          nextRevisionDate: "2021-01-05:00:00:00",
          status: "LEARNING",
          maturity: 0.5,
          tags: ["math", "calculus"]
        },
        {
          id: 5,
          question: "What is the derivative of x^3?",
          answer: "3x^2",
          nextRevisionDate: "2021-01-05:00:00:00",
          status: "LEARNING",
          maturity: 0.5,
          tags: ["math", "calculus"]
        },
      ],
    },
  ],
};

export default db;
