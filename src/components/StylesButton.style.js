import { styled } from "@mui/system";
import { Button, Box, FormControl,Paper } from "@mui/material";















export const NormalButton = styled(Button)`
 background-color: #381D02;
  color: white;
  &:hover {
    background-color: #e9ae70;
  };

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

export const LargeButton = styled(Button)`
  flex: 1;
  border-radius: 10px;
  background: var(--Piper-700, #a1461c);
  align-self: center;
  margin-top: 40px;
  min-height: 72px;
  width: 456px;
  max-width: 100%;
  gap: 8px;
  font-size: 32px;
  color: var(--Text-White, #fefefe);
  font-weight: 700;
  text-align: center;
  line-height: 41px;
  padding: 8px 40px;
  text-transform: none;
  cursor: pointer;
  &:hover {
    background-color: #e9ae70;
  };
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;