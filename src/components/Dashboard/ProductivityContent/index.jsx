import "./style.css";
import ProductivityCard from "../ProductivityCard";

const ProductivityContent = () => {
    const data = [
        {
            day: "Monday",
            productivity: "4"
        },
        {
            day: "Tuesday",
            productivity: "92"
        },
        {
            day: "Wednesday",
            productivity: "122"
        },
        {
            day: "Thursday",
            productivity: "93"
        },
        {
            day: "Friday",
            productivity: "89"
        },
        {
            day: "Saturday",
            productivity: "98"
        },
    ]

    return (
        <div className="productivity-content">
            <h2 className="heading">Employee Productivity Dashboard</h2>
            <table className="productivity-table">
                {
                    data.map((item, idx) => (
                        <ProductivityCard key={idx} item={item} />
                    ))
                }
            </table>
        </div>
    )
}

export default ProductivityContent