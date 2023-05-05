import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    id: 1,
    name: "Prapat",
    job: " A taxi driver",
    image: "https://images.unsplash.com/photo-1614015581731-6f039568565f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGN1c3RvbWVyJTIwcGhvdG98ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    review:
      " I am a big fan of Thai street food and often stops by food stalls during his breaks. Recently, I tried a dish called Khao Mun Gai, which is a popular Thai version of Hainanese chicken rice. I loved the tender chicken and the fragrant rice, which was cooked in chicken broth. He highly recommends this dish to anyone who wants to try authentic Thai street food.",
  },
  {
    id: 2,
    name: "Siriporn",
    job: " A teacher",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    review:
      "I recently tried the Pad Kra Pao at a local Thai restaurant and was blown away by the dish's bold flavors. I particularly loved the combination of fresh basil, chili peppers, and ground meat. I highly recommends this dish to anyone who loves spicy food.",
  },
  {
    id: 3,
    name: "Supaporn",
    job: "A banker",
    image: "https://plus.unsplash.com/premium_photo-1661762009455-598b1fb964b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fGN1c3RvbWVyJTIwcGhvdG98ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    review:
      " I am a fan of Thai fine dining and recently dined at a high-end Thai restaurant. I tried a dish called Hor Mok Pla, which is a steamed fish curry served in a banana leaf cup. I was impressed by the delicate balance of spices and the high-quality fish used in the dish. I highly recommends this dish to anyone who wants to experience the finer side of Thai cuisine.",
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
      <h2 className='md:text-5xl text-3xl text-center font-semibold text-white mb-10'>our customers review</h2 >
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