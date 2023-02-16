import styled from "styled-components";
import { Link } from "react-router-dom";

export const Content = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #ECECEC;

  h1{
    margin-top: 2rem;
    color: #707070;
    font-size: 2.5rem;
  }

  ul {
    list-style-type: none;
  }

  div.center{
    display: flex;
    justify-content: center;
    gap: 5rem;
    margin: 1rem 0 0 0;
  }
`;


export const A = styled(Link)`
    text-decoration: none;
    color: #707070;
    font-size: 2rem;

    &:hover{
        opacity: .5;
        text-decoration: underline;
    }
`;