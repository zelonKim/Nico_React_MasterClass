/** @type {import('next').NextConfig} */

const API_KEY = process.env.API_KEY

module.exports = {
  reactStrictMode: true,

  async redirects() { // 유저에게 URL의 변화를 보여줌.
    return [
      {
        source: "/contact/:hello",
        destination: "/form/:hello",
        permanent: false,
      }
    ]
  },

 async rewrites() { // 유저에게 URL의 변화를 보여주지 않음.
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      },
/*       {
        source:"api/movies/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`
      } */
    ]
  } 
}