import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Button from "../Button";
import { darkBlue, lightBlue } from "../../colors";
import Modal from "./Modal";

function AddBook({ isOpen, onClose }) {
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors, isSubmitting },
    } = useForm({
        defaultValues: {
            currentPage: 0,
            totalPages: 0,
            status: "Want to read",
        },
    });

    async function onSubmit(data) {
        await new Promise((resolve) => setTimeout(resolve, 3000));
        console.log("Submitting the form", data);
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Add a Book</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Form Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Title */}
                    <div>
                        <label htmlFor="title" className="block text-md font-medium text-gray-700">
                            Title
                        </label>
                        <input
                            id="title"
                            type="text"
                            placeholder="e.g., To Kill a Mockingbird"
                            className={`mt-1 p-2 block w-full rounded-md border-2 ${
                                errors.title ? "border-red-500" : "border-gray-300"
                            } shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 sm:text-sm`}
                            {...register("title", {
                                required: "Title of the book is required",
                                minLength: {
                                    value: 3,
                                    message: "Title must be at least 3 characters long",
                                },
                            })}
                        />
                        <p className="text-red-500 text-sm mt-1">{errors.title?.message}</p>
                    </div>

                    {/* Author */}
                    <div>
                        <label htmlFor="author" className="block text-md font-medium text-gray-700">
                            Author
                        </label>
                        <input
                            id="author"
                            type="text"
                            placeholder="e.g., Harper Lee"
                            className={`mt-1 p-2 block w-full rounded-md border-2 ${
                                errors.author ? "border-red-500" : "border-gray-300"
                            } shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 sm:text-sm`}
                            {...register("author", {
                                required: "Author name is required",
                                minLength: {
                                    value: 3,
                                    message: "Author name must be at least 3 characters long",
                                },
                            })}
                        />
                        <p className="text-red-500 text-sm mt-1">{errors.author?.message}</p>
                    </div>

                    {/* Cover URL */}
                    <div>
                        <label htmlFor="coverUrl" className="block text-md font-medium text-gray-700">
                            Cover URL
                        </label>
                        <input
                            id="coverUrl"
                            type="url"
                            placeholder="e.g., https://example.com/cover.jpg"
                            className={`mt-1 p-2 block w-full rounded-md border-2 ${
                                errors.coverUrl ? "border-red-500" : "border-gray-300"
                            } shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 sm:text-sm`}
                            {...register("coverUrl", {
                                required: "Cover URL is required",
                            })}
                        />
                        <p className="text-red-500 text-sm mt-1">{errors.coverUrl?.message}</p>
                    </div>

                    {/* Current Page */}
                    <div>
                        <label htmlFor="currentPage" className="block text-md font-medium text-gray-700">
                            Current Page
                        </label>
                        <input
                            id="currentPage"
                            type="number"
                            placeholder="0"
                            className={`mt-1 p-2 block w-full rounded-md border-2 ${
                                errors.currentPage ? "border-red-500" : "border-gray-300"
                            } shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 sm:text-sm`}
                            {...register("currentPage", {
                                valueAsNumber: true,
                                min: {
                                    value: 0,
                                    message: "Current page cannot be negative",
                                },
                            })}
                        />
                        <p className="text-red-500 text-sm mt-1">{errors.currentPage?.message}</p>
                    </div>

                    {/* Total Pages */}
                    <div>
                        <label htmlFor="totalPages" className="block text-md font-medium text-gray-700">
                            Total Pages
                        </label>
                        <input
                            id="totalPages"
                            type="number"
                            placeholder="0"
                            className={`mt-1 p-2 block w-full rounded-md border-2 ${
                                errors.totalPages ? "border-red-500" : "border-gray-300"
                            } shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 sm:text-sm`}
                            {...register("totalPages", {
                                required: "Total pages is required",
                                valueAsNumber: true,
                                min: {
                                    value: 1,
                                    message: "Total pages must be at least 1",
                                },
                            })}
                        />
                        <p className="text-red-500 text-sm mt-1">{errors.totalPages?.message}</p>
                    </div>

                    {/* Status */}
                    <div>
                        <label htmlFor="status" className="block text-md font-medium text-gray-700">
                            Status
                        </label>
                        <select
                            id="status"
                            className={`mt-1 p-2 block w-full rounded-md border-2 ${
                                errors.status ? "border-red-500" : "border-gray-300"
                            } shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 sm:text-sm`}
                            {...register("status", { required: "Status is required" })}
                        >
                            <option value="Want to read">Want to read</option>
                            <option value="Currently reading">Currently reading</option>
                            <option value="Completed">Completed</option>
                        </select>
                        <p className="text-red-500 text-sm mt-1">{errors.status?.message}</p>
                    </div>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                    <Button
                        text={isSubmitting ? "Adding..." : "Add"}
                        color={darkBlue}
                        hoverColor={lightBlue}
                        textColor="white"
                        hoveredTextColor="white"
                        disabled={isSubmitting}
                    />
                </div>
            </form>
        </Modal>
    );
}

export default AddBook;
