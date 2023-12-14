import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const RestaurantCategory = (props) => {
  const { data, handleShowItem, ShowItem } = props;

  const handleItemShown = () => {
    handleShowItem();
  };
  return (
    <>
      <div
        onClick={handleItemShown}
        className="flex items-center justify-between cursor-pointer py-5 px-3 sm:p-6 shadow-md text-left"
      >
        <h2 className="text-customblack-3 sm:text-lg font-bold">
          {data?.title} ({data?.itemCards?.length})
        </h2>
        <div className="text-xl text-customblack-3">
          {ShowItem ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
      </div>
    </>
  );
};

export default RestaurantCategory;
