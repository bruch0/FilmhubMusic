import styled from "styled-components"

import GenreRow from "./GenreRow"

export default function RowsContainer() {
  return (
    <Container>
        <GenreRow genre={'Genre name'} />
    </Container>
  )
}

const Container = styled.section`
    width: 100%;
    height: auto;
    padding: 0px 5%;
`