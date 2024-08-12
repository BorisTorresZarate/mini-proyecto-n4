import React from 'react';
import { AuthContext } from '../context/UserContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Perfil from '../components/dashboard/Perfil';
import images from '../assets/devchallenges.svg'

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  console.log('user', user);

  const profileFields = [
    { label: 'PHOTO', value: user?.profileImage, isImage: true },
    { label: 'NAME', value: user?.name || 'Xanthe Neal' },
    { label: 'BIO', value: user?.bio },
    { label: 'PHONE', value: user?.phone },
    { label: 'EMAIL', value: user?.email },
    { label: 'PASSWORD', value: '************' },
  ];
  console.log(profileFields)

  return (
    <div className="font-sans">
      <header className="flex justify-between items-center p-4">
        <img className="w-52" src={images} alt="Logo" />
        <div className="flex items-center gap-8">
          <Perfil />
        </div>
      </header>

      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold mb-2">Personal info</h1>
        <p className="text-gray-600">Basic info, like your name and photo</p>
      </div>

      <div className="w-[845.91px] mx-auto rounded-[12px] border border-gray-300">
        <div className="flex justify-between items-center p-6 border-b border-gray-300">
          <div>
            <h2 className="text-2xl pl-6 font-medium">Profile</h2>
            <p className="text-sm pl-6 text-gray-500">Some info may be visible to other people</p>
          </div>
          <Link to="/UpdateDash">
            <button className="px-8 py-2 border border-gray-300 rounded-xl text-gray-700">Edit</button>
          </Link>
        </div>

        <div>
          {profileFields.map((field, index) => (
            <div className="flex py-4 px-12 border-b border-gray-300" key={index}>
              <div className="w-1/3 text-gray-500 text-sm">{field.label}</div>
              <div className="w-2/3 text-gray-800">
                {field.isImage ? (
                  <img src={field.value} alt="profile" className="w-16 h-16 rounded-lg" />
                ) : (
                  field.value
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="mt-8 text-center text-sm text-gray-500">
        <p>created by Boris Zarate</p>
        <p>devChallenges.io</p>
      </footer>
    </div>
  );
};

export default Dashboard;
