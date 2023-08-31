/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,css}"],
    theme: {
        extend: {
            fontSize: {
                textClamp: "clamp(2rem, 5vw, 50rem)",
            },
            width: {
                imgClamp: "clamp(200px, 50vw, 800px)",
            },
        },
    },
    plugins: [],
}
