import axios from "axios";

const urlDefault = 'http://localhost:3333'

const http = axios.create({
    baseURL: urlDefault
})

export default http