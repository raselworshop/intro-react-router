import { Link, useNavigate } from "react-router-dom";

const Post = ({post}) => {
    const {id, title, body}= post;
    const navigate = useNavigate();
    const backNavigate = useNavigate();
    const postStyle ={
        border:'2px solid blue',
        padding: '10px',
        borderRadius: '15px',
        margin:'8px'
    }

    const handleBack =()=>{
        backNavigate(-1)
    }

    const showDetailHandle =()=>{
        navigate(`/post/${id}`)
    }
    return (
        <div style={postStyle}>
            <h4>Post ID:{id}</h4>
            <h3>{title}</h3>
            <Link to={`/post/${id}`}>Post Details</Link>
            <Link to={`/post/${id}`}><button>Show Details</button></Link>
            <button onClick={showDetailHandle}>See Here</button>
            <button onClick={handleBack}>Go Back</button>
        </div>
    );
};

export default Post;