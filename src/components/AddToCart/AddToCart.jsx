import React, { useState } from 'react'
import { IoIosAdd } from "react-icons/io";
import { IoIosRemove } from "react-icons/io";
import axios from "axios";

export const AddToCart = () => {
  const [count, setCount] = useState(0);
  const [Product, setProduct] = useState([]);

  const handleAddToCart = () => {
    axios.put('https://fakestoreapi.com/carts/5', {
        userId:3,
        date:2019-12-10,
        products:[{productId:1,quantity:3}]
        })
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

  return (
    <div className="flex items-center justify-between border border-pink-800 text-white">
        <div className="bg-white w-2/5 flex items-center justify-center h-full text-pink-800 gap-2">
          <IoIosRemove
            className="text-3xl"
            onClick={() => {
              if (count > 0) setCount(count - 1);
            }}
          />
          <span className="text-xl font-bold">{count}</span>
          <IoIosAdd className="text-3xl" onClick={() => setCount(count + 1)} />
        </div>
        <div className="bg-pink-800 w-3/5  text-white p-2 text-center" onClick={handleAddToCart}>
          <span>ADD TO CART</span>
        </div>
      </div>
  )
}
