import {Link as LinkRouter} from 'react-router-dom'

export default function CallToAction(props) {
    let linkTo = props.linkTo
    let buttonText = props.buttonText

  return (
    <LinkRouter className='Hero-button' to={linkTo} >{buttonText}</LinkRouter>
  )
}