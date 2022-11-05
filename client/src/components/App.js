import React, { useEffect, useState} from "react";
import { Routes, Route, useParams } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import NavBar from "./NavBar";
import Home from "./Home";

function App() {
  const [user, setUser] = useState(null);
  const [errors, setErrors] = useState(false)
  
  const params = useParams()
  const {id} = params

  useEffect(() => {
    // auto-login
    fetch("/auth")
    .then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user)
        })
      }else {
        r.json().then(data => setErrors(data.errors))
      }
    });
  }, []);
  
  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        {user ? (
          <Routes>
            <Route exact path='/' element={<Home user={user}/>} />
          </Routes>
        ) : (
          <Routes>
            <Route exact path='/signup' element={<SignUp setUser={setUser} />}/>
            <Route exact path='login' element={<Login setUser={setUser} />}/>
            <Route exact path='/' element={<Home />}/>
          </Routes>)}
      </main>
    </>
  );
}

export default App;
