import React from 'react'
import Forecast from './Forecast'

export default {
    title:"Forecast",
    component: Forecast
}

const forecastItemList = [
    { hour: 18, state:"clear", temperature:17, weekDay:"jueves" },
    { hour: 6, state:"clouds", temperature:18, weekDay:"viernes" },
    { hour: 12, state:"drizzle", temperature:18, weekDay:"viernes" },
    { hour: 18, state:"clouds", temperature:19, weekDay:"viernes" },
    { hour: 14, state:"rain", temperature:17, weekDay:"sabado" },
    { hour: 15, state:"rain", temperature:17, weekDay:"sabado" },
]   
export const ForecastExample = () => (<Forecast forecastItemList={forecastItemList} />)