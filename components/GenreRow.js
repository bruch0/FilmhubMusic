import styled from "styled-components"

import Music from "./Music"

export default function GenreRow({genre, musics, filter}) {
  return (
      <Wrapper visible={musics.filter((music) => music.name.toLowerCase().startsWith(filter.toLowerCase())).length}>
        <Genre>{genre}</Genre>
        <Musics>
          {filter ? 
          musics.filter((music) => music.name.toLowerCase().startsWith(filter.toLowerCase()))
          .map((music) => <Music key={music.name} name={music.name} artist={music.artistName} url={music.url} image={music.artworkUrl100} />) 
          :
          musics.map((music) => <Music key={music.name} name={music.name} artist={music.artistName} url={music.url} image={music.artworkUrl100} />)}        </Musics>
      </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-bottom: 50px;
  display: ${props => props.visible ? '' : 'none'};
`

const Genre = styled.h2`
    width: 100%;
    font-size: 2.5vw;
    font-weight: 500;
    margin-bottom: 20px;

    @media (max-width: 1000px) {
        font-size: 3vw;
    }

    @media (max-width: 600px) {
        font-size: 5vw;
    }
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