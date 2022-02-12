import { useEffect, useState } from "react"
import styled from "styled-components"

import GenreRow from "./GenreRow"
import { getTopSongs } from "../service/api"

export default function RowsContainer({filter}) {
  const [musics, setMusics] = useState([]);
  const [musicPerGenre, setMusicPerGenre] = useState([]);

  useEffect((() => {
    setMusics(getTopSongs().feed.results);

    const hashMap = {};

    musics.map((music) => {
      const genres = music.genres;

      genres.forEach((genre) => {
        hashMap[genre.genreId] = hashMap[genre.genreId] ? {title: genre.name, musics: [...hashMap[genre.genreId].musics, music]} : {title: genre.name, musics: [music]}
      })
    })

    setMusicPerGenre(hashMap);
  }), [])

  return (
    <Container>
      {Object.keys(musicPerGenre).map((key) => <GenreRow genre={musicPerGenre[key].title} musics={musicPerGenre[key].musics} filter={filter} />)}
    </Container>
  )
}

const Container = styled.section`
    width: 100%;
    height: auto;
    padding: 0px 5%;
`