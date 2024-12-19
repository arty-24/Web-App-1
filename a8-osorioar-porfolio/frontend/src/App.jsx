import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import Navigation from './modules/Navigation.jsx';
import Slogan from './modules/Slogan.jsx';
import HomePage from './modules/HomePage.jsx';
import ContactPage from './modules/ContactPage.jsx';
import GalleryPage from './modules/GalleryPage.jsx';
import StaffPage from './modules/StaffPage.jsx';
import TopicsPage from './modules/TopicsPage.jsx';
import OrderPage from './modules/OrderPage.jsx';
import { FaCat } from "react-icons/fa";
import products from './data/products.js';
// import MoviesPage from './modules/movies/MoviesPage.jsx';
// import MovieAdd from './modules/movies/MovieAdd.jsx'
// import MovieEdit from './modules/movies/MovieEdit.jsx'
import PlacesPage from './modules/places/PlacesPage.jsx';
import PlacesAdd from './modules/places/PlacesAdd.jsx';
import PlacesEdit from './modules/places/PlacesEdit.jsx';

/*import MoviesPage from './modules/movies/MoviesPage.jsx'*/

function App() {
  // const [count, setCount] = useState(0)
  // const [movie, setMovie] = useState([]);
  const [place, setPlace] = useState([]);


  return (
    <>
    <header>
      <h1>Arturo <FaCat /> Osorio </h1>
      <Slogan/>
    </header>
    
    <Router>
      <Navigation />
      <main>
        <section>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/contact" element={<ContactPage />}></Route>
                <Route path="/gallery" element={<GalleryPage />}></Route>
                <Route path="/order" element={<OrderPage products={products} />}></Route>
                <Route path="/staff" element={<StaffPage />}></Route>
                <Route path="/topics" element={<TopicsPage />}></Route>
                {/* <Route path="/moviesPage" element={<MoviesPage setMovie={setMovie}/>}></Route>
                <Route path="/create" element={<MovieAdd />} /> 
                <Route path="/update" element={<MovieEdit movieToEdit={movie}/>} />   */}
                <Route path="/place" element={<PlacesPage setPlace={setPlace}/>}/>
                <Route path="/create" element={<PlacesAdd />} /> 
                <Route path="/update" element={<PlacesEdit placeToEdit={place}/>} />   




                
            </Routes>
        </section>
      </main>
    </Router>
    
    <footer>
      <p>&copy; {new Date().getFullYear()} Arturo Osorio</p>
    </footer>
    </>
  )
}

export default App
