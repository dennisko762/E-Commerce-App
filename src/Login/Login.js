import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../Firebase/firebase";
import LangContext from "../LangSwitchComponents/LangContext";
import "./Login.css";
function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { lang, currentLangData } = useContext(LangContext);

  //preventDefault() prevents the page from refreshing
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="loginLogo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/320px-Amazon_logo.svg.png"
        ></img>
      </Link>
      <div className="login_container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button type="submit" onClick={signIn} className="signIn">
            Sign-in
          </button>
        </form>
        <p>
          {lang === "en-EN"
            ? currentLangData.lang.agb1
            : currentLangData.lang.agb2}
        </p>
        <Link to="/register">
          <button className="register">Create your Amazon Account</button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
