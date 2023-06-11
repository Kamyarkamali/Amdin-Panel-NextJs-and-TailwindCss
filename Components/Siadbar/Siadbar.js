import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

//Icons
import {RxSketchLogo,RxDashboard,RxPerson} from "react-icons/rx";
import {AiOutlineShoppingCart,AiTwotoneTool} from "react-icons/ai";

function Siadbar({children}) {
  return (
    <div className='flex'>
        <div className='fixed w-20 bg-white h-screen p-4 border-r-[1px] flex-col justify-between'>     
        <div className='flex flex-col items-center'>
        <Link href={"/"}>
            <div className='bg-purple-700 text-white p-3 rounded-lg inline-block'>
                <RxSketchLogo size={20}/>
            </div>
        </Link>
        <span className='border-gray-200 border-b-[1px] w-full p-2'></span>
        <Link href={"/"}>
            <div className='bg-gray-300 my-4 hover:bg-gray-200 duration-300 p-3 rounded-lg inline-block'>
                <RxDashboard size={20}/>
            </div>
        </Link>

        <Link href={"/customers"}>
            <div className='bg-gray-100 my-4 hover:bg-gray-200 duration-300  p-3 rounded-lg inline-block'>
                <RxPerson size={20}/>
            </div>
        </Link>

        <Link href={"/orders"}>
            <div className='bg-gray-100 my-4 hover:bg-gray-200 duration-300 p-3 rounded-lg inline-block'>
                <AiOutlineShoppingCart size={20}/>
            </div>
        </Link>

        <Link href={"/"}>
            <div className='bg-gray-100 my-4 hover:bg-gray-200 duration-300 p-3 rounded-lg inline-block'>
                <AiTwotoneTool size={20}/>
            </div>
        </Link>
        </div>
        </div>


       <main className='ml-20 w-full'>{children}</main> 
    </div>
  )
}

export default Siadbar