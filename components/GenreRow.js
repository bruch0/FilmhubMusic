import styled from "styled-components"

import Music from "./Music"

export default function GenreRow({genre, musics}) {
  return (
      <Wrapper>
        <Genre>{genre}</Genre>
        <Musics>
          {musics.map((music) => <Music name={music.name} artist={music.artistName} url={music.url} image={music.artworkUrl100} />)}
        </Musics>
      </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-bottom: 50px;
`

const Genre = styled.h2`
    width: 100%;
    font-size: 2.5vw;
    font-weight: 500;
    margin-bottom: 20px;
`

const Musics = styled.div`
    display: flex;
    flex-shrink: 0;
    overflow-x: scroll;
    overflow-y: hidden;
    justify-content: start;

    ::-webkit-scrollbar {
      height: 0px;
    }
`