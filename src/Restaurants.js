import React, { Component } from 'react'

const Restaurants = ({ restaurants }) => {

    const rows = restaurants.map((restaurant, index) => {
        return (
            <div className='restaurant-card' key={index}>
                <h3>{restaurant.name}</h3>
                <p>{restaurant.address}</p>
                <p>{restaurant.price}</p>
            </div>
        );
    })

    return <div className='restaurants-container display-grid'>{rows}</div>
}

export default Restaurants;