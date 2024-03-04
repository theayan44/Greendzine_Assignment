import "./style.css";
import UserIcon from "../../../assets/user_icon.png";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const UserIconDiv = () => {

    const navigate = useNavigate();

    function handleLogout() {
        if (window.confirm("Are you sure want to logout !")) {
            if (localStorage.getItem("loginCredentials") !== null) {

                // remove the credentials from localStorage
                localStorage.removeItem("loginCredentials");
                toast.success("You've been logeed out !")

                // now navigate to login page
                navigate("/login");
            }
        }
    }

    return (
        <div className="user-icon-div">
            <img src={UserIcon} alt="user_icon" onClick={() => { handleLogout() }} />
        </div>
    )
}

export default UserIconDiv