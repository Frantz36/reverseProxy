    import React from 'react';
import "../styles/pages/sign-up.css"
import ReactDOM from "react-dom";

function SignUp() {

    const containers = document.getElementById('container');
    const overlayBtns = document.getElementById('overlayBtn');
    const overlayCons = document.getElementById('overlayCons');

    const container = ReactDOM.findDOMNode(containers);
    const overlayCon = ReactDOM.findDOMNode(overlayCons);
    const overlayBtn = ReactDOM.findDOMNode(overlayBtns);

    return (
        <div>
            <div className="container" id="container">
                <div className="form-container sign-up-container">
                    <form action="#">
                        <h1>Create Account</h1>
                        <div className="social-container">
                            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
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
                            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
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
                    <button id="overlayBtn" onClick={ () => {
            container.classList.toggle('right-panel-active');
        }} ></button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;