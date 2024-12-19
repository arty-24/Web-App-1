import React, { useState } from 'react';

import { useNavigate } from "react-router-dom";

export const PlacesEdit = ( { placeToEdit } ) => {
    const [location, setLocation] = useState(placeToEdit.location);
    const [date, setDate] = useState(placeToEdit.date);
    const [daysSpent, setDaysSpent] = useState(placeToEdit.daysSpent);
    
    const redirect = useNavigate();
    
    const editDestination = async () => {
        const response = await fetch(`/places/${placeToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                location: location, 
                date: date, 
                daysSpent: daysSpent
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`Destination updated successfully`);
        } else {
            const errMessage = await response.json();
            alert(`Failed to edit destination ${response.status}. ${errMessage.Error}`);
        }
        redirect("/placesPage");
    }

    return (
        <>
        <article>
            <h2>Edit a Destination</h2>
            <p>Paragraph about this page.</p>
            <table id="places">
                <caption>Edit this Destination:</caption>
                <thead>
                    <tr>
                        <th>Location</th>
                        <th>Date</th>
                        <th>Days Spent</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><label htmlFor="location">Destination Location</label>
                            <input
                                type = "text"
                                placeholder="Location of Destination"
                                value = {location}
                                onChange = {e => setLocation(e.target.value)}
                                id="location" />
                        </td>

                        <td><label htmlFor="date">Date traveled</label>
                            <input
                                type = "date"
                                placeholder="Date of travel"
                                value = {date}
                                onChange = {e => setDate(e.target.value)}
                                id="date" />
                        </td>
                        
                        <td><label htmlFor="daysSpent">Number of days spent at destination</label>
                            <input
                                type = "daysSpent"
                                placeholder="Days Spent"
                                value = {daysSpent}
                                onChange = {e => setDaysSpent(e.target.value)}
                                id="daysSpent" />
                        </td>

                        <td>
                            <label htmlFor="submit">Commit</label>
                                <button
                                    type ="submit"
                                    onClick={editDestination}
                                    id="submit"
                                >Edit</button>
                        </td>
                        </tr>
                    </tbody>
                </table>
                </article>
                </>
    );
}
export default PlacesEdit;