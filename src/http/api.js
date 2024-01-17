import api from "./http.js";
export const GetVersion= (platform)=>api({
    url:'/api/v1/version?platform='+platform,
    method: 'GET',
   
})
 