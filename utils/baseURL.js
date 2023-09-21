const baseURL = "http://192.168.0.12:8080"
const apiURL = "http://192.168.0.12:8080/api/v1"

export default {
    loginURL: `${baseURL}/login`,
    registerURL: `${baseURL}/register`,
    refreshTokenURL: `${baseURL}/refresh-token`,
    subjects: {
        baseSubjects: `${apiURL}/subjects`,
        getAll: `${apiURL}/subjects/all`,
        create: `${apiURL}/subjects/save`
    }
}