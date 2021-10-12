import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {searchMovies, getMovies} from '../../store/actions/movie_actions'
import {TextField} from '@material-ui/core'

const Search = () => {

    const movies = useSelector(state => state.movies)
    const dispatch = useDispatch()
    
    const onChange = (event) => {
        dispatch(searchMovies(event.target.value))
    }

    const onSubmit = (event) => {
        event.preventDefault()
        dispatch(getMovies(movies.search))
    }

    return (
        <div className="mt-5 text-center">
            <form id="form" onSubmit={onSubmit}>
                <TextField
                    type="text"
                    variant="outlined"
                    name="searchBar"
                    placeholder="Search Movies"
                    style={{width:'50%'}}
                    onChange={onChange}
            />
            <button type="submit" className="btn btn-primary btn-bg">
                Search
            </button>
            </form>
        </div>
    )
}

export default Search