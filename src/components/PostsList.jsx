import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faArrowLeft, faBars } from '@fortawesome/free-solid-svg-icons';
import { Post } from './Post';
export const PostList = () => {



  return (
    <div className="">
      {/* Contenido */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Publicaciones */}
          <div className="md:col-span-2">
            {/* Lista de publicaciones */}
            <ul className="space-y-4">
              {/* Publicación 1 */}
              <Post
                imageUrl="https://via.placeholder.com/500"
                title="Título de la publicación"
                description="Descripción de la publicación"
              />

              {/* Publicación 2 */}
              <Post
                imageUrl="https://via.placeholder.com/500"
                title="Título de la publicación"
                description="Descripción de la publicación"
              />

              <Post
                imageUrl="https://via.placeholder.com/500"
                title="Título de la publicación"
                description="Descripción de la publicación"
              />
              <Post
                imageUrl="https://via.placeholder.com/500"
                title="Título de la publicación"
                description="Descripción de la publicación"
              />

              {/* Agrega más publicaciones aquí */}
            </ul>
          </div>

          {/* Barra lateral */}
        </div>
      </main>
    </div>
  );
};
