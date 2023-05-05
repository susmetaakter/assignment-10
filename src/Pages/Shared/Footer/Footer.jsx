import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='bg-black text-white md:flex justify-around items-start p-5'>
            <div>
                <p className='md:text-5xl text-3xl mt-5 md:mb-10 mb-5 text-orange-500'>Basil Thai</p>
                <p className='text-md my-2'>Address: Alfonso,Cavite,Thailand</p>
                <p className='text-md my-2'>Email: bansilthai@gmail.com</p>
                <p className='text-md my-2'>Phone: +880153428234</p>
                <div className="links md:my-10 my-5">
                    <a href="https://www.facebook.com/"><img src="../../../../icons/fb.png" alt=""/></a>
                    <a href="https://www.twitter.com/"><img src="../../../../icons/twitter.png" alt=""/></a>
                    <a href="https://www.youtube.com/"><img src="../../../../icons/youtube.png" alt=""/></a>
                </div>

            </div>
            <div className='mb-5'>
            <h3 className='md:text-3xl text-2xl my-5 md:mb-10 mb-5'>Help</h3> 
            <p className='text-md my-2 mb-5'>Help Centers</p> 
            <p className='text-md my-2'>Authors</p> 
            </div>
            <div className='mb-5'>
            <h3 className='md:text-3xl text-2xl my-5 md:mb-10 mb-5'>Our Community</h3> 
            <p className='text-md my-2 mb-5'>Community</p> 
            <p className='text-md my-2'>Blogs</p> 
            <p className='text-md my-2'>Forums</p> 
            <p className='text-md my-2'>Meetups</p> 
            </div>
            <div className='mb-5'>
            <h3 className="md:text-3xl text-2xl my-5">Online Booking</h3>
            <form>
                <input className='my-3 rounded p-3 ' type="text" placeholder="Your Name"/><br/>
                <input className='my-3 rounded p-3 ' type="email" placeholder="Your Email"/><br/>
                <input className='my-3 rounded p-3 ' type="email" placeholder="Food Name"/><br/>
                <input  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded " type="submit" value="Submit"/>
            </form>
            </div>
        </div>
    );
};

export default Footer;