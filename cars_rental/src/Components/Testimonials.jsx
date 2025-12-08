import React, { useState } from "react";

// Sample testimonial data
const testimonialsData = [
  {
    id: 1,
    name: "Alice Johnson",
    role: "Designer",
    text: "This service is amazing! Highly recommended.",
    avatar: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg", // replace with your image path
  },
  {
    id: 2,
    name: "Bob Smith",
    role: "Developer",
    text: "A truly professional experience from start to finish.",
    avatar: "https://media.istockphoto.com/id/1372065700/photo/portrait-of-a-confident-young-businessman-working-in-a-modern-office.jpg?s=612x612&w=0&k=20&c=oPRp9aiGEb_00Y0Q_eR40MiOisM2eFfeP7lDf0IqJDw=",
  },
  {
    id: 3,
    name: "Clara Lee",
    role: "Product Manager",
    text: "The team exceeded my expectations in every way.",
    avatar: "https://img.freepik.com/free-photo/cheerful-good-looking-young-woman-wearing-white-shirt-with-blonde-hair-smiling-pleasantly-while-receiving-some-positive-news-pretty-girl-looking-with-joyful-smile_176420-13579.jpg?semt=ais_se_enriched&w=740&q=80",
  },
  {
    id: 4,
    name: "David Kim",
    role: "Entrepreneur",
    text: "Fantastic results and very responsive support.",
    avatar: "https://i.pinimg.com/236x/3d/74/f3/3d74f3bf49034c74b7dd2f804ca9458d.jpg",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="p-6 bg-gray-100 dark:bg-gray-800">
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
        Testimonials
      </h2>

      {/* Desktop grid */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonialsData.map((t) => (
          <div
            key={t.id}
            className="p-4 bg-white dark:bg-gray-700 rounded shadow"
          >
            <img
              src={t.avatar}
              alt={t.name} // ✅ Proper alt for accessibility
              className="w-16 h-16 rounded-full mb-2"
            />
            <p className="text-gray-700 dark:text-gray-200 mb-2">{t.text}</p>
            <p className="font-bold text-gray-900 dark:text-gray-100">{t.name}</p>
            <p className="text-sm text-gray-500 dark:text-gray-300">{t.role}</p>
          </div>
        ))}
      </div>

      {/* Mobile carousel */}
      <div className="md:hidden relative mt-6">
        <div className="p-4 bg-white dark:bg-gray-700 rounded shadow text-center">
          <img
            src={testimonialsData[currentIndex].avatar}
            alt={testimonialsData[currentIndex].name} // ✅ Proper alt
            className="w-16 h-16 rounded-full mx-auto mb-2"
          />
          <p className="text-gray-700 dark:text-gray-200 mb-2">
            {testimonialsData[currentIndex].text}
          </p>
          <p className="font-bold text-gray-900 dark:text-gray-100">
            {testimonialsData[currentIndex].name}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            {testimonialsData[currentIndex].role}
          </p>
        </div>
        <button
          onClick={prevTestimonial}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 dark:bg-gray-600 p-2 rounded-full"
        >
          {"<"}
        </button>
        <button
          onClick={nextTestimonial}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 dark:bg-gray-600 p-2 rounded-full"
        >
          {">"}
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
