import React, {useState} from 'react';

// const FavouritesButton = ({}) => {

//     const [country, setCountry] = useState("")

//     const handleFavourites = () => {
//         const countryToSubmit = country
//     }
// }

const CountryDetail = ({selectedCountry}) => {
    return (
        <div>
            <h3>{selectedCountry.name}</h3>
            <p>Population: {selectedCountry.population}</p>
            <p>Capital: {selectedCountry.capital}</p>
            <img src = {selectedCountry.flag} width="10%" height="100%"/>
            <br></br>
            <br></br>
            <button>Add to Favourites</button>
            {/* <button onClick={handleFavourites}>Add to Favourites</button> */}
        </div>
    )
}

export default CountryDetail;