import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import { FaGoogle, FaGithub } from 'react-icons/fa';

const Login = () => {

    const { signIn, signInWithGoogle, signInWithGithub } = useContext(AuthContext)
    const navigate= useNavigate()
    const location= useLocation()
    const from= location.state?.from?.pathname || '/'
    console.log(from)
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')

    const handleLogin = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        setSuccess('')
        setError('')

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
                setSuccess('Login Successful')
                navigate(from, {replace: true})
                form.reset()
            })
            .catch(err => setError(err.message))
    }

    const handleSignInWithGoogle = () => {
        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
                setSuccess('Login Successful')
                navigate(from, {replace: true})
                form.reset()
            })
            .catch(err => console.log(err.message))
    }

    const handleSignInWithGithub = () => {
        signInWithGithub()
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
                setSuccess('Login Successful')
                navigate(from, {replace: true})
                form.reset()
            })
            .catch(err => console.log(err.message))
    }

    if (error == 'Firebase: Error (auth/wrong-password).') {
        setError('Password did not match')
    }

    return (
        <div className="hero min-h-screen bg-base-200">

            <div className="hero-content flex-col">
                <div className="text-center">
                    <div className='flex justify-center items-start gap-8'>
                        <img style={{ width: '40px' }} src="./assets/icons/Restaurant-1.png" alt="" />
                        <img style={{ width: '40px' }} src="./assets/icons/Restaurant-2.png" alt="" />
                        <img style={{ width: '40px' }} src="./assets/icons/Restaurant-3.png" alt="" />
                        <img style={{ width: '40px' }} src="./assets/icons/Restaurant-4.png" alt="" />
                        <img style={{ width: '40px' }} src="./assets/icons/Restaurant-5.png" alt="" />
                    </div>
                    <h1 className="text-5xl font-bold my-5">Login now!</h1>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        {error !== '' && <p className='text-red-500 text-xs mt-3'>{error}</p>}
                        {success !== '' && <p className='text-green-500 text-xs mt-3'>{success}</p>}
                        <span className='text-xs mt-0'>New to Gusto? please<button className="btn btn-link text-xs"><Link to="/register">Register</Link></button></span>
                    </div>
                    <button onClick={handleSignInWithGoogle} className="btn btn-outline btn-primary mt-5"><FaGoogle /><span className='ms-3'> Login with google</span></button> <br />
                    <button onClick={handleSignInWithGithub} className="btn btn-outline btn-primary mt-5"><FaGithub /><span className='ms-3'> Login with github</span></button>
                </div>
            </div>
        </div>
    );
};

export default Login;