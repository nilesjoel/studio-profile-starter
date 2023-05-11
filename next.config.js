/** @type {import('next').NextConfig} */

const {
    PHASE_DEVELOPMENT_SERVER,
    PHASE_PRODUCTION_BUILD,
  } = require('next/constants')
  
  // This uses phases as outlined here: https://nextjs.org/docs/#custom-configuration
  module.exports = (phase) => {
    // when started in development mode `next dev` or `npm run dev` regardless of the value of STAGING environment variable
    const isDev = phase === PHASE_DEVELOPMENT_SERVER
    // when `next build` or `npm run build` is used
    const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1'
    // when `next build` or `npm run build` is used
    const isStaging =
      phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === '1'
  
    console.log(`isDev:${isDev}  isProd:${isProd}   isStaging:${isStaging}`)
  
    const env = {
      NEXTAUTH_URL: (() => {
        if (isDev) return process.env.NEXTAUTH_URL_DEV
        if (isProd) {
          return process.env.NEXTAUTH_URL
        }
      })(),
      NEXTAUTH_API: (() => {
        if (isDev) return process.env.NEXTAUTH_API_DEV
        if (isProd) return process.env.NEXTAUT_API
      })(),
      NEXT_PUBLIC_URL : process.env.NEXT_PUBLIC_URL,
      NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
      GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
      GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET
    }

    return {
      reactStrictMode: true,
      compiler: {
        styledComponents: true,
      },
      images: {
        domains: ["res.cloudinary.com"],
      },
      env,
    }
  }