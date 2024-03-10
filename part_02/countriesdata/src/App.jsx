import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'

function App() {
  
  const [countries, setCountries] = useState([])
  const [searchCountry, setSearchCountry] = useState('')
  
  useEffect(() => {
    if (true) {
      axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then(response => {
        setCountries(response.data)
      })
    }
  }, [])


  
  
  
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
        />
      </div>
    </>
  )
}

export default App
