import { styled } from "@mui/system";
import { Button, Box, Typography } from "@mui/material";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {LargeButton} from "./../../components/StylesButton.style"





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
  text-transform: none !important;
  /* Display/Bold-40 */
  font-family: Quicksand !important;
  font-size: 20px !important;
  font-style: normal !important;
  font-weight: 700 !important;
  line-height: 60px !important; /* 130.435% */
`;

export const CusContainer = styled(Box)`
  box-shadow: 8px 4px 40px 0px rgba(154, 151, 151, 0.15);
  display: flex;
  height: 60% !important;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
`;

export const ContentBox = styled(Box)`
  justify-content: center;
  background: var(--Piper-100, #f8eacd);
  box-shadow: 8px 4px 40px 0px rgba(154, 151, 151, 0.15);
  display: flex;
  max-width: 380px;
  width: 40%;
  flex-direction: column;
  overflow: hidden;
  /* margin-bottom: 362px; */
`;

export const MenuTool = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: start;
  flex: 1;
  flex-wrap: wrap;
  height: 50%;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export const MenuRight = styled(Box)`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: var(--White-600, #656565);
  font-weight: 400;
  line-height: 1;
  justify-content: start;
  width: 102px;
`;

export const ContentRight = styled(Box)`
  display: flex;
  max-width: 100%;
  margin-left: 100px;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: start;
`;
export const MenuStudioItem = styled(Box)`
  display: flex;
  max-width: 100%;
  width: 102px;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`;

export const DesignArea = styled(Box)`
  background: var(--Piper-50, #fdf8ed);
  display: flex;
  min-width: 240px;
  flex-direction: column;
  overflow: hidden;
  justify-content: start;
  flex: 1;
  flex-basis: 0%;
  padding: 24px 16px;
`;

export const FileUploadSection = styled(Box)`
  display: flex;
  width: 285px;
  max-width: 100%;
  flex-direction: column;
  color: #000;
  justify-content: start;
`;

export const FileUploadTypography = styled(Typography)`
  margin-top: 8px;
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
  padding: 1px 0;
  @media (max-width: 991px) {
    padding-right: 20px;
  }
`;

export const FileUploadButton = styled(Button)`
  align-self: stretch;
  border-radius: 10px;
  background-color: rgba(219, 129, 37, 1);
  min-height: 37px;
  width: 100%;
  gap: 8px;
  paddingleft: 9px;
  color: var(--Piper-Text, #fff);
  font-size: 16px;
  font-weight: 700;
  text-transform: none;
`;
export const NoteSection = styled(Box)`
  display: flex;
  margin-top: 24px;
  width: 100%;
  flex-direction: column;
  font-size: 14px;
  color: #000;
  font-weight: 400;
  line-height: 18px;
  justify-content: center;
`;

export const PhotoTransferSection = styled(Box)`
  display: flex;
  margin-top: 24px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TransferButton = styled(Button)`
  align-self: stretch;
  border-radius: 10px;
  background-color: rgba(195, 98, 30, 1);
  width: 100%;
  gap: 8px;
  font-size: 16px;
  color: var(--Piper-Text, #fff);
  font-weight: 700;
  line-height: 1;
  padding: 8px 16px;
  text-transform: none;
  &:hover {
    background-color: #dcc6a5;
  }
`;
export const SaveDesignButton = styled(LargeButton)`

`;

export const ProductDisplay = styled(Box)`
  @media (max-width: 991px) {
    maxwidth: 100%;
  }
`;
export const ProductImage = styled(Box)`




  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export const ColorSelection = styled(Box)`
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

export const ActionButtons = styled(Box)``;

export const FontToolbar = styled(Box)`
  border-radius: 10px;
  display: flex;
  max-width: 761px;
  align-items: center;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
  padding: 8px 16px;
  border: 1px solid #333;
`;

export const FontSelector = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  border: 1px solid #aaa6a2;
  padding: 8px;
  flex: 1;
  flex-basis: 0;
  color: #1d1d1d;
  &:hover {
    cursor: pointer;
  }
`;

export const FilterImage = styled("img")``;


export const ImagePreview = styled("img")`
 
`;


export const CusReactQuill = styled(ReactQuill)`


.editor {
  background-color: transparent;
  opacity: 0.5;
}




 
`;