import React, { useState } from 'react';

const Search = () => {
  const [searchText, setSearchText] = useState('');
  return (
    <div className="p-4 m-4 border border-gray-400">
      <input
        type="text"
        className="search-box"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          // Filter the restaurant cards and update the UI
          // searchText
          const filteredRestaurant = listOfRestaurants?.filter((res) =>
            res?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
          );
          setListOfRestaurants(filteredRestaurant);
        }}
      >
        Search for restaurants and food
      </button>
    </div>
  );
};

export default Search;
