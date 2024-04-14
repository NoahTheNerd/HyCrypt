/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,ts,svelte}'],
    theme: {
        fontFamily: {
            sans: ['Montserrat','sans-serif'],
            minecraft: ['Minecraft Seven', 'monospace']
        },
        extend: {
            colors: {
                indigo: {
                    '50': '#f2f2ff',
                    '100': '#e8e8ff',
                    '200': '#d4d3ff',
                    '300': '#b4b0ff',
                    '400': '#8e84ff',
                    '500': '#6a52ff',
                    '600': '#562df9',
                    '700': '#481ce5',
                    '800': '#3d17c0',
                    '900': '#33159d',
                    '950': '#1c0a6b',
                },
                minecraft: {
                    0: '#000000',
                    1: '#0000AA',
                    2: '#00AA00',
                    3: '#00AAAA',
                    4: '#AA0000',
                    5: '#AA00AA',
                    6: '#FFAA00',
                    7: '#AAAAAA',
                    8: '#555555',
                    9: '#5555FF',
                    a: '#55FF55',
                    b: '#55ffff',
                    c: '#ff5555',
                    d: '#ff55ff',
                    e: '#ffff55',
                    f: '#ffffff'
                }
            }
        },
    },
    plugins: [],
}

