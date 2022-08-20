import Carousel from "./Carousel";

function EventsCarousel(){

    const items = [
        { url: "/logo192.png", title: "Ferias"},
        { url: "/logo192.png", title: "Museos"},
        { url: "/logo192.png", title: "Disfraces"},
        { url: "/logo192.png", title: "Cine"},
        { url: "/logo192.png", title: "Ferias"},
        { url: "/logo192.png", title: "Museos"},
        { url: "/logo192.png", title: "Disfraces"},
        { url: "/logo192.png", title: "Cine"},
        { url: "/logo192.png", title: "Ferias"},
        { url: "/logo192.png", title: "Museos"},
        { url: "/logo192.png", title: "Disfraces"},
        { url: "/logo192.png", title: "Cine"},
    ]

    return(
        <Carousel data={items} range={4} />
    )


}

export default EventsCarousel