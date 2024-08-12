import React, { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle, FaUserSecret } from 'react-icons/fa';
import { FaUserGroup } from 'react-icons/fa6';
import { IoIosArrowDown, IoIosLogOut } from 'react-icons/io';
import imgdefault from './perfil-dafult.png'

const Perfil = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);


    const handleLogout = async () => {
        try {
            await logout();
            navigate('/login');
        } catch (error) {
            console.error('Error during logout:', error);
        }
    }

    return (

        <header className="flex justify-between items-center p-4 bg-white">
            <div className="relative">
                <div className="flex items-center gap-2 cursor-pointer" onClick={toggleMenu}>
                    <img src={user?.photo || imgdefault } alt="profile" className='w-[40px] h=[40px] rounded-md ' />
                    <span>
                        {user?.name || 'User'}
                    </span>
                    <IoIosArrowDown />
                </div>
                {isMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                        <div className='flex items-center ml-4 gap-1'>
                            <FaUserCircle />
                            <a href="#" className="block w-28 py-2 text-sm text-gray-700 hover:bg-gray-100">My Profile</a>
                        </div>
                        <div className='flex items-center ml-4 gap-1'>
                            <FaUserGroup />
                            <a href="#" className="block w-28 py-2 text-sm text-gray-700 hover:bg-gray-100">Group Chat</a>
                        </div>
                        <div className='flex text-red-600 items-center ml-4'>
                            <IoIosLogOut />
                            <button
                                className="block w-28 pl-2 py-2 whitespace-nowrap bg-white text-red-600 text-left text-sm font-normal hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 "
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                        </div>

                    </div>
                )}
            </div>
        </header>

    );
};

export default Perfil;
