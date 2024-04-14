import React from 'react'
import { IoIosClose } from "react-icons/io";
import { useFetch } from '../../hooks/useFetch'
import { Quantity } from '../Quantity/Quantity';

export const CartItem = ({item}) => {
    const {data, loading} = useFetch(`/products/${item.productId}`)
  return (
    <tr>
      <td><IoIosClose /></td>
      <td><img src={data?.image} className='aspect-video w-full object-contain h-[200px]' alt="" /></td>
      <td>{data?.title}</td>
      <td><Quantity quantity={item.quantity} /></td>
      <td>{data?.price * item.quantity}</td>
    </tr>
  )
}
