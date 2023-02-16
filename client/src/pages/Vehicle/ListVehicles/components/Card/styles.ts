import styled from "styled-components";

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  background-color: #ffffff;
  padding: 5rem 2rem;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 0.5rem;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1rem 0;
  width: 100%;
  width: 590px;

  div.title{
    position: absolute;
    right: 50%;
    transform: translate(50%, 40%);
    span{
      font-size: 1.5rem;

      &:hover{
        opacity: .5;
      }
    }
  }

  div.edit {
    position: absolute;
    right: 10%;
    top: 1rem;

    svg {
      font-size: 2rem;
      cursor: pointer;

      &:hover {
        opacity: 0.5;
      }
    }
  }

  div.delete {
    position: absolute;
    right: 3%;
    top: 1rem;

    svg {
      font-size: 2rem;
      cursor: pointer;

      &:hover {
        opacity: 0.5;
      }
    }
  }

  span.title {
    margin-right: 0.5rem;
  }
`;
