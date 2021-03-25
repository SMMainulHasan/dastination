import React, { useState } from 'react';
import './Login.css';
import google from '../../images/google.png';

const Login = () => {
    //Create user form//
    const [createUser, setCreatUser] = useState({name:'',email:'',password:'', confirmPassword: ''});
    const inputHandler = e => {
        setCreatUser({...createUser, [e.target.name]:e.target.value})
    }

    //Login user form//
    const [user, setUser] = useState({email:'',password:''});
    // const inputHandler = e => {
    //     setCreatUser({...createUser, [e.target.name]:e.target.value})
    // }
    

    //toggle login Or Create form//
    const [login, setLogin] = useState(true);
    const toggleLogin =() => setLogin(!login)
    return (
        <div className="login">
            {
                login
                ?  <from className="create-account">
                        <h3>Login</h3>
                        <br/>
                        <input onBlur={inputHandler} className="input" name="email" required type="text" placeholder="Email"/><br/>
                        <input onBlur={inputHandler} className="input" name="password" required type="text" placeholder="Password"/><br/>
                        <input className="button" required type="submit" value="Create an account"/><br/><br/>
                        <p> Don't have an account?  <span onClick={toggleLogin} className="log-in-link">Create an account</span></p>
                </from>
                : <from className="create-account">
                    <h3>Create an account</h3>
                    <br/>
                    <input onBlur={inputHandler} className="input" name="name" required type="text" placeholder="Name"/><br/>
                    <input onBlur={inputHandler} className="input" name="email" required type="text" placeholder="Email"/><br/>
                    <input onBlur={inputHandler} className="input" name="password" required type="text" placeholder="Password"/><br/>
                    <input onBlur={inputHandler} className="input" name="confirmPassword" required type="text" placeholder="Confirm password"/><br/>
                    <input className="button" required type="submit" value="Create an account"/><br/><br/>
                    <p> Already have an account?  <span onClick={toggleLogin} className="log-in-link">Login</span></p>
                </from>
            }
            <p>Or</p><br/>
            <p className="google-btn"> <img src={google} alt=""/> &nbsp; &nbsp; Continue with Google</p>
        </div>
    );
};

export default Login;