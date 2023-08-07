const db = {
    decks: [
        {
            id: 1,
            name: 'Trigonometry',
            ownerId: 1,
            cards: [ 
                {
                    id: 1,
                    question: 'What is the sine of 0 degrees?',
                    answer: '0',   
                },
                {
                    id: 2,
                    question: 'What is the cosine of 0 degrees?',
                    answer: '1',
                },
                {
                    id: 3,
                    question: 'What is the tangent of 0 degrees?',
                    answer: '0',
                },
            ]
        },
        {
            id: 2,
            name: 'Calculus',
            ownerId: 1,
            cards: [
                {
                    id: 4,
                    question: 'What is the derivative of x^2?',
                    answer: '2x',
                },
                {
                    id: 5,
                    question: 'What is the derivative of x^3?',
                    answer: '3x^2',
                },
            ]
        }
    ]
}

export default db;