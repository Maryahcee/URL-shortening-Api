module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'Cyan': 'hsl(180, 66%, 49%)',
        'dark-violet': 'hsl(257, 27%, 26%)',
        'gray': 'hsl(0, 0%, 75%)',
        'grayish-violet': 'hsl(257, 7%, 63%)',
        'very-dark-blue': 'hsl(255, 11%, 22%)',
        'very-dark-violet': 'hsl(260, 8%, 14%)'
      },
      fonts: {
       'Poppins': ['Poppins', 'Georgia'],
      },
      backgroundImage: {
        'boost-desktop': "url('/src/assets/images/bg-boost-desktop.svg')",
        'shorten-desktop': "url('/src/assets/images/bg-shorten-desktop.svg')",
      },
    },
  },
  plugins: [],
}
