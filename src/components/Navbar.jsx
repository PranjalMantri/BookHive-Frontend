import React from "react";
import { RiBookShelfLine } from "react-icons/ri";

function Navbar() {
    return (
        <div className="h-20 w-full bg-white flex items-center border-2 border-gray-200 shadow-sm">
            <div className="flex flex-row items-center p-10">
                <div>
                    <RiBookShelfLine size={30} color={"#60a5fa"} />
                </div>
                <div className="text-2xl font-bold text-slate-900">BookHive</div>
            </div>
        </div>
    );
}

export default Navbar;
