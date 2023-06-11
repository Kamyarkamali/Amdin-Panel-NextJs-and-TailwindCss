import BarCharts from '@/Components/BarChart/BarCharts'
import Header from '@/Components/Header/Header'
import RecentOrders from '@/Components/RecentOrders/RecentOrders'
import TopCarts from '@/Components/TopCarts/TopCarts'
import React from 'react'

function index() {
  return (
    <main className='bg-gray-100 min-h-screen'>
     <Header/>
     <TopCarts/>
     <div className='p-4 grid md:grid-cols-3 grid-cols-1 gap-4'>
     <BarCharts/>
     <RecentOrders/>
     </div>
    </main>
  )
}

export default index