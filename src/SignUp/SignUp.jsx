import { Link, useNavigate } from "react-router-dom";
import bgImg from '../assets/others/authentication.png';
import authentication2 from '../assets/others/authentication2.png';
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import GoogleLogin from "../Components/SocialLogin/GoogleLogin/GoogleLogin";


const SignUp = () => {
    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);

    const navigate = useNavigate();

    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        // create user info in the database
                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('user added to the database');
                                    reset();
                                    Swal.fire({
                                        position: "top-start",
                                        icon: "success",
                                        title: "User Created Successfully",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/');
                                }
                            })
                    })
                    .catch(error => {
                        console.log(error);
                    })
            })
    }
    console.log(errors);

    return (
        <>
            <Helmet><title>Bistro Boss | Sign Up</title></Helmet>
            <div className="p-20" style={{ backgroundImage: `url(${bgImg})` }}>
                <div className='hero min-h-screen shadow-2xl' style={{ backgroundImage: `url(${bgImg})` }}>

                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                            <img src={authentication2} alt="" />
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm">
                            <form onSubmit={handleSubmit(onSubmit)}
                                className="card-body">
                                <h3 className="text-3xl font-bold text-center">Sign Up</h3>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text"
                                        {...register('name', { required: true })}
                                        placeholder="Name"
                                        className="input input-bordered" />
                                    {errors.name?.type === 'required' && <p className="text-red-500 mt-2">Name is required.</p>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text"
                                        {...register('photoURL', { required: true })}
                                        placeholder="Photo URL"
                                        className="input input-bordered" />
                                    {errors.photoURL?.type === 'required' && <p className="text-red-500 mt-2">Photo URL is required.</p>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email"
                                        {...register('email', { required: true })}
                                        className="input input-bordered" />
                                    {errors.email?.type === 'required' && <p className="text-red-500 mt-2">Email is required.</p>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password"
                                        {...register('password',
                                            {
                                                required: true,
                                                minLength: 6,
                                                maxLength: 20,
                                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                            })}
                                        className="input input-bordered" />
                                    {errors.password?.type === 'required' && <p className="text-red-500 mt-2">Password is required.</p>}
                                    {errors.password?.type === 'minLength' && <p className="text-red-500 mt-2">Password must be min 6 characters.</p>
                                    }
                                    {errors.password?.type === 'maxLength' && <p className="text-red-500 mt-2">Password must be less than 20 characters.</p>
                                    }
                                    {errors.password?.type === 'pattern' && <p className="text-red-500 mt-2">Password must be combination of a Uppercase, a lowercase, a number and a special character.</p>
                                    }
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value="Sign Up" />
                                </div>
                            </form>
                            <p className="text-center"><small>Already Have an Account ? <Link to="/login">Login</Link></small></p>
                            <GoogleLogin></GoogleLogin>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;