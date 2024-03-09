

const Filter = (props) => {
    const { countries, searchCountry, handleSearch } = props

    const foundCountry = countries.filter(country =>
        country.name.common.toLowerCase().includes(searchCountry.toLowerCase())
    )

    console.log(foundCountry.length)




    return (
        <div>
            <input
                type="text"
                value={searchCountry}
                onChange={handleSearch}
                placeholder="Search by name"
            />
            

            <p>
                  {searchCountry && foundCountry.length > 10
                        ? "Too many matches, specify another filter"
                        : null
                    }                                  
                
            </p>

            
            <div>
                {searchCountry && foundCountry.length <= 10 && foundCountry.length > 1 && 
                (foundCountry.map((country, ind) => (
                    <li key={ind}>
                        {country.name.common}
                    </li>
                )))}
                
            </div>
            <div>
                {searchCountry && foundCountry.length === 1 &&
                    (foundCountry.map((country, ind) => (
                        <div key={ind}>
                            <h2>{country.name.common}</h2>
                            <p>Capital: {country.capital}</p>
                            <p>Population: {country.population}</p>
                            <h3>Languages</h3>
                            <ul>
                                {Object.values(country.languages).map((lang, ind) => (
                                    <li key={ind}>
                                        {lang}
                                    </li>
                                ))}
                            </ul>
                            <img src={country.flags.png} alt="Flag" width="150" height="100" />
                        </div>
                    ))
                    )}
            </div>
            

            
        </div>
    )
}

export default Filter
