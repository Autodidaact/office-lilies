import React, { useState } from "react";
import { useHistory} from "react-router-dom"
function Login({ setUser }) {
  const [email, setEmail] = useState('');
  const [Errors, setErrors] = useState([])
 
  
  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email}),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }else{
        r.json().then(json => setErrors(json.errors))
      }
    })
  }

  return (
    <div>
      <div className="container">
        <form onSubmit={handleSubmit} className="forms">
          <h1>Login</h1>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="username"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
