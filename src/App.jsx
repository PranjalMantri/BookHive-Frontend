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
import BookCard from "./components/BookCard";

function App() {
    const [isSignupOpen, setSignupOpen] = useState(false);
    const [isSigninOpen, setSigninOpen] = useState(false);
    const [isAddBookOpen, setAddBookOpen] = useState(false);

    const books = [
        {
            id: "1",
            title: "The Midnight Library",
            author: "Matt Haig",
            coverUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800",
            totalPages: 304,
            currentPage: 150,
            status: "reading",
            startDate: "2024-03-10",
        },
        {
            id: "2",
            title: "Project Hail Mary",
            author: "Andy Weir",
            coverUrl: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=800",
            totalPages: 496,
            currentPage: 496,
            status: "completed",
            startDate: "2024-02-15",
            completedDate: "2024-03-01",
        },
        {
            id: "3",
            title: "Dune",
            author: "Frank Herbert",
            coverUrl: "https://images.unsplash.com/photo-1495640388908-05fa85288e61?auto=format&fit=crop&q=80&w=800",
            totalPages: 688,
            currentPage: 0,
            status: "want-to-read",
            startDate: "2024-03-15",
        },
    ];

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
                            cardSubtext={1}
                        />
                        <ReadingSummaryCard
                            Icon={FaArrowTrendUp}
                            iconsSize={30}
                            color={purple}
                            cardHeading={`${month} Progress`}
                            cardSubtext={"0 books"}
                        />
                    </div>

                    <div className="space-y-8 mt-8">
                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">Currently Reading</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {books
                                    .filter((book) => book.status === "reading")
                                    .map((book) => (
                                        <BookCard key={book.id} book={book} />
                                    ))}
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">Want to read</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {books
                                    .filter((book) => book.status === "want-to-read")
                                    .map((book) => (
                                        <BookCard key={book.id} book={book} />
                                    ))}
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">Completed</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {books
                                    .filter((book) => book.status === "completed")
                                    .map((book) => (
                                        <BookCard key={book.id} book={book} />
                                    ))}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
