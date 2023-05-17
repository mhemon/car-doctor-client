import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const { loginWithGoogle } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleGoogleLogin = () => {
        loginWithGoogle()
        .then(result => {
            navigate('/')
        })
        .catch(error => console.log(error))
    }
    return (
        <div>
            <div className="divider">OR</div>
            <button onClick={handleGoogleLogin} className="btn btn-circle btn-outline">
                G
            </button>
        </div>
    );
};

export default SocialLogin;