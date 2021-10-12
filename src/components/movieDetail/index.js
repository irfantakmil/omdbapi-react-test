import React,{useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { getMoviesById } from '../../store/actions/movie_actions'
import Loader from '../../utils/loader'



import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'

const MovieDetail = (props) => {
    const {current} = useSelector(state=>state.movies)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getMoviesById(props.match.params.id))
    },[dispatch, props.match.params])

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    }

    return (
        <>
            { current ? 
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {current.Title} - {current.year}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    {current.Plot}
                </Typography>`
            </Box>
            : <Loader/>}
        </>
    )
}

export default MovieDetail
