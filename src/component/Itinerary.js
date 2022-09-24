import Comment from "./Comment";
import Activities from "./Activities";
import "../styles/Itinerary.css";
import { useState } from "react";
import { useGetUserItinerariesQuery, useDeleteItineraryMutation} from "../features/itinerariesAPI";
import { Link as LinkRouter } from "react-router-dom";
import LikeDislike from "./LikeDislike";
import PatchItinerary from './PatchItinerary'

function Itinerary() {
  let [deleteOneItinerary] = useDeleteItineraryMutation();

  let params = "";
  if (JSON.parse(localStorage.getItem("user"))) {
    params = JSON.parse(localStorage.getItem("user"));
  }
  const { id } = params;

  let { data: itinerary } = useGetUserItinerariesQuery(id);

  let allItineraries = itinerary?.response;
  console.log(allItineraries);

  const [open, setOpen] = useState(false);

  const handleOpenMenu = () => {
    if (open === true) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  function deleteItinerary(e) {
      if (JSON.parse(localStorage.getItem("user")) !== "") {
      e.preventDefault();
      let idDelete = e.target.value;  
      if (true) {
        //// Aqui agregar botón de "SI o NO"
        deleteOneItinerary(idDelete);
      }
    }
  }

  const itineraryCard = (item) => {
    return (
      <div className="ItineraryCard ItineraryCard-subtitle" key={item._id}>
        <div className="CreatorItinerary">
          <div className="Itinerary-user">
            <img src={item.user.photo} alt="img" className="CreatorImg"></img>
            <p>Itinerary: {item.name}</p>
            <p>
              Created by: {item.user.name} {item.user.lastName}
            </p>
          </div>
          <div className="Itinerary-itinerary">
            <p>Price:{"💵 ".repeat(item.price)}</p> {/*💰💸💴💶💷🪙*/}
            <LikeDislike />
            {/* <p>Likes: {item.likes}♥</p> */}
            <p>Tags: {item.tags.map((tag) => "#" + tag + " ")}</p>
            <p>Duration: {item.duration}hs</p>
          </div>
          <div>
            <button onClick={deleteItinerary} value={item._id}> Delete </button>
            <LinkRouter to={`/mytineraries/patchitinerary`}><button value={item._id}> Edit </button></LinkRouter>
          </div>
        </div>
        <div>
          <div className="Itinerary-activities">
            <Activities itinerary={item._id} />
          </div>
          {open ? (
            <div className="Itinerary-comment">
              <Comment />
            </div>
          ) : null}
        </div>
        <button className="Itinerary-button" onClick={handleOpenMenu}>
          Comments
        </button>
      </div>
    );
  };
  return (
    <>
      <LinkRouter to="/NewItinerary"> Add new Itinerary </LinkRouter>
      {allItineraries?.map(itineraryCard)}
    </>
  );
}
export default Itinerary;
