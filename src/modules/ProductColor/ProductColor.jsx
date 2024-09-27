import { useState } from "react";
import {
  StyledTypography,
  BoxTitle,
  NavButton,
  ProductCard,
  CusCardMedia,
  CusCardContent,
  CardName,
  CardPrice,
  CusPopup,
} from "./ProductColor.style";

import { Breadcrumbs, Box, Typography } from "@mui/material";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

import {  useNavigate, useParams } from "react-router-dom";

import { separatorIcon } from "./../../components/Assets/iconSvg";
export default function ProductColor() {
  //
  const navigate = useNavigate();

  const breadcrumbData = [
    { label: "Trang chủ", url: "/" },
    { label: "Tự thiết kế", url: "/custom-studio" },
    { label: "Hướng dẫn thiết kế", url: "/custom-studio" },
    { label: "Danh mục", url: "/category-studio" },
  ];

  const category1 = [
    {
      id: 1,

      text: "Walnut",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/ProductColor/product-1-walnut.png?raw=true",
    },
    {
      id: 2,
      text: "Cherry",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/ProductColor/product-1-walnut.png?raw=true",
    },
    {
      id: 3,
      text: "Maple",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/ProductColor/product-1-maple.png?raw=true",
    },
  ];
  const category2 = [
    {
      id: 1,
      text: "Walnut",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/ProductColor/product-1-walnut.png?raw=true",
    },
    {
      id: 2,
      text: "Cherry",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/ProductColor/product-1-walnut.png?raw=true",
    },
    {
      id: 3,
      text: "Maple",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/ProductColor/product-1-maple.png?raw=true",
    },
  ];

  const category3 = [
    {
      id: 1,
      text: "Walnut",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/ProductColor/product-1-walnut.png?raw=true",
    },
    {
      id: 2,
      text: "Cherry",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/ProductColor/product-1-walnut.png?raw=true",
    },
    {
      id: 3,
      text: "Maple",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/ProductColor/product-1-maple.png?raw=true",
    },
  ];
  const category4 = [
    {
      id: 1,
      text: "Walnut",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/ProductColor/product-1-walnut.png?raw=true",
    },
    {
      id: 2,
      text: "Cherry",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/ProductColor/product-1-walnut.png?raw=true",
    },
    {
      id: 3,
      text: "Maple",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/ProductColor/product-1-maple.png?raw=true",
    },
  ];
  const category5 = [
    {
      id: 1,
      name: "",
      text: "Walnut",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/ProductColor/product-1-walnut.png?raw=true",
    },
    {
      id: 2,
      text: "Cherry",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/ProductColor/product-1-walnut.png?raw=true",
    },
    {
      id: 3,
      text: "Maple",
      name: "",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/ProductColor/product-1-maple.png?raw=true",
    },
  ];
  const category6 = [
    {
      id: 1,
      text: "Walnut",
      name: "",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/ProductColor/product-1-walnut.png?raw=true",
    },
    {
      id: 2,
      text: "Cherry",
      name: "",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/ProductColor/product-1-cherry.png?raw=true",
    },
    {
      id: 3,
      text: "Maple",
      name: "",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/ProductColor/product-1-maple.png?raw=true",
    },
  ];
  const category7 = [
    {
      id: 1,
      text: "Walnut",
      name: "",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/ProductColor/product-1-walnut.png?raw=true",
    },
    {
      id: 2,
      text: "Cherry",
      name: "",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/ProductColor/product-1-walnut.png?raw=true",
    },
    {
      id: 3,
      text: "Maple",
      name: "",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/ProductColor/product-1-maple.png?raw=true",
    },
  ];
  const category8 = [
    {
      id: 1,
      text: "Walnut",
      name: "",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/ProductColor/product-1-walnut.png?raw=true",
    },
    {
      id: 2,
      text: "Cherry",
      name: "",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/ProductColor/product-1-walnut.png?raw=true",
    },
    {
      id: 3,
      text: "Maple",
      name: "",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/ProductColor/product-1-maple.png?raw=true",
    },
  ];
  // Render theo params nhận được

  let params = useParams();

  let id = Number(params.id);
  // lấy thông tin ddienj thoại trên params
  let { type } = params;

  let selectedParam = () => {
    if (id === 1) {
      breadcrumbData.push(
        { label: "Ốp lưng", url: "/product-studio/1" },
        { label: "Chọn màu", url: "/product-studio/1" }
      );

      return category1;
    } else if (id === 2) {
      breadcrumbData.push(
        { label: "Sổ gỗ", url: "/product-studio/2" },
        { label: "Chọn màu", url: "/product-studio/2" }
      );

      return category2;
    } else if (id === 3) {
      breadcrumbData.push(
        { label: "Bút gỗ", url: "/product-studio/3" },
        { label: "Chọn màu", url: "/product-studio/3" }
      );

      return category3;
    } else if (id === 4) {
      breadcrumbData.push(
        { label: "Móc khoá gỗ", url: "/product-studio/4" },
        { label: "Chọn màu", url: "/product-studio/4" }
      );

      return category4;
    } else if (id === 5) {
      breadcrumbData.push(
        { label: "Bật lửa Zorro", url: "/product-studio/5" },
        { label: "Chọn màu", url: "/product-studio/5" }
      );

      return category5;
    } else if (id === 6) {
      breadcrumbData.push(
        { label: "Hộp thuốc lá", url: "/product-studio/6" },
        { label: "Chọn màu", url: "/product-studio/6" }
      );

      return category6;
    } else if (id === 7) {
      breadcrumbData.push(
        { label: "Lót cốc", url: "/product-studio/7" },
        { label: "Chọn màu", url: "/product-studio/7" }
      );

      return category7;
    } else if (id === 8) {
      breadcrumbData.push(
        { label: "Dock đựng thẻ", url: "/product-studio/8" },
        { label: "Chọn màu", url: "/product-studio/8" }
      );

      return category8;
    } else {
      return [];
    }
  };

  console.log(selectedParam());

  const isLast = breadcrumbData.length;

  //
  


  const handleDesignUpload = (item) => {
    console.log(item);
 // dung state cua usenavigate de truyen item xuong design upload
 navigate('/design-upload', { state: { item: item } });

  };


  return (
    <>
      {/* Title */}
      <BoxTitle>
        <StyledTypography>
          Hãy lựa chọn màu ốp lưng bạn thích nhé!
        </StyledTypography>
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
          marginLeft: "160px",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-end",
          rowGap: "33px",
          columnGap: "24px",
        }}
      >
        {selectedParam().map((item) => (
        


<Box>
<ProductCard >
                <CusCardMedia
                  component="img"
                  image={item.image}
                  alt={item.name}
                  sx={{
                    borderRadius: "15px 15px 0 0",
                    aspectRatio: "1",
                    objectFit: "cover",
                    height: "80%",

                    width: "100%",
                  }}
                  onClick={()=>handleDesignUpload(item)}
                />
                <CusCardContent>
                  <CardName variant="h6" component="h2">
                    {item.name}
                  </CardName>

                  <CardPrice variant="body1">{item.text}</CardPrice>
                </CusCardContent>
              </ProductCard>

    








</Box>






        ))}


{/* {openDesignUpload && (<DesignUpload
              background={dataOfDesignUpload.image}
              color={dataOfDesignUpload.text}
              type={type}
            />) }     */}
      </Box>
    </>
  );
}

///////////////////////
