import React, { useState } from "react";

function Button({
    Icon,
    color,
    hoverColor,
    text,
    onClick,
    textColor = "black",
    hoveredTextColor = "black",
    size = "medium",
}) {
    const [isHovered, setHovered] = useState(false);

    const sizeVariants = {
        small: "px-2 py-1 text-sm",
        medium: "px-4 py-3 text-lg",
        large: "px-6 py-4 text-xl",
    };

    const buttonSize = sizeVariants[size];

    return (
        <button
            className={`${buttonSize} rounded-lg font-semibold`}
            style={{
                color: isHovered ? hoveredTextColor : textColor,
                backgroundColor: isHovered ? hoverColor : color,
                transition: "background-color 0.3s ease",
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={onClick}
        >
            <div className="flex items-center justify-center gap-1">
                {Icon && <Icon />}
                {text}
            </div>
        </button>
    );
}

export default Button;
