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
`

const AlbumImage = styled.img`
    width: 100%;
    margin-bottom: 10px;
`

const AlbumName = styled.h3`
    font-weight: 500;
    font-size: 22px;
    margin-bottom: 10px;
    color: black;
`

const ArtistName = styled.h3`
    font-weight: 500;
    font-size: 18px;
    color: black;
`