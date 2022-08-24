import {Link as LinkRouter} from 'react-router-dom'

export default function CallToAction(props) {
    let linkTo = props.linkTo
    let buttonText = props.buttonText.toUpperCase()
    
  return (
    <LinkRouter to={linkTo} >{buttonText}</LinkRouter>
  )
}
