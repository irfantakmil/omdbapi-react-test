import React from 'react'
import {Grid} from '@material-ui/core'
import MovieCard from '../movieCard'

import {useSelector} from 'react-redux'

const MovieContainer = () => {
    const movies = useSelector(state=>state.movies)
    console.log(movies.movies)

    return (   
        <div style={{marginTop: "20px"}}>
            <Grid container spacing={2}>
                {
                    movies && movies.movies ?
                        movies.movies.map((movie)=>(
                            <Grid key={movie.imdbID} item xs={8} sm={6} lg={3}>
                                <MovieCard key={movie.imdbID} movie={movie}/>
                            </Grid>
                        ))
                : <h1>Error</h1>}
            </Grid>
        </div>
    )
}

export default MovieContainer