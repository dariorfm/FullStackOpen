import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'

const METEO_API_KEY = import.meta.env.VITE_APP_METEO_KEY

function App() {
  
  const [countries, setCountries] = useState([])
  const [searchCountry, setSearchCountry] = useState('')
  const [weather, setWeather] = useState([])



  
  useEffect(() => {
    if (true) {
      axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then(response => {
        setCountries(response.data)
      })
    }
  }, [])



  useEffect(() => {
    if (searchCountry !== '' && searchCountry.length > 3) {
      axios
      .get(`http://api.weatherapi.com/v1/current.json?key=${METEO_API_KEY}&q=${searchCountry}`)
      .then(response => {
        setWeather(response.data)
       })
    }
  }, [searchCountry])
  
  console.log(weather.location)
  
  const handleSearch = (event) => {
    setSearchCountry(event.target.value)
  }

  return (
    <>
      <div>
        <h1>Country data</h1>
        <Filter 
         countries={countries}
         searchCountry={searchCountry}
         handleSearch={handleSearch}
         setSearchCountry={setSearchCountry}
          weather={weather}
        />
      </div>
    </>
  )
}

export default App
