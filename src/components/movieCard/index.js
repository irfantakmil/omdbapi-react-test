import React, {useState} from 'react'
import {
    Card,
    CardMedia,
    CardContent,
    CardActions,
    IconButton,
    Typography,
    Button
} from '@material-ui/core'
import Modal from '@mui/material/Modal'
import {Link} from 'react-router-dom'
import MovieDetail from '../movieDetail'

import Box from '@mui/material/Box'


const MovieCard = ({movie}) => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

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

    return(
        <Card>
             <CardMedia
                style={{height:0,paddingTop:'56.25%'}}
                image={movie.Poster}
            />
            <CardContent>
                <Typography gutterBottom variant="h5">
                    {movie.Title} - {movie.Year}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <Link to={`/movie/${movie.imdbID}`}>
                    <Button onClick={handleOpen}>
                        Details
                    </Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <MovieDetail movie={movie}/>
                        </Box>
                    </Modal>
                </Link>
            </CardActions>
        </Card>
    )
}
export default MovieCard