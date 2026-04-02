import styled from 'styled-components';

export const Page = styled.div`
  min-height: 100vh;
  background:
    repeating-linear-gradient(
      -45deg,
      var(--color-border),
      var(--color-border) 1px,
      transparent 1px,
      transparent 8px
    ),
    var(--color-primary);
  background-attachment: fixed;
`;
