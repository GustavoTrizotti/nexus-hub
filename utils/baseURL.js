const baseURL = "http://10.115.65.113:8080"
const apiURL = "http://10.115.65.113:8080/api/v1"

export default {
    loginURL: `${baseURL}/login`,
    registerURL: `${baseURL}/register`,
    refreshTokenURL: `${baseURL}/refresh-token`,
    subjects: {
        baseSubjects: `${apiURL}/subjects`,
        getAll: `${apiURL}/subjects/all`,
        create: `${apiURL}/subjects/save`,
    },
    decks: {
        baseDecks: `${apiURL}/decks`,
        getAll: `${apiURL}/decks/all`,
        create: `${apiURL}/decks/save`
    },
    flashcards: {
        baseFlashcards: `${apiURL}/flashcards`,
        create: `${apiURL}/flashcards/save`
    },
    tags: {
        baseTags: `${apiURL}/tags`,
        getAll: `${apiURL}/tags/all`,
        create: `${apiURL}/tags/save`,
    }
}