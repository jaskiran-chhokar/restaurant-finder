import React from 'react'

const CityInput = ({ setInput }) => {
    return (
        <input className="restaurant-form__input" type="text" name="city" placeholder="Please enter a city name..." onChange={setInput} />
    )
}

export default CityInput;