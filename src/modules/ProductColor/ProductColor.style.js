import {
  Typography,
  Box,
  Button,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import styled from "styled-components";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

export const BoxTitle = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1 0 0;
  align-self: stretch;
  border-radius: 10px;
  background: var(--Background-1, #dcc6a5);
  box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.32);
  height: 115px;

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

export const StyledTypography = styled(Typography)`
  color: var(--Text-Black, #1d1d1d);
  text-align: center;

  /* Display/Bold-40 */
  font-family: Quicksand !important;
  font-size: 46px !important;
  font-style: normal !important;
  font-weight: 700 !important;
  line-height: 60px !important; /* 130.435% */

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

export const NavButton = styled(Button)`
  text-transform: none !important;

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

export const CategoryContainer = styled(Box)`
  display: flex;
  height: 800px;
  align-items: flex-start;
  gap: 24px;

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;
export const ProductBox = styled(Box)`
  padding-top: 28px;
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 6px;

  flex-direction: column;
  align-items: center;
  gap: 14px;
  align-self: stretch;
  background: var(--Piper-Text, #fff);
  height: 90%;
  width: 100%;

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

export const CusTitle = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;
export const Title = styled(Box)`
  flex: 1 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  width: 100%;
  height: 57px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

export const TextTitle = styled(Typography)`
  /* Header/Bold - 32 */
  font-family: Quicksand;
  font-size: 28px !important;
  font-style: normal;
  font-weight: 700 !important;
  line-height: 41px; /* 128.125% */

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;
export const CusButton = styled(Button)`
  color: var(--Text-Black, #1d1d1d) !important;
  font-weight: bolder !important;
  display: flex;
  width: 193px;
  height: 48px;
  padding-right: 10px;
  justify-content: center;
  align-items: center;

  text-transform: none !important;
  border-radius: 20px;
  background: var(--Background-4, #381d02);

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;
export const ProductCard = styled(Card)`
  width: 280.5px;
  height: 250.5px;
  margin-bottom: 10px;
  border-radius: 15px;
  border: 1px solid var(--Line-1, #fff);
  background-color: var(--White-50, #fff);
  display: flex;
  flex-direction: column;

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;
export const CusCardMedia = styled(CardMedia)`
  border-radius: 15px;
  border: 1px solid var(--Line-1, #fff);
  background-color: var(--White-50, #fff);
  display: flex;
  flex-direction: column;

  &:hover {
    transform: scale(1.2);
    transition: 0.3s ease;
  }
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

export const CusCardContent = styled(CardContent)`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  text-align: center;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;
export const CardName = styled(Typography)`
  font-family: Quicksand, sans-serif;
  font-size: 10px;
  font-weight: 700;
  line-height: 26px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  @media (max-width: 991px) {
    white-space: normal;
  }
`;
export const CardCategory = styled(Typography)`
  font-family: Quicksand, sans-serif;
  font-size: 18px;
  line-height: 23px;
  @media (max-width: 991px) {
    white-space: normal;
  }
`;

export const CardPrice = styled(Typography)`
  font-family: Quicksand, sans-serif;
  font-size: 16px;
  font-weight: 700 !important;

  margin-top: auto;
  font-weight: 700;
  @media (max-width: 991px) {
    white-space: normal;
  }
`;

export const CusPopup = styled(Popup)`
  &-overlay {
    background-color: rgba(0, 0, 0, 0.5) !important;
  }

  &-content {
    top: 0px !important;
    left: 68px !important;
    /* bottom: 10px !important ; */
    width: 1200px !important;
    height: auto !important;
  }

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;
