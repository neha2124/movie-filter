// import logo from './logo.svg';
import { useState } from 'react';
import './style.css';
import Navbar from './navbar';
import movies from './movieApi';
import { genres } from './movieApi';
import Movie from './movie'


function App() {
  const [movie, setMovie] = useState(movies)
  const [genre] = useState(genres)
  const filter = (index) =>{
    let data =movies.filter((item) =>{
      return item.genre === index
    })
    // console.log(data)
    setMovie(data)
  }
  
  return (
  <div className='container'>
      <Navbar data={genre} filter={filter}/>
       <Movie data={movie}/>
    </div>
);
}

export default App;
