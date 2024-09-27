import styled from "styled-components";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
export const Container = styled(Box)`
  display: flex;
  flex-wrap: wrap;

  flex-direction: column;
  /* align-items: flex-start; */
  gap: 4px;
  /* align-self: stretch; */

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

export const ProductBox = styled(Box)`
  padding-top: 48px;
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 6px;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  align-self: stretch;
  background: var(--Piper-Text, #fff);
  height: 25%;

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

export const BoxTitle = styled(Box)`
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
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  width: 100%;
  height: 57px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

export const TextTitle = styled(Typography)`
  color: var(--Text-Black, #1d1d1d);

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
  display: flex;
  width: 193px;
  height: 48px;

  justify-content: center;
  align-items: center;

  border-radius: 20px;
  background: var(--Background-4, #381d02);

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;
export const ProductCard = styled(Card)`
  width: 230.5px;
  height: 270.5px;

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
  height: 100%;
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
  font-size: 10px;
  font-weight: 700;
  text-align: left;
  margin-top: auto;
  @media (max-width: 991px) {
    white-space: normal;
  }
`;

export const CustomImage = styled("img")`
  padding: 10px;
`;

export const Header = styled("div")({
  alignSelf: "stretch",
  color: "#F19426",
  textAlign: "center",
  fontFamily: "Quicksand",
  fontSize: "32px",
  fontStyle: "normal",
  fontWeight: "700",
  lineHeight: "41px" /* 128.125% */,
});

export const Content = styled("div")`
  align-self: stretch;
  color: #1d1d1d;
  text-align: center;
  font-family: Quicksand;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 23px; /* 127.778% */
`;

export const CusPrintButton = styled(Box)`
  display: flex;
  width: 214px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  color: #1d1d1d;
  white-space: nowrap;
  font-weight: 700;
  background-color: #dcc6a5;
  padding: 16px 13px;
  font: Quicksand sans-serif;
  &:hover {
    background-color: #e9ae70;
  }
`;
export const CusPopup = styled(Popup)`
  &-overlay {
    background-color: rgba(0, 0, 0, 0.5) !important;
  }

  &-content {
    top: 0px !important;
    left: 28px !important;
    /* bottom: 10px !important ; */
    /* width: 1200px !important; */
    height: auto !important;
    display: flex;
    justify-content: center;
    max-width: 588px;
    border-radius: 20px;
    background-color: var(--Piper-200, #f0d397);
    padding: 9px 4px;
    font: 700 20px Quicksand, sans-serif;
    text-align: center;
  }

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;
// export const PopupContainer = styled("section")`
//   display: flex;
//   justify-content: center;
//   max-width: 628px;
//   border-radius: 20px;
//   background-color: var(--Piper-200, #f0d397);
//   padding: 69px 54px;
//   font: 700 20px Quicksand, sans-serif;
//   text-align: center;

//   @media (max-width: 991px) {
//     padding: 0 20px;
//   }
// `;

export const ContentWrapper = styled("div")`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  padding: 4px;

  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

export const ConfirmationMessage = styled("p")`
  color: #000;
  line-height: 26px;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export const ButtonGroup = styled("div")`
  display: flex;
  margin-top: 32px;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 64px;
  overflow: hidden;

  @media (max-width: 991px) {
    max-width: 100%;
    gap: 40px;
  }
`;

export const ConfirmationButton = styled("div")`
  cursor: pointer;

  @media (max-width: 991px) {
    max-width: 100%;
    gap: 40px;
  }
`;

export const CloseButton = styled("button")`
  position: absolute;
  bottom: 100px;
  left: 540px;
  background: transparent;
  border: none;
  width: 40px;
  height: 40px;
  cursor: pointer;
  @media (max-width: 991px) {
    max-width: 100%;
    gap: 40px;
  }
`;
