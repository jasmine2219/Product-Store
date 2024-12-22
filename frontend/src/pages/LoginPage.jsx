// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Login = ({ setIsLoggedIn }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     try {
//       const res = await fetch("http://localhost:5000/api/auth/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       if (res.ok) {
//         const data = await res.json();
//         if (data.user) {
//           // Successful login
//           setIsLoggedIn(true); // Update login state
//           localStorage.setItem("jwt", data.token); // Save token if needed
//           alert("Login Success");
//           navigate("/"); // Navigate to homepage
//         } else {
//           console.log("Unexpected response:", data);
//           alert("Incorrect password or email");
//         }
//       } else {
//         console.error("Login failed with status:", res.message);
//       }
//     } catch (err) {
//       console.error("Error during login:", err);
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <input
//         type="email"
//         placeholder="Email"
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        const data = await res.json();
        if (data.user) {
          // Successful login
          setIsLoggedIn(true); // Update login state
          localStorage.setItem("jwt", data.token); // Save token if needed
          alert("Login Success");
          navigate("/"); // Navigate to homepage
        } else {
          console.log("Unexpected response:", data);
          alert("Incorrect password or email");
        }
      } else {
        console.error("Login failed with status:", res.message);
      }
    } catch (err) {
      console.error("Error during login:", err);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Login</h2>
      <input
        type="email"
        placeholder="Email"
        style={styles.input}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        style={styles.input}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button style={styles.button} onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundColor: "#f4f4f9",
    padding: "20px",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "20px",
    color: "#333",
  },
  input: {
    width: "100%",
    maxWidth: "400px",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "1rem",
    backgroundColor: "#fff",
    boxSizing: "border-box",
  },
  button: {
    padding: "12px 20px",
    fontSize: "1rem",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    width: "100%",
    maxWidth: "400px",
    marginTop: "10px",
    transition: "background-color 0.3s ease",
  },
};

export default Login;
