import React, { useEffect } from "react";

function ReadingSummaryCard({ Icon, iconsSize, color, cardHeading }) {
    return (
        <div className="h-24 bg-white w-96 shadow-md border-x-2 border-gray-200 rounded-md flex justify-start items-center">
            <div className="w-72 h-16 flex">
                <div className="w-1/4 flex items-center justify-center">
                    {Icon && <Icon size={iconsSize} color={color} />}
                </div>
                <div className="w-3/4">
                    <div className="h-2/5 font-semibold text-lg">{cardHeading}</div>
                    <div className="h-3/5 text-2xl font-bold" style={{ color: `${color}` }}>
                        1
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReadingSummaryCard;
