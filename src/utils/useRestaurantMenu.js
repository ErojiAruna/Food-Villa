import { useEffect, useState } from 'react';
import { MENU_API } from './constants';

const useRestaurantMenu = (resId, MENU_API) => {
  const [resInfo, setResInfo] = useState({});
  const [resMenuInfo, setResMenuInfo] = useState([]);

  useEffect(() => {
    fetchRestaurantMenu();
  }, []);

  const fetchRestaurantMenu = async () => {
    try {
      const response = await fetch(MENU_API + resId);
      if (!response.ok) {
        const err = response.status;
        throw new Error(err);
      } else {
        const json = await response.json();
        const RestaurantType =
          'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory';
        const RestaurantMenuData = json?.data?.cards
          ?.find((x) => x?.groupedCard)
          ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
            (item) => item?.card?.card['@type'] === RestaurantType
          );
        const Resinfo = json?.data?.cards.find((x) => x?.card?.card?.info)?.card
          ?.card?.info;
        setResInfo(Resinfo);
        setResMenuInfo(RestaurantMenuData);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return [resInfo, setResInfo, resMenuInfo, setResMenuInfo];
};

export default useRestaurantMenu;

// import { useEffect } from 'react';
// import { MENU_API } from '../utils/constants';

// const useRestaurantMenu = (resId) => {
//   const [resInfo, setResInfo] = useState(null);
//   // fetchdata

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     const data = await fetchData(MENU_API + resId);
//     const json = await data.json();
//     setResInfo(json.data);
//   };

//   return resInfo;
// };

// export default useRestaurantMenu;
