import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import MovieList from './MovieList';
import { Link } from 'react-router-dom';

function MoviesPage({setMovie}){
    // use the navigate for redirection
    const redirect = useNavigate();
    // use state to bring in the data
    const [movies, setMovies] = useState([]);

    // retrieves the entire list of movies
    const loadMovies = async () => {
        const response = await fetch('/movies');
        const movies = await response.json();
        setMovies(movies);
    }
    
    // updates a single movie
    const onEditMovie = async movie => {
        setMovie(movie);
        redirect("/update");
    }

    // Deletes a single movie
    const onDeleteMovie = async _id => {
        const response = await fetch(`/movies/${_id}`, { method: 'DELETE' });
          if (response.status === 200) {
             const getResponse = await fetch('/movies');
             const movies = await getResponse.json();
             setMovies(movies);
        } else {
             console.error(`helpful deletion message = ${_id}, status code = 
             ${response.status}`)
          }
    }
    
    // load all movies
    useEffect(() => {
        loadMovies();
     }, []);

     // display the movies
     return (
        <>
            <h2>List of Movies</h2>
            <article>
                <p>Paragraph about this page.</p>

                <Link to="/create">Add Movie</Link>

                <MovieList
                    movies={movies}
                    onEdit={onEditMovie}
                    onDelete={onDeleteMovie}
                />
            </article>

        </>
     );

}

export default MoviesPage;