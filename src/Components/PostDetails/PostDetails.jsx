import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
    const postData = useLoaderData();
    console.log(postData)
    const {postId} = useParams();
    const navigate = useNavigate();
    const {id, title, body}=postData;
    console.log(postId)
    const handleGoBack =()=>{
        navigate(-1)
    }
    return (
        <div>
            <h3>Post Details:{postData.length}</h3>
            <h4>Post ID: {id}</h4>
            <h2>Name:{title}</h2>
            <p>Post:<small>{body}</small></p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;