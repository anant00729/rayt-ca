import styled from 'styled-components';

export const Card = styled.div`
  max-width: 1350px;
  margin: 0 auto;
  background: var(--color-primary);
  border-left: 1px solid var(--color-border);
  border-right: 1px solid var(--color-border);
  border-top: 1px solid var(--color-border);
  padding: 3rem 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 3rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 2rem 1.5rem;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--color-secondary);
  margin-bottom: 0.5rem;
`;

export const Desc = styled.p`
  font-size: 0.95rem;
  line-height: 1.65;
  color: var(--color-muted);
  margin-bottom: 1.25rem;
`;

export const ToggleWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const ToggleLabel = styled.span`
  font-size: 0.8rem;
  font-weight: 600;
  color: ${({ $active }) => $active ? 'var(--color-accent)' : 'var(--color-muted)'};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const Toggle = styled.button`
  width: 48px;
  height: 26px;
  border-radius: 13px;
  border: none;
  background: ${({ $on }) => $on ? 'var(--color-accent)' : 'var(--color-border)'};
  cursor: pointer;
  position: relative;
  transition: background 0.25s;

  &::after {
    content: '';
    position: absolute;
    top: 3px;
    left: ${({ $on }) => $on ? '24px' : '3px'};
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: white;
    transition: left 0.25s;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  }
`;

export const DemoArea = styled.div`
  position: relative;
  min-height: 200px;
`;

export const DemoPanel = styled.div`
  border-radius: 10px;
  background: ${({ $bg }) => $bg || 'var(--color-border)'};
  padding: 1.5rem;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  transition: opacity 0.3s;
  overflow: hidden;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      0deg,
      transparent,
      transparent 18px,
      rgba(0,0,0,0.04) 18px,
      rgba(0,0,0,0.04) 19px
    );
  }
`;

export const DemoLabel = styled.span`
  position: relative;
  font-size: 0.7rem;
  font-weight: 700;
  color: rgba(0,0,0,0.25);
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

export const BeforeAfterTag = styled.span`
  position: relative;
  display: inline-block;
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  background: ${({ $active }) => $active ? 'var(--color-accent)' : 'rgba(0,0,0,0.08)'};
  color: ${({ $active }) => $active ? 'white' : 'rgba(0,0,0,0.4)'};
  width: fit-content;
`;
