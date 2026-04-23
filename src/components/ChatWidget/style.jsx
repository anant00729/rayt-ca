import styled, { keyframes } from 'styled-components';

const slideUp = keyframes`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const Launcher = styled.button`
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 9998;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 18px;
  border-radius: 999px;
  border: none;
  background: var(--color-accent);
  color: #fff;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18);
  transition: transform 150ms ease, box-shadow 150ms ease;

  &:hover { transform: translateY(-1px); box-shadow: 0 12px 28px rgba(0,0,0,0.22); }
  &:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 3px; }
`;

export const Panel = styled.div`
  position: fixed;
  bottom: 92px;
  right: 24px;
  z-index: 9999;
  width: min(380px, calc(100vw - 32px));
  max-height: calc(100vh - 120px);
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.22);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  animation: ${slideUp} 200ms ease-out;
`;

export const Header = styled.div`
  position: relative;
  background: var(--color-accent);
  color: #fff;
  padding: 20px 20px 28px;
`;

export const HeaderTitle = styled.h3`
  margin: 0;
  font-size: 20px;
  font-weight: 700;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
  padding: 6px;
  border-radius: 6px;
  line-height: 0;
  &:hover { background: rgba(255,255,255,0.15); }
`;

export const Body = styled.div`
  padding: 16px;
  overflow-y: auto;
  background: #f6f7f9;
`;

export const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 18px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
`;

export const CardTitle = styled.h4`
  margin: 0 0 14px;
  font-size: 16px;
  font-weight: 700;
  color: #111;
`;

export const Field = styled.div`
  margin-bottom: 12px;
`;

export const Label = styled.label`
  display: block;
  font-size: 13px;
  color: #444;
  margin-bottom: 6px;
  font-weight: 500;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #d8dadf;
  border-radius: 8px;
  font-size: 14px;
  background: #fff;
  &:focus { outline: none; border-color: var(--color-accent); box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-accent) 20%, transparent); }
`;

export const Textarea = styled.textarea`
  width: 100%;
  min-height: 90px;
  padding: 10px 12px;
  border: 1px solid #d8dadf;
  border-radius: 8px;
  font-size: 14px;
  font-family: inherit;
  resize: vertical;
  background: #fff;
  &:focus { outline: none; border-color: var(--color-accent); box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-accent) 20%, transparent); }
`;

export const Dropzone = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px;
  border: 1.5px dashed #c8ccd2;
  border-radius: 8px;
  cursor: pointer;
  font-size: 13px;
  color: #555;
  background: #fafbfc;
  &:hover { border-color: var(--color-accent); color: var(--color-accent); }
  input { display: none; }
`;

export const FileList = styled.ul`
  list-style: none;
  margin: 8px 0 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const FileRow = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 8px 10px;
  background: #f0f2f5;
  border-radius: 6px;
  font-size: 13px;
  color: #333;
`;

export const FileMeta = styled.span`
  color: #777;
  font-size: 12px;
  margin-left: 8px;
`;

export const TrashBtn = styled.button`
  background: transparent;
  border: none;
  color: #888;
  cursor: pointer;
  padding: 4px;
  line-height: 0;
  border-radius: 4px;
  &:hover { color: #c0392b; background: #fff; }
`;

export const SubmitBtn = styled.button`
  width: 100%;
  margin-top: 12px;
  padding: 12px;
  background: var(--color-accent);
  color: #fff;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  &:disabled { opacity: 0.6; cursor: not-allowed; }
  &:hover:not(:disabled) { filter: brightness(0.95); }
`;

export const ErrorBanner = styled.div`
  margin-bottom: 10px;
  padding: 8px 10px;
  background: #fdecea;
  color: #b3261e;
  border-radius: 6px;
  font-size: 13px;
`;

export const WarnText = styled.div`
  margin-top: 6px;
  color: #b3261e;
  font-size: 12px;
`;

export const SuccessWrap = styled.div`
  padding: 28px 20px;
  text-align: center;
  background: #fff;
`;

export const SuccessIcon = styled.div`
  width: 72px;
  height: 72px;
  margin: 0 auto 16px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--color-accent) 15%, transparent);
  color: var(--color-accent);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SuccessText = styled.p`
  margin: 0 0 18px;
  color: #222;
  font-size: 15px;
`;
