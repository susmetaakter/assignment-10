import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='bg-black text-white md:flex justify-around items-start p-5'>
            <div>
                <p className='md:text-5xl text-3xl mt-5 md:mb-10 mb-5 text-orange-500'>Gusto</p>
                <p className='text-md my-2'>Address: 85 Kakoli, Banani, Dhaka</p>
                <p className='text-md my-2'>Email: gustobanani@gmail.com</p>
                <p className='text-md my-2'>Phone: +8801534288567</p>
                <div className="links md:my-10 my-5">
                    <a href="https://www.facebook.com/"><img src="./assets/icons/fb.png" alt=""/></a>
                    <a href="https://www.twitter.com/"><img src="./assets/icons/twitter.png" alt=""/></a>
                    <a href="https://www.youtube.com/"><img src="./assets/icons/youtube.png" alt=""/></a>
                </div>

            </div>
            <div className='mb-5'>
            <h3 className="md:text-3xl text-2xl my-5">Message us for reservation</h3>
            <form>
                <input className='my-3 rounded p-3 ' type="text" placeholder="Your Name"/><br/>
                <input className='my-3 rounded p-3 ' type="email" placeholder="Your Email"/><br/>
                <textarea className='my-3 rounded p-3 ' cols="35" rows="5" placeholder="Message"></textarea><br/>
                <input  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded " type="submit" value="Submit"/>
            </form>
            </div>
        </div>
    );
};

export default Footer;