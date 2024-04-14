import React from "react";
import Rating from "@mui/material/Rating";
import { useNavigate } from "react-router-dom";
import { AddToCart } from "../AddToCart/AddToCart";

export const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div className="ProductCard rounded border drop-shadow w-[calc(50% - 20px)] h-full p-2 flex flex-col justify-between bg-white">
      <div onClick={() => navigate(`./singleProduct/${item.id}`)}>
        <img
          src={item.image}
          className="aspect-video rounded object-contain w-full"
          alt=""
        />
        <div className="flex items-center justify-between my-2">
          <Rating
            name="read-only"
            value={item.rating.rate}
            size="small"
            readOnly
          />

          <span className="text-pink-800">{item.category}</span>
        </div>
        <h3 className="text-xl font-semibold">{item.title}</h3>
      </div>

      <div>
      <div className="bg-white border border-black text-center p-2 my-3">
        <span className="text-black font-bold text-xl">{item?.price}$</span>
      </div>

      <AddToCart />
      </div>


    </div>
  );
};
