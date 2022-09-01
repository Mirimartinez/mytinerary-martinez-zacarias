import '../styles/CityDetails.css'

function CityDetails(props){
    let city = props.city
    let country = props.country
    let photo = props.photo
    let population = props.population
    let fundation = props.fundation
    let description = props.description

    return(
        <div className='CityDetails-cont'>
            <h1 className='CityDetails-h1'>Tokyo</h1>
            <h3 className='CityDetails-h3'>Japan</h3>
            <img className='CityDetails-img' alt={city} src='https://img.freepik.com/foto-gratis/flores-cerezo-primavera-pagoda-chureito-montana-fuji-al-atardecer-japon_335224-215.jpg?w=996&t=st=1661108709~exp=1661109309~hmac=2658b5c5a8992591a5e183f01a8590196c77bff9ccf4138f5181cc669f67a377' />
            <div className='CityDetails-cont2'>
            <p className='CityDetails-text'>The current population of Tokyo in 2022 is 13988129.</p>
            <p className='CityDetails-text'>It was founded in 1457.</p>
            <p className='CityDetails-text'>Tokyo (/ˈtoʊkioʊ/;[7]Japanese: 東京, romanized: Tōkyō, lit. 'Eastern Capital', [toːkʲoː] (listen)), formerly Edo, historically Tokio, and officially the Tokyo Metropolis (Japanese: 東京都, romanized: Tōkyō-to), is the capital[8] and largest city of Japan. Its metropolitan area is the most populous in the world,[9] with an estimated 37.468 million residents in 2018. Its metropolitan area is the largest in size and the most populous, with an area of 13,452 square kilometers and its city proper has a population of 13.99 million people.[10] Located at the head of Tokyo Bay, the prefecture forms part of the Kantō region on the central Pacific coast of Japan's main island of Honshu. Tokyo is the political and economic center of the country, as well as the seat of the Emperor of Japan and the national government.
Originally a fishing village named Edo, the city became a prominent political center in 1603, when it became the seat of the Tokugawa shogunate. By the mid-18th century, Edo was one of the most populous cities in the world at over one million. Following the end of the shogunate in 1868, the imperial capital in Kyoto was moved to the city, which was renamed Tokyo (literally "eastern capital"). Tokyo was devastated by the 1923 Great Kantō earthquake, and again by Allied bombing raids during World War II. Beginning in the 1950s, the city underwent rapid reconstruction and expansion, going on to lead Japan's post-war economic recovery. Since 1943, the Tokyo Metropolitan Government has administered the prefecture's 23 special wards (formerly Tokyo City), various bed towns and suburbs in the western area, and two outlying island chains.</p>
            </div>
        </div>
      /*  <div className='CityDetails-cont'>
            <h1 className='CityDetails-h1'>{city}</h1>
            <img className='CityDetails-img' alt={city} src={photo} />
            <h3 className='CityDetails-h3'>{country}</h3>
            <p className='CityDetails-text'>The current population of {city} in 2022 is {population}.</p>
            <p className='CityDetails-text'>It was founded in {fundation}.</p>
            <p className='CityDetails-text'>{description}.</p>

         </div>*/
    )
}
export default CityDetails