import React from 'react'
import {useState} from 'react'
import Info from './Info'
import '../styles/styles.css'

// Show movie image, provide logic for showing movie info when clicked
function Movie(props) {
    // Set state to show movie info
    const [show, setShow] = useState(false)

    // Toggle "show" state
    const toggleShow = () => {
        setShow(prev => !prev)
    }

    // Display movie info when "show" state is true
    if (show) {
        return <Info show={show} close={toggleShow} info={props.info}/>
    }

    return (
        // Check if movie has a poster image -> if not, put placeholder image of the same size
        <img 
            className='movie--image' 
            src={props.info.poster_path ? `https://image.tmdb.org/t/p/w500${props.info.poster_path}` : 'https://via.placeholder.com/300x450'} 
            alt='' 
            onClick={toggleShow}/>
    )
}

export default Movie