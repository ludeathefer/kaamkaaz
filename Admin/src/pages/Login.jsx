import React, { useContext, useEffect, useState } from 'react';
import { adminLogin } from '../api';
import { AdminContext } from '../hooks/context';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [Auth, setAuth] = useContext(AdminContext).auth;
  const navigate = useNavigate();

  const [Secret, setSecret] = useState("")

  // useEffect(() => {
  //   if (Auth) navigate("/")
  //   else navigate("/login");
  // }, [Auth]);

  const handleLogin = async () => {
    const res = await adminLogin(Secret);
    console.log(res);
  };

  return (
 <div className="flex flex-col justify-center items-center w-screen h-screen">
  <p className="text-2xl py-4">ADMIN PANEL</p>
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleLogin}>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2 uppercase" htmlFor="username">
          Secret
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
          id="secret"
          type="password"
          value={Secret}
          onChange={(e) => setSecret(e.target.value)}
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Sign In
        </button>
      </div>
    </form>
  </div>
);

}

export default Login;
