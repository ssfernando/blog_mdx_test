mdx = require('@zeit/next-mdx')

const withMDX = mdx({ extension: /\.mdx?$/ })

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx'],
})
