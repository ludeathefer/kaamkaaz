import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { AdminContext } from "../hooks/context";
import firebase from 'firebase/compat/app';

const Home = () => {
  const [Auth, setAuth] = useContext(AdminContext).auth;
  const navigate = useNavigate();
  const adminName = "Falano";

  useEffect(()=> {
    if(!Auth) navigate("/login")
    else navigate("/");
  }, [Auth]);

  const logOut = ()=> {
    firebase.auth().signOut();
    setAuth(false);
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h1>Welcome, {adminName}.</h1>
      <div className="py-5 flex gap-4">
        <button className="bg-blue-500 text-white" onClick={()=>navigate("/waiting")}>View Waiting List</button>
        <button className="bg-blue-500 text-white" onClick={()=>navigate("/verified")}>View Verified List</button>
      </div>
      <button className="bg-red-500 text-white" onClick={logOut}>Logout</button>
    </div>
  )
}
export default Home