import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ReadingSummaryCard from "./components/ReadinSummaryCard";
import { FiBookOpen } from "react-icons/fi";
import { MdFileDownloadDone } from "react-icons/md";
import { FaArrowTrendUp } from "react-icons/fa6";
import getMonth from "./helper/getMonth";
import { darkBlue, green, purple } from "./colors";
import Modal from "./components/Modal";
import Signup from "./components/forms/Signup";

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const month = getMonth();

    return (
        <>
            <div className="h-screen w-full bg-gray-100">
                <div>
                    <Navbar onClick={openModal} />
                </div>
                <div className="py-12 w-[80%] mx-[10%]">
                    <div className="py-4 text-2xl font-semibold">Reading Summary</div>
                    {isModalOpen && <Signup isOpen={isModalOpen} onClose={closeModal} />}

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
