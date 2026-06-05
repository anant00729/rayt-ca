import styled from 'styled-components';
import { tokens } from '../../styles/tokens';

export const RowsWrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 72px;
  align-items: center;
  padding: 64px 0;

  ${({ $flip }) => $flip && `
    > :first-child { order: 2; }
    > :last-child  { order: 1; }
  `}

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
    gap: 40px;
    > :first-child, > :last-child { order: unset !important; }
  }
`;

export const FText = styled.div`
  h2 {
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 900;
    font-size: clamp(2rem, 3.2vw, 3rem);
    line-height: 1.1;
    letter-spacing: -0.025em;
    color: ${tokens.ink900};
    margin: 0 0 1.4rem;
    text-wrap: balance;
  }
  p {
    font-size: 1.2rem;
    color: ${tokens.ink700};
    font-weight: 500;
    line-height: 1.55;
    max-width: 42ch;
    margin: 0 0 2rem;
  }
`;

export const StatCard = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: 0.5rem;
  border: 1px solid ${tokens.borderStrong};
  border-radius: ${tokens.radiusSm};
  padding: 1.3rem 1.8rem 1.3rem 1.5rem;
  margin-bottom: 2rem;
  background: rgba(255, 255, 255, 0.5);
`;

export const StatNum = styled.span`
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 900;
  font-size: 2.6rem;
  color: ${tokens.sky700};
  line-height: 1;
  letter-spacing: -0.02em;
`;

export const StatCap = styled.span`
  color: ${tokens.ink500};
  font-weight: 600;
  font-size: 1rem;
`;

export const Partners = styled.div`
  border: 1px solid ${tokens.border};
  border-radius: ${tokens.radiusSm};
  padding: 1.3rem 1.6rem;
  margin-bottom: 2rem;
  background: rgba(255, 255, 255, 0.6);
  max-width: 460px;
`;

export const PartnersLabel = styled.div`
  font-weight: 800;
  color: ${tokens.ink900};
  margin-bottom: 1rem;
  font-size: 0.95rem;
`;

export const PartnersRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  flex-wrap: wrap;
`;

export const PartnerBrand = styled.span`
  font-weight: 800;
  color: ${tokens.ink700};
  font-size: 1.15rem;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
`;

export const LinkArrow = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  font-weight: 800;
  font-size: 1.02rem;
  color: ${tokens.ink900};
  cursor: pointer;
  text-decoration: none;

  svg {
    width: 20px;
    height: 20px;
    transition: transform 0.2s;
  }
  &:hover svg { transform: translateX(4px); }
`;

/* Visual panel */
export const FPanel = styled.div`
  border-radius: 36px;
  padding: 54px;
  display: grid;
  place-items: center;
  min-height: 460px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: repeating-linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.18) 0 2px,
      transparent 2px 9px
    );
    pointer-events: none;
  }

  ${({ $variant }) => $variant === 'mint'
    ? `background: linear-gradient(150deg, #D3CCF5 0%, #F3F1FC 100%);`
    : `background: linear-gradient(150deg, #BCD8F0 0%, #EAF4FD 100%);`
  }

  @media (max-width: 560px) { padding: 32px; }
`;

/* Phone frame */
export const Phone = styled.div`
  position: relative;
  z-index: 1;
  width: ${({ $wide }) => $wide ? '320px' : '280px'};
  background: #fff;
  border-radius: 34px;
  box-shadow: 0 30px 60px rgba(18, 52, 88, 0.18);
  padding: 18px 16px;
`;

export const PhoneTop = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  color: ${tokens.ink300};
`;

export const FloatBadge = styled.div`
  position: absolute;
  z-index: 2;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: ${({ $wa }) => $wa ? '#25D366' : '#fff'};
  box-shadow: 0 10px 24px rgba(18, 52, 88, 0.18);
  top: 26px;
  right: 30px;

  svg { width: 46px; height: 46px; }
`;

/* Skeleton lines */
export const Sk = styled.span`
  display: block;
  height: 6px;
  border-radius: 4px;
  background: #DCEBF7;
  width: ${({ $w }) => $w || '70%'};
  margin-bottom: ${({ $mb }) => $mb || '0px'};
`;

/* Chat card (Collect) */
export const ChatCard = styled.div`
  border: 1px solid ${tokens.border};
  border-radius: 14px;
  overflow: hidden;
`;

export const ChatProd = styled.div`
  aspect-ratio: 1 / 0.92;
  background: linear-gradient(160deg, #F0E4DC, #E2CcC0);
  display: grid;
  place-items: center;
`;

export const PillName = styled.span`
  background: #fff;
  border-radius: 6px;
  padding: 8px 14px;
  font-weight: 800;
  text-align: center;
  font-size: 0.8rem;
  color: #5a4a40;
  letter-spacing: 0.04em;
  line-height: 1.2;
  box-shadow: ${tokens.shadowSm};
`;

