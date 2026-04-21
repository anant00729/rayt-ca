import styled from 'styled-components';
import { tokens } from '../../styles/tokens';

export const Page = styled.div`
  min-height: 100vh;
  background: transparent;
  color: ${tokens.ink900};
  font-family: 'Nunito Sans', sans-serif;
`;

export const Content = styled.main`
  position: relative;
  z-index: 1;
`;
