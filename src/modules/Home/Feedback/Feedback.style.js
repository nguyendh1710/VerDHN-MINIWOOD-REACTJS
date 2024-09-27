import { Box, Typography, Button, Grid, Paper } from "@mui/material";
import styled from "styled-components";
import {NormalButton} from "./../../../components/StylesButton.style"
export const Container = styled("div")`
  width: 1440;
  height: 680;
  padding-top: 16;
  padding-bottom: 16;
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
export const CusButton = styled(NormalButton)`

 margin-left: 1200px !important;



  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;
export const FeedbackList = styled(Box)`
  width: 1060px;

  font-size: 18px;
  font-weight: 400;
  line-height: 23px;
  margin-left: 160px  ;
  /* padding: 16px 0; */

  @media (max-width: 991px) {
  }
`;

export const FeedbackComment = styled(Box)`
margin-left: 160px;
  background: var(--Piper-Text, #fff);
  display: flex;
  min-width: 290px;
  padding-bottom: 96px;
  flex-wrap: nowrap;
  align-content: space-around;
  align-items: flex-start;
  overflow: hidden;
  flex: 1;
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};

  @media (max-width: 991px) {
  }
`;

export const FeedbackImg = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 176px;
  border-radius: 50%;
  margin: auto 0;
  padding: 0 40px;
  @media (max-width: 991px) {
    padding: 0 40px;
  }
`;
export const RatingBox = styled(Box)({
  backgroundColor: '#1d1d1d',
  borderRadius: '35px',
  padding: '10px',
  display: 'inline-block',
});

