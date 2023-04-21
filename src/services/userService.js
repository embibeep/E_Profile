import axios from 'axios'
const handleLoginApi = (username, password) => {
    return axios.post('http://localhost:3004/LoginAuth');
}

const getStaffPost = (inputId) => {
    return axios.get(`http://localhost:3003/StaffRecruitPost/${inputId}`)
}

export { handleLoginApi, getStaffPost }



