import axios from "axios";
const api = axios.create({
    baseURL:'https://pfmanage.ytshy.net/',
    headers: {
        'Access-Control-Allow-Origin': '*',
        // 'Content-Type': "application/json",
        withCredentials: true,
    },
});
export default api