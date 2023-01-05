import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from 'axios';

// import bootstrap from "bootstrap";

const SignIn = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const onSignIn = async (e) => {

        axios.post('http://localhost/api/v1/login', {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "X-Requested-With" ,
                "Access-Control-Allow-Methods":"PUT,POST,GET,DELETE,OPTIONS" ,
                "Content-Type": "application/json;charset=utf-8" ,
            }
        })
        .then(res => {
            console.log(res.data.content)
        }).catch(err => {
            console.log(err)
        })
            
    

       
        
        console.log("Data sending");
        console.log(email);
        console.log(password);
        /*//get all the data 
        //axios for sending data to the server 
        ///http://localhost/api/v1/login
       let URL = "http://localhost/api/v1/login";
      const response = await axios.post("http://ojtreact.local/api/v1/login",
       {
            email: 'John',
            password: 'Doe',
        });
        console.log(response.data);
        console.log("testing123");
       // navigate("/");*/

    };
    const handleChange = async (e) => {};
    const onSignUp = () => {
        navigate("/sign-up");
    };
    
    

   const onEmailChange = async (e) => {
        console.log(e.target.value);
        setEmail(e.target.value);
      };

 const onPasswordChange = async (e) => {
        console.log(e.target.value);
        setPassword(e.target.value);
      };
     
     
     
     return (

        
        

       <div className="container-md">
            <div className="row m-3 justify-content-center">
                <h1 className="text-center my-5">SIGN IN</h1>
            </div>
            <div className="row m-3 justify-content-center">
                <div className="col-sm-6">
                    <div className="form-floating mb-3">
                        <input
                            type="email"
                            className="form-control"
                            id="floatingInput"
                            placeholder="Email address"
                            onChange={onEmailChange} required
                        />
                        <label for="floatingInput">Email Address</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="password"
                            className="form-control"
                            id="floatingPassword"
                            placeholder="Password"
                            onChange={onPasswordChange} required
                         
                        />
                        <label for="floatingPassword">Password</label>
                    </div>
                    <div className="row mb-3 px-3">
                        <input
                            type="submit"
                            onClick={onSignIn}
                            className="btn btn-primary"
                            value="Login"
                          
                        />
                    </div>
                    <div className="sign-up">
                        <label>Don't have Account?</label>{" "}
                        <label
                            type="button"
                            className="text-decoration-underline"
                            onClick={onSignUp}
                        >
                            Sign Up
                        </label>
                    </div>
                </div>
            </div>
        </div>
        
    );
     
};

export default SignIn;
