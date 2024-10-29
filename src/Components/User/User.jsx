import { Link } from "react-router-dom";

const User = ({user}) => {
    const {id, name, email,phone}=user;
    const userStyle ={
        border:'2px solid blue',
        padding: '10px',
        borderRadius: '15px',
        margin:'8px'
    }
    return (
        <div style={userStyle}>
            <h2>Name:{name}</h2>
            <h3>Email:{email}</h3>
            <h3>Phone:{phone}</h3>
            <Link to={`/user/${id}`}>Show Details</Link>
            <Link to={`/user/${id}`} >
                <button>Click</button>
            </Link>
        </div>
    );
};

export default User;