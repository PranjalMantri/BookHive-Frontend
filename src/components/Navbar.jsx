import React from "react";
import { RiBookShelfLine } from "react-icons/ri";
import { darkBlue, lightBlue } from "../colors";
import { IoIosAddCircleOutline } from "react-icons/io";
import Button from "./Button";

function Navbar() {
    return (
        <div className="h-20 w-full bg-white flex items-center px-16 justify-between border-2 border-gray-200 shadow-sm">
            <div className="flex flex-row items-center">
                <div>
                    <RiBookShelfLine size={30} color={darkBlue} />
                </div>
                <div className="text-2xl font-bold text-slate-900">BookHive</div>
            </div>
            <div>
                <Button Icon={IoIosAddCircleOutline} color={darkBlue} hoverColor={lightBlue} text={"Add a book"} />
            </div>
        </div>
    );
}

export default Navbar;
