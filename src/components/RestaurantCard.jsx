import { FaClock, FaStar } from "react-icons/fa";
import { MdDeliveryDining } from "react-icons/md";
import { Link } from "react-router-dom";

const RestaurantCard = ({ data }) => {
  return (
    <Link
      className="shadow rounded-lg overflow-hidden hover:bg-gray-200 hover:shadow-lg cursor-pointer transition relative"
      to={`/restaurant/${data.id}`}
    >
      <div className="bg-red-500 p-1 px-3 text-sm absolute end-1 top-1 rounded-md text-white ">
        {data.distance} km uzaklıkta
      </div>
      <img className="w-full object-contain" src={data.photo} alt="" />
      <div className="p-3">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl md:text-xl font-semibold">{data.name}</h3>
          <p className="flex items-center text-red-500 gap-2">
            <FaStar />
            {data.rating}
          </p>
        </div>

        <p className="text-sm my-3 text-gray-500">
          <span>{data.minPrice} TL minimum</span>
        </p>

        <div className="flex gap-4 justify-between items-center">
          <p className="flex gap-2 items-center font-semibold">
            <FaClock className="text-red-500" />
            <span className="text-gray-500">{data.estimatedDelivery} dk.</span>
          </p>
          {data.isDeliveryFree && (
            <p className="flex gap-2 items-center">
              <MdDeliveryDining className="text-red-500" />

              <span className="font-bold text-sm text-gray-500">Ücretsiz</span>
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
