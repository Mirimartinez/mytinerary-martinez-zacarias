import { useState } from 'react'
import { useGetTinerariesQuery } from "../features/itineraryAPI";
import ActivityItinerary from "./ActivityItinerary";

export default function MyItinerary() {
    const [userTag, setUserTag] = useState({
        id: "",
        value: ""
    })
    
    const users = [
        { id: "6320d762ae321d25253ad1bc", name: "Dwayne"},
        { id: "6320d7a7ae321d25253ad1bf", name: "Anne"},
        { id: "6320d7c6ae321d25253ad1c2", name: "Steven"},
    ]

    const handleSelect = (e) => {
        e.preventDefault();
        setUserTag({
        value: e.target.value,
        id: e.target[e.target.selectedIndex].id,
        });
    };
    
        return (
        <>
            <div>

            </div>
        </>
    )
}
