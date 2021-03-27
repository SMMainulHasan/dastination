import React, { useContext, useState } from "react";
import "./Login.css";
import google from "../../images/google.png";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../../src/firebaseConfig";
import { useControlled } from "@material-ui/core";
import { userContext } from "../../App";
import { faClosedCaptioning } from "@fortawesome/free-solid-svg-icons";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
  const [createUser, setCreateUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [userInfo, setUserInfo] = useContext(userContext);
  //firebase authentication
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const googleHandleClick = () => {
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        const { displayName, email } = result.user;
        setUserInfo({ name: displayName, email: email });
      })
      .catch((error) => {
        const errorMessage = error.message;
      });
  };

  //Create user form input//
  const inputHandler = (e) => {
    if (e.target.name === "email") {
      const isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
      isFieldValid &&
        setCreateUser({ ...createUser, [e.target.name]: e.target.value });
    }
    if (e.target.name === "password") {
      const passwordLength = e.target.value.length > 7;
      const passwordValid = /\d{1}/.test(e.target.value);
      const isFieldValid = passwordLength && passwordValid;
      isFieldValid &&
        setCreateUser({ ...createUser, [e.target.name]: e.target.value });
    }
    //I will use confirmPassword for create account
    if (e.target.name === "confirmPassword") {
      const isFieldValid = createUser.password === e.target.value;
      isFieldValid &&
        setCreateUser({ ...createUser, [e.target.name]: e.target.value });
    }
    if(e.target.name === "name"){
        setCreateUser({ ...createUser, [e.target.name]: e.target.value });
    }
  };

  //Create user with email and password
  const handleSubmit = (e) => {
    if (createUser && createUser.email && createUser.confirmPassword) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(createUser.email, createUser.password)
        .then((userCredential) => {
          const user = userCredential.user;
          updateUserName(createUser.name);
          console.log("created", user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
    e.preventDefault();
  };

  const handleLoginSubmit = (e) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(createUser.email, createUser.password)
      .then((userCredential) => {
        var { displayName, email } = userCredential.user;
        setUserInfo({name:displayName, email:email});
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
      e.preventDefault();
  };

  const updateUserName = (name) => {
    const user = firebase.auth().currentUser;

    user
      .updateProfile({
        displayName: name,
      })
      .then(function () {
        console.log("name updated");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  //toggle login Or Create form//
  const [login, setLogin] = useState(true);
  const toggleLogin = () => setLogin(!login);
  return (
    <div className="login">
      {
      login 
      ? <form className="create-account">
          <h3>Login</h3>
          <br />
          <input onBlur={inputHandler} className="input" name="email" required type="text" placeholder="Email"/>
          <br />
          <input onBlur={inputHandler} className="input" name="password" required type="text" placeholder="Password"/>
          <br />
          <input className="button" onClick={handleLoginSubmit} required type="submit" value="Login"/>
          <br />
          <br />
          <p>
            Don't have an account?
            <span onClick={toggleLogin} className="log-in-link"> Create an account</span>
          </p>
        </form>
      : <form className="create-account">
          <h3>Create an account</h3>
          <br />
          <input onBlur={inputHandler} className="input" name="name" required type="text" placeholder="Name"/>
          <br />
          <input onBlur={inputHandler} className="input" name="email" required type="text" placeholder="Email"/>
          <br />
          <input onBlur={inputHandler} className="input" name="password" required type="text" placeholder="Password"/>
          <br />
          <input onBlur={inputHandler} className="input" name="confirmPassword" required type="text" placeholder="Confirm password"/>
          <br />
          <input className="button" onClick={handleSubmit} required type="submit" value="Create an account"/>
          <br />
          <br />
          <p>
            Already have an account?
            <span onClick={toggleLogin} className="log-in-link"> Login</span>
          </p>
        </form>
      }
      <p>Or</p>
      <br />
      <p onClick={googleHandleClick} className="google-btn">
        {" "}
        <img src={google} alt="" /> &nbsp; &nbsp; Continue with Google
      </p>
      <h5></h5>
    </div>
  );
};

export default Login;
