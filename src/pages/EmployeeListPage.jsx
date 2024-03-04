import { useEffect, useState } from "react";
import EmployeeList from "../components/EmployeeList";
import Footer from "../components/common/Footer";
import MoptroIconDiv from "../components/common/MoptroIconDiv";
import SearchBar from "../components/common/SearchBar";
import UserIconDiv from "../components/common/UserIconDiv";

const EmployeeListPage = () => {
    const [employeeData, setEmployeeData] = useState([
        {
            id: 1,
            name: "Arjun",
            dob: "16-11-2000",
            role: "Software Engineer"
        },
        {
            id: 2,
            name: "Mahesh",
            dob: "16-11-2000",
            role: "Software Developer"
        },
        {
            id: 3,
            name: "Ayan",
            dob: "16-11-2000",
            role: "Tester"
        },
        {
            id: 4,
            name: "Subha",
            dob: "16-11-2000",
            role: "Manager"
        },
        {
            id: 5,
            name: "Ayush",
            dob: "16-11-2000",
            role: "HR"
        },
        {
            id: 6,
            name: "Rana",
            dob: "16-11-2000",
            role: "CEO"
        },
        {
            id: 7,
            name: "Pradip",
            dob: "16-11-2000",
            role: "CTO"
        },
        {
            id: 8,
            name: "Supriya",
            dob: "16-11-2000",
            role: "Frontend Developer"
        },
        {
            id: 9,
            name: "Bivek",
            dob: "16-11-2000",
            role: "DBA"
        },
        {
            id: 10,
            name: "Papu",
            dob: "16-11-2000",
            role: "Android Developer"
        },
    ]);
    const [searchValue, setSearchValue] = useState("");
    const [searchData, setSearchData] = useState([]);

    useEffect(() => {
        if (employeeData.length > 0) {
            setSearchData(employeeData.filter((item) => (
                item.name.toLowerCase().includes(searchValue.toLowerCase())
            )));
        }
    }, [])

    useEffect(() => {
        if (employeeData.length > 0) {
            setSearchData(employeeData.filter((item) => (
                item.name.toLowerCase().includes(searchValue.toLowerCase())
            )));
        }
    }, [searchValue])

    return (
        <div className="employee-list-container">
            <UserIconDiv />
            <MoptroIconDiv />
            <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
            <EmployeeList data={searchData} />
            <Footer active="user" />
        </div>
    )
}

export default EmployeeListPage;