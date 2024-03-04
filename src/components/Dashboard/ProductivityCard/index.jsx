import ProgressBar from "../ProgressBar";
import "./style.css";

const ProductivityCard = ({ item }) => {
    return (
        <tr>
            <td className="single-productivity">
                <div className="content">
                    <p>Productivity on {item.day}</p>
                    <p>{item.productivity}%</p>
                </div>
                <div>
                    <ProgressBar value={item.productivity / 2} />
                </div>
            </td>
        </tr>
    )
}

export default ProductivityCard