import React, { Component } from 'react'

const Restaurants = ({ restaurants, refineInput }) => {

    let rows = [];

    console.log(`Refine Input: ${refineInput}`);

    if (refineInput !== '') {
        let filter = restaurants.filter((restaurant) => {
            if (restaurant.name.toLowerCase().includes(refineInput.toLowerCase()) || restaurant.address.toLowerCase().includes(refineInput.toLowerCase())) {
                return true;
            }
        });

        rows = filter.map((restaurant) => {
            return (
                <div className='restaurant-card' key={restaurant.address}>
                    <h3>{restaurant.name}</h3>
                    <p>{restaurant.address}</p>
                    <p>{restaurant.price}</p>
                </div>
            );
        })

    } else {
        rows = restaurants.map((restaurant) => {
            return (
                <div className='restaurant-card' key={restaurant.address}>
                    <h3>{restaurant.name}</h3>
                    <p>{restaurant.address}</p>
                    <p>{restaurant.price}</p>
                </div>
            );
        })
    }

    if (rows.length === 0) {
        rows = <h4>No Results Found....</h4>
    }

    return <div className='restaurants-container display-grid'>{rows}</div>
}

export default Restaurants;