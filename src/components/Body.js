import React from 'react';
import RestaurantCard from './RestaurantCard';
import restaurantList from '../utils/mockData';
import { useState } from 'react';

const Body = () => {
  // Local State Variable - Super powerfull variable
  const [listOfRestaurants, setListOfRestaurants] = useState([restaurantList]);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant?.data?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
