import Carousel from "./Carousel";

function EventsCarousel(){

    const items = [
        { url: "https://images.pexels.com/photos/2190283/pexels-photo-2190283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", title: "New York"},
        { url: "https://img.freepik.com/foto-gratis/flores-cerezo-primavera-pagoda-chureito-montana-fuji-al-atardecer-japon_335224-215.jpg?w=996&t=st=1661108709~exp=1661109309~hmac=2658b5c5a8992591a5e183f01a8590196c77bff9ccf4138f5181cc669f67a377", title: "Tokyo"},
        { url: "https://cdn.pixabay.com/photo/2019/01/24/09/38/madrid-3952068_960_720.jpg", title: "Madrid"},
        { url: "https://img.freepik.com/foto-gratis/big-ben-puente-westminster-al-atardecer-londres-reino-unido_268835-1395.jpg?w=996&t=st=1661108754~exp=1661109354~hmac=b83b586f1dc140ac5857820f60b7c1bf05e3ad8b4ef5cf15875190ed9610a604", title: "London"},
        { url: "https://cdn.pixabay.com/photo/2017/09/07/16/50/acropolis-2725918_960_720.jpg", title: "Athens"},
        { url: "https://cdn.pixabay.com/photo/2018/04/25/09/26/eiffel-tower-3349075_960_720.jpg", title: "Paris"},
        { url: "https://cdn.pixabay.com/photo/2014/05/26/09/58/sydney-opera-house-354375_960_720.jpg", title: "Sydney"},
        { url: "https://cdn.pixabay.com/photo/2018/03/19/14/55/pagoda-3240169_960_720.jpg", title: "Bali"},
        { url: "https://cdn.pixabay.com/photo/2017/06/24/00/54/milan-cathedral-2436458_960_720.jpg", title: "Milan"},
        { url: "https://images.pexels.com/photos/11013903/pexels-photo-11013903.jpeg", title: "Buenos Aires"},
        { url: "https://cdn.pixabay.com/photo/2020/09/16/04/02/skyline-5575251_960_720.jpg", title: "Dubai"},
        { url: "https://images.pexels.com/photos/2321188/pexels-photo-2321188.jpeg?", title: "Hong Kong"},
    ]

    return(
        <Carousel data={items} range={4} interval={4}  />
    )


}

export default EventsCarousel