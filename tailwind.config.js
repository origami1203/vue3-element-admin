/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            // 自定义 padding、margin、width 和 height 的间距比例。
            spacing: {
                '100': '25rem'
            }
        },
    },
    plugins: [],
}
