import React from "react";
import {
  StyledTypography,
  BoxTitle,
  NavButton,
  CategoryContainer,
} from "./CategoryPage.style";
import Footer from "../../components/Footer/Footer";
import { Breadcrumbs, Box, Typography, Button } from "@mui/material";
import { Link, Navigate, useNavigate } from "react-router-dom";
import CategoryLeft from "./CategoryLeft/CategoryLeft";
import CategoryRight from "./CategoryRight/CategoryRight";
import { separatorIcon } from "./../../components/Assets/iconSvg";

export default function CategoryPage() {
  const navigate = useNavigate();

  const breadcrumbData = [
    { label: "Trang chủ", url: "/" },
    { label: "Sản phẩm", url: "/products" },
    { label: "Văn phòng phẩm", url: "/products/office-supplies" },
    { label: "Văn phòng phẩm", url: "/products/office-supplies/category-1" },
    {
      label: "Văn phòng phẩm",
      url: "/products/office-supplies/category-1/subcategory",
    },
    {
      label: "Văn phòng phẩm",
      url: "/products/office-supplies/category-1/subcategory/item",
    },
  ];

  const isLast = breadcrumbData.length;

  return (
    <>
      {/* Title */}
      <BoxTitle>
        <StyledTypography>Văn phòng phẩm</StyledTypography>
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
                  fontSize: "18px",
                  fontWeight: 700,
                }}
              >
                {item.label}
              </Typography>
            )
          )}
        </Breadcrumbs>
      </Box>
      {/* Category*/}

      <CategoryContainer>
        {/* CategoryLeft */}
        <CategoryLeft />
        {/* CategoryRight */}

        <CategoryRight />
      </CategoryContainer>

      {/* Footer */}
      <Footer />
    </>
  );
}

///////////////////////
