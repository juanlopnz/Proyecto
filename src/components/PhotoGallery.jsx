import React from 'react'

export const PhotoGallery = () => {
  
  const images = [
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
  ];

  return (
    <div className="grid grid-cols-3 gap-1">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Instagram image ${index}`}
          className="rounded-lg object-fill h-48 w-96"
        />
      ))}
    </div>
  );
};

//Mosaico de fotos

