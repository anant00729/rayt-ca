import styled from 'styled-components';
import { tokens, accentMap } from '../../styles/tokens';

export const ShowcaseWrap = styled.section`
  padding: 2rem 0;
  position: relative;
  overflow: hidden;
`;

export const ShowcaseInner = styled.div`
  position: relative;
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

export const ShowcaseHeader = styled.div`
  text-align: center;
  max-width: 760px;
  margin: 0 auto 3.5rem;
`;

export const ShowcaseEyebrow = styled.span`
  display: inline-block;
  color: ${tokens.sky700};
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 0.75rem;
`;

export const ShowcaseHeadline = styled.h2`
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 900;
  font-size: clamp(2rem, 4vw, 3.25rem);
  line-height: 1.06;
  letter-spacing: -0.02em;
  color: ${tokens.ink900};
  margin: 0 0 1rem;
`;

export const ShowcaseSubtitle = styled.p`
  font-size: 1.05rem;
  color: ${tokens.ink500};
  margin: 0 auto;
  max-width: 620px;
  line-height: 1.6;
`;

export const WidgetGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
  container-type: inline-size;

  @media (max-width: 1080px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 820px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

export const WidgetCard = styled.article`
  background: #fff;
  border: 1px solid ${tokens.border};
  border-radius: ${tokens.radius};
  overflow: hidden;
  box-shadow: ${tokens.shadowSm};
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: ${tokens.shadowLg};
    border-color: ${({ $accent }) => accentMap[$accent]?.edge || tokens.sky200};
  }
`;

export const WidgetPreview = styled.div`
  position: relative;
  aspect-ratio: 16 / 11;
  background: ${({ $accent }) => accentMap[$accent]?.bg || tokens.sky50};
  border-bottom: 1px solid ${tokens.border};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, transparent 40%, rgba(255, 255, 255, 0.35) 100%);
    pointer-events: none;
  }

  img {
    position: relative;
    max-width: 88%;
    max-height: 88%;
    display: block;
    z-index: 1;
  }
`;

export const WidgetBody = styled.div`
  padding: 1.15rem 1.25rem 1.35rem;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  flex: 1;
`;

export const WidgetCategory = styled.span`
  font-size: 0.68rem;
  font-weight: 700;
  color: ${({ $accent }) => accentMap[$accent]?.ink || tokens.sky700};
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

export const WidgetName = styled.h3`
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 800;
  font-size: 1.05rem;
  color: ${tokens.ink900};
  margin: 0;
  letter-spacing: -0.01em;
`;

export const WidgetTagline = styled.p`
  font-size: 0.86rem;
  color: ${tokens.ink700};
  margin: 0.15rem 0 0.5rem;
  font-weight: 600;
`;

export const WidgetDesc = styled.p`
  font-size: 0.83rem;
  color: ${tokens.ink500};
  line-height: 1.55;
  margin: 0;
`;
