import { useEffect } from "react";
import ProductivityContent from "../components/Dashboard/ProductivityContent";
import Footer from "../components/common/Footer";
import MoptroIconDiv from "../components/common/MoptroIconDiv";
import UserIconDiv from "../components/common/UserIconDiv";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {

    const navigate = useNavigate();

    useEffect(() => {
        // check if user already logged in or not
        if (localStorage.getItem("loginCredentials") === null) {
            // navigate directly to login
            navigate("/login", { replace: true });
        }
    }, [])


    return (
        <div className="dashboard-page-content">
            <UserIconDiv />
            <MoptroIconDiv />
            <ProductivityContent />
            <Footer active="home" />
        </div>
    )
}

export default Dashboard;