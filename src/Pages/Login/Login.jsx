import { useContext, useEffect, useState } from 'react';
import bgImg from '../../assets/others/authentication.png';
import authentication2 from '../../assets/others/authentication2.png';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import GoogleLogin from '../../Components/SocialLogin/GoogleLogin/GoogleLogin';

const Login = () => {
    const { signIn } = useContext(AuthContext)
    const [disabled, setDisabled] = useState(true);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: "Login Successful",
                    showClass: {
                      popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                    },
                    hideClass: {
                      popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                    }
                  });

                  navigate(from, {replace: true});
            })

    }

    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }


    return (
        <>
            <Helmet><title>Bistro Boss | Login</title></Helmet>
            <div className="p-20" style={{ backgroundImage: `url(${bgImg})` }}>
                <div className='hero min-h-screen shadow-2xl' style={{ backgroundImage: `url(${bgImg})` }}>

                    <div className="hero-content flex-col lg:flex-row">
                        <div className="text-center lg:text-left">
                            <img src={authentication2} alt="" />
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm">
                            <form onSubmit={handleLogin}
                                className="card-body">
                                <h3 className="text-3xl font-bold text-center">Login</h3>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email"
                                        name='email'
                                        className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password"
                                        name='password'
                                        className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <LoadCanvasTemplate />
                                    </label>
                                    <input onBlur={handleValidateCaptcha} type="text" placeholder="Write above text"
                                        name='captcha'
                                        className="input input-bordered" required />
                                </div>

                                <div className="form-control mt-6">
                                    <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
                                </div>
                            </form>
                            <p className='text-center'><small>New Here ? <Link to="/signUp">Create An Account</Link></small></p>

                            <GoogleLogin></GoogleLogin>
                        </div>

                    </div>
                </div>
            </div>
        </>

    );
};

export default Login;