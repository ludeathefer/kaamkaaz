import request from "superagent";
const baseUrl = 'http://localhost:5000';

const adminLogin = async (secret)=> {
  try {
    const res = await request.post(`${baseUrl}/admin/login`).send( {secret: secret});
    return res;
  } catch (e) {
    console.log(e);
  };
};

export {  
  adminLogin
};