import "./style.css";

const Card = ({ employee, slno }) => {
    return (
        <div className="card" style={{ left: slno % 2 == 0 ? "10px" : "-10px" }}>
            <span className="slno">{slno}</span>
            <p><span>EMP ID </span> : <span className="emp-id"> {employee.id}</span></p>
            <p><span>Name </span> : <span className="emp-name"> {employee.name}</span></p>
            <p><span>DOB </span> : <span className="emp-dob"> {employee.dob}</span></p>
            <p><span>Role </span> : <span className="emp-role"> {employee.role}</span></p>
        </div>
    )
}

export default Card