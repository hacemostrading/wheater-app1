import React from 'react'
import Weather from './Weather'

export default {
    title: "Weather",
    component: Weather
}

const Template = (args) => <Weather {...args}/>

export const WeatherCloud = Template.bind({})
WeatherCloud.arg = {temperature:10, state:"clouds"}
//() => <Weather temperature={10} state="clouds"/>


export const WeatherSunny = Template.bind({})
WeatherSunny.arg = {temperature:10, state:"clear"}
//() => <Weather temperature={10} state="clear"/>