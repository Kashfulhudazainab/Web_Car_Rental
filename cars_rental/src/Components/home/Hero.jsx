// src/pages/Home.jsx
import React, { useState } from "react";
import "../../index.css"; // Ensure global styles are imported
import hero_img from "../../assets/hero_img.jpeg";

export default function Hero() {
  const [pickup, setPickup] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching rentals at ${pickup} from ${startDate} to ${endDate}`);
  };

  return (
 
<div>

      <section
        className="relative bg-cover bg-center h-[500px] flex items-center justify-center"
        style={{ backgroundImage: `url(${hero_img})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="font-poppins text-4xl sm:text-5xl font-bold mb-4">
            Find Your Perfect Ride
          </h1>
          <p className="font-roboto text-lg sm:text-xl mb-6">
            Browse and book your favorite cars in seconds
          </p>

          {/* Search Form */}
         <form
  onSubmit={handleSearch}
  className="flex flex-col sm:flex-row gap-4 justify-center items-start max-w-4xl mx-auto"
>
  {/* Pickup Location */}
  <div className="flex flex-col w-full sm:w-1/3">
    <label className="font-poppins text-sm mb-1 text-blue-800 dark:text-blue-200">
      Pickup Location
    </label>
    <input
      type="text"
      placeholder="Enter city or location"
      value={pickup}
      onChange={(e) => setPickup(e.target.value)}
      className="rounded-lg border border-gray-300 dark:border-gray-600 p-3 w-full focus:outline-none focus:ring-2
                 focus:ring-blue-600 dark:focus:ring-green-500 transition duration-300 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800"
      required
    />
  </div>

  {/* Start Date */}
  <div className="flex flex-col w-full sm:w-1/3">
    <label className="font-poppins text-sm mb-1 text-blue-800 dark:text-blue-200">
      Start Date
    </label>
    <input
      type="date"
      value={startDate}
      onChange={(e) => setStartDate(e.target.value)}
      className="rounded-lg border border-gray-300 dark:border-gray-600 p-3 w-full focus:outline-none focus:ring-2
                 focus:ring-blue-600 dark:focus:ring-green-500 transition duration-300 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800"
      required
    />
  </div>

  {/* End Date */}
  <div className="flex flex-col w-full sm:w-1/3">
    <label className="font-poppins text-sm mb-1 text-blue-800 dark:text-blue-200">
      End Date
    </label>
    <input
      type="date"
      value={endDate}
      onChange={(e) => setEndDate(e.target.value)}
      className="rounded-lg border border-gray-300 dark:border-gray-600 p-3 w-full focus:outline-none focus:ring-2
                 focus:ring-blue-600 dark:focus:ring-green-500 transition duration-300 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800"
      required
    />
  </div>

  {/* Search Button */}
  <div className="w-full sm:w-1/3 flex flex-col justify-end mt-2 sm:mt-6">
    <button
      type="submit"
      className="primary w-full p-3 h-full flex items-center justify-center"
    >
      Search
    </button>
  </div>
</form>

        </div>
      </section>
    </div>
  );
}
