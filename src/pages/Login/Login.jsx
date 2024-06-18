import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";


const Login = () => {
    const { signIn, signInwithGoogle, signInwithGithub } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        signInwithGoogle()
            .then(result => {
                console.log(result.user);
                toast.success("Logged in successfully!");
            })
            .catch(error => {
                console.error(error);
                toast.error("Failed to login. Please try again.");
            });
    }

    const handleGithubSignIn = () => {
        signInwithGithub()
            .then(result => {
                console.log(result.user);
                toast.success("Logged in successfully!");
            })
            .catch(error => {
                console.error('error: ', error);
                toast.error("Failed to login. Please try again.");
            });
    }


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const { email, password } = data;
        signIn(email, password)
            .then(result => {
                console.log(result.user);
                toast.success("Logged in successfully!");
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error);
                toast.error("Failed to login. Please try again.");
            });
    };

    return (
        <div className="">
            <Helmet>
                <title>Craftify Creations| Login Page</title>
            </Helmet>
            <ToastContainer />
            <div className="hero min-h-screen bg-base-200" style={{ backgroundImage: 'url(https://i.ibb.co/mG6jkSZ/banner.jpg)' }}>
                <div className="hero-content flex-col  hero-overlay bg-opacity-30">
                    <h1 className="text-5xl text-white font-bold lg:px-64 "> Please Login </h1>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body px-4 dark:bg-gray-700 dark:text-white">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email" name="email" className="input input-bordered"
                                    {...register("email", { required: true })}
                                />
                                {errors.email && <span className='text-red-500'>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="Password" name="password" className="input input-bordered"
                                    {...register("password", { required: true })}
                                />
                                {errors.password && <span className='text-red-500'>This field is required</span>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <div className="flex justify-evenly">
                            <p className="text-center"><button onClick={handleGoogleSignIn} className="btn text-5xl"><FcGoogle /></button></p>
                            <p className="text-center"><button onClick={handleGithubSignIn} className="btn  text-5xl "><FaGithub /></button></p>
                        </div>
                        <p className="p-4 text-center mt-3 text-black">Don not have account <Link className="text-blue-500 text-2xl" to='/register'>Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
