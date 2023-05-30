import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

export const Post = ({ imageUrl, title, description, }) => {

  const [isLiked,setIsLiked]= useState(false);



  return (
    <li className="bg-white p-4 rounded-md shadow-md">
     
      <img src={imageUrl} alt="Publicación" className="w-full h-64 object-cover rounded-md" />
      <div className="mt-2">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-500">{description}</p>
      </div>
      <div className="flex justify-between mt-4">

      <button
  className={`text-gray-500 focus:outline-none ${isLiked ? 'text-red-500' : ''}`}
  onClick={() => setIsLiked(!isLiked)}
>
  <FontAwesomeIcon icon={faHeart} className="mr-2" />
  {isLiked ? 'No me gusta' : 'Me gusta'}
</button>
        <button className="text-gray-500 focus:outline-none">
          <FontAwesomeIcon icon={faComment} className="text-blue-500 mr-2" />
          Comentarios
        </button>
      </div>
    </li>
  );
};