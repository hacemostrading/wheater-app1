import React from 'react'
import Forecast from './Forecast'
import {render} from '@testing-library/react'

const forecastItemList = [
    { hour: 18, state:"clear", temperature:17, weekDay:"jueves" },
    { hour: 6, state:"clouds", temperature:18, weekDay:"viernes" },
    { hour: 12, state:"drizzle", temperature:18, weekDay:"viernes" },
    { hour: 18, state:"clouds", temperature:19, weekDay:"viernes" },
    { hour: 14, state:"rain", temperature:17, weekDay:"sabado" },
    { hour: 15, state:"rain", temperature:17, weekDay:"sabado" },
]   

test('Forecast render ', async () => {
    //vamos a encontrar una marca para encontrar cada item (ForecastItem) ver Forecast.jsx
    // para ello usamos findAllByTestId
    
    const {findAllByTestId} = render (
        <Forecast 
            forecastItemList={forecastItemList} />)

    const ForecastItems = await findAllByTestId("forecast-item-container")

    expect(ForecastItems).toHaveLength(6)

    
})
