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