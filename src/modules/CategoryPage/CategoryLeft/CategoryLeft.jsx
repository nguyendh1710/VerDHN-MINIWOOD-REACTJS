import React from "react";
import { Container } from "./CategoryLeft.style";
import {
  CusBox,
  StyledTypography,
  StyledList,
  StyledListItem,
  StyledButton,
} from "./CategoryLeft.style";

export default function CategoryLeft() {





  const categories = [
    { text: "Sổ gỗ" },
    { text: "Bút gỗ" },
    { text: "Hộp đựng thẻ" },
    { text: "Thước kẻ" },
  ];


  const priceCategories = [
    { text: "100.000 - 200.000 VND" },
    { text: "200.000 - 300.000 VND" },
    { text: "300.000 - 500.000 VND" },
    { text: "Trên 500.000 VND" },
  ];

  const popularCategories = [
    { text: "Xu hướng năm 2023" },
    { text: "Yêu thích nhất năm 2023" },
    { text: "Giá tốt nhất năm 2023" },
    { text: "Phong cách nhất năm 2023" },
  ];

  return (
    <>
      <Container>


 {/* Categories */}
  <CusBox component="section" aria-labelledby="popularity-title" sx={{ marginRight:'34px'}}>
          <StyledTypography id="popularity-title" variant="h2">
          Danh mục
          </StyledTypography>
          <StyledList>
            {categories.map((category, index) => (
              <StyledListItem key={index}>
                <StyledButton variant="contained" disableElevation>
                  {category.text}
                </StyledButton>
              </StyledListItem>
            ))}
          </StyledList>
        </CusBox>
         {/* Price Categories */}
         <CusBox component="section" aria-labelledby="popularity-title" sx={{ marginLeft:'26px'}}>
          <StyledTypography id="popularity-title" variant="h2">
          Mức giá
          </StyledTypography>
          <StyledList>
            {priceCategories.map((category, index) => (
              <StyledListItem key={index}>
                <StyledButton variant="contained" disableElevation>
                  {category.text}
                </StyledButton>
              </StyledListItem>
            ))}
          </StyledList>
        </CusBox>









        {/* Popular Categories */}
        <CusBox component="section" aria-labelledby="popularity-title" sx={{ marginLeft:'26px'}}>
          <StyledTypography id="popularity-title" variant="h2">
            Độ phổ biến
          </StyledTypography>
          <StyledList>
            {popularCategories.map((category, index) => (
              <StyledListItem key={index}>
                <StyledButton variant="contained" disableElevation>
                  {category.text}
                </StyledButton>
              </StyledListItem>
            ))}
          </StyledList>
        </CusBox>
      </Container>
    </>
  );
}
////
