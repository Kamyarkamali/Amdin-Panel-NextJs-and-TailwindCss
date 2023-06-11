import React from 'react'
import { data } from '../data/data';
import {  FaShoppingBag } from "react-icons/fa"


function RecentOrders() {
  return (
    <div className='w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg'>
        <h1>Recenr Orders</h1>
        <ul>
            {data.map((oder,id)=>(
                <li key={id} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer'>
                    <div>
                        <FaShoppingBag/>
                    </div>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default RecentOrders