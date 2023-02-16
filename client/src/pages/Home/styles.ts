import styled from "styled-components";

export const Button = styled.button`
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
  white-space: nowrap;

  &:hover {
    transform: scale(1.1);
    opacity: 0.7;
  }
`;