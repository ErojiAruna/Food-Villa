import { RES_IMG } from '../utils/constants';
import { GRAY_RES_IMG } from '../utils/constants';
import Star from '../images/star-icon.png';

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    sla,
    areaName,
    isOpen,
    aggregatedDiscountInfoV2,
  } = resData?.info;

  const truncateCuisines = (cuisines) => {
    return cuisines.length >= 35 ? cuisines.substring(0, 35) + '...' : cuisines;
  };

  return (
    <div className="tracking-normal m-2 p-2 mb-10 w-[250px] h-60  hover:scale-95 transition-transform">
      {isOpen ? (
        <div>
          <img
            className="w-[230px] h-[170px] object-cover rounded-2xl relative"
            alt="res-logo"
            src={RES_IMG + cloudinaryImageId}
          />
        </div>
      ) : (
        <div>
          <img
            src={GRAY_RES_IMG + cloudinaryImageId}
            className="w-[330px] h-[220px] object-cover rounded-2xl relative"
            alt="res-img"
          />
        </div>
      )}
      <h3 className="font-bold text-slate-800 text-lg px-3 truncate">{name}</h3>

      {avgRating ? (
        <div className="flex items-center gap-1 px-3">
          <div>
            <img src={Star} alt="star-icon" />
          </div>

          <div>
            <span className="text-gray-800 font-bold text-base">
              {avgRating} • {sla.slaString}
            </span>
          </div>
        </div>
      ) : (
        <span className="text-customblack-1 font-semibold text-base">
          {sla.slaString}
        </span>
      )}
      <p className="font-GrotThin text-base text-customblack-2 px-3">
        {truncateCuisines(cuisines.join(', '))}
      </p>
      <span className="font-GrotThin text-customblack-2 px-3">{areaName}</span>
    </div>
  );
};

export const RestaurantCardOffer = (RestaurantCard) => {
  return (props) => {
    const { resData } = props;
    const { isOpen } = resData;
    return (
      <>
        <RestaurantCard {...props} />
        {isOpen && (
          <>
            {resData?.aggregatedDiscountInfoV2 && (
              <div className="font-ProximaNovaBlack text-white/95 text-[22px] absolute bottom-[108px] group-hover:scale-95 transition-transform resoffer">
                {resData?.aggregatedDiscountInfoV2?.header}
              </div>
            )}
            {resData?.aggregatedDiscountInfoV3 && (
              <div className="font-ProximaNovaBlack text-white/95 text-[22px] absolute bottom-[108px] group-hover:scale-95 transition-transform resoffer">
                {resData?.aggregatedDiscountInfoV3?.header}{' '}
                {resData?.aggregatedDiscountInfoV3?.subHeader}
              </div>
            )}
          </>
        )}
      </>
    );
  };
};

export default RestaurantCard;
