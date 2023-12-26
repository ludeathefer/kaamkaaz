import axios from "axios";
const baseUrl = 'http://localhost:5000';

const adminLogin = async (secret)=> {
  try {
    const res = await axios.get(`${baseUrl}/hello`, {secret: secret});
    return res;
  } catch (e) {
    console.log(e);
  };
};

export {  
  adminLogin
};