// next.config.js


const withCSS = require('@zeit/next-css')
const withImages = require('next-images')
const compose = require("next-compose")

module.exports = compose([
  [withCSS, {}],
  [withImages, {}],
  {
    target: 'serverless'
  }
])