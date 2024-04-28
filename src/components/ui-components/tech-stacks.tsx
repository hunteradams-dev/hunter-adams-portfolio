import styled from "styled-components";

export const BulletContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: auto;
  width: 100%;
  text-align: left;

  ul li::marker {
    content: "🞂";
    font-size: 0.6rem;
    color: ${({ theme }) => theme.bulletMarker};
  }

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }

  ul li span {
    align-items: center;
    display: flex;
    margin-left: 0.25rem;
  }
`;

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100%;
  ul {
    margin-left: 0.25rem;
  }
`;

export const TechStackColumn = ({ items }: { items: string[] }) => {
  return (
    <StyledColumn>
      <ul>
        {items.map((m) => {
          return <StyledListItem text={m} />;
        })}
      </ul>
    </StyledColumn>
  );
};

export const StyledListItem = ({ text }: { text: string }) => {
  return (
    <li>
      <span>{text}</span>
    </li>
  );
};
