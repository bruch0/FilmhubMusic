import { useEffect, useState } from "react"
import styled from "styled-components"

import GenreRow from "./GenreRow"
import { getTopSongs } from "../service/api"

export default function RowsContainer({filter}) {
  const [loading, setLoading] = useState(true);
  const [musics, setMusics] = useState([]);
  const [musicPerGenre, setMusicPerGenre] = useState([]);

  useEffect(() => {
    getTopSongs().then((response) => {
      setMusics(response.feed.results)
      setLoading(false);
    })

    const hashMap = {};

    musics.map((music) => {
      const genres = music.genres;

      genres.forEach((genre) => {
        hashMap[genre.genreId] = hashMap[genre.genreId] ? {title: genre.name, musics: [...hashMap[genre.genreId].musics, music]} : {title: genre.name, musics: [music]}
      })
    })

    delete hashMap[34]; // It's a genre called 'Music', so it has all the songs

    setMusicPerGenre(hashMap);
  }, [loading])

  if (loading) return 'Loading...'

  return (
    <Container>
      {Object.keys(musicPerGenre).map((key) => <GenreRow key={musicPerGenre[key].title} genre={musicPerGenre[key].title} musics={musicPerGenre[key].musics} filter={filter} />)}
    </Container>
  )
}

const Container = styled.section`
    width: 100%;
    height: auto;
    padding: 0px 5%;
`