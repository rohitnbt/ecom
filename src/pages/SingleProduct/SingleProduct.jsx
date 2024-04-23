import React from "react";
import Rating from "@mui/material/Rating";
import { useFetch } from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { ProductSlider } from "../../components/ProductSlider/ProductSlider";
import { AddToCart } from "../../components/AddToCart/AddToCart";

export const SingleProduct = () => {

  let { id } = useParams();
  console.warn(id);
  const { data, loading } = useFetch(`/products/${id}`);

  return (
    <>
    <div className="SingleProduct">
      <div className="container m-auto my-10 px-5">
        {
            data && (
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10 mb-5">
          <div className="image">
            <img src={data?.image} className="w-full aspect-square m-auto object-contain" alt="" />
          </div>

          <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-3xl font-semibold">{data?.title}</h3>
            <div className="flex items-center justify-between my-5">
              <Rating
                name="read-only"
                value={data?.rating?.rate}
                readOnly
              />

              <span className="text-pink-800 text-xl">{data?.category}</span>
            </div>
            <p className="mb-5">{data?.description}</p>
          </div>
          <div>
      <div className="bg-white border border-black text-center p-2 my-3">
        <span className="text-black font-bold text-xl">{data?.price}$</span>
      </div>

      <AddToCart />
      </div>
          </div>
        </div>
        )
    }
    <ProductSlider />
   </div>
    </div>
    
    </>
  );
};
