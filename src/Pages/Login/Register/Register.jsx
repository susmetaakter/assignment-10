import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const { createUser } = useContext(AuthContext)
    const handleRegister = event => {

        event.preventDefault()
        const form = event.target
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password)
        setError('')
        setSuccess('')

        if (password.length < 6) {
            setError('Password must be six characters long')
            return
        }
        
        createUser(email, password)
            .then(result => {
                const createdUser = result.user
                console.log(createdUser)
                setSuccess('Registration successful')
                updateProfile(createdUser, {
                    displayName: name, photoURL: photo
                })
                    .then(() => {
                        console.log('Profile Updated!')
                    })
                    .catch((error) => setError(error.message));
                form.reset()
            })
            .catch(err => setError(err.message))
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
                    <h1 className="text-5xl font-bold my-5">Please Register!</h1>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" id="name" placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photo" id="photo" placeholder="Photo url" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" id="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" id="password" placeholder="password" className="input input-bordered" required />
                                <p className='text-red-500 text-xs mt-3'>{error}</p>
                                <label className="label">
                                    <span className='text-xs'>Already have an account?<button className="btn btn-link text-xs"><Link to="/login">Login</Link></button></span>
                                </label>
                            </div>
                            <div className="form-control">
                                
                                <button className='btn btn-primary'>Register</button>
                                <p className='text-green-500 text-xs mt-3'>{success}</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;

{/* The button to open modal */ }


{/* Put this part before </body> tag */ }
