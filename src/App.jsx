import { useState } from "react";

function App() {
  const [logged, setLogged] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [invalid, setInvalid] = useState(false);

  const handleLogin = () => {
    if (username === "user" && password === "password") {
      setLogged(true);
    } else {
      setInvalid(true);
    }
  };

  return (
    <>
      <h1>Login Page</h1>
      {!logged ? (
        <div>
          {invalid && <p>Invalid username or password</p>}
          <label htmlFor="Username">Username:</label>
          <input
            type="text"
            id="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)} 
          />
          <br />
          <label htmlFor="Password">Password:</label>
          <input
            type="password"
            id="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
          />
          <br />
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </div>
      ) : (
        <h2>Welcome, {username}!</h2>
      )}
    </>
  );
}

export default App;
