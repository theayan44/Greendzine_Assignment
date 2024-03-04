import { useEffect } from "react";
import IconDiv from "../components/Login/IconDiv";
import LoginForm from "../components/Login/LoginForm";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();

    useEffect(() => {
        // check if user already logged in or not
        if (localStorage.getItem("loginCredentials") !== null) {
            // navigate directly to dashboard
            navigate("/dashboard", { replace: true });
        }
    }, [])

    return (
        <div className="login-page-content">
            <IconDiv />
            <LoginForm />
        </div>
    )
}

export default Login;