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
} from "./CustomStudio.style";

import {
  Breadcrumbs,
  Box,
  Typography,
 
} from "@mui/material";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { separatorIcon } from "./../../components/Assets/iconSvg";

export default function CustomStudio() {
  const navigate = useNavigate();

  const breadcrumbData = [
    { label: "Trang chủ", url: "/" },
    { label: "Tự thiết kế", url: "/custom-studio" },
    { label: "Hướng dẫn thiết kế", url: "/custom-studio" },
  ];

  const customWays = [
    {
      id: 1,
      text: "Bước 1: Chọn danh mục sản phẩm",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/CustomStudio/way-1.png?raw=true",
    },
    {
      id: 2,
      text: "Bước 2: Chọn phân loại sản phẩm",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/CustomStudio/way-2.png?raw=true",
    },
    {
      id: 3,
      text: "Bước 3: Chọn màu gỗ cho sản phẩm và tiến vào trang công cụ thiết kế",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/CustomStudio/way-3.png?raw=true",
    },
    {
      id: 4,
      text: "Bước 4: Tại đây, bạn có thể chọn stickers, emoji, thêm text hoặc tải lên ảnh tùy thích",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/CustomStudio/way-4.png?raw=true",
    },
    {
      id: 5,
      text: "Bước 5: Lưu thiết kế sau khi hoàn thành sản phẩm",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/CustomStudio/way-5.png?raw=true",
    },
    {
      id: 6,
      text: "Bước 6: Thanh toán ",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/CustomStudio/way-6.png?raw=true_",
    },
  ];

  const isLast = breadcrumbData.length;

  return (
    <>
      {/* Title */}
      <BoxTitle>
        <StyledTypography>Hướng dẫn tự thiết kế</StyledTypography>
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
        <Breadcrumbs
          separator={
            separatorIcon.image
          }
          aria-label="breadcrumb"
        >
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
                    color:"GrayText",
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
                  color:"GrayText",
                }}
              >
                {item.label}
              </Typography>
            )
          )}
        </Breadcrumbs>
      </Box>
      {/* Category*/}

      {/* CusTitle */}
      <CusTitle
        sx={{
          marginTop: "30px",
          marginBottom: "30px",
        }}
      >
        <Title>
          {/* Button */}
          <CusButton
            sx={{
              backgroundColor: "#381d02",
              color: "white",
              "&:hover": {
                backgroundColor: "#e9ae70",
              },
              fontWeight: "bolder",
              marginTop: "30px",
            }}
            onClick={()=>(navigate("/category-studio"))}
          >
            <Typography
              sx={{
                fontSize: "20px",
                fontFamily: "Quicksand",
                fontWeight: "bolder",
              }}
            >
              Bỏ qua hướng dẫn
            </Typography>
          </CusButton>
        </Title>
      </CusTitle>

      {/* Products */}

      <Box
        sx={{
          marginTop: "10px",
          marginBottom: "100px",
          marginLeft: "170px",
       
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-end",
          rowGap: "33px",
          columnGap: "24px",
        }}
      >
        {customWays.map((item) => (
          <ProductCard>
            <CusCardMedia
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
