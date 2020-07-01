import React, { Component } from 'react'

const CityInput = ({ setInput, makeApiCall }) => {

    return (
        <form onSubmit={makeApiCall}>
            <input type="text" name="city" onChange={setInput} />
            <input type="submit" name="submit" />
        </form>
    )
}

export default CityInput;