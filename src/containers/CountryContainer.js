import React from 'react';
// import CountryList

const CountryContainer = () => {
    const [countries, setCountires] = useState([]);
    const [selectedMunro, setSelectedCountry] = useState(null);

    useEffect (() => {
        getCountries();
    }, [])

    const getCountries = function (){
        fetch("https://restcountries.com/v2/all")
        .then(res =>res.json())
        .then(countries => setCountries(countries))
    }
}