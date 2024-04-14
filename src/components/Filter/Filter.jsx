import React from "react";
import { useFetch } from "../../hooks/useFetch";

export const Filter = () => {
    const {data, loading} = useFetch("/products/categories")
  return (
    <div className="filter flex items-center justify-between">
      <div>
        <select name="category" id="category" className="p-2 border border-pink-800 outline-none capitalize">
            {
                data?.map((item,i)=> (<option className="capitalize" key={i} value={item}>{item}</option>))
            }
        </select>
      </div>
    </div>
  );
};