export const ChatPad = styled.div`
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  h5 {
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 900;
    letter-spacing: -0.02em;
    font-size: 1.05rem;
    color: ${tokens.ink900};
    margin: 0 0 4px;
  }
`;

export const LeaveReview = styled.div`
  text-align: center;
  color: ${tokens.sky700};
  font-weight: 800;
  padding-top: 8px;
  border-top: 1px solid ${tokens.border};
  margin-top: 4px;
  font-size: 0.9rem;
`;

/* Video widget (Widgets) */
export const PhoneH5 = styled.h5`
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 900;
  letter-spacing: -0.02em;
  font-size: 1.05rem;
  color: ${tokens.ink900};
  text-align: center;
  margin: 0 0 6px;
`;

export const RatingInline = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  color: ${tokens.ink500};
  font-weight: 700;
  font-size: 0.85rem;
  margin-bottom: 8px;
`;

export const Stars = styled.span`
  display: inline-flex;
  gap: 2px;
  color: #fbb719;
`;

export const StoryFrame = styled.div`
  aspect-ratio: 0.62;
  border-radius: 22px;
  overflow: hidden;
  position: relative;
  background: linear-gradient(160deg, #E7D8C8, #C9B49E);
  margin-top: 8px;
`;

export const PlayBtn = styled.div`
  position: absolute;
  inset: 0;
  margin: auto;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.35);
  backdrop-filter: blur(2px);
  display: grid;
  place-items: center;

  svg { width: 22px; height: 22px; color: #fff; }
`;

export const WhoTag = styled.div`
  position: absolute;
  bottom: 12px;
  left: 0; right: 0;
  text-align: center;
  color: #fff;
  font-weight: 800;
  font-size: 0.8rem;
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
`;

/* Google card (Share) */
export const GCard = styled.div`
  border: 1px solid ${tokens.border};
  border-radius: 14px;
  padding: 12px;
  display: flex;
  gap: 10px;
`;

export const GThumb = styled.div`
  width: 92px;
  aspect-ratio: 1 / 1;
  border-radius: 8px;
  background: linear-gradient(160deg, #EFE7DF, #D8CcC0);
  flex-shrink: 0;
`;

export const GLines = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

export const GRating = styled.span`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.72rem;
  color: ${tokens.ink500};
  font-weight: 700;
  margin-top: 4px;
`;

/* AI reply (AI) */
export const AiRev = styled.div`
  background: ${tokens.paper2};
  border-radius: 14px;
  padding: 14px;
  margin-bottom: 12px;
`;

export const AiReply = styled.div`
  background: #fff;
  border: 1px solid ${tokens.sky200};
  border-radius: 14px;
  padding: 13px;
  box-shadow: ${tokens.shadowSm};
`;

export const AiTags = styled.div`
  display: flex;
  gap: 6px;
  margin-bottom: 8px;
  align-items: center;
`;

export const AiTag = styled.span`
  font-size: 0.62rem;
  font-weight: 800;
  padding: 0.18rem 0.5rem;
  border-radius: ${tokens.radiusPill};
  background: ${({ $on }) => $on ? tokens.sky700 : '#fff'};
  color: ${({ $on }) => $on ? '#fff' : tokens.sky700};
  border: ${({ $on }) => $on ? 'none' : `1px solid ${tokens.sky200}`};
`;

export const AiText = styled.p`
  font-size: 0.78rem;
  color: ${tokens.ink700};
  line-height: 1.4;
  font-weight: 600;
  margin: 0 0 8px;
`;

export const SendBtn = styled.span`
  display: inline-block;
  float: right;
  background: ${tokens.lilac100};
  color: ${tokens.lilacDeep};
  font-weight: 800;
  font-size: 0.72rem;
  padding: 0.3rem 0.7rem;
  border-radius: ${tokens.radiusPill};
`;

export const AiFoot = styled.div`
  text-align: center;
  font-size: 0.74rem;
  color: ${tokens.ink500};
  margin-top: 12px;
  font-weight: 700;
`;

export const AiFab = styled.div`
  position: absolute;
  bottom: 26px;
  right: 30px;
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background: ${tokens.sky700};
  display: grid;
  place-items: center;
  box-shadow: 0 10px 24px rgba(46, 111, 176, 0.5);
  z-index: 2;

  svg { width: 26px; height: 26px; color: #fff; }
`;

export const Dot = styled.span`
  width: ${({ $size }) => $size || '16px'};
  height: ${({ $size }) => $size || '16px'};
  border-radius: 50%;
  background: ${({ $bg }) => $bg || tokens.ink300};
  flex-shrink: 0;
  display: inline-block;
`;
