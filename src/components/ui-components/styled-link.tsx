import React from "react";
import styled from "styled-components";

const LinkContainer = styled.a`
  text-decoration: none;
  position: relative;
  color: ${({ theme }) => theme.textPrimary};
  padding-bottom: 2px;

  &:visited {
    color: ${({ theme }) => theme.textPrimary};
  }

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    opacity: 0.7;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.linkTextHover};
    bottom: 0;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.2s ease-in-out;
  }

  &:hover::before {
    transform-origin: left;
    transform: scaleX(1);
  }

  &:hover {
    color: ${({ theme }) => theme.linkTextHover};
  }
`;

export const StyledLink = ({
  href,
  target,
  children,
}: {
  href: string;
  target?: string;
  children: React.ReactNode;
}) => {
  return (
    <LinkContainer href={href} target={target}>
      {children}
    </LinkContainer>
  );
};
