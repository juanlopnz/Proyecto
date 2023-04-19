import React, { useState } from "react";

export const EditProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [avatar, setAvatar] = useState("https://via.placeholder.com/150");


  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleBioChange = (e) => {
    setBio(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setAvatar(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-xl mx-auto my-10 bg-white rounded-md shadow-md">
      <h1 className="text-3xl font-bold text-center py-4 bg-white rounded-t-md">Editar perfil</h1>
      <form onSubmit={handleSubmit} className="p-4">
        <div className="mb-4">
        <div className="flex flex-col items-center ">
      <div className="relative">
        <img
          className="w-30 h-30 m-4 rounded-full cursor-pointer"
          src={avatar}
          alt="Profile Avatar"
        />
        <label
  className="absolute bottom-0 right-0 w-8 h-8 bg-blue-500 rounded-full flex justify-center items-center cursor-pointer"
  htmlFor="avatar"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 text-white"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M15.146 3.146a2 2 0 00-2.828 0l-8 8a2 2 0 000 2.828l4 4a2 2 0 002.828 0l8-8a2 2 0 000-2.828l-4-4zM5 14.414l-2.707.293.293-2.707L11.586 6 14 8.414l-7.414 7.414z"
      clipRule="evenodd"
    />
  </svg>
  <input
    id="avatar"
    name="avatar"
    type="file"
    className="hidden"
    onChange={handleAvatarChange}
  />
</label>

       
      </div>
    </div>


          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Username
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="name"
            value={name}
            onChange={handleNameChange}
            placeholder="ejemploUserActual"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="correo_Actual@gmail.com"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="bio">
            Biografía
          </label>
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="bio"
            value={bio}
            onChange={handleBioChange}
            placeholder=":)"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition duration-300 mr-7"
        >
          Guardar cambios
        </button>
        <button
          type="submit"
          className="bg-red-500 hover:bg-blue-600 text-white font-bold py-2 px-5 rounded-md transition duration-300 mr-4"
        >
          Cancelar 
        </button>
      </form>
    </div>
  );
};