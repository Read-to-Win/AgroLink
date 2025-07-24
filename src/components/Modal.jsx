import React, { useEffect } from "react";

const Modal = ({ isOpen, onClose, title, children }) => {
  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#CC000000] h-[100vh] w-[100vw]"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-xl max-w-5xl h-[80%] w-full p-6 relative transform transition-all scale-100 opacity-100 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {title && <h2 className="text-xl font-semibold mb-4">{title}</h2>}
        {children}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default Modal;
