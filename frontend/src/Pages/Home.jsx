import React, { useEffect, useState } from 'react'
import axios from "axios"
import Card from '../Components/Card'
import { useNavigate } from 'react-router-dom'
function Home() {
    const [data,setData] = useState(null)
    const navigate = useNavigate()
    useEffect(()=>{
        const retrieveData = async() => {
            try {
                const response = await axios.get("http://localhost:3000/api/users/getAllLostAndFound")
                console.log(response.data.data)
                setData(response.data.data)
            } catch (error) {
                console.error("error in retrieving data",error)
            }
        }
        retrieveData()
    },[])
    return (
        <div>
            {/* Search Bar */}
            <div className='flex flex-col gap-y-2 lg:flex-row max-w-3xl m-auto gap-x-2 '>
                <div className="relative lg:w-3/5">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="search" id="search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-700 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
                    {/* <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
                </div>
                <button className="lg:w-1/5 py-2 lg:py-0 bg-blue-500 text-white px-4 rounded-lg hover:bg-blue-600 focus:outline-none" onClick={()=>navigate("/lost")}>
                I Found Something
                </button>
                <button className="lg:w-1/5 py-2 lg:py-0 bg-red-500 text-white px-4 rounded-lg hover:bg-red-600 focus:outline-none" onClick={()=>navigate("/found")}>
                I Lost Something
                </button>

            </div>

            <div>
                {
                    data && 
                    [...data]
                    .reverse().map((prop)=>(
                        <Card key={prop.id} prop={prop}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Home
