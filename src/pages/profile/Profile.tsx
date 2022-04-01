import { Link } from "react-router-dom";

const Profile = () => {
    return (
        <div>
            <div>
                <h3>Profile</h3>             
            </div>
            <div>
                <Link to="/dashboard"> Dashboard </Link>
            </div>
        </div>        
    )
}

export default Profile;