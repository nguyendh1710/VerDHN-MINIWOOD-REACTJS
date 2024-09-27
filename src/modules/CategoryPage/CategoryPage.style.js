import { Typography,Box,Button } from '@mui/material';
import styled from "styled-components";


export const BoxTitle = styled(Box)` 

display: flex;
flex-direction: column;
justify-content: center;
flex: 1 0 0;
align-self: stretch;
border-radius: 10px;
background: var(--Background-1, #DCC6A5);
box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.32);
height: 115px;



@media (max-width: 991px) {
    padding: 0 20px;
  }
`;







export const StyledTypography = styled(Typography)` 
color: var(--Text-Black, #1D1D1D);
text-align: center;

/* Display/Bold-40 */
font-family: Quicksand !important;
font-size: 46px !important;
font-style: normal  !important;
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
height: 1835px;
align-items: flex-start;
gap: 24px;





@media (max-width: 991px) {
    padding: 0 20px;
  }
`;
