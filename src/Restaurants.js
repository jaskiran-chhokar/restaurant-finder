import React, { Component } from 'react'

const Restaurants = ({ restaurants }) => {

    const rows = restaurants.map((restaurant, index) => {
        return (
            <div key={index}>
                <h3>{restaurant.name}</h3>
                <p>{restaurant.address}</p>
                <p>{restaurant.price}</p>
            </div>
        );
    })

    return <section>{rows}</section>
}

export default Restaurants;