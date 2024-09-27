import { styled } from "@mui/system";
import { Button, Box, FormControl,Paper } from "@mui/material";
import {NormalButton,LargeButton} from "./../../components/StylesButton.style"



export const ContainerBox = styled(Box)`
  margin: 24px 24px 40px 40px;
  display: flex;

flex-direction: row;
justify-content: start;
`;
export const CartTitleContainer = styled(Box)`
  display: flex;
  margin: 24px 24px 40px 40px;
  flex-direction: row;
  justify-content: start;
`;




export const ListItemBox = styled(Box)`
  display: flex;
  height: auto;
  flex-direction: row;
  justify-content: start;
  margin-left: 24px;
  margin-bottom: 14px;
`;

export const CusImg = styled("img")`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  border: none;
  width: 60px;
  height: 80px;
  
`;
export const ItemContentBox = styled(Box)`
  display: flex;
  height: auto;
  flex-direction: row;
  justify-content: start;
  margin-left: 14px;
  margin-bottom: 14px;
`;
export const ContentBox = styled(Box)`
   padding-left: 10px;
   width: 230px;
`;



export const CheckoutBox = styled(Paper)`
  display: flex;
  height: auto;
  flex-direction: column;
  justify-content: start;
  margin-left: 64px;
  margin-bottom: 14px;
  padding: 10px 10px 10px 10px;
`;





export const RemoveButton = styled(NormalButton)`
 
`;

export const CustomButton = styled(NormalButton)`
 
`;

export const CheckoutButton = styled(LargeButton)`
   margin-bottom: 20px;
`;