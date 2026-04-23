import styled from 'styled-components';
import { tokens } from '../../styles/tokens';


export const BarWrapper = styled.div`
  display: flex; 
  justify-content: center;
`
export const Bar = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 2px;
  margin: 20px 0px;
  padding: 4px;
  background: rgba(234, 244, 253, 0.55);
  border-radius: 999px;
  max-width: 100%;
  overflow-x: auto;
  scroll-snap-type: x proximity;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);

  &::-webkit-scrollbar { display: none; }
`;

export const Tab = styled.button`
  flex-shrink: 0;
  border: none;
  background: ${({ $active }) => ($active ? tokens.white : 'transparent')};
  color: ${({ $active }) => ($active ? '#3970b2' : tokens.ink500)};
  font-size: 14px;
  font-weight: ${({ $active }) => ($active ? 700 : 500)};
  padding: 8px 18px;
  border-radius: 999px;
  cursor: pointer;
  scroll-snap-align: start;
  box-shadow: ${({ $active }) => ($active ? '0 1px 3px rgba(18, 52, 88, 0.08)' : 'none')};
  transition: background-color 0.25s ease, color 0.2s ease, box-shadow 0.2s ease, font-weight 0.2s ease;
  white-space: nowrap;

  &:hover {
    background: ${({ $active }) => ($active ? tokens.white : 'rgba(255,255,255,0.6)')};
    color: ${({ $active }) => ($active ? '#3970b2' : tokens.ink900)};
  }

  &:focus-visible {
    outline: 2px solid ${tokens.lilacDeep};
    outline-offset: 2px;
  }
`;
