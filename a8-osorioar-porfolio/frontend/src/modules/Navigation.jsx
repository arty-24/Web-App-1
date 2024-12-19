import {Link} from 'react-router-dom';

function Navigation(){
    return (
        <>
        <nav> 
            <Link to="/">Home</Link>
            <Link to="/topics">Topics</Link>
            {/* <Link to="/moviesPage">Movies</Link> */}
            <Link to="/order">Order</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/staff">Staff</Link>
            <Link to="/place">Places</Link>
            <Link to="/contact">Contact Us</Link>

        </nav>
        </>
    );
}

export default Navigation