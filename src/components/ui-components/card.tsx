import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.cardBackground};
  gap: 1rem;
  border-radius: 5px;
  width: 100%;
  height: 100%;
  padding: 1rem;

  box-shadow: 0px 2px 4px rgba(0, 0, 0, 10.1); /* Initial shadow */
  transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2); /* Raised shadow on hover */
    transform: translateY(-8px); /* Slightly lift the card */
  }

`;
