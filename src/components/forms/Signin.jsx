import React from "react";
import { useForm } from "react-hook-form";
import Button from "../Button";
import { darkBlue, lightBlue } from "../../colors";
import Modal from "./Modal";

function Signin({ isOpen, onClose, openSignup }) {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm();

    async function onSubmit(data) {
        await new Promise((resolve) => setTimeout(resolve, 3000));
        console.log("Submitting the form", data);
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <h2 className="text-3xl font-semibold mb-4 text-center">Signin</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Email Field */}
                <div>
                    <label className="block text-md font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        placeholder="Email"
                        className="mt-1 p-1 block w-full rounded-md border-2 border-gray-400 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Enter a valid email address",
                            },
                        })}
                    />
                    <div className="text-red-500 text-sm mt-1 min-h-[0.25rem]">{errors.email?.message}</div>
                </div>

                {/* Password Field */}
                <div>
                    <label className="block text-md font-medium text-gray-700">Password</label>
                    <input
                        type="password"
                        placeholder="Password"
                        className="mt-1 p-1 block w-full rounded-md border-2 border-gray-400 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                        {...register("password", {
                            required: "Password is required",
                            minLength: {
                                value: 6,
                                message: "Password must be at least 6 characters",
                            },
                        })}
                    />
                    <div className="text-red-500 text-sm mt-1 min-h-[0.25rem]">{errors.password?.message}</div>
                </div>

                <div className="text-center">
                    <Button
                        text={"Submit"}
                        color={darkBlue}
                        hoverColor={lightBlue}
                        textColor={"white"}
                        hoveredTextColor={"white"}
                    />
                </div>
            </form>

            <div className="text-center mt-4 text-gray-700 text-md">
                <p>
                    Don't have an account?
                    <Button
                        text={"Signup"}
                        onClick={openSignup}
                        size={"small"}
                        textColor={"black"}
                        hoveredTextColor={"blue"}
                    />
                </p>
            </div>
        </Modal>
    );
}

export default Signin;
