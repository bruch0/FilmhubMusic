import styled from "styled-components"
import {FiSearch} from 'react-icons/fi'

export default function TopSection({filter, setFilter}) {
  return (
    <Top>
        <Title>Filmhub Music</Title>
        <SearchBarWrapper>
            <FiSearch />
            <SearchBar value={filter} onChange={(e) => setFilter(e.target.value)} placeholder="Search" />
        </SearchBarWrapper>
    </Top>
  )
}

const Top = styled.section`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    margin: 50px 0px 100px 0px;
    padding: 0px 5%;

    @media (max-width: 600px) {
        flex-direction: column;
    }
`

const Title = styled.h1`
    font-size: 3vw;
    font-weight: 700;

    @media (max-width: 1000px) {
        font-size: 4vw;
    }

    @media (max-width: 600px) {
        font-size: 6vw;
        margin-bottom: 20px;
    }

    @media (max-width: 400px) {
        font-size: 8vw;
    }
`

const SearchBarWrapper = styled.div`
    width: 25%;
    padding: 0px 10px;
    border: 1px solid BLACK;
    display: flex;
    align-items: center;
    border-radius: 35px;

    svg {
        height: 30px;
        width: 30px;
    }

    @media (max-width: 600px) {
        width: 50%;
    }
`;

const SearchBar = styled.input`
    width: 80%;
    height: 100%;
    margin-left: 10px;
    padding: 0px;
    border: 0px;
    font-size: 18px;
    font-family: 'Segoe UI';

    :focus {
        outline: none;
    }
`