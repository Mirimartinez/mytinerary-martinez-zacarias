import React, {useEffect, useState} from 'react'
import '../styles/Itinerary.css'
import { useParams } from 'react-router-dom'
import {useLikeDislikeItinerariesMutation} from '../features/itinerariesAPI'

function LikeDislike(props){
    const params = useParams()
    let {id} = params
    const [like, setLike] = useState([])

    const [LikeDislike, {data: resLike, error}] = useLikeDislikeItinerariesMutation()

    function HandleLike(e){
        LikeDislike(id)
    }

    useEffect(() => {
        if(resLike){
            let newState = resLike.response
            setLike(newState)
        }
    }, [resLike])

    useEffect(() => {
        if(props.itinerary){
            setLike(props.itinerary.like)
        }
    }, [props.itinerary])
    return(
        <div className='LikeContainer'>
            <button onClick={HandleLike}className='LikeButton'>♥</button><p>{like.length}</p>
        </div>
    )
}

export default LikeDislike