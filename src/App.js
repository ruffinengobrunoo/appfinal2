import { useState } from "react";
import axios from "axios";
import HomeScreen from "./vistas/HomeScreen";
import LogIn from "./vistas/LogIn"
import SignIn from "./vistas/SignIn";


function App() {

    const API_URL = 'https://api.themoviedb.org/3'
    const API_KEY ='35b86a61012104464a637d8911c342d8'
    const IMAGE_PATH = 'https://image.tmdb.org/t/p/original'
    const URL_IMAGE = 'https://image.tmdb.org/t/p/original'

    const [movie, setMovie] = useState("")
    const [movies, setMovies] = useState([])
    const [trailer, setTrailer] = useState(null)
    const [searchKey, setSearchKey] = useState("")
    const [playing, setPlaying] = useState([])


    const fetchMovies = async (searchKey) =>{
    const type = searchKey ? "search" : "discover"
        const {data: {results}, 
    }= await axios.get(`${API_URL}/ ${type}/movie`, {
        params: {
            api_key: APY_KEY,
            query: searchKey,
        },
    }); 
    }

    setMovies(results)
    setMovie(results[0])

    

}