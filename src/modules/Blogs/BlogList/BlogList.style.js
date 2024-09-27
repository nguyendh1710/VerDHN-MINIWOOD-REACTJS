import { Grid,Card } from '@mui/material';


import { styled } from "@mui/system";

export const CusGrid = styled(Grid)`

`;

export const BlogsCard = styled(Card)`
  width: 280.5px;
  height: 250.5px;
  margin-bottom: 10px;
  border-radius: 15px;
  border: 1px solid var(--Line-1, #fff);
  background-color:  #dcc6a5;
  display: flex;
  flex-direction: column;

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;