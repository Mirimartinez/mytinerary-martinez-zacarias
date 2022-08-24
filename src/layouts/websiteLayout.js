import Header from '../components/Header' 
import Footer from '../components/Footer'

function websiteLayout(props) {
    return (
        <div>
            <Header />
            { props.children }
            <Footer />
        </div>
    )
}

export default websiteLayout