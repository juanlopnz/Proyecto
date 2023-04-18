import React from 'react';


export const FollowersList = ({ followers }) => {
 
  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">Seguidores</h2>
      <ul>
        {followers.map((follower) => (
          <li key={follower.id} className="flex items-center mb-3 border border-gray-3 p-2 rounded-full">
            <img
              src={follower.image}
              alt={follower.username}
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold">{follower.username}</h3>
              <p className="text-gray-500">{follower.bio}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
 
};
