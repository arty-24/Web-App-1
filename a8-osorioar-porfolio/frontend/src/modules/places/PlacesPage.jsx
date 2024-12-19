import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import PlacesList from './PlacesList';
import { Link } from 'react-router-dom';
import { MdAddLocationAlt } from "react-icons/md";


function PlacesPage({setPlace}){
    // use the navigate for redirection
    const redirect = useNavigate();
    // use state to bring in the data
    const [places, setPlaces] = useState([]);

    const loadPlaces = async () => {
        const response = await fetch('/places');
        const places = await response.json();
        setPlaces(places);
    }
    
    const onEditPlace = async place => {
        setPlace(place);
        redirect("/update");
    }

    const onDeletePlace = async _id => {
        const response = await fetch(`/places/${_id}`, { method: 'DELETE' });
          if (response.status === 200) {
             const getResponse = await fetch('/places');
             const places = await getResponse.json();
             setPlaces(places);
        } else {
             console.error(`helpful deletion message = ${_id}, status code = 
             ${response.status}`)
          }
    }
    
    useEffect(() => {
        loadPlaces();
     }, []);

     return (
        <>
            <h2>List of Destinations</h2>
            <article>
                <p>Click on the icon below to enter all travel locations you've been to
                    in the last 15 years including the date and the
                    number of days spent.</p>

                <Link to="/create">
                    <span className="add-icon">
                        <MdAddLocationAlt />
                    </span>
                </Link>

                <PlacesList
                    places={places}
                    onEdit={onEditPlace}
                    onDelete={onDeletePlace}
                />
            </article>

        </>
     );

}

export default PlacesPage;