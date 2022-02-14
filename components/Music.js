import styled from "styled-components"

export default function Music({name, artist, url, image}) {
  return (
      <Wrapper href={url} target='_blank'>
          <AlbumImage src={image} />
          <AlbumName>{name}</AlbumName>
          <ArtistName>{artist}</ArtistName>
      </Wrapper>
  )
}

const Wrapper = styled.a`
    width: 13%;
    min-width: 13%;
    margin: 0px 15px 0px 0px;

    :last-of-type {
        margin: 0px;
    }

    @media (max-width: 1000px) {
        width: 25%;
        min-width: 25%;
    }

    @media (max-width: 600px) {
        width: 60%;
        min-width: 60%;
    }
`

const AlbumImage = styled.img`
    width: 100%;
    margin-bottom: 10px;
`

const AlbumName = styled.h3`
    font-weight: 500;
    font-size: 1.5vw;
    margin-bottom: 10px;
    color: black;

    @media (max-width: 1000px) {
        font-size: 3vw;
    }

    @media (max-width: 600px) {
        font-size: 3vw;
    }
`

const ArtistName = styled.h3`
    font-weight: 500;
    font-size: 1.2vw;
    color: black;

    @media (max-width: 1000px) {
        font-size: 2vw;
    }

    @media (max-width: 600px) {
        font-size: 2.5vw;
    }
`