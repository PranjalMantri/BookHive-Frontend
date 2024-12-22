import React from "react";
import { FiBookOpen } from "react-icons/fi";
import { lightBlue, green, yellow } from "../colors";
import { TiTick } from "react-icons/ti";
import { FaRegClock } from "react-icons/fa";
import { StatusSelect } from "./StatusSelect";

function BookCard({ book }) {
    const progress = Math.round((book.currentPage / book.totalPages) * 100);

    const statusIcon = {
        reading: <FiBookOpen size={30} color={lightBlue} />,
        completed: <TiTick size={30} color={green} />,
        "want-to-read": <FaRegClock size={30} color={yellow} />,
    };

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="aspect-[2/3] relative">
                <img src={book.coverUrl} alt={book.title} className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <div className="text-white">
                        <h3 className="font-bold truncate">{book.title}</h3>
                        <p className="text-sm opacity-90">{book.author}</p>
                    </div>
                </div>
            </div>
            <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                        {statusIcon[book.status]}
                        <StatusSelect
                            status={book.status}
                            onStatusChange={(status) => onStatusChange(book.id, status)}
                        />
                    </div>
                    <span className="text-sm font-medium">{progress}%</span>
                </div>
                {book.status === "reading" && (
                    <div className="space-y-2">
                        <div className="h-2 bg-gray-200 rounded-full">
                            <div
                                className="h-full bg-blue-500 rounded-full transition-all duration-300"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                        <div className="flex justify-between text-sm text-gray-600">
                            <span>Page {book.currentPage}</span>
                            <span>of {book.totalPages}</span>
                        </div>
                        <input
                            type="number"
                            min={0}
                            max={book.totalPages}
                            value={book.currentPage}
                            onChange={(e) => onProgressUpdate(book.id, Number(e.target.value))}
                            className="w-full mt-2 px-3 py-2 border rounded-md"
                            placeholder="Update progress"
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default BookCard;
