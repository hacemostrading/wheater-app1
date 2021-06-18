import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import CityList from './CityList' 

const cities = [
    { city:"Caracas", country: "Venezuela"},
    { city:"Buenos Aires", country: "Argentina"},
    { city:"Bogota", country: "Colombia"},
    { city:"Madrid", country: "España"},
]

test("CityList click on item", async () => {
    // Debemos simular una acción del usuario: click sobre un item
    // Para eso vamos a utilizar una función "mock"
    const fnClickOnItem = jest.fn()

    const { findAllByRole } = render(<CityList cities={cities} onClickCity={fnClickOnItem} />)

    const items = await findAllByRole("button")

    // Ahora, para simular la acción, vamos a utilizar fireEvent
    // fireEvent es parte de la librería testing-library/react

    fireEvent.click(items[0])

    // ¿Ahora que tuvo que suceder?
    // Se debió llamar a la función fnClickOnItem UNA única vez

    expect(fnClickOnItem).toHaveBeenCalledTimes(1)
    expect(items).toHaveLength(4)
})