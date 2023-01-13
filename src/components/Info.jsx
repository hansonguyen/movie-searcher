import React from 'react'
import '../styles/styles.css'
import { AiFillStar } from 'react-icons/Ai'

// Display movie information such as title, rating, and release date
function Info(props) {
    // Don't display info when not clicked on yet
    if (!props.show) {
        return null
    }

    // Convert date given in API in more readable format
    const convertDate = (date) => {
        let stringDate = ''
        let [year, month, day] = date.split('-')
        switch (parseInt(month)) {
            case 1:
                month = 'January'
                break
            case 2:
                month = 'February'
                break
            case 3:
                month = 'March'
                break
            case 4:
                month = 'April'
                break
            case 5:
                month = 'May'
                break
            case 6:
                month = 'June'
                break
            case 7:
                month = 'July'
                break
            case 8:
                month = 'August'
                break
            case 9:
                month = 'September'
                break
            case 10:
                month = 'October'
                break
            case 11:
                month = 'November'
                break
            case 12:
                month = 'December'
                break
            default:
                month = 'N/A'
        }
        stringDate = month + ' ' + String(parseInt(day)) + ', ' + year
        return stringDate
    }

    return (
        <div className='info--container' onClick={props.close}>
            <h1 className='info--title'>{props.info.title}</h1>
            <p className='info--date'>{convertDate(props.info.release_date)}</p>
            <p className='info--description'>{props.info.overview}</p>
            {props.info.vote_count !== 0 ? <p className='info--rating'>{props.info.vote_average + '/10'}<AiFillStar className='info--star' /></p> : <p>No rating</p>}
        </div>
    )
}

export default Info