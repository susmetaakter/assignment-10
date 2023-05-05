import React from 'react';

const bestRecipes = [
    {
        id: 1,
        name: 'Massaman Curry',
        img: "../../../../platter-1.png",
        reviews: 456,
        price: 60
    },
    {
        id: 2,
        name: 'Som Tam',
        img: "../../../../platter-2.png",
        reviews: 678,
        price: 90
    },
    {
        id: 3,
        name: 'Khao Soi',
        img: "../../../../platter-3.png",
        reviews: 200,
        price: 77
    },
]

const BestRecipe = () => {
    return (
        <div>
            <div className=' my-20 ms-10 me-10'>
                <h2 className='md:text-6xl text-4xl text-center font-semibold text-white'>Best Recipes</h2>
                <p className='my-5 text-white text-center md:text-xl text-md'>Enjoy the best of thai taste </p>


                <div className='best-recipe-container'>
                    <div className='flex justify-evenly items-center my-16'>
                        <img className=' w-1/2 rounded-lg border-2 border-blue-500' src={bestRecipes[0].img} alt="" />
                        <div className='text-white p-5 md:border-s-2 border-blue-800'>
                            <p className='md:text-4xl text-2xl mb-5'>{bestRecipes[0].name}</p>
                            <p className='mb-2'>Reviews: {bestRecipes[0].reviews}</p>
                            <p>Price: ${bestRecipes[0].price}</p>
                        </div>
                    </div>
                    <div className='flex justify-evenly items-center my-16'>                     
                        <div className='text-white p-5 md:border-e-2 border-blue-800'>
                            <p className='md:text-4xl text-2xl mb-5'>{bestRecipes[1].name}</p>
                            <p className='mb-2'>Reviews: {bestRecipes[1].reviews}</p>
                            <p>Price: ${bestRecipes[1].price}</p>
                        </div>
                        <img className='w-1/2 rounded-lg border-2 border-blue-500' src={bestRecipes[1].img} alt="" />
                    </div>
                    <div className='flex justify-evenly items-center my-16'>
                        <img className='w-1/2 rounded-lg border-2 border-blue-500' src={bestRecipes[2].img} alt="" />
                        <div className='text-white p-5 md:border-s-2 border-blue-800'>
                            <p className='md:text-4xl text-2xl mb-5'>{bestRecipes[2].name}</p>
                            <p className='mb-2'>Reviews: {bestRecipes[2].reviews}</p>
                            <p>Price: ${bestRecipes[2].price}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestRecipe;