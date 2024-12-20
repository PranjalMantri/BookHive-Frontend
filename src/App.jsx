import React from "react";
import Navbar from "./components/Navbar";
import ReadingSummaryCard from "./components/ReadinSummaryCard";
import { FiBookOpen } from "react-icons/fi";
import { MdFileDownloadDone } from "react-icons/md";
import { FaArrowTrendUp } from "react-icons/fa6";
import getMonth from "./helper/getMonth";

function App() {
    const month = getMonth();

    return (
        <>
            <div className="h-screen w-full bg-gray-100">
                <div>
                    <Navbar />
                </div>
                <div className="flex flex-row gap-4 justify-center pt-10">
                    <ReadingSummaryCard
                        Icon={FiBookOpen}
                        iconsSize={30}
                        color={"#60a5fa"}
                        cardHeading={"Currently Reading"}
                    />
                    <ReadingSummaryCard
                        Icon={MdFileDownloadDone}
                        iconsSize={30}
                        color={"#16a34a"}
                        cardHeading={"Total Completed"}
                    />
                    <ReadingSummaryCard
                        Icon={FaArrowTrendUp}
                        iconsSize={30}
                        color={"#9333ea"}
                        cardHeading={`${month} Progress`}
                    />
                </div>
            </div>
        </>
    );
}

export default App;
