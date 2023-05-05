import React from 'react';

const Banner = () => {
    return (
        <div className=" w-full border-b-8 border-x-8">
            <div id="slide1" className="relative w-full">
                <img src="../../../../public/Gusto Banner.png" className="w-full" />
                <div className=" text-white absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 flex-col items-center">
                    <h2 className='lg:text-6xl md:text-3xl text-xl lg:mb-12 md:mb-5 mb-2'>Taste the best of thai food</h2>
                    <p className='lg:text-2xl md:text-md text-sm lg:mb-10 mb-3 md:w-5/6 text-center'>Welcome to Basil Thai,We are thrilled to have you join us for an authentic Thai dining experience. Our menu is filled with a variety of flavorful dishes that are made with fresh ingredients and traditional Thai recipes. From our signature curries to our popular Pad Thai, we have something for everyone.Thank you for choosing Basil Thai Restaurant. We look forward to serving you soon!! </p>
                </div>
            </div>
        </div>
    );
};

export default Banner;

