import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const {name, website}= user;
    return (
        <div>
            <h2>User Details showned:{name}</h2>
            <p>Visit our <a href= {website}>site</a></p>
        </div>
    );
};

export default UserDetails;