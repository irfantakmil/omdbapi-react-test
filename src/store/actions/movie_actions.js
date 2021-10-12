import axios from 'axios'
import * as movies from './index'

const api_key = "4a2a080c";

export const searchMovies = (text) => {
    return(dispatch)=>{
        dispatch(movies.searchMovies(text))
    }
}

export const getMovies = (searchText) => {
    return async(dispatch, getState)=>{
        try {
            for(let page=1; page++;){
                const response = await axios.get(`https://www.omdbapi.com/?apikey=${api_key}&s=${searchText}&page=${page}`);
                const prevMovies = getState().movies.movies
                if(response.data.Response === "True"){
                    console.log(response);
                    let results = [...response.data.Search];
                    if(prevMovies){
                        results = [...prevMovies, ...response.data.Search]
                    }
                    dispatch(movies.getMovies(results));
                }
            }
        } catch(err){
            console.log(err);
        }
    }
}
   

export const getMoviesById = (id) => {
    return async(dispatch)=>{
        try {
            const response = await axios.get(`https://www.omdbapi.com/?apikey=${api_key}&i=${id}`);
            const results = response.data;
            dispatch(movies.getMoviesById(results));
        } catch(err){
            console.log(err);
        }
    }
}