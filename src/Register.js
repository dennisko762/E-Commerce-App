import React, { useContext, useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth, admin } from "./firebase";
import LangContext from "./LangContext";
import { useStateValue } from "./StateProvider";
function Register() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPW, setConfirmPW] = useState("");
  const [name, setName] = useState("");
  const { lang, currentLangData } = useContext(LangContext);
  const userN = auth.currentUser;
  
  //sign in with firebase
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
  function checkPW() {
    if (password === confirmPW) {
      return true;
    } else {
      alert("Ihre Passwörter stimmen nicht überein");
      return false;
    }
  }
  const register = (e) => {
    e.preventDefault();
    
  //if credentials check out a user is created and saved in firebase
    if (checkPW() === true) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
          if (auth.user) {
            auth.user
              .updateProfile({
                displayName: name,
              })
              .then(() => {
                alert(auth.user.displayName);
                history.push("/");
              });
          }
        })
        .catch(function (error) {
          console.log("Error creating new user:", error);
        });
    }
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
          <h5>Ihr Name</h5>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <h5>Passwort</h5>
          <input
            id="pw"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <h5>Passwort nochmals eingeben</h5>
          <input
            id="confirmPW"
            type="password"
            value={confirmPW}
            onChange={(e) => setConfirmPW(e.target.value)}
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
        <button onClick={(checkPW, register)} className="register">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Register;
