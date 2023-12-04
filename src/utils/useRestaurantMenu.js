import { useEffect } from 'react';
import { MENU_API } from '../utils/constants';

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  // fetchdata

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetchData(MENU_API + resId);
    const json = await data.json();
    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
