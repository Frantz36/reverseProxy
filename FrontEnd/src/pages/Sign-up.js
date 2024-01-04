/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import "../styles/pages/sign-up.css"
import "https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"

function SignUp() {

    var container
    useEffect(() => {
        container = document.getElementById("container")
        console.log(container)
    }, [])
    
    
    return (
        
        <div>
            <div className="container" id="container">
                <div className="form-container sign-up-container">
                    <form action="#">
                        <h1>Create Account</h1>
                        <div className="social-container">
                            <a href="#" className="social"><box-icon type='logo' name='facebook' className="icon"></box-icon></a>
                            <a href="#" className="social"><box-icon type='logo' name='google-plus'></box-icon></a>
                            <a href="#" className="social"><box-icon name='linkedin' type='logo' ></box-icon></a>
                        </div>
                        <span>or use your email for registration</span>
                        <div className="infield">
                            <input type="text" placeholder="Name" />
                            <label></label>
                        </div>
                        <div className="infield">
                            <input type="email" placeholder="Email" name="email"/>
                            <label></label>
                        </div>
                        <div className="infield">
                            <input type="password" placeholder="Password" />
                            <label></label>
                        </div>
                        <button>Sign Up</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form action="#">
                        <h1>Sign in</h1>
                        <div className="social-container">
                            <a href="#" className="social"><box-icon type='logo' name='facebook' className="icon"></box-icon></a>
                            <a href="#" className="social"><box-icon type='logo' name='google-plus'></box-icon></a>
                            <a href="#" className="social"><box-icon name='linkedin' type='logo' ></box-icon></a>
                        </div>
                        <span>or use your account</span>
                        <div className="infield">
                            <input type="email" placeholder="Email" name="email"/>
                            <label></label>
                        </div>
                        <div className="infield">
                            <input type="password" placeholder="Password" />
                            <label></label>
                        </div>
                        <a href="#" className="forgot">Forgot your password?</a>
                        <button>Sign In</button>
                    </form>
                </div>
                <div className="overlay-container" id="overlayCon">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button>Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button>Sign Up</button>
                        </div>
                    </div>
                    <button id="overlayBtn" onClick={ () => {container.classList.toggle("right-panel-active")}} ></button>
                </div>
            </div>
        </div>
    );

};

export default SignUp;