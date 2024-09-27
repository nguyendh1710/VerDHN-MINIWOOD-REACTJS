import { Box, Typography, Button, Grid ,Paper} from "@mui/material";
import styled from "styled-components";
import {NormalButton} from "./../../../components/StylesButton.style"
export const Container = styled(Box)`
 width: 1440;
height: 680;
padding-top: 16;
padding-bottom: 16;
flex-direction: column;
justify-content: flex-start;
align-items: center;
display: inline-flex;`
 
;


export const BoxTitle = styled(Typography)`
 font-family: Quicksand; sans-serif;
           
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
export const CusButton = styled(NormalButton)`

 margin-left: 1200px !important;



  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

export const BoxProduct = styled(Paper)`
margin-left:80px;
margin-bottom:80px;
margin-top:18px;
height: 236px;
width: 179px;
border-radius:80px;


  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;



export const ProductImg = styled.img`


border-radius:5px;
height: 236px;
width: 179px;
transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
    margin-top: -10px;
  }
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;