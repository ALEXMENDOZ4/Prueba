import styled from "styled-components";

export const Form = styled.form`
  span.icon {
    svg {
      font-size: 3rem;
      cursor: pointer;
      
      &:hover{
        opacity: .5;
      }
    }
  }

  h2 {
    text-align: center;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  input[type="date"],
  input[type="text"] {
    width: 100%;
    max-width: 300px;
  }

  input {
    padding: 1rem;
    font-size: 1.2rem;
    border-radius: 0.5rem;
    outline: none;
    border: 2px solid #707070;

    &:focus {
      border: 2px solid #0ab4d8;
    }
  }

  div.contentInput {
  }

  p {
    color: #e20000;
    font-weight: 600;
    margin: 0 0.5rem;
    white-space: nowrap;
  }

  div.align {
    display: flex;
    align-items: center;

    span {
      margin-right: 0.5rem;
    }

    label {
      margin: 0 0.5rem;
    }
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 300px 300px;
  gap: 1rem;
`;

export const ContentButton = styled.div`
  margin-top: 1rem;

  button {
    padding: 1rem;
    border: 0;
    border-radius: 0.5rem;
    background-color: #0ab4d8;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: 500;
    transition: all 0.2s ease-in-out;
    width: 100%;
    color: white;
    font-weight: 800;

    &:hover {
      transform: scale(1.1);
      opacity: 0.7;
    }
  }
`;
