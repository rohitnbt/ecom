import React from "react";
import axios from "axios";
import { useFetch } from "../../hooks/useFetch";
import { CartItem } from "../../components/CartItem/CartItem";

export const Cart = () => {
  const { data, loading } = useFetch("/carts/5");

  return (
    <div className="Cart">
      <div className="container mx-auto my-10">
        <h1 className="mb-10 text-3xl text-center font-bold">Cart</h1>
        <div className="">
          <table className="table-auto w-full">
            <tbody>
              {data?.products?.map((item) => (
                <CartItem key={item.productId} item={item} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
