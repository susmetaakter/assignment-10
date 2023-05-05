import React from 'react';
import './ChefContainer.css'
import { FaThumbsUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';

const ChefContainer = ({ chef }) => {
    const { id, name, picture, likes, years_of_experience, recipes } = chef
    console.log(chef)
    return (
        <div className="card card-compact md:w-96 w-54 bg-base-100 shadow-xl mx-auto">
            <figure>
                <LazyLoad>
                    <img src={picture} alt="Shoes" />
                </LazyLoad>
            </figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">{name}</h2>
                <p className='text-left'>Has {years_of_experience} years of cooking experience</p>
                <p className='text-left'>Made {recipes.length} different recipes</p>
                <p className='flex justify-start items-center gap-2'><FaThumbsUp className='text-blue-700' /> {likes}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary"><Link to={`${id}`}>View recipes</Link></button>
                </div>
            </div>
        </div>
    );
};

export default ChefContainer;