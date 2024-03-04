import Card from "../common/Card";
import "./style.css";

const EmployeeList = ({ data }) => {

    return (
        <div className="employee-list">
            {
                data.map((item, idx) => (
                    <Card key={idx} employee={item} slno={idx + 1} />
                ))
            }
        </div>
    )
}

export default EmployeeList