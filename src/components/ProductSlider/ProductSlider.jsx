import React from 'react'
import Slider from "react-slick";
import { useFetch } from '../../hooks/useFetch';
import { ProductCard } from '../ProductCard/ProductCard';

export const ProductSlider = () => {
    const {data, loading} = useFetch("/products")

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
      
  return (
    <>
    {
        data && (
        <div className="slider-container">
            <Slider {...settings}>
                    {
                        data?.map((item)=> (<div key={item.id}><ProductCard item={item}/></div>))
                    }
            </Slider>
        </div>
        )
    }
    </>
  )
}
