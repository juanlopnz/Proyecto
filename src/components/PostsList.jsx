import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment } from '@fortawesome/free-solid-svg-icons';
import { Post } from './Post';
export const PostList = () => {
    return (
      <div className="bg-gray-100 h-screen">
        {/* Encabezado */}
        <header className="bg-white py-4 border-b border-gray-300">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl font-semibold text-center">Aplicacion jl</h1>
          </div>
        </header>
  
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
  
                {/* Agrega más publicaciones aquí */}
              </ul>
            </div>
  
            {/* Barra lateral */}
          </div>
        </main>
      </div>
    );
  };
