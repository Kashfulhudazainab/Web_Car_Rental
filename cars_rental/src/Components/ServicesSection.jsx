import React from "react";

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="py-16 bg-white dark:bg-[#1E1E1E] transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2
            className="text-3xl md:text-4xl font-bold font-['Poppins']
                       text-[#333333] dark:text-[#F5F5F5]"
          >
            Why Rent With Us
          </h2>

          <p
            className="mt-3 text-sm md:text-base font-['Roboto']
                       text-[#555555] dark:text-[#CCCCCC]"
          >
            Enjoy a smooth and hassle-free car rental experience with options
            suited to your needs.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* Card 1: Easy Booking */}
          <div
            className="bg-[#F5F5F5] dark:bg-[#2C2C2C]
                       rounded-xl shadow-md p-6
                       transition-colors duration-300"
          >
            <div
              className="mb-4 inline-flex items-center justify-center
                         w-12 h-12 rounded-full
                         bg-[#1E90FF] dark:bg-[#32CD32]"
            >
              <span className="text-xl text-white">⚡</span>
            </div>

            <h3
              className="text-lg font-semibold font-['Poppins']
                         text-[#333333] dark:text-[#F5F5F5]"
            >
              Easy Booking
            </h3>

            <p
              className="mt-2 text-sm font-['Roboto']
                         text-[#555555] dark:text-[#DDDDDD]"
            >
              Book your car in just a few clicks through our user-friendly
              platform.
            </p>
          </div>

          {/* Card 2: Wide Selection */}
          <div
            className="bg-[#F5F5F5] dark:bg-[#2C2C2C]
                       rounded-xl shadow-md p-6
                       transition-colors duration-300"
          >
            <div
              className="mb-4 inline-flex items-center justify-center
                         w-12 h-12 rounded-full
                         bg-[#1E90FF] dark:bg-[#32CD32]"
            >
              <span className="text-xl text-white">🚗</span>
            </div>

            <h3
              className="text-lg font-semibold font-['Poppins']
                         text-[#333333] dark:text-[#F5F5F5]"
            >
              Wide Selection
            </h3>

            <p
              className="mt-2 text-sm font-['Roboto']
                         text-[#555555] dark:text-[#DDDDDD]"
            >
              Choose from economy, luxury, SUVs, and more to match your travel
              style.
            </p>
          </div>

          {/* Card 3: Affordable Pricing */}
          <div
            className="bg-[#F5F5F5] dark:bg-[#2C2C2C]
                       rounded-xl shadow-md p-6
                       transition-colors duration-300"
          >
            <div
              className="mb-4 inline-flex items-center justify-center
                         w-12 h-12 rounded-full
                         bg-[#1E90FF] dark:bg-[#32CD32]"
            >
              <span className="text-xl text-white">💰</span>
            </div>

            <h3
              className="text-lg font-semibold font-['Poppins']
                         text-[#333333] dark:text-[#F5F5F5]"
            >
              Affordable Pricing
            </h3>

            <p
              className="mt-2 text-sm font-['Roboto']
                         text-[#555555] dark:text-[#DDDDDD]"
            >
              Transparent, competitive pricing with no hidden costs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
