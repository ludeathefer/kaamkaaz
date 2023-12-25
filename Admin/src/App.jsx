import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login'
import Verified from './pages/Verified'
import Waiting from './pages/Waiting'
import { AdminContext } from './hooks/context';
import './App.css'
import { useState, useEffect } from 'react';

function App() {
  const [Auth, setAuth] = useState(false);

  return (
    <AdminContext.Provider value={{auth: [Auth, setAuth]}}>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/login" Component={Login} />
        <Route path="/verified" Component={Verified} />
        <Route path="/waiting" Component={Waiting} />
      </Routes>
    </AdminContext.Provider>
  );
};

export default App
