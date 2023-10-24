import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { FaFacebook, FaGoogle, FaLinkedin } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const { signIn } = useContext(AuthContext);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user)
        })
        .catch(console.error(error))

    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col items-center space-x-32 lg:flex-row">
                <div className="w-1/2 ">
                    <img src={img} alt="" />
                </div>
                <div className="card  w-1/2 max-w-sm shadow-2xl bg-base-100 border">
                    <h3 className='text-center mb-3 mt-7 font-bold text-2xl'>Login</h3>
                    <form className="card-body" onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            {/* <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label> */}
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary bg-orange-500">Login</button>
                        </div>
                    </form>
                    <div className='text-center'>
                        <p>Or sign in with</p>
                        <div className='flex text-2xl justify-center gap-6 mt-4'>
                            <FaFacebook className='text-sky-600' />
                            <FaGoogle className='text-sky-600'></FaGoogle>
                            <FaLinkedin className='text-sky-600'></FaLinkedin>
                        </div>
                        <p>New to Car Doctors <Link to={'/sign-up'} className='text-orange-500 font-bold'>Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;