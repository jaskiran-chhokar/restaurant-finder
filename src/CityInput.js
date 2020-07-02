import React, { Component } from 'react'

const CityInput = ({ setInput }) => {

    return (
        <input type="text" name="city" placeholder='City Name' onChange={setInput} />
    )
}

export default CityInput;