import React from "react";

export const Story = () => {
    return (
        <div className="mt-4">
          <div className="bg-gray-100 rounded-lg p-5">

            <div className="flex">
              <div className="mr-4">
                <img
                  className="w-16 h-16 rounded-full"
                  src="https://via.placeholder.com/150"
                  alt="Story 1"
                />
                <p className="text-gray-500 mt-2 text-center">a</p>
              </div>
              <div>
                <img
                  className="w-16 h-16 rounded-full"
                  src="https://via.placeholder.com/150"
                  alt="Story 2"
                />
                <p className="text-gray-500 mt-2 text-center">b</p>
              </div>
              {/* Agrega más historias destacadas aquí */}
            </div>
          </div>
        </div>
      );
};

