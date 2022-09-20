import styled from "styled-components";
import { MouseEvent, ReactNode } from "react";

type ButtonProps = {
  color?: string;
};

const StyledButton = styled.button<ButtonProps>`
  background-color: ${({ color }) => color || "#135dd8"};
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  appearance: none;
  border-radius: 10%;
  padding: 8px;
  color: #fff;
`;

type Props = {
  children: ReactNode;
  color?: string;
  type?: "button" | "submit" | "reset" | undefined;
  id?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
};

export const Button = ({ children, color, type, id, onClick }: Props) => {
  return (
    <StyledButton type={type} {...{ color }} id={id} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
