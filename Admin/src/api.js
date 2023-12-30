import axios from "superagent";
const baseUrl = 'http://localhost:2127';

const adminLogin = async (secret)=> {
  try {
    console.log(secret);
    const res = await axios
      .post(`${baseUrl}/admin/login`, { secret: secret })
    return res;
  } catch (e) {
    console.log(e);
  };
};
const fetchUsers = async (secret)=> {
  try {
    const res = await axios
      .get(`${baseUrl}/user`, { secret: secret })
    if(res)  return res;
  } catch (e) {
    console.log(e);
  };
};

export {  
  adminLogin,
  fetchUsers
};