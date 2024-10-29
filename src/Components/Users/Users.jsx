import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './Users.css'
const Users = () => {
    const users = useLoaderData();
   
    // state---Data,
    // state---Loader,
    // useEffect--
    // Fetch--->> loading state set -> set state
    return (
        <div>
            <h3>Our users: {users.length} </h3>
            <p>Our vodro user, thank you!!</p>
            <div className="users">
                {
                    users.map(user=> <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;