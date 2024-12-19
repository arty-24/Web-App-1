import React, { useState } from 'react';

import { useNavigate } from "react-router-dom";

export const MovieEdit = ( { movieToEdit } ) => {
    const [title, setTitle] = useState(movieToEdit.title);
    const [year, setYear] = useState(movieToEdit.year);
    const [language, setLanguage] = useState(movieToEdit.language);
    
    const redirect = useNavigate();
    
    const editMovie = async () => {
        const response = await fetch(`/movies/${movieToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                title: title, 
                year: year, 
                language: language
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`helpful editing message`);
        } else {
            const errMessage = await response.json();
            alert(`helpful editing message ${response.status}. ${errMessage.Error}`);
        }
        redirect("/moviesPage");
    }

    return (
        <>
        <article>
            <h2>Edit a movie</h2>
            <p>Paragraph about this page.</p>
            <table id="movies">
                <caption>Edit this Movie:</caption>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Year</th>
                        <th>Language</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><label htmlFor="title">Movie title</label>
                            <input
                                type = "text"
                                placeholder="Title of the movie"
                                value = {title}
                                onChange = {e => setTitle(e.target.value)}
                                id="title" />
                        </td>

                        <td><label htmlFor="year">Year released</label>
                            <input
                                type = "number"
                                placeholder="Year of the movie"
                                value = {year}
                                onChange = {e => setYear(e.target.value)}
                                id="year" />
                        </td>
                        
                        <td><label htmlFor="language">Language</label>
                            <input
                                type = "text"
                                placeholder="Primary language of the movie"
                                value = {language}
                                onChange = {e => setLanguage(e.target.value)}
                                id="language" />
                        </td>

                        <td>
                            <label htmlFor="submit">Commit</label>
                                <button
                                    type ="submit"
                                    onClick={editMovie}
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
export default MovieEdit;