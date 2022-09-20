import styled from "styled-components";
import { ReactNode } from "react";

const Layout = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

type Props = {
  children: ReactNode;
};

const Top = ({ children }: Props) => {
  return <Layout>{children}</Layout>;
};

export default Top;
