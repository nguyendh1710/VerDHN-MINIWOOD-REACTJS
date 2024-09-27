import { Typography,Box,Button,List,ListItem  } from '@mui/material';
import styled from "styled-components";


export const Container = styled(Box)` 

display: flex;
padding-bottom: 548px;
flex-direction: column;
align-items: center;
align-self: stretch;



@media (max-width: 991px) {
    padding: 0 20px;
  }
`;

export const CusBox = styled(Box)` 
/* width: 202px; */

font-family: Quicksand sans-serif !important;
color: #FFFFFF !important;
font-weight: 700 !important;
line-height: 1 !important;
padding: 40px 0px !important;


`;
  
  export const StyledTypography = styled(Typography)` 
   color: #1D1D1D !important;
  background: #FFFFFF !important;
  font-size: 32px !important;
  padding: 16px 24px !important;
  `;
  
  export const StyledList = styled(List)` 


  margin-top: 0px;
    padding: 0;



    `;
    export const StyledListItem = styled(ListItem)` 
    
    padding: 0px;
    
   
    &:not(:first-of-type) {
        margin-top: 6px !important;
  }
`;
    
      
      export const StyledButton = styled(Button)`
      
      width: 100% !important;
        border-radius: 15px !important;
        color: #1D1D1D !important;
        background: #FDF8ED !important;
        font-size: 15px !important;
        font-weight: 700 !important;
        text-align: left !important;
        padding: 6px 24px !important;
        text-transform: none !important;
        justify-content: flex-start !important;
        transition: background-color 0.3s ease !important;
        &:hover{
          background-color:#FFFFFF !important;
        }
        &:focus {
          background-color:#FFFFFF !important;
        }
      
      
      
      
      
      `;