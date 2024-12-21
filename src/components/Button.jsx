import React, { useEffect, useState } from "react";

function Button({ Icon, color, hoverColor, text }) {
    const [isHovered, setHovered] = useState(false);

    return (
        <button
            className="px-4 py-3 rounded-lg text-white font-semibold text-lg"
            style={{ backgroundColor: isHovered ? hoverColor : color, transition: "background-color 0.3s ease" }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className="flex items-center justify-center gap-1">
                {Icon && <Icon />}
                {text}
            </div>
        </button>
    );
}

export default Button;
