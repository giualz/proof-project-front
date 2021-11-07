import axios from "axios";

//default URL of the application
const urlDefault = 'http://localhost:3333';

const http = axios.create({
    baseURL: urlDefault
});

export default http;