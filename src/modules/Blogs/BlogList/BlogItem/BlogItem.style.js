import { Card,
  CardMedia,
  CardContent,Typography,Box} from "@mui/material";
import { styled } from "@mui/system";

// export const StyledCard = styled(Card)`
// width: 380.5px;
// height: 250.5px;
// margin-bottom: 10px;
// border-radius: 15px;
// border: 1px solid var(--Line-1, #fff);
// background-color: var(--White-50, #fff);
// display: flex;
// flex-direction: column;

// @media (max-width: 991px) {
//   padding: 0 20px;
// }
//   &:hover {
//     transform: scale(1.05);
//     background-color: #dcc6a5;
//     transition: 0.3s ease;
//   }
// `;
export const CusCardMedia = styled(CardMedia)`
width: 280.5px;
height: 300.5px;
margin-bottom: 10px;
border-radius: 15px;
border: 1px solid var(--Line-1, #fff);

display: flex;
flex-direction: column;


  &:hover {
    transform: scale(1.05);
    background-color: #dcc6b2;
    transition: 0.3s ease;
  }
  @media (max-width: 991px) {
  padding: 0 20px;
}
`;

export const CusCardContent = styled(CardContent)`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;
export const CardName = styled(Typography)`
  font-family: Quicksand, sans-serif;
  font-size: 15px;
  font-weight: 700;
  line-height: 26px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin-top:-15px;
  @media (max-width: 991px) {
    white-space: normal;
  }
`;
export const RatingBox = styled(Box)`  font-size: 15px;
width: 150px;
height: 20px;
font-size: 10px;
border-radius: 35px;

padding: 4px;
display: inline-block;`

;
