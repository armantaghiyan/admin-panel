/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'gray': '#f8f7fa',
                'gray-1': 'rgba(51, 48, 60, 0.87)',
                'gray-2': 'rgba(51, 48, 60, 0.68)',

                'divider': '#e9e8eb',

                'cart': '#ffffff',


                'primary': 'rgb(115, 103, 240)',
                'primary-light': '#edecfd',

                'danger': 'rgb(234, 84, 85)',
                'danger-light': '#fce9e9',

                'success': 'rgb(40, 199, 111)',
                'success-light': '#e4f8ed',

                'warning': 'rgb(255, 159, 67)',
                'warning-light': '#fff3e7',

                'info': 'rgb(0, 207, 232)',
                'info-light': '#dff9fc',

                'secondary': 'rgb(168, 170, 174)',
                'secondary-light': '#f4f4f4',


            },
        },
    },
    plugins: [],
}

