import React from 'react'

const Restaurants = ({ restaurants, refineInput }) => {

    let rows = [];

    // Display Results based on Refine Input
    if (refineInput !== '') {

        let refine = restaurants.filter((restaurant) => {
            if (restaurant.name.toLowerCase().includes(refineInput.toLowerCase()) || restaurant.address.toLowerCase().includes(refineInput.toLowerCase())) {
                return true;
            }
            return false;
        });

        rows = refine.map((restaurant) => {
            return (
                <div className="restaurants__card" key={restaurant.address}>
                    <img className="restaurants__image" src={restaurant.image_url} alt={restaurant.name} />
                    <h3 className="restaurants__title">{restaurant.name}</h3>
                    <p className="restaurants__address"><strong>Address: </strong>{restaurant.address}</p>
                    <p className="restaurants__price"><strong>Price:</strong> ${restaurant.price}</p>
                    <div className="restaurants__button-contain">
                        <a className="restaurants__button" href={restaurant.reserve_url} target="_blank" rel="noopener noreferrer">Reserve <span className="fas fa-angle-right"></span></a>
                    </div>
                </div>
            );
        })

        // Display Message for 'No Results' if Results Array is Empty
        if (rows.length === 0) {
            rows = <h4>There are no results!</h4>
        }


    } else {
        // Display Results based on City Input
        rows = restaurants.map((restaurant) => {
            return (
                <div className="restaurants__card" key={restaurant.address}>
                    <img className="restaurants__image" src={restaurant.image_url} alt={restaurant.name} />
                    <h3 className="restaurants__title">{restaurant.name}</h3>
                    <p className="restaurants__address"><strong>Address: </strong>{restaurant.address}</p>
                    <p className="restaurants__price"><strong>Price:</strong> ${restaurant.price}</p>
                    <div className="restaurants__button-contain">
                        <a className="restaurants__button" href={restaurant.reserve_url} target="_blank" rel="noopener noreferrer">Reserve <span className="fas fa-angle-right"></span></a>
                    </div>
                </div>
            );
        })
    }

    // Display Message if Results and Refine Input are empty 
    if (rows.length === 0 && refineInput === '') {
        rows = <h4>Please Enter a City Name Above!</h4>
    }

    return <div className="restaurants__container display__grid">{rows}</div>
}

export default Restaurants;