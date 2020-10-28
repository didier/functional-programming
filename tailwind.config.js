module.exports = {
  future: {
    standardFontWeights: true,
    defaultLineHeights: true,
    removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ['*.html'],
  theme: {
    extend: {},
    typography: (theme) => ({
      default: {
        css: {
          color: theme('colors.gray.900'),
          h1: {
            fontSize: theme('text.6xl'),
          },
        }
      }
    })
  },
  variants: {
    
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}