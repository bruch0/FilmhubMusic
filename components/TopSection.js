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
`

const Title = styled.h1`
    font-size: 3vw;
    font-weight: 700;
`

const SearchBarWrapper = styled.div`
    width: 20%;
    padding: 0px 10px;
    border: 1px solid BLACK;
    display: flex;
    align-items: center;
    border-radius: 35px;

    svg {
        height: 30px;
        width: 30px;
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