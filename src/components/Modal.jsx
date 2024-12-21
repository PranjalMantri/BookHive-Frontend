import React from "react";

function Modal({ isOpen, onClose, children }) {
    return (
        <div
            onClick={onClose}
            className={`fixed inset-0 flex justify-center items-center transition-colors ${
                isOpen ? "visible bg-black/20" : "invisible"
            }`}
        >
            <div
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal content
                className="bg-white p-4 rounded shadow-md"
            >
                {children}
            </div>
        </div>
    );
}

export default Modal;
