import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ReadingSummaryCard from "./components/ReadinSummaryCard";
import { FiBookOpen } from "react-icons/fi";
import { MdFileDownloadDone } from "react-icons/md";
import { FaArrowTrendUp } from "react-icons/fa6";
import { HiOutlinePlusCircle } from "react-icons/hi";
import getMonth from "./helper/getMonth";
import { darkBlue, lightBlue, green, purple } from "./colors";
import Signup from "./components/forms/Signup";
import Signin from "./components/forms/Signin";
import Button from "./components/Button";
import AddBook from "./components/forms/AddBook";

function App() {
    const [isSignupOpen, setSignupOpen] = useState(false);
    const [isSigninOpen, setSigninOpen] = useState(false);
    const [isAddBookOpen, setAddBookOpen] = useState(false);

    const openSignup = () => {
        setSignupOpen(true);
        setSigninOpen(false);
    };

    const openSignin = () => {
        setSigninOpen(true);
        setSignupOpen(false);
    };

    const openAddBookModal = () => {
        setAddBookOpen(true);
    };

    const closeModals = () => {
        setSignupOpen(false);
        setSigninOpen(false);
        setAddBookOpen(false);
    };

    const month = getMonth();

    return (
        <>
            <div className="h-screen w-full bg-gray-100">
                <div>
                    <Navbar onClick={openSignup} />
                </div>
                <div className="py-12 w-[80%] mx-[10%]">
                    <div className="flex flex-row justify-between py-4">
                        <div className="py-4 text-2xl font-semibold">Reading Summary</div>
                        <Button
                            Icon={HiOutlinePlusCircle}
                            iconsSize={30}
                            color={darkBlue}
                            hoverColor={lightBlue}
                            text={"Add a book"}
                            textColor={"white"}
                            hoveredTextColor={"white"}
                            onClick={openAddBookModal}
                        />
                    </div>
                    {isSignupOpen && <Signup isOpen={isSignupOpen} onClose={closeModals} openSignIn={openSignin} />}
                    {isSigninOpen && <Signin isOpen={isSigninOpen} onClose={closeModals} openSignup={openSignup} />}
                    {isAddBookOpen && <AddBook isOpen={isAddBookOpen} onClose={closeModals} />}

                    <div className="flex flex-row gap-4 justify-between">
                        <ReadingSummaryCard
                            Icon={FiBookOpen}
                            iconsSize={30}
                            color={darkBlue}
                            cardHeading={"Currently Reading"}
                            cardSubtext={1}
                        />
                        <ReadingSummaryCard
                            Icon={MdFileDownloadDone}
                            iconsSize={30}
                            color={green}
                            cardHeading={"Total Completed"}
                            cardSubtext={3}
                        />
                        <ReadingSummaryCard
                            Icon={FaArrowTrendUp}
                            iconsSize={30}
                            color={purple}
                            cardHeading={`${month} Progress`}
                            cardSubtext={"0 books"}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
