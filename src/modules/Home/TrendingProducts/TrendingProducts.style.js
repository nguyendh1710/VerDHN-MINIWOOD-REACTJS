import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import styled from "styled-components";



export const Container = styled(Box)`
  padding: 16px 0;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

export const BoxTitle = styled(Typography)`
  font-family: Quicksand, sans-serif;

  color: #000;
  font-weight: 700;
  text-align: center;
  line-height: 1.3;
  background-color: #fff;

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;
export const Title = styled(Typography)`
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

export const BoxCategory = styled(Box)`
  display: flex;
  width: 80%;
  gap: 20px;
  margin-left: 100px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;
export const CategoryButton = styled(Button)`
  font-family: Quicksand, sans-serif;
 
  width: 180px;
  font-size: 20px;
  color: #000;
  font-weight: 700;
  text-align: center;
  line-height: 1.3;
  border-radius: 15px;
  flex: 1;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;
export const ProductCard = styled(Card)`
  border-radius: 15px;
  border: 1px solid var(--Line-1, #fff);
  background-color: var(--White-50, #fff);
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  overflow: hidden;
  &:hover .overlay {
    transform: scale(1.05);
    background-color: #dcc6a5;
    transition: 0.3s ease;
  };
  
  @media (max-width: 991px) {
    padding: 0 20px;
  };
`;
export const Overlay = styled('div')` 
 position: absolute;
bottom: 50;
left: 0;
right: 0;
height: 64%;
/* background-color: rgba(0, 0, 0, 0.2); */
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
opacity: 0.8;
transition: opacity 0.3s, transform 0.3s;
transform: translateY(160%);
z-index: 8;

`;
export const CusCardMedia = styled(CardMedia)`
  border-radius: 15px;
  border: 1px solid var(--Line-1, #fff);
  background-color: var(--White-50, #fff);
  display: flex;
  flex-direction: column;
  height: 100%;
  &:hover {
    transform: scale(1.2) translateY(-20%);
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
  font-size: 20px;
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
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  margin-top: auto;
  @media (max-width: 991px) {
    white-space: normal;
  }
`;
export const BoxBuy = styled(Box)`
  margin-top: 2;
  @media (max-width: 991px) {
    white-space: normal;
  }
`;
export const ButtonBuy = styled(Button)`
  font-family: Quicksand, sans-serif;
  border-radius: 20px;

  /* background-color: var(--Background-1, #dcc6a5); */
  text-align: center;
  line-height: 1.3;
  padding: 19px 0;
  /* &:hover {
                background-color: #c4ae8c';
              }; */
  @media (max-width: 991px) {
    white-space: normal;
  }
`;
