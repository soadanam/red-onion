import useAuth from './../../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';


const ProtectedRoute = ({ children }) => {
    const { user, isLoading } = useAuth();
    const location = useLocation();
    
    if (isLoading) {
        return (<> <h2>Loading..</h2> <Spinner animation="border" variant="primary" /> </>)
    }

    if (user?.email) {
        return children;
    }
    else {
        return <Navigate to='/login' state={{ from: location }}></Navigate>
    }

};
export default ProtectedRoute;