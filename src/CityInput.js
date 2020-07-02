import React from 'react'

const CityInput = ({ setInput }) => {
    return (
        <input id="cityInput" className="restaurant-form__input" type="text" name="city" placeholder="Please enter a city name..." onChange={setInput} />
    )
}

export default CityInput;