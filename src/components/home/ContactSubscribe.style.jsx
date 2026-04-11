import styled from 'styled-components';
import { tokens } from '../../styles/tokens';

export const Wrap = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  padding: 4rem 1.5rem;
`;

export const Inner = styled.div`
  display: grid;
  grid-template-columns: 0.9fr 1.4fr;
  gap: 1.25rem;
  background: transparent;
  border-radius: ${tokens.radiusLg};
  overflow: hidden;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

export const ContactPanel = styled.div`
  background: linear-gradient(160deg, ${tokens.sky700} 0%, ${tokens.ink900} 100%);
  color: #fff;
  padding: 2.75rem 2.25rem;
  border-radius: ${tokens.radiusLg};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: ${tokens.shadowMd};
`;

export const PanelEyebrow = styled.span`
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${tokens.sky100};
`;

export const PanelHeadline = styled.h3`
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 900;
  font-size: clamp(1.5rem, 2.4vw, 2rem);
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin: 0;
`;

export const PanelBody = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  flex: 1;
`;

export const SubscribePanel = styled.div`
  background: #fff;
  border: 1px solid ${tokens.border};
  border-radius: ${tokens.radiusLg};
  padding: 2.75rem 2.25rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  box-shadow: ${tokens.shadowSm};
`;

export const SubscribeHeadline = styled.h3`
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 900;
  font-size: clamp(1.5rem, 2.4vw, 2rem);
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: ${tokens.ink900};
  margin: 0;
`;

export const SubscribeBody = styled.p`
  font-size: 0.92rem;
  line-height: 1.6;
  color: ${tokens.ink500};
  margin: 0;
`;

export const SubscribeForm = styled.form`
  display: flex;
  gap: 0.5rem;
  background: ${tokens.paper2};
  border: 1px solid ${tokens.border};
  border-radius: ${tokens.radiusPill};
  padding: 0.35rem 0.35rem 0.35rem 1.25rem;

  &:focus-within {
    border-color: ${tokens.sky200};
    box-shadow: 0 0 0 4px ${tokens.sky50};
  }

  @media (max-width: 480px) {
    flex-direction: column;
    border-radius: ${tokens.radius};
    padding: 0.75rem;
    gap: 0.75rem;
  }
`;

export const SubscribeInput = styled.input`
  flex: 1;
  border: none;
  background: transparent;
  outline: none;
  font-size: 0.95rem;
  color: ${tokens.ink900};
  font-family: inherit;

  &::placeholder { color: ${tokens.ink300}; }
`;

