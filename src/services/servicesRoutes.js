import http from "../config/http";

const path = '/torlist';

//services to make requests to the backend
export const getFullIpList = () => http.get(`${path}/full`);
export const postAddBan = (data) => http.post(`${path}/addban`,
{
    ipNumber: data
});
export const  getBansOutList = () => http.get(`${path}/bansout`);