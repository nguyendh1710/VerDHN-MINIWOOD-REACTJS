import { Box, Container } from "@mui/material";
import styled from "styled-components";

export const SectionBox = styled(Box)`
  padding: 0 80px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

export const CusContainer = styled(Container)`
  display: flex;
  flex-direction: row;
`;
export const GalleryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 468px;
  flex-grow: 1;
  justify-content: center;
  padding: 80px 60px;
  width: 50%;
  @media (max-width: 991px) {
    width: 100%;
    padding: 0 20px;
  }
`;

export const BackgroundImage = styled.img`
  height: 496px;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

export const DotContainer = styled.div`
  position: relative;
  display: flex;
  margin-top: 126px;
  gap: 20px;
  justify-content: center;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
    margin: 40px 4px 0 0;
  }
`;

export const Dot = styled.img`
  aspect-ratio: 0.04;
  object-fit: auto;
  object-position: center;
  width: 2px;
`;





export const ContentBox = styled(Box)`
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  @media (max-width: 991px) {
    width: 100%;
    margin-left: 0;
  }
`;
export const BoxWrapper = styled.div`
  width: 652px;
  /* margin-left: 20px; */
  @media (max-width: 991px) {
    width: 100%;
    margin-left: 0;
  }
`;

export const Content = styled.div`
  background-color: #fff;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  font-size: 20px;
  color: #000;
  font-weight: 700;
  text-align: center;
  line-height: 130%;
  width: 100%;
  padding: 80px 0;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export const Title = styled.h2`
  border-bottom: 2px solid #c3621e;
  margin-top: 23px;
  padding: 24px 60px;
  font: 46px/130% Quicksand, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    font-size: 40px;
    padding: 0 20px;
  }
`;

export const Description = styled.p`
  font-family: Quicksand, sans-serif;
  margin-top: 40px;
  padding: 0 60px;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

export const CtaButton = styled("div")`
  font-family: Quicksand, sans-serif;
  border-radius: 20px;
  background-color: #381d02;
  align-self: center;
  margin-top: 40px;
  color: #fff;
  padding: 16px 40px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #4e2803;
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(56, 29, 2, 0.5);
  }
  @media (max-width: 991px) {
    padding: 16px 20px;
  }
`;
