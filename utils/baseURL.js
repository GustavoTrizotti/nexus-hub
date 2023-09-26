const baseURL = "http://10.115.71.55:8080"
const apiURL = "http://10.115.71.55:8080/api/v1"

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