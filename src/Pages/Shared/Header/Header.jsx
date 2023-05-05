import React, { useContext, useState } from 'react';
import ActiveLink from '../ActiveLink/ActiveLink';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';


const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(err => console.log(err.message))
    }

    return (
        <div className="navbar bg-base-100 pe-8 py-4 max-w-screen-2xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <nav tabIndex={0} className="menu menu-compact dropdown-content mt-3 px-2 py-5 shadow bg-base-100 rounded-box w-40 flex items-center">
                        <ActiveLink to='/'>Home</ActiveLink>
                        <ActiveLink to='/contact'>Contact</ActiveLink>
                        <ActiveLink to='/blog'>Blog</ActiveLink>
                    </nav>
                </div>
                <a className="title md:text-4xl text-2xl font-semibold">Gusto</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <nav className="menu menu-horizontal px-1 gap-5 flex items-center">
                    <ActiveLink to='/'>Home</ActiveLink>
                    <ActiveLink to='/contact'>Contact</ActiveLink>
                    <ActiveLink to='/blog'>Blog</ActiveLink>
                </nav>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <>
                            <div className="tooltip flex justify-center" data-tip={user?.displayName}>
                                <img src={user?.photoURL} className='rounded-full w-2/5 max-w-xs' />
                            </div>
                            <button className='btn bg-orange-500 border-0 font-semibold' onClick={handleLogOut}>Logout</button>
                        </> :
                        <button className='btn bg-orange-500 border-0 font-semibold'> <Link to='/login'>Login</Link></button>
                }

            </div>
        </div>
    );
};

export default Header;