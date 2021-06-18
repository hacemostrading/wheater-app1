import React from 'react'
import CityList from './CityList'
import { action } from '@storybook/addon-actions'

export default {
    title: "CityList",
    component: CityList
}
const cities = [
    { city:"Caracas", country: "Venezuela", countryCode: "VE"},
    { city:"Buenos Aires", country: "Argentina", countryCode: "AR"},
    { city:"Bogota", country: "Colombia", countryCode: "CO"},
    { city:"Madrid", country: "España", countryCode: "ES"},
]

export const CityListExample = () => <CityList cities={cities} onClickCity={action("Click en city")} />