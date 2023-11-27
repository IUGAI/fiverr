import axios from 'axios'

const newRequset = axios.create({
    baseURL: "http://localhost:8800/api/",
    withCredentials: true
})

export default newRequset