import { styled } from "@mui/system";

import { Box, Typography, Button, Grid, Paper } from "@mui/material";

export const Container = styled("div")`
  width: 1440px;
  height: 180px;
  margin-top: 16px;
  margin-bottom: 86px;
`;

export const BoxTitle = styled(Typography)`
  font-family: Quicksand sans-serif;

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

export const Img = styled("img")`
  aspect-ratio: 1.03;

  object-fit: cover;
  width: 100px;
  height: 100px;
  border-radius: 8px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 90px;
    padding: 0 20px;
  }
`;

export const CusGrid = styled(Grid)`
  display: flex;
  justify-content: space-between;
  @media (max-width: 991px) {
  }
`;
