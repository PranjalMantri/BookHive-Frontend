import { lightBlue } from "./src/colors";

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                darkBlue: "#1d4ed8",
                lightBlue: "#3b82f6",
            },
        },
    },
    plugins: [],
};
