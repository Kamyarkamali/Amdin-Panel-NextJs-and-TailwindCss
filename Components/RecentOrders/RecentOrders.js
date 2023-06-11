import React from 'react'
import { data } from '../data/data';
import {  FaShoppingBag } from "react-icons/fa"


function RecentOrders() {
  return (
    <div className='w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg'>
        <h1>Recenr Orders</h1>
        <ul>
            {data.map((order,id)=>(
                <li key={id} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer'>
                    <div className='bg-purple-100 rounded-lg p-3'>
                        <FaShoppingBag className='text-purple-700' size={20}/>
                    </div>
                    <div className='pl-4'>
                        <p className='text-gray-800 font-bold'>${order.total}</p>
                        <p className='text-gray-400 text-sm'>{order.name.frist}</p>
                    </div>
                    <p className='lg:flex md:hidden text-gray-500 absolute right-6'>{order.date}</p>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default RecentOrders