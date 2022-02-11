import styled from "styled-components"

export default function GenreRow({genre}) {
  return (
      <>
        <Genre>{genre}</Genre>

      </>
  )
}

const Genre = styled.h2`
    width: 100%;
    font-size: 2.5vw;
    font-weight: 500;
`