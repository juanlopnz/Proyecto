import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment } from '@fortawesome/free-solid-svg-icons';

export const Post = ({ imageUrl, title, description }) => {
  return (
    <li className="bg-white p-4 rounded-md shadow-md">
      {/* Imagen de la publicación */}
      <img src={imageUrl} alt="Publicación" className="w-full h-64 object-cover rounded-md" />

      {/* Información de la publicación */}
      <div className="mt-2">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-500">{description}</p>
      </div>

      {/* Botones de Me gusta y Comentarios */}
      <div className="flex justify-between mt-4">
        <button className="text-gray-500 focus:outline-none">
          <FontAwesomeIcon icon={faHeart} className="text-red-500 mr-2" />
          Me gusta
        </button>
        <button className="text-gray-500 focus:outline-none">
          <FontAwesomeIcon icon={faComment} className="text-blue-500 mr-2" />
          Comentarios
        </button>
      </div>
    </li>
  );
};