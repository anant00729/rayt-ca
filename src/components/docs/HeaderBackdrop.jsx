import styled from 'styled-components';

const HeaderBackdrop = styled.div`
  background: var(--color-accent);
  height: ${p => (p.$tall ? '240px' : '96px')};
  margin-top: -96px;
`;

export default HeaderBackdrop;
