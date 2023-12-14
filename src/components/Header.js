import React, { useEffect, useState } from 'react';
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import { IoIosSearch } from 'react-icons/io';
import { BiSolidOffer } from 'react-icons/bi';
import { IoHelpBuoyOutline } from 'react-icons/io5';
import { HiOutlineUser } from 'react-icons/hi';

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState('Login');

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between p-3 shadow-lg w-full z-10 h-[85px]">
      <div className="flex items-center">
        <img
          className="h-[60px] rounded-full border border-black"
          src={LOGO_URL}
        />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? '✅' : '🔴'}</li>
          <li className="px-4 hover:orange-500">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link
              to="/search"
              className="flex items-center hover:text-orange-500"
            >
              <span className="px-2 items-center">
                <IoIosSearch size="18" />
              </span>
              Search
            </Link>
          </li>
          <li className="px-4 hover:#f97316">
            <Link
              to="/about"
              className="flex items-center hover:text-orange-500"
            >
              <span className="px-2">
                <BiSolidOffer />
              </span>
              Offers
            </Link>
          </li>
          <li className="px-4">
            <Link
              to="/contact"
              className="flex items-center hover:text-orange-500"
            >
              <span className="px-2">
                <IoHelpBuoyOutline />
              </span>
              Help
            </Link>
          </li>
          <li className="px-4 hover:text-orange-500">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
          <button
            className="px-4 flex items-center hover:text-orange-500"
            onClick={() => {
              btnNameReact === 'Login'
                ? setBtnNameReact('Logout')
                : setBtnNameReact('Login');
            }}
          >
            <HiOutlineUser />
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
