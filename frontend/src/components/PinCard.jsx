import React from "react";
import { Link } from "react-router-dom";

const PinCard = ({ pin }) => {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg relative group cursor-pointer m-2">
      <img src={pin.image.url} alt={pin.title} className="w-full h-auto object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <Link to={`/pin/${pin._id}`} className="text-white bg-red-500 hover:bg-red-700 rounded-full px-4 py-2">
          View Pin
        </Link>
      </div>
    </div>
  );
};

export default PinCard;
