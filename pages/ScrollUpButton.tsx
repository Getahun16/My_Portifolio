// components/ScrollUpButton.tsx
import React, { useState, useEffect } from "react";
import { AiOutlineArrowUp } from "react-icons/ai"; // Importing the arrow-up icon from react-icons

const ScrollUpButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // Show or hide the button when scrolling
  const handleScroll = (): void => {
    if (window.scrollY > 300) {
      setIsVisible(true); // Show button after scrolling down 300px
    } else {
      setIsVisible(false); // Hide button when close to the top
    }
  };

  // Scroll to the top
  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll
    });
  };

  // Use useEffect to add the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 md:bottom-10 md:right-10 bg-yellow-500 text-white p-3 md:p-4 rounded-full shadow-lg transition-all hover:scale-105 flex justify-center items-center z-50"
        >
          <AiOutlineArrowUp className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      )}
    </>
  );
};

export default ScrollUpButton;
