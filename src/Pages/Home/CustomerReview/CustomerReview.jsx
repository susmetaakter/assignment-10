import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    id: 1,
    name: "Lili williams",
    job: "CEO of Raphen",
    image: "https://images.unsplash.com/photo-1614015581731-6f039568565f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGN1c3RvbWVyJTIwcGhvdG98ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    review:
      "I had an amazing experience at this Italian food place. The platter was delicious and the service was excellent. I highly recommend it to anyone looking for a great dining experience.",
  },
  {
    id: 2,
    name: "Jane Smith",
    job: "Air hostess",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    review:
      "This is the best Italian restaurant I've ever been to. The pasta is homemade and the sauces are delicious. The atmosphere is also great. I will definitely be back!",
  },
  {
    id: 3,
    name: "Miki doe",
    job: "Founder of upek",
    image: "https://plus.unsplash.com/premium_photo-1661762009455-598b1fb964b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fGN1c3RvbWVyJTIwcGhvdG98ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    review:
      "The food was amazing. Everything from the appetizers to the desserts was delicious. The service was also fantastic. I can't wait to come back!",
  },
];


const CustomerReview = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div>
      <h2 className='md:text-5xl text-3xl text-center font-semibold text-white mb-10'>Word from our customers</h2 >
      <div style={{ backgroundColor: '#212A3E' }} className="text-white text-center lg:max-w-lg md:max-w-md max-w-xs mx-auto rounded-2xl">
        <Slider {...settings}>
          {reviews.map((review) => (
            <div key={review.id} className="px-4 pt-8 pb-6">
              <p className="mb-10 bg-slate-100 text-black mx-5 py-3 px-5 rounded-full">{review.review}</p>
              <img className='rounded-full w-16 mx-auto mt-5' src={review.image} alt="" />
              <p className="text-xl text-orange-500 my-1">{review.name}</p>
              <p className="text-xs">{review.job}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
          );
};

export default CustomerReview;