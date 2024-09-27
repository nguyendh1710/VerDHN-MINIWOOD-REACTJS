import styled from "styled-components";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";






export const ProductBox = styled(Box)` 
padding-top: 48px;
display: flex;
flex-wrap:wrap;
padding-bottom: 6px;
flex-direction: column;
align-items: flex-start;
gap: 14px;
align-self: stretch;
background: var(--Piper-Text, #FFF);
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
color: var(--Text-Black, #1D1D1D);

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
width: 163px;
height: 48px;
padding-right: 10px;
justify-content: center;
align-items: center;

border-radius: 20px;
background: var(--Background-4, #381D02);

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