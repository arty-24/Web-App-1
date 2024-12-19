import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const PlacesAdd = () => {
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');
    const [daysSpent, setDaysSpent] = useState('0');
    
    const redirect = useNavigate();

    const addPlace = async () => {
        const newPlace = { location, date, daysSpent };
        const response = await fetch('/places', {
                method: 'POST',
                body: JSON.stringify(newPlace),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if(response.status === 201){
                alert(`Destination added successfully`);
            } else {
                alert(`Failed to add destination = ${response.status}`);
            }
            redirect("/placesPage");
    };

    return (
        <>
            <h2>Add a Place</h2>
            <article>
            <p>Paragraph about this page.</p>
            
            <table id="places">
                <caption>Which destination are you adding?</caption>
                <thead>
                    <tr>
                        <th>Location</th>
                        <th>Date</th>
                        <th>Days Spent</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td> 
                            <label htmlFor="location"> Location of destination</label>
                            <input 
                                type="text" 
                                placeholder="Name of destination"
                                value={location}
                                onChange={e => setLocation(e.target.value)} 
                                id="location" />
                        </td>
           
                        <td> 
                            <label htmlFor="date">Date Traveled</label>
                            <input 
                                type="date" 
                                placeholder="Date of travel"
                                value={date}
                                onChange={e => setDate(e.target.value)} 
                                id="date" />
                        </td>

                        <td> 
                            <label htmlFor="daysSpent">Days Spent at Destination</label>
                            <input 
                                type="integer" 
                                placeholder="Number of days spent at destination"
                                value={daysSpent}
                                onChange={e => setDaysSpent(e.target.value)} 
                                id="daysSpent" />
                        </td>

                        <td>
                            <label htmlFor="submit">Commit</label>
                            <button 
                                type="submit" 
                                onClick={addPlace}
                                id="submit"
                            >Add</button>
                        </td>
                        </tr>
                    </tbody>
                </table>
            </article>

            </>
    );
    }

export default PlacesAdd;