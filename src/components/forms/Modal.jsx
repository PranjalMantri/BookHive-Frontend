import React from "react";

function Modal({ isOpen, onClose, children }) {
    return (
        <div
            onClick={onClose}
            className={`fixed inset-0 flex justify-center items-center ${
                isOpen ? "visible bg-black/50 z-50" : "invisible"
            }`}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg z-50"
            >
                {children}
            </div>
        </div>
    );
}

export default Modal;
