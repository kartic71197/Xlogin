import { useState } from "react";

function App() {
  const [logged, setLogged] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [invalid, setInvalid] = useState(false);

  const handleLogin = () => {
    if (!username || !password) {
      alert("Both fields are required.");
      return;
    }
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
        <form onSubmit={(e) => {
          e.preventDefault(); // prevent default form submission
          handleLogin();
        }}>
          {invalid && <p style={{ color: "red" }}>Invalid username or password</p>}
        
          <label htmlFor="Username">Username:</label>
          <input
            type="text"
            id="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <br />
        
          <label htmlFor="Password">Password:</label>
          <input
            type="password"
            id="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
        
          <button type="submit">Login</button>
        </form>
        
      ) : (
        <h2>Welcome, {username}!</h2>
      )}
    </>
  );
}

export default App;
