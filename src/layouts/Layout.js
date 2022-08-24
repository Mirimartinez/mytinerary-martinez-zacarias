import Footer from '../component/Footer'
import Header from '../component/Header1'

function FooterLayout(props){
    return(
        <div>
            <Header/>
            { props.children }
            <Footer/>
        </div>
    )
}

export default FooterLayout