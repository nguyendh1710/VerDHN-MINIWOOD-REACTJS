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
} from "./ProductStudio.style";

import {
  Breadcrumbs,
  Box,
  Typography,
  Button,
  Grid,
  Container,
} from "@mui/material";
import { separatorIcon } from "./../../components/Assets/iconSvg";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
export default function ProductStudio() {
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
      text: "Iphone 7/8",
      url: "/product-studio/1/iphone7&8",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/ProductStudio/ip-1.png?raw=true",
    },
    {
      id: 2,
      text: "Iphone X/XS",
      url: "/product-studio/1/iphonex&xs",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/ProductStudio/ip-2.png?raw=true",
    },
    {
      id: 3,
      text: "Iphone XS Max",
      url: "/product-studio/1/iphonexsmax",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/ProductStudio/ip-3.png?raw=true",
    },
    {
      id: 4,
      text: "Iphone 11",
      url: "/product-studio/1/iphone11",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/ProductStudio/ip-4.png?raw=true",
    },
    {
      id: 5,
      text: "Samsung S7E",
      url: "/product-studio/1/samsungs7e",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/ProductStudio/ss-1.png?raw=true",
    },
    {
      id: 6,
      text: "Samsung S8",
      url: "/product-studio/1/samsungs8",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/ProductStudio/ss-2.png?raw=true",
    },
    {
      id: 7,
      text: "Samsung S8+",
      url: "/product-studio/1/samsungs8+",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/ProductStudio/ss-3.png?raw=true",
    },
    {
      id: 8,
      text: "Samsung S9",
      url: "/product-studio/1/samsungs9",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/ProductStudio/ss-4.png?raw=true",
    },
  ];
  const category2 = [
    {
      id: 1,
      text: "Dock",
      url: "/product-studio/2/sg1",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/ProductStudio/ip-1.png?raw=true",
    },
    {
      id: 2,
      text: "Dock",
      url: "/product-studio/2/sg2",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/ProductStudio/ip-2.png?raw=true",
    },
    {
      id: 3,
      text: "Dock",
      url: "/product-studio/2/sg3",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/ProductStudio/ip-3.png?raw=true",
    },
    {
      id: 4,
      text: "Dock",
      url: "/product-studio/2/sg4",
      image:
      "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/ProductStudio/ip-4.png?raw=true",
  },
    {
      id: 5,
      text: "Dock",
      url: "/product-studio/2/sg5",
      image:
      "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/ProductStudio/ss-1.png?raw=true",
  },
    {
      id: 6,
      text: "Dock",
      url: "/product-studio/2/sg6",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/ProductStudio/ss-2.png?raw=true",
    },
    {
      id: 7,
      text: "Dock",
      url: "/product-studio/2/sg7",
      image:
      "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/ProductStudio/ss-3.png?raw=true",
  },
    {
      id: 8,
      text: "Dock",
      url: "/product-studio/2/sg8",
      image:
      "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/ProductStudio/ss-4.png?raw=true",
  },
  ];

  const category3 = [
    {
      id: 1,
      text: "Dock",
      url: "/product-studio/3/bg1",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/ProductStudio/ip-1.png?raw=true",
    },
    {
      id: 2,
      text: "Dock",
      url: "/product-studio/3/bg2",
      image:
      "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/ProductStudio/ip-2.png?raw=true",
  },
    {
      id: 3,
      text: "Dock",
      url: "/product-studio/3/bg3",
      image:
      "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/ProductStudio/ip-3.png?raw=true",
  },
    {
      id: 4,
      text: "Dock",
      url: "/product-studio/3/bg4",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/ProductStudio/ip-4.png?raw=true",
    },
    {
      id: 5,
      text: "Dock",
      url: "/product-studio/3/bg5",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/ProductStudio/ss-1.png?raw=true",
    },
    {
      id: 6,
      text: "Dock",
      url: "/product-studio/3/bg6",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/ProductStudio/ss-2.png?raw=true",
    },
    {
      id: 7,
      text: "Dock",
      url: "/product-studio/3/bg7",
      image:
      "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/ProductStudio/ss-3.png?raw=true",
  },
    {
      id: 8,
      text: "Dock",
      url: "/product-studio/3/bg8",
      image:
      "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/ProductStudio/ss-4.png?raw=true",
  },
  ];
  const category4 = [
    {
      id: 1,
      text: "Dock",
      url: "/product-studio/4/mkg1",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/ProductStudio/ip-1.png?raw=true",
    },
    {
      id: 2,
      text: "Dock",
      url: "/product-studio/4/mkg2",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/ProductStudio/ip-2.png?raw=true",
    },
    {
      id: 3,
      text: "Dock",
      url: "/product-studio/4/mkg3",
      image:
      "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/ProductStudio/ip-3.png?raw=true",
  },
    {
      id: 4,
      text: "Dock",
      url: "/product-studio/4/mkg4",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/ProductStudio/ip-4.png?raw=true",
    },
    {
      id: 5,
      text: "Dock",
      url: "/product-studio/4/mkg5",
      image:
      "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/ProductStudio/ss-1.png?raw=true",
  },
    {
      id: 6,
      text: "Dock",
      url: "/product-studio/4/mkg6",
      image:
        "https://s3-alpha-sig.figma.com/img/f0cb/dea3/90238566c70bed11ad9fc86806c638ac?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n0uC14gFH3aqVbmvdFZGDclZDUcYWaalWlqhGbszBcM3xDMiF7CI8cWkDQJczd7cR9grXiWNj85Phmfxcb2JXQamKPVcGV5oTIrYpmvJA6iPaVIEYXv6InLB881bcl2Rh3bgiw9xhk5lzCLCUIe7ubvOs65g0at7r5uEVmTwIMsRBzE8wKWgefS3PfhsqiL5tZ3N5vlO3-STu9j8sriRzCzYpot4Bb9cW9ntBFqdQE~QuzkWaUNLP0Wyy7SgittfsXHWwKefS0Oin9B4OPrYxVaEe-ndh0fZzASZs4rx2WWdZiuxZlvQIcX4BvDz6zsFI4BUe3QbnxR4ZXWnNMIX3w__",
    },
    {
      id: 7,
      text: "Dock",
      url: "/product-studio/4/mkg7",
      image:
      "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/ProductStudio/ss-3.png?raw=true",
  },
    {
      id: 8,
      text: "Dock",
      url: "/product-studio/4/mkg8",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/ProductStudio/ss-4.png?raw=true",
    },
  ];
  const category5 = [
    {
      id: 1,
      text: "Dock",
      url: "/product-studio/5/blg1",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/ProductStudio/ip-1.png?raw=true",
    },
    {
      id: 2,
      text: "Dock",
      url: "/product-studio/5/blg2",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/ProductStudio/ip-2.png?raw=true",
    },
    {
      id: 3,
      text: "Dock",
      url: "/product-studio/5/blg3",
      image:
      "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/ProductStudio/ip-3.png?raw=true",
  },
    {
      id: 4,
      text: "Dock",
      url: "/product-studio/5/blg4",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/ProductStudio/ip-4.png?raw=true",
    },
    {
      id: 5,
      text: "Dock",
      url: "/product-studio/5/blg5",
      image:
      "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/ProductStudio/ss-1.png?raw=true",
  },
    {
      id: 6,
      text: "Dock",
      url: "/product-studio/5/blg6",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/ProductStudio/ss-2.png?raw=true",
    },
    {
      id: 7,
      text: "Dock",
      url: "/product-studio/5/blg7",
      image:
      "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/ProductStudio/ss-3.png?raw=true",
  },
    {
      id: 8,
      text: "Dock",
      url: "/product-studio/5/blg8",
      image:
      "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/ProductStudio/ss-4.png?raw=true",
  },
  ];
  const category6 = [
    {
      id: 1,
      text: "Dock",
      url: "/product-studio/6/htl1",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/ProductStudio/ip-1.png?raw=true",
    },
    {
      id: 2,
      text: "Dock",
      url: "/product-studio/6/htl2",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/ProductStudio/ip-2.png?raw=true",
    },
    {
      id: 3,
      text: "Dock",
      url: "/product-studio/6/htl3",
      image:
      "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/ProductStudio/ip-3.png?raw=true",
  },
    {
      id: 4,
      text: "Dock",
      url: "/product-studio/6/htl4",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/ProductStudio/ip-4.png?raw=true",
    },
    {
      id: 5,
      text: "Dock",
      url: "/product-studio/6/htl5",
      image:
      "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/ProductStudio/ss-1.png?raw=true",
  },
    {
      id: 6,
      text: "Dock",
      url: "/product-studio/6/htl6",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/ProductStudio/ss-2.png?raw=true",
    },
    {
      id: 7,
      text: "Dock",
      url: "/product-studio/6/htl7",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/ProductStudio/ss-3.png?raw=true",
    },
    {
      id: 8,
      text: "Dock",
      url: "/product-studio/6/htl8",
      image:
      "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/ProductStudio/ss-4.png?raw=true",
  },
  ];
  const category7 = [
    {
      id: 1,
      text: "Dock",
      url: "/product-studio/7/lc1",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/ProductStudio/ip-1.png?raw=true",
    },
    {
      id: 2,
      text: "Dock",
      url: "/product-studio/7/lc2",
      image:
      "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/ProductStudio/ip-2.png?raw=true",
  },
    {
      id: 3,
      text: "Dock",
      url: "/product-studio/7/lc3",
      image:
      "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/ProductStudio/ip-3.png?raw=true",
  },
    {
      id: 4,
      text: "Dock",
      url: "/product-studio/7/lc4",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/ProductStudio/ip-4.png?raw=true",
    },
    {
      id: 5,
      text: "Dock",
      url: "/product-studio/7/lc5",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/ProductStudio/ss-1.png?raw=true",
    },
    {
      id: 6,
      text: "Dock",
      url: "/product-studio/7/lc6",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/ProductStudio/ss-2.png?raw=true",
    },
    {
      id: 7,
      text: "Dock",
      url: "/product-studio/7/lc7",
      image:
      "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/ProductStudio/ss-3.png?raw=true",
  },
    {
      id: 8,
      text: "Dock",
      url: "/product-studio/7/lc8",
      image:
      "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/ProductStudio/ss-4.png?raw=true",
  },
  ];
  const category8 = [
    {
      id: 1,
      text: "Dock",
      url: "/product-studio/8/đt1",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/ProductStudio/ip-1.png?raw=true",
    },
    {
      id: 2,
      text: "Dock",
      url: "/product-studio/8/đt2",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/ProductStudio/ip-2.png?raw=true",
    },
    {
      id: 3,
      text: "Dock",
      url: "/product-studio/8/đt3",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/ProductStudio/ip-3.png?raw=true",
    },
    {
      id: 4,
      text: "Dock",
      url: "/product-studio/8/đt4",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/ProductStudio/ip-4.png?raw=true",
    },
    {
      id: 5,
      text: "Dock",
      url: "/product-studio/8/đt5",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/ProductStudio/ss-1.png?raw=true",
    },
    {
      id: 6,
      text: "Dock",
      url: "/product-studio/8/đt6",
      image:
        "https://s3-alpha-sig.figma.com/img/f0cb/dea3/90238566c70bed11ad9fc86806c638ac?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n0uC14gFH3aqVbmvdFZGDclZDUcYWaalWlqhGbszBcM3xDMiF7CI8cWkDQJczd7cR9grXiWNj85Phmfxcb2JXQamKPVcGV5oTIrYpmvJA6iPaVIEYXv6InLB881bcl2Rh3bgiw9xhk5lzCLCUIe7ubvOs65g0at7r5uEVmTwIMsRBzE8wKWgefS3PfhsqiL5tZ3N5vlO3-STu9j8sriRzCzYpot4Bb9cW9ntBFqdQE~QuzkWaUNLP0Wyy7SgittfsXHWwKefS0Oin9B4OPrYxVaEe-ndh0fZzASZs4rx2WWdZiuxZlvQIcX4BvDz6zsFI4BUe3QbnxR4ZXWnNMIX3w__",
    },
    {
      id: 7,
      text: "Dock",
      url: "/product-studio/8/đt7",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/ProductStudio/ss-3.png?raw=true",
    },
    {
      id: 8,
      text: "Dock",
      url: "/product-studio/8/đt8",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/ProductStudio/ss-4.png?raw=true",
    },
  ];
  // Render theo params nhận được

  let params = useParams();

  let id = Number(params.id);

  let selectedParam = () => {
    if (id === 1) {
      breadcrumbData.push({ label: "Ốp lưng", url: "/product-studio/1" });

      return category1;
    } else if (id === 2) {
      breadcrumbData.push({ label: "Sổ gỗ", url: "/product-studio/2" });

      return category2;
    } else if (id === 3) {
      breadcrumbData.push({ label: "Bút gỗ", url: "/product-studio/3" });

      return category3;
    } else if (id === 4) {
      breadcrumbData.push({ label: "Móc khoá gỗ", url: "/product-studio/4" });

      return category4;
    } else if (id === 5) {
      breadcrumbData.push({ label: "Bật lửa Zorro", url: "/product-studio/5" });

      return category5;
    } else if (id === 6) {
      breadcrumbData.push({ label: "Hộp thuốc lá", url: "/product-studio/6" });

      return category6;
    } else if (id === 7) {
      breadcrumbData.push({ label: "Lót cốc", url: "/product-studio/7" });

      return category7;
    } else if (id === 8) {
      breadcrumbData.push({ label: "Dock đựng thẻ", url: "/product-studio/8" });

      return category8;
    } else {
      return [];
    }
  };

  console.log(selectedParam());

  const isLast = breadcrumbData.length;

  return (
    <>
      {/* Title */}
      <BoxTitle>
        <StyledTypography>Hãy lựa chọn ốp lưng bạn thích nhé!</StyledTypography>
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
        {selectedParam().map((item) => (
          <ProductCard onClick={() => navigate(`${item.url}`)}>
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
