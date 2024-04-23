import React from 'react'
import { ProductCard } from '../../components/ProductCard/ProductCard'
import { useFetch } from '../../hooks/useFetch'
import { Filter } from '../../components/Filter/Filter'

export const Home = () => {
    const {data,loading} = useFetch("/products");
    
  return (
    <div className='Home'>
        <div className="container mx-auto my-10 px-5">
        <h1 className='mb-10 text-3xl text-center font-bold'>All Products</h1>
        <Filter />
            <div className='xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid grid-cols-1 gap-4'>
                {
                    data?.map((item) => (
                        <ProductCard key={item.id} item={item}/>
                    ))
                }
            </div>
        </div>
    </div>
  )
}
