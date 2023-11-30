import { AUTH_URL, API_URL } from "@env"

export default {
  loginURL: `${AUTH_URL}/login`,
  registerURL: `${AUTH_URL}/register`,
  refreshTokenURL: `${AUTH_URL}/refresh-token`,
  subjects: {
    baseSubjects: `${API_URL}/subjects`,
    getAll: `${API_URL}/subjects/all`,
    create: `${API_URL}/subjects/save`,
  },
  decks: {
    baseDecks: `${API_URL}/decks`,
    getAll: `${API_URL}/decks/all`,
    create: `${API_URL}/decks/save`,
  },
  flashcards: {
    baseFlashcards: `${API_URL}/flashcards`,
    create: `${API_URL}/flashcards/save`,
  },
  tags: {
    baseTags: `${API_URL}/tags`,
    getAll: `${API_URL}/tags/all`,
    create: `${API_URL}/tags/save`,
  },
};
