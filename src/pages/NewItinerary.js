import React from "react";
import Input from "../component/Input";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetAllCitiesQuery } from "../features/citiesApi";
import { useNewItineraryMutation } from "../features/itinerariesAPI"

export default function AddItinerary() {
  const navigate = useNavigate();



  const nameRef = useRef();
  const priceRef = useRef();
  const durationRef = useRef();
  const tagsRef = useRef();


  const [id, setId] = useState();
  const { data: cities } = useGetAllCitiesQuery("");
  const [NewItineraryRedux] = useNewItineraryMutation()

  let allCities = cities?.response
  let user = JSON.parse(localStorage.getItem("user")).id
  function getID(e) {
    setId(e.target.value);
  }
  

  const form = [
    {
      label: "Name",
      htmlFor: "Name",
      type: "text",
      placeHolder: "Enter a itinerary",
      value: nameRef,
    },
    {
      label: "Price",
      htmlFor: "Price",
      type: "number",
      placeHolder: "Enter a Price",
      value: priceRef,
    },
    {
      label: "Duration",
      htmlFor: "Duration",
      type: "number",
      placeHolder: "Enter a duration",
      value: durationRef,
    },
    {
      label: "Tags",
      htmlFor: "Tags",
      type: "String",
      placeHolder: "add tags",
      value: tagsRef,
    },
  ];

  function Create(e) {
    e.preventDefault();
     const dataItinerary = {
      name: nameRef.current.value,
      user: user,
      city: id,
      price: priceRef.current.value,
      tags: tagsRef.current.value,
      duration: durationRef.current.value,
    };
    NewItineraryRedux(dataItinerary);
  }
  
  return (
    <>
      <div className="NewCity-container">
        <h1>New Itinerary</h1>
        <form className="NewCity-form" onSubmit={Create}>
          <select className="EditCity-select" onChange={getID}>
            <option hidden>Select city</option>
            {allCities?.map((city) => (
              <option className="Option-select" key={city._id} value={city._id}>
                {city.city}{" "}
              </option>
            ))}
          </select>
          {form?.map((input) => (
            <Input label={input.label} four={input.htmlFor} type={input.type} key={input.label} value={input.value} />
          ))}
          <button className="Submit-button" type="submit"> Add Itinerary </button>
        </form>
        <button className="Submit-button" onClick={() => navigate(-1)}>
          Go back
        </button>
      </div>
    </>
  );
}
