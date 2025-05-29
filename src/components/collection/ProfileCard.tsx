// ProfileCard.tsx
import React from 'react';

interface ProfileCardProps {
  imageUrl: string;
  name: string;
  description: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ imageUrl, name, description }) => {
  return (
    
    <a href="#" className="group relative block bg-black">
      <img
        alt={`${name} Background`}
        src={imageUrl}
        className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
      />

      <div className="relative p-4 sm:p-6 lg:p-8">
        <p className="text-xl font-bold text-white sm:text-2lg">{name}</p>

        <div className="mt-32 sm:mt-48 lg:mt-64">
          <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
            <p className="text-sm text-white">{description}</p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProfileCard;
