import React, { useEffect, useRef, useState } from "react";
import "../styles/Profile.css";
import { useGetOneUserMutation } from "../features/usersAPI";
import { useEditCityMutation } from "../features/citiesApi";
import Alert from "../components/Alert/Alert";

export default function Profile() {
    let [edit, setEdit] = useState(false);

    let id = localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user")).id
        : "";
    let [getOneUser, { data: myUser }] = useGetOneUserMutation();
    let [editUserRedux, { data: userResponse, error }] = useEditCityMutation();

    let msg = userResponse?.message ? userResponse.message : "";

    let theUser = myUser?.response;
    let [user, setUser] = useState();
    let nameRef = useRef();
    let lastNameRef = useRef();
    let countryRef = useRef();
    let mailRef = useRef();
    let photoRef = useRef();

    useEffect(() => {
        getOneUser(id);
    }, [id]);

    useEffect(() => {
        setUser(theUser);
    }, [myUser]);

    function editUser() {
        setEdit(true);
    }
    function cancelEdit() {
        setEdit(false);
    }

    let form = [
        {
        Name: "Name",
        Label: "Name",
        Placeholder: `${user?.name}`,
        type: "text",
        value: nameRef,
        },
        {
        Name: "Last Name",
        Label: "Last Name",
        Placeholder: `${user?.lastName}`,
        type: "text",
        value: lastNameRef,
        },
        {
        Name: "Country",
        Label: "Country",
        Placeholder: `${user?.country}`,
        type: "text",
        value: countryRef,
        },
        {
        Name: "mail",
        Label: "mail",
        Placeholder: `${user?.mail}`,
        type: "text",
        value: mailRef,
        },
        {
        Name: "Photo",
        Label: "Photo",
        Placeholder: "Photo",
        type: "text",
        value: photoRef,
        },
    ];

    function editUserButton(e) {
        e.preventDefault();
        let dataUser = {
        name: nameRef.current.value !== "" ? nameRef.current.value : user.name,
        lastName:
            lastNameRef.current.value !== ""
            ? lastNameRef.current.value
            : user.lastName,
        mail: mailRef.current.value !== "" ? mailRef.current.value : user.mail,
        country:
            countryRef.current.value !== ""
            ? countryRef.current.value
            : user.country,
        photo:
            photoRef.current.value !== "" ? photoRef.current.value : user.photo,
        };
        console.log(dataUser);
        editUserRedux({ dataUser, id });
    }

    return edit ? (
        <div className="card">
        <div className="card-img">
            <img
            className="Itinerary-photo"
            src={user?.photo}
            alt={user?.name}
            ></img>
        </div>
        <div className="card-info">
            <div className="item-card-info">
            <form onSubmit={editUserButton}>
                {form.map((e) => (
                <div className="item-card-info" key={e.Name}>
                    <p className="text-title">{e.Name}:</p>

                    <input
                    className="Input-input"
                    id={e.Name}
                    placeholder={e.Placeholder}
                    ref={e.value}
                    ></input>
                </div>
                ))}
                <Alert label={"Edit"} message={msg} />
                <button onClick={cancelEdit}> Cancel </button>
            </form>
            </div>
        </div>
        </div>
    ) : (
        <div className="card">
        <div className="card-img">
            <img
            className="Itinerary-photo"
            src={user?.photo}
            alt={user?.name}
            ></img>
        </div>
        <div className="card-info">
            <div className="item-card-info">
            <p className="text-title">Name: </p>
            <p className="text-body">{user?.name}</p>
            </div>
            <div className="item-card-info">
            <p className="text-title">Last name: </p>
            <p className="text-body">{user?.lastName}</p>
            </div>
            <div className="item-card-info">
            <p className="text-title">country</p>
            <p className="text-body">{user?.country}</p>
            </div>
            <div className="item-card-info">
            <p className="text-title">mail </p>
            <p className="text-body">{user?.mail}</p>
            </div>
            <div>
            <button onClick={editUser}> Edit </button>
            <button> Back </button>
            </div>
        </div>
        </div>
    );
}
