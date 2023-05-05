import React, { useState } from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FaRegHeart, FaLongArrowAltRight } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';

const RecipeDetails = ({ recipe }) => {
    const [disabled, setDisabled] = useState(false);
    const { name, cooking_method, ingredients, rating } = recipe

    const handleClick= () =>{
        toast.success('Recipe added as favorite');
        setDisabled(true);
    }
   
    return (
        <div className="card w-96 bg-base-100 shadow-xl mb-10 bg-slate-50">
            <div className="card-body pb-4">
                <h2 className="card-title ">{name}</h2>
                <hr />
                <p>{cooking_method}</p>
                <p className='font-semibold text-xl'>Ingredients:</p>
                <ol>
                    {
                        ingredients.map(ingredient => <div className='flex items-center gap-2'><FaLongArrowAltRight /> <li>{ingredient}</li></div>)
                    }
                </ol>
                <hr />
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-2'>
                        <Rating style={{ maxWidth: 100 }} value={Math.round(rating || 0)} readOnly />
                        <span className='ms-2'>{rating}</span>
                    </div>
                    <div>
                   <button className='btn btn-ghost' onClick={handleClick} disabled={disabled}> <FaRegHeart /></button>
                    <Toaster />
                    </div>
                    
                </div>
            </div>
        </div>

    );
};

export default RecipeDetails;
