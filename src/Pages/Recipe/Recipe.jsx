import React from 'react';
import { useLoaderData } from 'react-router-dom';
import RecipeDetails from './RecipeDetails';
import { FaThumbsUp } from 'react-icons/fa';

const Recipe = () => {
    const loader= useLoaderData()
    console.log(loader)
    const {id, name, description, picture, likes, years_of_experience, recipes,}= loader
    return (
        <div className='my-16 max-w-7xl mx-auto'>
            <div className='md:flex items-center gap-10 px-5 py-7 md:border-2 border-orange-300 rounded-lg mb-8'>
                <img className='w-1/2 rounded-lg flex justify-center' src={picture} alt="" />
                <div className='md:border-s-2 md:ps-5'>
                <p className='text-4xl text-orange-500 font-semibold my-5'>{name}</p>
                <p>{description}</p>
                <p className='my-3'><span className='font-semibold'>Cooking experience: </span>{years_of_experience} years</p>
                    <p className='mb-3'><span className='font-semibold'>Recipes made: </span>{recipes.length}</p>
                    <p className='flex justify-start items-center gap-2'><FaThumbsUp className='text-orange-500 '/> {likes}</p>
                </div>

            </div>
            <div className='md:flex items-start justify-evenly'>
                {
                    recipes.map(recipe=><RecipeDetails
                        key={recipe._id}
                        recipe={recipe}
                    ></RecipeDetails>)
                }
            </div>
        </div>
    );
};

export default Recipe;