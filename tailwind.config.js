module.exports = {
  future: {
    standardFontWeights: true,
    defaultLineHeights: true,
    removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {
    content: [
      '**/**/*.html',
      'dist/index.html',
      '*.html',
      'src/index.html'
    ],
    options: {
      whitelist: ['mx-auto', 'px-4'],
    }},
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