import { FaGoogle } from "react-icons/fa";
import useAuth from "../../../Hooks/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const GoogleLogin = () => {
    const { googleSignIn } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            console.log(result.user);
            const userInfo = {
                email: result.user.email,
                name: result.user.displayName
            }

            axiosPublic.post('/users', userInfo)
            .then(res => {
                console.log(res.data);
                navigate('/');
            })
        })
    }

    return (
        <div className="w-fit mx-auto">
            <div className="divider"></div>
            <div 
            onClick={handleGoogleSignIn}
            className="my-4">
                <button className="btn btn-warning"><FaGoogle></FaGoogle> Login With Google</button>
            </div>
        </div>
    );
};

export default GoogleLogin;