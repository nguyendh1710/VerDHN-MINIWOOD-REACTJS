import React from "react";
import {
  StyledTypography,
  BoxTitle,
  NavButton,
  CategoryContainer,
  ProductBox,
  CusTitle,
  Title,
  TextTitle,
  CusButton,
  ProductCard,
  CusCardMedia,
  CusCardContent,
  CardName,
  CardPrice,
} from "./CategoryStudio.style";

import { Breadcrumbs, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { separatorIcon } from "./../../components/Assets/iconSvg";

export default function CategoryStudio() {
  const navigate = useNavigate();

  const breadcrumbData = [
    { label: "Trang chủ", url: "/" },
    { label: "Tự thiết kế", url: "/custom-studio" },
    { label: "Hướng dẫn thiết kế", url: "/custom-studio" },
    { label: "Danh mục", url: "/category-studio" },
  ];

  const categories = [
    {
      id: 1,
      url: "/product-studio/1",
      text: "Ốp điện thoại",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/CategoryStudio/category-1.png?raw=true",
    },
    {
      id: 2,
      url: "/product-studio/2",
      text: "Sổ gỗ",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/CategoryStudio/category-2.png?raw=true",
    },
    {
      id: 3,
      url: "/product-studio/3",
      text: "Bút gỗ",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/CategoryStudio/category-3.png?raw=true",
    },
    {
      id: 4,
      url: "/product-studio/4",
      text: "Móc khoá gỗ",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/CategoryStudio/category-4.png?raw=true",
    },
    {
      id: 5,
      url: "/product-studio/5",
      text: "Bật lửa Zorro",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/CategoryStudio/category-5.png?raw=true",
    },
    {
      id: 6,
      url: "/product-studio/6",
      text: "Hộp thuốc lá",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/CategoryStudio/category-6.png?raw=true",
    },
    {
      id: 7,
      url: "/product-studio/7",
      text: "Lót cốc",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/CategoryStudio/category-7.png?raw=true",
    },
    {
      id: 8,
      url: "/product-studio/8",
      text: "Dock đựng thẻ",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/CategoryStudio/category-8.png?raw=true",
    },
  ];

  const isLast = breadcrumbData.length;

  return (
    <>
      {/* Title */}
      <BoxTitle>
        <StyledTypography>Bạn muốn tự thiết kế sản phẩm nào?</StyledTypography>
      </BoxTitle>
      {/* Nav */}

      <Box
        component="nav"
        aria-label="Breadcrumb"
        sx={{
          backgroundColor: "#f0f0f0",
          padding: { xs: "2px 10px", md: "6px 80px" },
        }}
      >
        <Breadcrumbs separator={separatorIcon.image} aria-label="breadcrumb">
          {breadcrumbData.map((item, index) =>
            isLast ? (
              <NavButton onClick={() => navigate(`${item.url}`)}>
                <Typography
                  key={index}
                  // variant="body1"
                  color="text.primary"
                  aria-current="page"
                  sx={{
                    fontFamily: "Quicksand, sans-serif",
                    fontSize: "12px",
                    fontWeight: 400,
                    color: "GrayText",
                  }}
                >
                  {item.label}
                </Typography>
              </NavButton>
            ) : (
              <Typography
                key={index}
                variant="body1"
                color="text.primary"
                aria-current="page"
                sx={{
                  fontFamily: "Quicksand, sans-serif",
                  fontSize: "12px",
                  fontWeight: 400,
                  color: "GrayText",
                }}
              >
                {item.label}
              </Typography>
            )
          )}
        </Breadcrumbs>
      </Box>
      {/* Category*/}

      <Box
        sx={{
          marginTop: "100px",
          marginBottom: "100px",
          marginLeft: "170px",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-end",
          rowGap: "33px",
          columnGap: "24px",
        }}
      >
        {categories.map((item) => (
          <ProductCard>
            <CusCardMedia
              onClick={() => navigate(`${item.url}`)}
              component="img"
              image={item.image}
              alt={item.name}
              sx={{
                borderRadius: "15px 15px 0 0",
                aspectRatio: "1",
                objectFit: "cover",
                height: "60%",

                width: "100%",
              }}
            />
            <CusCardContent>
              <CardName variant="h6" component="h2">
                {item.name}
              </CardName>

              <CardPrice variant="body1">{item.text}</CardPrice>
            </CusCardContent>
          </ProductCard>
        ))}
      </Box>
    </>
  );
}

///////////////////////
