import React, { useState } from 'react';
import ItemInfo from '../Components/ItemInfo';
import PersonalInfo from '../Components/PersonalInfo';
import axios from "axios"
import {useNavigate} from "react-router-dom"

function Lost() {
    const [curPage, setCurPage] = useState(1);
    const [user_name, setUser_name] = useState("");
    const [user_email, setUser_email] = useState("");
    const [user_phone, setUser_phone] = useState("");
    const [item_name, setItem_name] = useState("");
    const [item_category, setItem_category] = useState("");
    const [item_description, setItem_description] = useState("");
    const [location_lost, setLocation_lost] = useState("");
    const [date_lost, setDate_lost] = useState("");
    const [status, setStatus] = useState("lost");
    const navigate = useNavigate()

    const handleNext = async (e) => {
        e.preventDefault()
        if(curPage===2){
            try {
                const response = await axios.post(
                    "http://localhost:3000/api/users/add",
                    {
                        user_name,
                        user_email,
                        user_phone,
                        item_name,
                        item_category,
                        item_description,
                        location_lost,
                        date_lost,
                        status,
                    }
                )  
                navigate("/")
            } catch (error) {
                console.error("Error in posting data",error)
            }
            return
        }
        setCurPage(curPage + 1); 
    }

    const handlePrev = async () => {
        setCurPage(curPage-1)
    }

    return (
        <div>
            <h1 className="text-3xl font-bold text-center text-zinc-600 mb-6">
            Don't Worry, We are here to help
            </h1>

            <div className=" w-full xl:w-3/5 m-auto p-6 bg-white shadow-lg rounded-lg">
                
                {curPage === 1 && (
                    <ItemInfo
                        item_name={item_name}
                        setItem_name={setItem_name}
                        item_category={item_category}
                        setItem_category={setItem_category}
                        item_description={item_description}
                        setItem_description={setItem_description}
                        location_lost={location_lost}
                        setLocation_lost={setLocation_lost}
                        date_lost={date_lost}
                        setDate_lost={setDate_lost}
                        status={status}
                        setStatus={setStatus}
                        handleNext={handleNext} 
                        handlePrev={handlePrev}
                    />
                )}
                
                {curPage === 2 && (
                    <PersonalInfo
                        user_name={user_name}
                        setUser_name={setUser_name}
                        user_email={user_email}
                        setUser_email={setUser_email}
                        user_phone={user_phone}
                        setUser_phone={setUser_phone}
                        handleNext={handleNext} 
                        handlePrev={handlePrev}
                    />
                )}
            </div>
        </div>
    );
}

export default Lost;
