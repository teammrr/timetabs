import React, { useEffect, useState } from "react"

export default function Schedule(props){
    var proxy = 'https://cors-anywhere.herokuapp.com/'
    const [sched, getSched] = useState([])
    
    const fetchUserData = async () => {
        const api = proxy + "https://school-management-api.xeersoft.co.th/api/timetable/class-year/"
        const api2 = "https://school-management-api.xeersoft.co.th/api/timetable/class-year/"
        const response = await fetch(api2 + props.name)
        const data = await response.json()

        getSched(data)
    }
    
    useEffect(() => {
        fetchUserData()
    }, [])

    const FormatTime = (time) => {
        const hours = time.split(":")[0]
        return hours
    }

    // const today = "Today";
    // const day = props.day
    // const filteredSched = sched.filter((item) => item.tt_header_date.includes(today));

    // const hours = sched.tt_time_zone.split(":")[0];
    
    return (
        <div className="flex items-center justify-center">
        {sched.length > 0 && (
            <div className=" gap-5 grid grid-cols-1 lg:grid-cols-4 lg:gap-10 mx-auto">
            {sched.map(sched =>(
                <div className="w-full rounded-lg overflow-hidden transition duration-300 ease-in-out hover:scale-110 ">
                <div className=" max-w-sm flex flex-col rounded-lg items-stretch bg-[#D0D7DC] m-0.5 ">
                    <div className="px-6 py-4 text-justify ">
                        <div key={sched.tt_header_date} className="font-bold text-[#032654] text-xl mb-2">{sched.tt_header_date}</div>
                        <div key={sched.tt_time_zone} className="font-bold text-[#021B3B] text-lg mb-2">{FormatTime(sched.tt_time_zone)}:00 - {sched.tt_time_end}</div>
                        <p key={sched.tt_tile} className="text-[#39637f] text-justify">{sched.tt_title}</p>
                    </div>
                    <div className="px-6 pb-2 text-justify">
                        <span key={sched.room} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-[#032654] mr-2 mb-2">{sched.room || "Not assigned"}</span>
                        <span key={sched.fl_code} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-[#032654] mr-2 mb-2">{sched.fl_code || "Not assigned"}</span>
                    </div>
                </div>
            </div>
        ))}
                </div>
                )}
                </div>
                );
            }
