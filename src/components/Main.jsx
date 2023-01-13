import React from 'react'
import { useEffect, useState } from 'react'
import Movie from './Movie'
import '../styles/styles.css'
import { FcSearch } from 'react-icons/fc'
import { motion } from 'framer-motion'

function Main() {
    // Set states
    const [movies, setMovies] = useState([])
    const [showIntro, setShowIntro] = useState(true)
    const [showNoInput, setShowNoInput] = useState(false)
    const [showError, setShowError] = useState(false)

    // API Key
    const API_KEY = '3a8a99fad36aef75b41e496372149948'

    // Call API whenever user searches
    const handleSubmit = (e) => {
        e.preventDefault()
        const searchQuery = e.target.elements.search.value

        // Check if search is empty
        if (searchQuery.length > 0) {
            setShowIntro(false)
            setShowNoInput(false)

            // Call API and set "movies" state
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}`)
                .then((response) => response.json())
                .then((data) => {
                    setMovies(data.results)
                })
                .catch(error => {
                    console.log("Error")
                })
        }
        else {
            setShowNoInput(true) // Set "no input" state to be true to display proper message
        }
    }

    // Map data from API into a list of custom child Movie components
    const movieList = movies.map(movie => {
        return (
            <div>
                <Movie 
                    key={movie.id}
                    info={movie} // Send each movie information to child component
                />
            </div>
        )})

    // Error checking
    useEffect(() => {
        if (movies.length > 0) {
            setShowError(false)
        }
        else if (movies.length == 0 && !showIntro && !showNoInput) {
            setShowError(true)
        }
    }, [movies])

    return (
        <div className='main--container'>
            <motion.h1 
                className='main--intro'
                animate={{ y: !showIntro ? -200 : 0 }}
                transition={{ duration: 2, type: 'tween' }}
            >Start typing a movie name below!</motion.h1>

            <motion.form 
                className='main--form' 
                onSubmit={handleSubmit}
                animate={{ y: !showIntro ? -50 : 0 }}
                transition={{ duration: 2, type: 'tween' }}
            >
                <input className='main--search' id='search' name='search' type='text' />
                <button className='main--submit' type='submit'><FcSearch /></button>
            </motion.form>

            {showNoInput && <h1 className='main--noinput'>Input cannot be empty!</h1>}
            {showError && <h1 className='main--noresults'>No movies found!</h1>}

            <div className='movie--list'>
                {movies.length > 0 && movieList}
            </div>
        </div>
    )
}

export default Main