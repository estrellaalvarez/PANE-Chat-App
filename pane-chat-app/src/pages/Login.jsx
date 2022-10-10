import React from "react";

const Login = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <h2>Login</h2>
                <form>
                    <input type="email" placeholder="email"/>
                    <input type="password" placeholder="password"/>
                    <button>Sign In</button>
                </form>
                <p>Or Register</p>
            </div>
        </div>
    )
}

export default Login