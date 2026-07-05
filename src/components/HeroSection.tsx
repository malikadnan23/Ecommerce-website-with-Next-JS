"use client";

import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide from "./Slide";

const HeroSection = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const slideData = [
    {
      id: 0,
      img: '/banner-1.jpg',
      title: "Trending Items",
      mainTitle: "Womens Latest Fasion Sale",
      price: "UPTO 20"
    },
    {
    id: 1,
    img: "/banner-2.jpg",
    title: "New Collection",
    mainTitle: "Men's Casual Wear Collection",
    price: "UPTO 35"
  },
  {
    id: 2,
    img: "/banner-3.jpg",
    title: "Summer Sale",
    mainTitle: "Accessories & Footwear Deals",
    price: "UPTO 50"
  }
  ]
  return (
    <>
      <div className="container pt-6 lg:pt-0">

        <Slider {...settings} >
          {slideData.map((item) => (
           <Slide key={item.id}
              img={item.img}
              title={item.title}
              mainTitle={item.mainTitle}
              price={item.price}
            />
        ))}
        </Slider>
      </div>
    </>
  )
}

export default HeroSection
