import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { FaFacebook, FaGoogle, FaLinkedin } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, password, email)

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(err => console.log(err))


    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col items-center space-x-32 lg:flex-row">
                <div className="w-1/2 ">
                    <img src={img} alt="" />
                </div>
                <div className="card  w-1/2 max-w-sm shadow-2xl bg-base-100 border">
                    <h3 className='text-center mb-3 mt-7 font-bold text-2xl'>Sign Up</h3>
                    <form className="card-body" onSubmit={handleSignUp}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Name</span>
                            </label>
                            <input type="text" placeholder="Name" name='name' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Confirm Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            {/* <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label> */}
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary bg-orange-500">Sign Up</button>
                        </div>
                    </form>
                    <div className='pb-6 text-center'>
                        <p>Or sign in with</p>
                        <div className='flex text-2xl justify-center gap-6 mt-4 mb-4'>
                            <FaFacebook className='text-sky-600' />
                            <FaGoogle className='text-sky-600'></FaGoogle>
                            <FaLinkedin className='text-sky-600'></FaLinkedin>
                        </div>
                        <p>Already Have an Account <Link to={'/login'} className='text-orange-500 font-bold'>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;