import React from 'react'
import {render} from '@testing-library/react'
import CityInfo from './CityInfo' //SUT: Subject under testing (objeto de testeo)

test("CityInfo render", async () =>{
const city = "Caracas"
const country = "Venezuela"
// Render: renderiza el componente y retorna una serie de funciones de utilidad
//en este caso utilizamos "findAllByRole" para "consultar" a nuestro componente
// vamos a analizar su estado en el "Assert"
    const {findAllByRole} = render(<CityInfo city= {city} country= {country}/>)

    //finAllByRole nos va a buscar (en este caso) todos los componentes que sean
    //heading = h1, h2, h3, h4
    //el resultado es un array de componentes cityAndContryComponent
    const cityAndCountryComponent = await findAllByRole("heading")

    expect(cityAndCountryComponent[0]).toHaveTextContent(city)
    expect(cityAndCountryComponent[1]).toHaveTextContent(country)

    // si estas 2 condiciones se cumplen expect, el test dara "ok"
})