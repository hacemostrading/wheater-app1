import React from 'react'
import {BrowserRouter as Router,
    Switch,
    Route} from 'react-router-dom'
import WelcomePage from './Pages/WelcomePage'
import MainPage from './Pages/MainPage'
import CityPage from './Pages/CityPage'
import NotFoundPage from './Pages/NotFoundPage'
import {WeatherContext} from  './WeatherContext'

const App = () => {
    
    
     return (
         <WeatherContext>
        <Router>
                <Switch>
                    <Route exact path= '/'>
                       <WelcomePage />
                    </Route>
                    <Route path= '/main'>
                        <MainPage />
                    </Route>
                    <Route path= '/city/:countryCode/:city'>
                        <CityPage />
                    </Route>
                    <Route>
                        <NotFoundPage />
                    </Route>
                </Switch>
            </Router>
            </WeatherContext>
        
    )
}


export default App
