import { useEffect, useState } from 'react';
import './App.css';
import search from './search.svg'
import Moviecard from './Moviecard';

// bdb8b6e9


const API_URL = 'http://www.omdbapi.com?apikey=bdb8b6e9';

const movie1={
  
  
  
    "Title": "Spiderman in Cannes",
    "Year": "2016",
    "imdbID": "tt5978586",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZDlmMGQwYmItNTNmOS00OTNkLTkxNTYtNDM3ZWVlMWUyZDIzXkEyXkFqcGdeQXVyMTA5Mzk5Mw@@._V1_SX300.jpg"



}

const App =() => {
  const [movies, setMovies] = useState([]);
  const [searchTerm,setSearchTerm] =useState('');


  const searchMovies = async(title) =>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }


  useEffect(() =>{
    searchMovies('spiderman');

  },[])



  return(
    <div className="App">
      <h1>FilmyLand</h1>

      <div className="search">
        <input placeholder='Search for movies'   value= {searchTerm}  onChange={(e) => setSearchTerm(e.target.value)}/>

        <img src={search} alt='search' onClick={() => searchMovies(searchTerm)} />
      </div >
      {
        movies?.length > 0 
          ? (
            <div className="container">
              {movies.map((movie) =>(
                <Moviecard movie={movie}/>
              ))}
        
            </div>
          ) :(
            <div className='empty'>
              <h2>No Movies Found</h2>

            </div>
          )

        
      }

      




    </div>
  );
}




export default App;
























// Learn usestate 

// const App = () =>{
//   const [counter , setCounter] = useState(0);

//   return(
//     <div className='App'>
//     <button onClick={() => setCounter((preCount) => preCount -1)}>-</button>
//     <h1>{counter}</h1>
//     <button onClick={() => setCounter((preCount) => preCount +1)}>+</button>
//   </div>
// );
// }





// props

// const People =(props) =>{
//   return(
//     <>
//     <h1>name is {props.name} </h1>
//     </>
//   )
// }
// const Age = (props) =>{
//   return (
//     <h1>The age is {props.age}</h1>
//   )
// }

// const App = () =>{
//   return(
//     <div className='App'>
//       <People name ={'Affan'}/>
//       <Age age={34}/>
//     </div>
//   );
// }











// sample for printing any thing

// const App = () =>{
//   const name = 'affan';
//   const wrong = false;
//   return(
//     <div className='App'>

//       <h1>hello</h1>
//     {
//       name ?(
//         <>test
//         </>
//       )  :  (
//         <>test</>
//       )
//     }

//     </div>
//   );
// }