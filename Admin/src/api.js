import axios from "axios";
const baseUrl = 'http://localhost:8000';

const adminLogin = async (user)=> {
  const res = await axios.post(`${baseUrl}/admin/signIn`, {user});
  console.log(res.data);
  return res.data;
};

export {  
  adminLogin
};