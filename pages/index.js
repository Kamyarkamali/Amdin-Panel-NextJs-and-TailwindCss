import Header from '@/Components/Header/Header'
import TopCarts from '@/Components/TopCarts/TopCarts'
import React from 'react'

function index() {
  return (
    <main className='bg-gray-100 min-h-screen'>
     <Header/>
     <TopCarts/>
    </main>
  )
}

export default index