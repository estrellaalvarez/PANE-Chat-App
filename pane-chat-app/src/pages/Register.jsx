import React from "react";

const Register = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <h2>Register</h2>
                <form>
                    <input type="text" placeholder="name"/>
                    <input type="email" placeholder="email"/>
                    <input type="password" placeholder="password"/>
                    <input style={{display:"none"}} type="file" id="file"/>
                    <label htmlFor="file">
                        Click to add an Avatar
                    </label>
                    <button>Sign Up</button>
                </form>
                <p>Or Login</p>
            </div>
        </div>
    )
}

export default Register