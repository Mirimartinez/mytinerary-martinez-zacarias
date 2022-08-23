import React from 'react'
import '../../styles/Arrow.css'


 function Arrow(props) {

    if(!props.icon){
        throw new Error ("se requiere un string para la propiedad icon")
    }
    if(!props.click){
        throw new Error ("se requiere una fincion para la propiedad click")
    }


  return (
    <button className='Arrow-button' onClick={props.click} >
        {props.icon}
    </button>
  )
}

export default  Arrow



