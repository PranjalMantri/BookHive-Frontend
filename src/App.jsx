import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ReadingSummaryCard from "./components/ReadinSummaryCard";
import { FiBookOpen } from "react-icons/fi";
import { MdFileDownloadDone } from "react-icons/md";
import { FaArrowTrendUp } from "react-icons/fa6";
import getMonth from "./helper/getMonth";
import { darkBlue, green, purple } from "./colors";
import Signup from "./components/forms/Signup";
import Signin from "./components/forms/Signin";

function App() {
    const [isSignupOpen, setSignupOpen] = useState(false);
    const [isSigninOpen, setSigninOpen] = useState(false);

    const openSignup = () => {
        setSignupOpen(true);
        setSigninOpen(false);
    };

    const openSignin = () => {
        setSigninOpen(true);
        setSignupOpen(false);
    };

    const closeModals = () => {
        setSignupOpen(false);
        setSigninOpen(false);
    };

    const month = getMonth();

    return (
        <>
            <div className="h-screen w-full bg-gray-100">
                <div>
                    <Navbar onClick={openSignup} />
                </div>
                <div className="py-12 w-[80%] mx-[10%]">
                    <div className="py-4 text-2xl font-semibold">Reading Summary</div>
                    {isSignupOpen && <Signup isOpen={isSignupOpen} onClose={closeModals} openSignIn={openSignin} />}
                    {isSigninOpen && <Signin isOpen={isSigninOpen} onClose={closeModals} openSignup={openSignup} />}

                    <div className="flex flex-row gap-4">
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
