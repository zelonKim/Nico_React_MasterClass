import NavBar from '@/components/NavBar'
import Seo from '@/components/Seo'
import Head from "next/head"
import { useEffect, useState } from 'react';

const API_KEY = "f70aaae8b01f1f19bace0a0516051a9c";


export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        )
      ).json()
      setMovies(results)
  })();
 }, [])

  return (
      <div>
          <Seo title="Home" />
          {!movies && <h4>Loading...</h4>}
          {movies?.map((movie) => (
            <div key={movie.id}>
              <h4>{movie.original_title}</h4>
            </div>   
          ))}
      </div>
    )
}
