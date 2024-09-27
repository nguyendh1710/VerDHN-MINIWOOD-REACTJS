
import { Box, Typography, Button, Grid ,Paper} from "@mui/material";
import styled from "styled-components";
import {NormalButton} from "./../../../components/StylesButton.style"




export const Container = styled(Box)`
padding: 16px 0;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

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

// export const GalleryWrapper = styled.div`
//   display: flex;
//   width: 100%;
//   padding-top: 16px;
//   gap: 16px;
//   justify-content: center;
//   flex: 1;
//   flex-wrap: wrap;
//   height: 100%;
//   @media (max-width: 991px) {
//     max-width: 100%;
//   }
// `;

// export const InnerGallery = styled.div`
//   display: flex;
//   min-width: 240px;
//   flex-direction: column;
//   justify-content: center;
//   width: 576px;
//   @media (max-width: 991px) {
//     max-width: 100%;
//   }
// `;

// export const Row = styled.div`
//   display: flex;
//   width: 100%;
//   gap: 16px;
//   justify-content: center;
//   flex: 1;
//   flex-wrap: wrap;
//   height: 100%;
//   &:not(:first-child) {
//     margin-top: 16px;
//   }
//   @media (max-width: 991px) {
//     max-width: 100%;
//   }
// `;
export const StyledGallery = styled.div`
  display: flex;
  width: 100%;
  padding-top: 16px;
  gap: 16px;
  justify-content: center;
  flex: 1;
  flex-wrap: wrap;
  height: 100%;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export const StyledMainImage = styled.img`
  aspect-ratio: 0.71;
  object-fit: contain;
  object-position: center;
  width: 336px;
  min-width: 240px;
  &:hover {
    transform: scale(1.2);
    transition: 0.3s ease;
  }
`;

export const StyledImageGroup = styled.div`
  display: flex;
  min-width: 240px;
  flex-direction: column;
  justify-content: center;
  width: 576px;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export const StyledImageRow = styled.div`
  display: flex;
  width: 100%;
  gap: 16px;
  justify-content: center;
  flex: 1;
  flex-wrap: wrap;
  height: 100%;
  margin-top: ${props => props.index === 1 ? "16px" : "0"};

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export const StyledSmallImage = styled.img`
  aspect-ratio: 1.23;
  object-fit: contain;
  object-position: center;
  width: 224px;
  min-width: 240px;
  flex-grow: 1;
  &:hover {
    transform: scale(1.2);
    transition: 0.3s ease;
  }
`;