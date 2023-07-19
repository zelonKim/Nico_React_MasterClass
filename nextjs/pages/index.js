/*
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
        await fetch(`http://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
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
*/

///////////////////////


import NavBar from '@/components/NavBar'
import Seo from '@/components/Seo'
import Head from "next/head"
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';


export default function Home({ results }) {
  const router = useRouter()
  
  const onClick = (id, title) => { 
    router.push({ // id가 1234이고, title이 hello인 경우 http://localhost:3000/movies/1234?title=hello
      pathname: `/movies/${id}`,
      query: {
        title
      },
    },
    `/movies/${id}` // as프로퍼티로서, 브라우저의 URL 주소를 http://localhost:3000/movies/1234로 마스크함.
    )
  }

  return (
      <div className="container">
          <Seo title="Home" />
          
          {results?.map((movie) => (
              <div onClick={() => onClick(movie.id, movie.original_title)} className="movie" key={movie.id}>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                <Link 
                  href={{
                    pathname: `/movies/${movie.id}`,
                    query: {
                      title: movie.original_title
                    }
                    }}
                    as={`/movies/${movie.id}`}>
                  <h4> {movie.original_title} </h4>
                </Link>
              </div>
          ))}
          
        <style jsx>{`
          .container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            padding: 20px;
            gap: 20px;
          }
          .movie img {
            max-width: 100%;
            border-radius: 12px;
            transition: transform 0.2s ease-in-out;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
          }
          .movie:hover img {
            transform: scale(1.05) translateY(-10px);
          }
          .movie h4 {
            font-size: 18px;
            text-align: center;
          }
      `}</style>
      
      </div>
    )
} 


export async function getServerSideProps() {
  const { results } = await (await fetch(`http://localhost:3000/api/movies`)).json();
  
  return ({
    props: {
      results
    }
  })
}