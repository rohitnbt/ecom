import React from 'react'
import { useFetch } from '../../hooks/useFetch'

export const Profile = () => {
    const {data, loading} = useFetch("/users/1");
  return (
    <div className='Profile'>
        <div className="container mx-auto my-10 px-5">
            <div className='border rounded-3xl p-5 max-w-[500px] m-auto'>
                <h1 className='mb-5 text-3xl text-center font-bold'>Profile</h1>
                <div className='flex gap-4 items-center col-span-4'>
                    <label htmlFor="fname" className='font-bold w-1/2 md:w-1/3 ms-2'>First Name :</label>
                    <input type="text" value={data?.name.firstname} readOnly className='outline-none px-2 py-1 rounded-lg w-1/2 md:w-2/3' />
                </div>
                <div className='flex gap-4 items-center col-span-4'>
                    <label htmlFor="lname" className='font-bold w-1/2 md:w-1/3 ms-2'>Last Name :</label>
                    <input type="text" value={data?.name.lastname} readOnly className='outline-none px-2 py-1 rounded-lg w-1/2 md:w-2/3' />
                </div>
                <div className='flex gap-4 items-center col-span-4'>
                    <label htmlFor="name" className='font-bold w-1/2 md:w-1/3 ms-2'>Phone :</label>
                    <input type="text" value={data?.phone} readOnly className='outline-none px-2 py-1 rounded-lg w-1/2 md:w-2/3' />
                </div>
                <div className='flex gap-4 items-center col-span-4'>
                    <label htmlFor="name" className='font-bold w-1/2 md:w-1/3 ms-2'>Email :</label>
                    <input type="email" value={data?.email} readOnly className='outline-none px-2 py-1 rounded-lg w-1/2 md:w-2/3' />
                </div>
                <div className='grid grid-flow-row-dense grid-cols-1 grid-rows-1 sm:grid-cols-2 sm:grid-rows-2'>
                    <h2 className='font-bold my-5 text-3xl col-span-full text-center'>Address :</h2>
                    <div className='flex flex-col gap-2 items col-span-1'>
                        <label htmlFor="name" className='font-bold mx-2'>City :</label>
                        <input type="text" value={data?.address.city} readOnly className='outline-none px-2 py-1 rounded-lg' />
                    </div>
                    <div className='flex flex-col gap-2 items col-span-1'>
                        <label htmlFor="name" className='font-bold mx-2'>Street :</label>
                        <input type="text" value={data?.address.street} readOnly className='outline-none px-2 py-1 rounded-lg' />
                    </div>
                    <div className='flex flex-col gap-2 items col-span-1'>
                        <label htmlFor="name" className='font-bold mx-2'>Number :</label>
                        <input type="number" value={data?.address.number} readOnly className='outline-none px-2 py-1 rounded-lg' />
                    </div>
                    <div className='flex flex-col gap-2 items col-span-1'>
                        <label htmlFor="name" className='font-bold mx-2'>Zipcode :</label>
                        <input type="text" value={data?.address.zipcode} readOnly className='outline-none px-2 py-1 rounded-lg' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
