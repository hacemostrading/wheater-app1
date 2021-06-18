import React from 'react'
import WeatherDetails from './WeatherDetails'
import {render} from '@testing-library/react'

// findByText permite encontrar un componente por el texto que muestra
test("Weather Details render", async () => {
    const {findByText} = render(<WeatherDetails wind={10} humidity={80}
    />)

    // al utilizar las barras utilizamos un REGEXP, una expresion regular
    const wind = await findByText(/10/)

    const humidity = await findByText(/80/)

    expect(wind).toHaveTextContent("Viento: 10km/h")
    expect(humidity).toHaveTextContent("Humedad: 80%")
    
})