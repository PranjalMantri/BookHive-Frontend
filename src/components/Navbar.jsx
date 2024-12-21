import React, { useEffect, useState } from "react";
import { RiBookShelfLine } from "react-icons/ri";
import { darkBlue, lightBlue } from "../colors";
import Button from "./Button";

function Navbar({ onClick }) {
    return (
        <div className="h-20 w-full bg-white flex items-center px-16 justify-between border-2 border-gray-200 shadow-sm">
            <div className="flex flex-row items-center">
                <div>
                    <RiBookShelfLine size={30} color={darkBlue} />
                </div>
                <div className="text-2xl font-bold text-slate-900">BookHive</div>
            </div>
            <div>
                <Button
                    color={darkBlue}
                    hoverColor={lightBlue}
                    text={"Get Started"}
                    textColor={"white"}
                    hoveredTextColor={"white"}
                    onClick={onClick}
                />
            </div>
        </div>
    );
}

export default Navbar;
