import { styled } from "@mui/system";
import { Button, Box,FormControl } from "@mui/material";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

export const Logo = styled("img")`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 80px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  align-self: stretch;
  max-width: 100%;
`;

export const Image = styled("img")`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 24px;
  overflow: hidden;
  max-width: 100%;
`;
export const CusButton = styled(Button)`
   width: 90px;
  text-transform: none !important;
  /* Display/Bold-40 */
  font-family: Quicksand !important;
  font-size: 20px !important;
  font-style: normal !important;
  font-weight: 700 !important;
  line-height: 60px !important; /* 130.435% */
`;
export const CusBox = styled(Box)`
  width: 60px !important;
  height: 40px !important;
`;

export const CusPopup = styled(Popup)`
  &-overlay {
    background-color: rgba(0, 0, 0, 0.5) !important;
  }

  &-content {
    top: 0px !important;
    left: 28px !important;
    /* bottom: 10px !important ; */
    /* width: 1200px !important; */
    height: auto !important;
    display: flex;
    justify-content: center;
    max-width: 588px;
    border-radius: 20px;
    background-color: var(--Piper-200, #f0d397);
    padding: 9px 4px;
    font: 700 20px Quicksand, sans-serif;
    text-align: center;
  }

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;
// export const PopupContainer = styled("section")`
//   display: flex;
//   justify-content: center;
//   max-width: 628px;
//   border-radius: 20px;
//   background-color: var(--Piper-200, #f0d397);
//   padding: 69px 54px;
//   font: 700 20px Quicksand, sans-serif;
//   text-align: center;

//   @media (max-width: 991px) {
//     padding: 0 20px;
//   }
// `;

export const ContentWrapper = styled("div")`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  padding: 4px;

  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

export const ConfirmationMessage = styled("p")`
  color: #000;
  line-height: 26px;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export const ButtonGroup = styled("div")`
  display: flex;
  margin-top: 32px;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 64px;
  overflow: hidden;

  @media (max-width: 991px) {
    max-width: 100%;
    gap: 40px;
  }
`;

export const ConfirmationButton = styled("div")`
  cursor: pointer;

  @media (max-width: 991px) {
    max-width: 100%;
    gap: 40px;
  }
`;

export const CloseButton = styled("button")`
  position: absolute;
  bottom: 100px;
  left: 540px;
  background: transparent;
  border: none;
  width: 40px;
  height: 40px;
  cursor: pointer;
  @media (max-width: 991px) {
    max-width: 100%;
    gap: 40px;
  }
`;

//Badge
export const CartIconContainer = styled("div")`
  position: relative;
  display: inline-block;
  cursor: pointer;
`;

export const BadgeCart = styled("div")`
  position: absolute;
  top: 0px;
  right: -5px;
  background-color: red;
  color: white;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
`;


export const SigninAndSignup = styled("button")`
  color:  black;
  cursor: pointer;
  display: flex;
  padding: 0px 8px;
  align-items: center;
  text-decoration: none;
  border: none;
  background-color: transparent;
  font-size: 17px;
  border-right: ${(props) => props.borderRight};
  transition: all 0.5s;

   &:hover {
     color: #e9ae70;
   }
`;

export const SpanHeader = styled("span")`
  margin-left: 4px;
  font-size:15px;
`;

