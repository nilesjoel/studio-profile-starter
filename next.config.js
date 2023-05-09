/** @type {import('next').NextConfig} */

  // This uses phases as outlined here: https://nextjs.org/docs/#custom-configuration
  module.exports = (phase) => {
    
  
    // next.config.js object
    return {
      reactStrictMode: true,
      compiler: {
        styledComponents: true,
      },
      images: {
        domains: ["res.cloudinary.com"],
      }
    }
  }