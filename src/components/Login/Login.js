import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import validate from "../../utils/validate.js";
import { auth } from "../../utils/firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const Login = () => {
  const [toggle, setToggle] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const handleToggle = () => {
    setToggle(!toggle);
    setErrors({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const normalizedEmail = email.trim();
    const validationErrors = validate(username, password, normalizedEmail, toggle);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    try {
      if (toggle) {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          normalizedEmail,
          password
        );
        console.log("User created successfully", userCredential.user);
        navigate("/browse", { replace: true });
      } else {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          normalizedEmail,
          password
        );
        console.log("User logged in successfully", userCredential.user);
        navigate("/browse", { replace: true });
      }
    } catch (error) {
      console.log(error.code, error.message);
      const firebaseMessages = {
        "auth/invalid-credential": "Email or password is incorrect",
        "auth/invalid-login-credentials": "Email or password is incorrect",
        "auth/user-not-found": "No account exists for this email",
        "auth/wrong-password": "Email or password is incorrect",
        "auth/email-already-in-use": "An account already exists for this email",
        "auth/too-many-requests": "Too many attempts. Try again later",
      };
      setErrors({
        firebase: firebaseMessages[error.code] || "Authentication failed. Try again.",
      });
    }
  };

  return (
    <main className="login-page">
      <div className="login-overlay" />
      <section className="login-panel" aria-label={toggle ? "Sign up" : "Sign in"}>
        <h1>{toggle ? "Create your account" : "Sign in"}</h1>
        <form onSubmit={handleSubmit}>
        {toggle && (
          <input
            type="text"
            name="username"
            placeholder="Username"
            aria-label="Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        )}
        <input
          type="email"
          name="email"
          placeholder="Email"
          aria-label="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          aria-label="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">{toggle ? "Sign Up" : "Sign In"}</button>
        {errors.username && <p>{errors.username}</p>}
        {errors.email && <p>{errors.email}</p>}
        {errors.password && <p>{errors.password}</p>}
        {errors.firebase && <p>{errors.firebase}</p>}
        </form>
        <button className="login-toggle" type="button" onClick={handleToggle}>
          {toggle ? "Already have a Netflix account? Sign In" : "New here to Netflix? Sign Up"}
        </button>
      </section>
    </main>
  );
};

export default Login;
