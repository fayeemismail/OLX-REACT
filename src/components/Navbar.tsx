import olx from '../assets/olx.png';
import lens from '../assets/lens.png';
import arrow from '../assets/arrow.png';
import search from '../assets/search.png';
import Login from './Login';
import { useState } from 'react';
import { useUser } from '../context/UserContext';


type SearchProp = {
  setSearch: (value: string) => void;
};

const Navbar = (props: SearchProp) => {
  const { user, logOut } = useUser();
  
  const [loginPop, setLoginPop] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between p-4 bg-slate-100 shadow-md">
        {/* Logo */}
        <img src={olx} className="w-11 h-8" alt="OLX Logo" />

        {/* Location Input */}
        <div className="flex items-center border-2 border-gray-300 rounded-md w-64 p-2 bg-white">
          <img src={lens} className="w-6 h-5" alt="Lens Icon" />
          <input
            placeholder="Location"
            className="ml-3 outline-none flex-1"
            type="text"
          />
          <img src={arrow} className="w-8 h-7" alt="Arrow Icon" />
        </div>

        {/* Search Bar */}
        <div className="flex items-center border-2 border-gray-300 rounded-md w-96 p-2 bg-white">
          <input
            onChange={(e) => props?.setSearch(e.target.value)}
            placeholder="Find Cars, Mobile phones and more"
            className="ml-3 w-full outline-none"
            type="text"
          />
          <img src={search} className="w-6 h-6" alt="Search Icon" /> {/* Adjusted size */}
        </div>


        {/* Language Selector */}
        <div className="flex items-center cursor-pointer ml-4">
          <h1 className="font-semibold text-lg">ENGLISH</h1>
          <img src={arrow} className="w-5 h-5 ml-1" alt="Arrow Icon" />
        </div>

        {/* Login/Logout Button */}
        {user.displayName ? (
          <div
            onClick={logOut}
            className="flex items-center cursor-pointer ml-4 underline hover:no-underline"
          >
            <h1 className="font-bold text-lg">Logout</h1>
          </div>
        ) : (
          <div
            onClick={() => setLoginPop(!loginPop)}
            className="flex items-center cursor-pointer ml-4 underline hover:no-underline"
          >
            <h1 className="font-bold text-lg">Login</h1>
          </div>
        )}

        {/* Sell Button */}
        <div className="flex items-center justify-center w-28 h-12 ml-4 cursor-pointer rounded-full border border-yellow-500 bg-yellow-50 hover:bg-yellow-100 transition">
          <h1 className="font-bold text-lg">+ SELL</h1>
        </div>

        {/* User Welcome */}
        {user.displayName && (
          <div className="flex items-center ml-4">
            <h1 className="font-semibold text-lg">Welcome {user.displayName}</h1>
          </div>
        )}
      </div>

      {loginPop && <Login setLoginPop={setLoginPop} />}
    </>
  );
};

export default Navbar;
