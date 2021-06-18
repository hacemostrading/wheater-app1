import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

const WeatherDetailes = ({humidity, wind}) => {
    return (
        <>
            <Typography>Humedad: {humidity}%</Typography>
            <Typography>Viento: {wind}km/h</Typography>

            </>   
        
    )
}

WeatherDetailes.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.number.isRequired,
}

export default WeatherDetailes