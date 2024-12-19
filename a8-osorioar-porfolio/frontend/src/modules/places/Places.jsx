import React from 'react';

import {MdDeleteForever, MdEdit} from 'react-icons/md';

function Places( { place, onEdit, onDelete } ) {
    const formattedDate = new Date(place.date).toLocaleDateString('en-US',{
        timeZone: 'UTC',
    });
    return (
        <tr>
            <td>{place.location}</td>
            <td>{formattedDate}</td>
            <td>{place.daysSpent}</td>
            <td><MdDeleteForever onClick={() => onDelete(place._id)} /></td>
           <td><MdEdit onClick={() => onEdit(place)} /></td>
        </tr>
    );
}

export default Places;