const db = {
    subjects: [
        {
            id: 1,
            name: 'Algorithms',
            difficulty: 5,
            subjectColor: 'subjectRed',
            todos: [
                {
                    id: 1,
                    text: 'Study Algorithms',
                    date: Date.now().toString(),
                    status: true
                }
            ]
        },
        {
            id: 2,
            name: 'Biology',
            difficulty: 3,
            subjectColor: 'subjectYellow',
            todos: [
                {
                    id: 2,
                    text: 'Study Biology',
                    date: Date.now().toString(),
                    status: false
                }
            ]
        },
        {
            id: 3,
            name: 'Chemistry',
            difficulty: 4,
            subjectColor: 'subjectGreen',
            todos: [
                {
                    id: 3,
                    text: 'Study Chemistry',
                    date: Date.now().toString(),
                    status: false
                }
            ]
        },
        {
            id: 4,
            name: 'English',
            difficulty: 2,
            subjectColor: 'subjectBlue',
            todos: [
                {
                    id: 4,
                    text: 'Study English',
                    date: Date.now().toString(),
                    status: false
                }
            ]
        },
        {
            id: 5,
            name: 'History',
            difficulty: 1,
            subjectColor: 'subjectPurple',
            todos: [
                {
                    id: 5,
                    text: 'Study History',
                    date: Date.now().toString(),
                    status: false
                }
            ]
        }
    ]
};

export default db;