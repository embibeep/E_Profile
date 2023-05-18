import axios from "../axios"
const handleLoginApi = (username, password) => {
    return axios.post('http://localhost:3004/LoginAuth', { username, password });
}

const getStaffPost = (inputId) => {
    //template string
    return axios.get(`http://localhost:3003/StaffRecruitPost/${inputId}`)
}

const handlePostAStaffPost = (company_code, job_code, job_name, salary, ghichu, date_posted, date_Expired, job_exp) => {
    return axios.post('http://localhost:3003/StaffRecruitPost', { company_code, job_code, job_name, salary, ghichu, date_posted, date_Expired, job_exp })
}

export { handleLoginApi, getStaffPost }



