import React, { useState } from "react";

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      rating: "★★★★☆",
      text: "A 'go to' place for genuine products at reasonable prices. Very much satisfied with their super fast delivery service. Highly recommended and thank you!",
      author: 'My "GO TO" Place',
      name: "Krishaan! R.",
    },
    {
      id: 2,
      rating: "★★★★☆",
      text: "Does what it says, leaves my skin soft and clean.",
      author: "Love, love, love!",
      name: "Liyana L.",
    },
    {
      id: 3,
      rating: "★★★★☆",
      text: "First things first - this smells amazing, makes me want to eat it every time. Secondly, looks great on the lips and is very nourishing.",
      author: "Great look, feel, and care",
      name: "Harini L.",
    },
    {
      id: 4,
      rating: "★★★★☆",
      text: "I've been using this product for a month and I'm amazed at how much it brightened up dark spots on my face and helped maintain moisture.",
      author: "Impressive results",
      name: "Sachini K.",
    },
    {
      id: 5,
      rating: "★★★★☆",
      text: "The best skincare product I've ever used! My skin has never felt better and the glow is absolutely natural and beautiful.",
      author: "Life changing",
      name: "Priya M.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationDirection, setAnimationDirection] = useState("next");

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setAnimationDirection("next");
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setAnimationDirection("prev");
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setAnimationDirection(index > currentIndex ? "next" : "prev");
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const getDisplayTestimonials = () => {
    const leftIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    const centerIndex = currentIndex;
    const rightIndex = (currentIndex + 1) % testimonials.length;

    return [
      { ...testimonials[leftIndex], position: "left" },
      { ...testimonials[centerIndex], position: "center" },
      { ...testimonials[rightIndex], position: "right" },
    ];
  };

  const getAnimationClass = (position) => {
    if (!isAnimating) return "";

    if (animationDirection === "next") {
      switch (position) {
        case "left":
          return "animate-slide-out-left";
        case "center":
          return "animate-slide-center-to-left";
        case "right":
          return "animate-slide-right-to-center";
        default:
          return "";
      }
    } else {
      switch (position) {
        case "left":
          return "animate-slide-left-to-center";
        case "center":
          return "animate-slide-center-to-right";
        case "right":
          return "animate-slide-out-right";
        default:
          return "";
      }
    }
  };

  return (
    <div className="w-full py-16 bg-[#F7B7B2]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl text-gray-900 mb-5">
            Don't take our word for it
          </h1>
        </div>

        <div className="relative">
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 items-center min-h-[250px] relative">
            {getDisplayTestimonials().map((testimonial) => (
              <div
                key={`${testimonial.id}-${testimonial.position}`}
                className={`
                  bg-white shadow-lg p-6 transition-all duration-500 ease-in-out relative
                  ${
                    testimonial.position === "center"
                      ? "scale-105 shadow-xl z-20"
                      : "scale-95 z-10"
                  }
                  ${
                    testimonial.position === "left"
                      ? "md:-mr-10"
                      : testimonial.position === "right"
                      ? "md:-ml-10"
                      : ""
                  }
                  ${getAnimationClass(testimonial.position)}
                `}
              >
                <div className="text-black text-xl mb-4 text-center">
                  {testimonial.rating}
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed text-center text-sm">
                  {testimonial.text}
                </p>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900 text-md mb-1">
                    {testimonial.author}
                  </h3>
                  <p className="text-gray-500 text-sm">{testimonial.name}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isAnimating}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-gray-800 scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                } ${isAnimating ? "opacity-50" : ""}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style>{`
        @keyframes slideOutLeft {
          from { transform: translateX(0) scale(0.95); opacity: 1; }
          to { transform: translateX(-100%) scale(0.95); opacity: 0; }
        }
        @keyframes slideCenterToLeft {
          from { transform: translateX(0) scale(1.05); opacity: 1; }
          to { transform: translateX(-100%) scale(0.95); opacity: 1; }
        }
        @keyframes slideRightToCenter {
          from { transform: translateX(100%) scale(0.95); opacity: 1; }
          to { transform: translateX(0) scale(1.05); opacity: 1; }
        }
        @keyframes slideLeftToCenter {
          from { transform: translateX(-100%) scale(0.95); opacity: 1; }
          to { transform: translateX(0) scale(1.05); opacity: 1; }
        }
        @keyframes slideCenterToRight {
          from { transform: translateX(0) scale(1.05); opacity: 1; }
          to { transform: translateX(100%) scale(0.95); opacity: 1; }
        }
        @keyframes slideOutRight {
          from { transform: translateX(0) scale(0.95); opacity: 1; }
          to { transform: translateX(100%) scale(0.95); opacity: 0; }
        }

        .animate-slide-out-left { animation: slideOutLeft 0.5s ease-in-out forwards; }
        .animate-slide-center-to-left { animation: slideCenterToLeft 0.5s ease-in-out forwards; }
        .animate-slide-right-to-center { animation: slideRightToCenter 0.5s ease-in-out forwards; }
        .animate-slide-left-to-center { animation: slideLeftToCenter 0.5s ease-in-out forwards; }
        .animate-slide-center-to-right { animation: slideCenterToRight 0.5s ease-in-out forwards; }
        .animate-slide-out-right { animation: slideOutRight 0.5s ease-in-out forwards; }
      `}</style>
    </div>
  );
};

export default TestimonialSection;
