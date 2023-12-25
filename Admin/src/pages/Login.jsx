import firebase from 'firebase/compat/app';
import React, { useContext, useEffect } from 'react';
import { adminLogin } from '../api';
import { AdminContext } from '../hooks/context';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [Auth, setAuth] = useContext(AdminContext).auth;
  const navigate = useNavigate();

  useEffect(() => {
    if (Auth) navigate("/")
    else navigate("/login");
  }, [Auth]);
  
  const googleLogin = async () => {
    try {
      firebase
        .auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then(async userCreds => {
          if (userCreds) {
            return await adminLogin(firebase.auth().currentUser.email);
          };
        })
        .then(res => {
          if(res.user) setAuth(true)
        })
      } catch (e) {
        firebase.auth().signOut();
  };
};

return (
  <div className="w-screen h-screen flex flex-col justify-center items-center gap-4">
    <h2 className="text-4xl">Admin Panel</h2>
    <button className="px-4 py-2 bg-yellow-600" onClick={googleLogin}>Login With GOOGLE to Continue</button>
  </div>
);
  }

export default Login;
