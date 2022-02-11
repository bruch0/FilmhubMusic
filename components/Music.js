import styled from "styled-components"

export default function Music() {
  return (
      <Wrapper>
          <AlbumImage src="https://is5-ssl.mzstatic.com/image/thumb/Music116/v4/e6/52/54/e6525474-f011-257e-04b7-12ecbae264e1/810043689519.jpg/100x100bb.jpg" />
          <AlbumName>Album name</AlbumName>
          <ArtistName>Artist name</ArtistName>
      </Wrapper>
  )
}

const Wrapper = styled.a`
    width: 13%;
    min-width: 13%;
    background-color: blue;
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
`

const ArtistName = styled.h3`
    font-weight: 500;
    font-size: 18px;
`