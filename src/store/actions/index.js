import {GET_MOVIES, GET_MOVIES_BY_ID, SEARCH_MOVIES,LOADING} from '../types'

export const searchMovies = (search) => ({
    type: SEARCH_MOVIES,
    payload: search
})

export const getMovies = (movies) => ({
    type: GET_MOVIES,
    payload: movies
})

export const getMoviesById = (id) => ({
    type: GET_MOVIES_BY_ID,
    payload: id
})

export const loading = () => {
    return {
        type: LOADING
    }
}