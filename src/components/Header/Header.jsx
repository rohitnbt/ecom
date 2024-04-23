import React from 'react'
import { IoMdCart } from "react-icons/io";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { Logo } from '../Icons/Logo';
import { useFetch } from '../../hooks/useFetch';
import { Link, useNavigate } from 'react-router-dom';

export const Header = () => {
    const {data, loading} = useFetch("/carts/5")
    const navigate = useNavigate();


  return (
    <div className='Header p-5 bg-pink-800 text-white drop-shadow-md sticky top-0 w-full z-50'>
        <div className="container m-auto">
            <div className="flex justify-between items-center">
                <div className="logo w-[100px]" onClick={()=>navigate("/")}>
                    <Logo/>
                </div>
                <div className="nav flex justify-between items-center gap-4 font-medium">
                    <Link to={"./category/electronics"} className=' border-b border-transparent hover:border-white transition-all duration-300 ease-in-out'>Electronics</Link>
                    <Link to={"./category/jewelery"} className=' border-b border-transparent hover:border-white transition-all duration-300 ease-in-out'>Jewelery</Link>
                    <Link to={"./category/men's clothing"} className=' border-b border-transparent hover:border-white transition-all duration-300 ease-in-out'>Men</Link>
                    <Link to={"./category/women's clothing"} className=' border-b border-transparent hover:border-white transition-all duration-300 ease-in-out'>Women</Link>
                </div>
                <div className="cart flex items-center gap-3 justify-end w-[100px] text-right">
                    
                    <button className="py-4 px-1 relative border-transparent outline-none" aria-label="Cart" onClick={()=>navigate("/cart")}>
                        <IoMdCart className='w-[25px] h-auto ml-auto'/>
                        {
                            data?.products.length > 0 && (
                        
                            <div className="inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-semibold leading-4 bg-pink-950 text-white absolute top-2 -right-2">
                            {data?.products.length}
                            </div>
                            )
                        }
                    </button>

                    <span onClick={()=>navigate("/profile")}><HiOutlineUserCircle className='size-[25px]'/></span>
                </div>
            </div>
        </div>
    </div>
  )
}
