import React from 'react';
import './Home.css'
import ChefContainer from '../ChefContainer/ChefContainer';
import Banner from '../Banner/Banner';
import BestRecipe from '../BestRecipe/BestRecipe';
import { useLoaderData } from 'react-router-dom';
import CustomerReview from '../CustomerReview/CustomerReview';

const Home = () => {
    const chefs = useLoaderData()
    console.log(chefs)
    return (
        <div className='home pb-16'>

            <Banner></Banner>
            <div className='home-container'>
                <div className='text-center my-20'>
                    <h2 className='md:text-6xl text-4xl  font-semibold text-white'>Our Chefs</h2>
                    <p className='my-5 text-white md:text-xl text-md mb-16'>Meet our most experienced chefs and explore what they can provide you</p>
                    <div className='chefs lg:px-10'>
                        {
                            chefs.map(chef => <ChefContainer
                                key={chef.id} chef={chef}
                            ></ChefContainer>)
                        }
                    </div>
                </div>
                <BestRecipe></BestRecipe>
                <CustomerReview></CustomerReview>
            </div>
        </div>
    );
};

export default Home;