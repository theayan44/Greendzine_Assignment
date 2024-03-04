import { useState } from "react";
import "./style.css";
import { toast } from "react-toastify";
import validator from "validator";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function handleLogin() {
        // first check for valid input
        if (email.trim().length == 0 || password.length == 0) {
            toast.error("Invalid input !");
            return;
        }

        // check for valid email
        if (!validator.isEmail(email)) {
            toast.error("Invalid email id !");
            return;
        }

        // check for valid credentials
        if (email !== "admin@gmail.com" || password !== "123456") {
            toast.error("Invalid login credentials !");
            return;
        }

        // if no error then save the credentials in localstorage
        const loginCredentials = {
            "email": email,
            "password": password,
        }
        localStorage.setItem("loginCredentials", JSON.stringify(loginCredentials));

        toast.success("Login successfull !");

        // navigate to Dashboard page
        navigate("/dashboard", { replace: true });
    }

    return (
        <div className="login-form">
            <input type="text" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button className="login-btn" onClick={() => { handleLogin() }}>Login</button>
            <p className="forgot-password">Forgot Password?</p>
        </div>
    )
}

export default LoginForm