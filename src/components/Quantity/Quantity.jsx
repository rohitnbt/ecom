import React, { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { IoIosRemove } from "react-icons/io";
import axios from "axios";

export const Quantity = ({ quantity }) => {
  const [count, setCount] = useState(quantity);

  return (
    <div className="bg-white flex justify-center h-full text-pink-800 gap-2">
      <div className="p-2 bg-pink-800 hover:bg-pink-950 border-pink-800 hover:border-pink-950 text-white"><IoIosRemove className="text-3xl" onClick={() => { if (count > 0) setCount(count - 1); }} /></div>
      <div className="p-2 w-full border border-pink-800 hover:border-pink-950 text-center"><span className="text-xl font-bold">{count}</span></div>
      <div className="p-2 bg-pink-800 hover:bg-pink-950 border-pink-800 hover:border-pink-950 text-white"><IoIosAdd className="text-3xl" onClick={() => setCount(count + 1)} /></div>
    </div>
  );
};
