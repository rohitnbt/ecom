import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { useParams } from 'react-router-dom';

export const Category = () => {
    const {category} = useParams();
    const {data, loading} = useFetch(`/products/category/${category}`);
  return (
    <div className='Category'>
        <div className="container mx-auto my-10 px-5">
        <h1 className='mb-10 text-3xl text-center font-bold capitalize'>{category}</h1>
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
