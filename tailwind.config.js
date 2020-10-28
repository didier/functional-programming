module.exports = {
  future: {
    standardFontWeights: true,
    defaultLineHeights: true,
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['*.html'],
  theme: {
    extend: {},
  },
  variants: {
    typography: {
      h1: false
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}