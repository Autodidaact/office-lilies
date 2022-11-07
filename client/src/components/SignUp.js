import React, { useState } from "react";

function SignUp({ setUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  
  function handleSubmit(e) {
    e.preventDefault();
    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }

  return (
    <div>
      <div className="container">
        <form onSubmit={handleSubmit} className="forms">
          <h1>Sign Up</h1>
          <label htmlFor="name">Username</label>
          <input
            type="text"
            id="username"
            autoComplete="off"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>  
    </div>
  );
}

export default SignUp;
