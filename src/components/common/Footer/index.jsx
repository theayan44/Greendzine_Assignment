import "./style.css";
import FooterHomeIcon from "../../../assets/footer_home_icon2.png";
import FooterUserIcon from "../../../assets/footer_user_icon2.png";
import { useNavigate } from "react-router-dom";

const Footer = ({ active }) => {

    const navigate = useNavigate();

    const style = {
        background: "#38383885 0% 0% no-repeat padding-box",
        borderRadius: active == "home" ? "2rem 0 0 0" : "0 2rem 0 0",
    }

    return (
        <div className="footer">
            <div style={active == "home" ? style : {}} className="footer-home-icon-div"><img src={FooterHomeIcon} alt="footer_home_icon" onClick={() => { navigate("/dashboard"); }} /></div>
            <div style={active == "user" ? style : {}} className="footer-user-icon-div"><img src={FooterUserIcon} alt="footer_user_icon" onClick={() => { navigate("/employeeList"); }} /></div>
        </div>
    )
}

export default Footer