import styled from "styled-components"

export default function TopSection() {
  return (
    <Top>
        <Title>Filmhub Music</Title>
    </Top>
  )
}

const Top = styled.section`
    width: 100%;
    height: auto;
    display: flex;
    margin-top: 50px;
    padding: 0px 5%;
`

const Title = styled.h1`
    font-size: 3vw;
    font-weight: 600;
`