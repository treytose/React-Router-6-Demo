import { Link } from "react-router-dom";

const Dashboard = () => {
    return (
        <div> 
            <div>
                <h3> Dashboard </h3> 
            </div>
            <div>
                <div>
                    <Link to={"/profile"} title="Profile"> View Profile </Link>
                </div>
                <div>
                    <Link to={"/product"} title="Product"> View Product </Link>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;