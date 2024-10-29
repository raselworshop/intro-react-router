import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error)
    return (
        <div>
            <h2>Ooppss!!!!</h2>
            <p>{error.statusText || error.message}</p>
            {
                error.status === 404 && <div>
                    <h3>Page Not Fonud</h3>
                    <Link to={'/'}><button>Go Home</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;