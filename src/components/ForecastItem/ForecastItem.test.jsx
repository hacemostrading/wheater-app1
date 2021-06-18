import React from 'react'
import ForecastItem from './ForecastItem'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import IconState, {validValues} from './../IconState'

test('ForecastItem render ', async () => {
    const {findByText} = render(<ForecastItem weekDay="lunes" hour={10} state="clear" temperature={23}  />)

    const hour = await findByText(/10/)
    const temperature = await findByText(/23/)
    const weekDay = await findByText ("lunes")
    
    
    
 
    expect(hour).toHaveTextContent("10")
    expect(temperature).toHaveTextContent("23")
    expect(weekDay).toHaveTextContent("lunes")
    

    
    
    
})
