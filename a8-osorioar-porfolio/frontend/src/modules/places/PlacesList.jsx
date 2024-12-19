import React from 'react';
import Places from './Places';


function PlacesList({places, onDelete, onEdit}) {
    return (
        <table id="places">
            <caption>Add and Edit Places</caption>
            <thead>
                <tr>
                    <th>Destination</th>
                    <th>Date</th>
                    <th>Days Spent</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {places.map((place, i) => 
                    <Places
                        place={place} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit}

                    />)}

            </tbody>
        </table>
    );
}

export default PlacesList;