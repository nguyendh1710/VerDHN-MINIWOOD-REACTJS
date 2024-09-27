
import { Box, Typography, Grid, IconButton,Container} from "@mui/material";
import { styled } from "@mui/system";




export const CusFooterBg = styled(Box)`
background: var(--primary-300, #381D02);
display: flex;
padding: 56px 200px;

flex-direction: column;
align-items: flex-start;
gap: 40px;
align-self: stretch;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;

  }
`;

export const Wrapper = styled(Box)`
  background: var(--primary-300, #381D02);
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;
  margin-right:80px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
  padding-right: 300px;

`;



export const CusContentBg = styled(Container)`
display: flex;

flex-direction: row;
padding-right: 180px;


`;




export const CusContentRightBg = styled(Container)`
display: flex;
padding-left: 256px;

flex-direction: column;

padding-left: 256px;

  color: #fefefe;
  width: 100%;
  font-weight: 700;
  font-size: 18px;
  line-height: 128%;
  font-family: Quicksand, sans-serif;
  margin-top: 8px;
  @media (max-width: 768px) {
    width: 50%;
  }
`;




export const MenuItem = styled(Typography)`
  color: #fefefe;
  width: 100%;
  font-weight: 700;
  font-size: 18px;
  line-height: 128%;
  font-family: Quicksand, sans-serif;
  margin-top: 8px;

  @media (max-width: 768px) {
    width: 50%;
  }
`;

export const Title = styled(Typography)`
  color: var(--Text-White, #fefefe);
  font-weight: 700;
  font-size: 18px;
  line-height: 128%;
  font-family: Quicksand, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export const ImageContainer = styled(Grid)`
  display: flex;
  margin-top: 8px;
  gap: 16px;
  padding: 8px 80px 8px 20px;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
    padding-right: 20px;
  }
`;

export const LazyImage = styled("img")`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 24px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  max-width: 100%;
`;

export const Description = styled(Typography)`
  color: var(--Text-White, #fefefe);
  margin: 8px 0 35px;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  font-family: Montserrat, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
}`;

export const InfoContainer = styled("div")`
  display: flex;
  width: 1124px;
  flex-grow: 1;
  flex-direction: row;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 16px;
  }
`;

export const Info = styled("div")`
  color: var(--Text-White, #fefefe);
  font: 400 14px/24px Montserrat, sans-serif;
  width: 859px;
  


  display: flex;
flex-direction: column;
align-items: flex-start;
gap: 16px;


padding-right: 300px;





  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export const ContactInfo = styled("div")`
  color: var(--Text-White, #fefefe);
  margin-top: 16px;
  font: 400 14px/18px Quicksand, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
 
`;

export const CusContactRightBg = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: start;
  max-width: 249px;
  margin-left: 130px;
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

export const ContactRightImage = styled("img")`
  aspect-ratio: 2.63;
  object-fit: contain;
object-position: center;
  width: 200px;
  overflow: hidden;
  max-width: 200px;

`;

export const ContactRightContent = styled("div")`
  align-self: stretch;
  display: flex;
  margin-top: 8px;

  gap: 16px;
  display: flex;
align-items: center;

`;

export const ContactRightLogo = styled("img")`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 24px;
  overflow: hidden;
  max-width: 100%;
 
`;

export const ContactRightText = styled(Typography)`
  color: var(--Text-White, #fefefe);
  margin: auto 0;
  font: 500 16px/125% Quicksand, sans-serif;
`;

export const ContactRightText2 = styled(Typography)`
  color: var(--Text-White, #fefefe);
  align-self: stretch;
  margin-top: 8px;
  white-space: nowrap;
  font: 400 14px/129% Quicksand, sans-serif;
`;

