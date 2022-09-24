import React from "react";
import Input from "../component/Input";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetAllCitiesQuery } from "../features/citiesApi";
import { UsenewItineraryMutation } from "../features/itinerariesAPI"

export default function AddItinerary() {
  const navigate = useNavigate();
  const nameRef = useRef();
  const priceRef = useRef();
  const durationRef = useRef();
  const tagsRef = useRef();
  const [id, setId] = useState();
  const { data: cities } = useGetAllCitiesQuery();
  const [NewItineraryRedux] = UsenewItineraryMutation()


  function getID(e) {
    setId(e.target.value);
  }

  const form = [
    {
      label: "Name",
      htmlFor: "Name",
      type: "text",
      value: "Enter a itinerary",
      valueRef: nameRef,
    },
    {
      label: "Price",
      htmlFor: "Price",
      type: "number",
      value: "Enter a Price",
      valueRef: priceRef,
    },
    {
      label: "Duration",
      htmlFor: "Duration",
      type: "number",
      value: "Enter a duration",
      valueRef: durationRef,
    },
    {
      label: "Tags",
      htmlFor: "Tags",
      type: "String",
      value: "add tags",
      valueRef: tagsRef,
    },
  ];

  function Create(e) {
    e.preventDefault();

    const dataItinerary = {
      name: nameRef.current.value,
      user: id, /// Modify user for get the user
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
            {cities?.map((city) => (
              <option className="Option-select" key={city._id} value={city._id}>
                {city.city}{" "}
              </option>
            ))}
          </select>
          {form.map((input) => (
            <Input
              label={input.label} four={input.htmlFor} type={input.type} key={input.label}
              valueRef={input.value}
            />
          ))}
          <button className="Submit-button" type="submit">
            Add Itinerary
          </button>
        </form>
        <button className="Submit-button" onClick={() => navigate(-1)}>
          Go back
        </button>
      </div>
    </>
  );
}
