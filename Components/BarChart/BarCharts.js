import React, { useEffect, useState } from 'react'
import {Chart as ChartJS,CategoryScale, Tooltip, Legend,LinearScale,BarElement ,Title } from "chart.js";
import { Bar } from 'react-chartjs-2';

ChartJS.register(
     CategoryScale,
     LinearScale,
     BarElement,
     Title,
     Tooltip,
     Legend
)


function BarCharts() {
    const [chartsData,setChartsData]=useState({
        datasets:[],
    })
    const [chartOptions,setChartOptions]=useState({});

    useEffect(()=>{
        setChartsData({
            labels:["Mon","Tuse","Wed","Thurs","Fri","Sat","Sun"],
            datasets:[
                {
                    label:"Sales $",
                    data:[18127,22201,19490,17938,24182,17842,22475],
                    borderColor:"rgb(53,162,235)",
                    backgroundColor:"rbg(53,162,235,0.4",
                },
            ]
        })

        setChartOptions({
            Plugins:{
                Legend:{

                    position:"top"
                },
                title:{
                    display:true,
                    text:"Dily Revenue"
                }
            },
            maintainAspectRatio:false,
            responsive:true
            })

    },[])

  return (
    <>
    <div className='w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white'>
        <Bar data={chartsData} options={chartOptions}/>
    </div>
    </>
  )
}

export default BarCharts