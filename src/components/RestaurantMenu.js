import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';
import { MENU_API } from '../utils/constants';
import { useState } from 'react/cjs/react.production.min';

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [resInfo, setResInfo, resMenuInfo, setResMenuInfo] = useRestaurantMenu(
    resId,
    MENU_API
  );
  const [showIndex, setShowIndex] = useState(0);

  const handleShowItem = (currInd) => {
    if (currInd === showIndex) {
      setShowIndex(null);
    } else {
      setShowIndex(currInd);
    }
  };

  const { name, city, cuisines, avgRating, totalRatingsString, isOpen } =
    resInfo;

  if (resMenuInfo?.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="2xl:w-6/12 mx-auto menu-container pt-28 pb-36 md:w-10/12 w-full px-3 min-h-screen">
      <div className="flex mb-5" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2">
          <li className="inline-flex items-center">
            <Link
              to="/"
              className="inline-flex items-center text-sm font-medium text-customblack-1"
            >
              Home
            </Link>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <Link
                to={`/restaurants/${resId}`}
                className="ml-1 text-sm font-medium text-customblack-1 md:ml-2"
              >
                Restaurants
              </Link>
            </div>
          </li>
        </ol>
      </div>

      <div className="flex items-start justify-between pt-5 mb-6">
        <div>
          <h2 className="text-customcolor-6 sm:text-xl capitalize mb-1 font-semibold">
            {name}
          </h2>
          <p className="text-customcolor-5 text-sm font-ProximaNovaThin">
            {cuisines?.join(', ')}
          </p>
          <p className="text-customcolor-5 text-sm font-ProximaNovaThin">
            {city}
          </p>
        </div>
        {avgRating && (
          <div>
            <button className="p-[8px] cursor-pointer rounded resRating">
              <div className="flex items-center gap-1 justify-center avgRating pb-[10px] mb-[8px]">
                <img src="../images/star-icon.png" alt="star-img" />
                <span className="font-semibold text-sm">{avgRating}</span>
              </div>
              <span className="font-semibold tracking-tight text-xs totalRatings">
                {totalRatingsString}
              </span>
            </button>
          </div>
        )}
      </div>
      {!isOpen ? (
        <h2 className="resMsg font-sm text-base">
          Uh-oh! The outlet is not accepting orders at the moment. We&apos;re
          working to get them back online
        </h2>
      ) : (
        <>
          <div className="dottedDivider"></div>
          <ul>
            {resMenuInfo?.map((category, index) => (
              <li key={category?.card?.card?.title}>
                <RestaurantCategory
                  data={category?.card?.card}
                  ShowItem={index === showIndex ? true : false}
                  handleShowItem={() => handleShowItem(index)}
                />
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );

  // const resInfo = useRestaurantMenu(resId);

  // if (resInfo === null) return <Shimmer />;

  // const { name, cuisines, costForTwoMessage } =
  //   resInfo?.cards[0]?.card?.card?.info;

  // const { itemCards } =
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  // const categories =
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
  //     (c) =>
  //       c.card?.['card']?.['@type'] ===
  //       'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
  //   );
  // console.log(categories);

  // return (
  //   <div className="menu">
  //     <h1>{name}</h1>
  //     <p>
  //       {cuisines.join(', ')} - {costForTwoMessage}
  //     </p>
  //     <ul>
  //       {itemCards.map((item) => (
  //         <li key={item.card.info.id}>
  //           {item.card.info.name} -{' '}
  //           {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // );
};

export default RestaurantMenu;
