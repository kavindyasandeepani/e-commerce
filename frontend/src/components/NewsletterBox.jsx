import React, { useState } from "react";

const NewsletterBox = () => {
  const [email, setEmail] = useState("");

  // 🧠 Handle form submit
  const onSubmitHandler = (event) => {
    event.preventDefault(); // Stop page reload
    console.log("Subscribed Email:", email);
    alert(`Thank you for subscribing, ${email}!`);
    setEmail(""); // Clear input after submit
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="bg-white py-8 flex flex-col sm:flex-row items-center justify-center gap-4 border-t border-gray-200 px-4"
    >
      {/* Text */}
      <p className="text-gray-700 text-lg text-center sm:text-left">
        Subscribe & be the first to receive new releases, special offers, and more
      </p>

      {/* Input + Button */}
      <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-4 py-3 w-64 sm:w-80 outline-none"
          required
        />
        <button
          type="submit"
          className="px-6 py-3 bg-[#F6B8B8] text-gray-800 font-medium hover:bg-[#eaa3a3] transition-colors"
        >
          Subscribe
        </button>
      </div>
    </form>
  );
};

export default NewsletterBox;
