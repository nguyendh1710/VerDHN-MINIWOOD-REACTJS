import React from "react";
import {
  Container,
  BoxTitle,
  Title,
  TextTitle,
  CusButton,
  ProductImg,
  BoxProduct,
} from "./BestSeller.style";
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom";


export default function BestSeller() {


  const navigate = useNavigate();

  let products = [
    {
      id: 1,
      title: "Ốp lưng Iphone",
      src: "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/Home/BestSeller/bestseller-1.png?raw=true",
    },
    {
      id: 2,
      title: "Ốp lưng Samsung",
      src: "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/Home/BestSeller/bestseller-2.png?raw=true",
    },
    {
      id: 3,
      title: "Ốp lưng Iphone",
      src: "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/Home/BestSeller/bestseller-3.png?raw=true",
    },
    {
      id: 4,
      title: "Móc khóa",
      src: "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/Home/BestSeller/bestseller-4.png?raw=true",
    },
    {
      id: 5,
      title: "Dụng cụ đựng bút",
      src: "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/Home/BestSeller/bestseller-5.png?raw=true",
    },
    {
      id: 6,
      title: "Gọng kính",
      src: "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/Home/BestSeller/bestseller-6.png?raw=true",
    },
    {
      id: 7,
      title: "Cốc nước",
      src: "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/Home/BestSeller/bestseller-7.png?raw=true",
    },
    {
      id: 8,
      title: "Set quà tặng",
      src: "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/Home/BestSeller/bestseller-8.png?raw=true",
    },
    {
      id: 9,
      title: "Sổ tay A5",
      src: "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/Home/BestSeller/bestseller-9.png?raw=true",
    },
    {
      id: 10,
      title: "Dụng cụ đựng bút",
      src: "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/Home/BestSeller/bestseller-10.png?raw=true",
    },
  ];

  return (
    <Container>
      {/* Title */}

      <BoxTitle>
        <Title
          variant="h1"
          sx={{
            fontSize: { xs: "40px", md: "46px" },
            padding: { xs: "0 20px", md: "16px 24px" },
            display: "flex",
            flexDirection: "row",
            display: "flex",
            padding: "16px 80px",
            alignItems: "center",
            gap: "16px",
            alignSelf: "stretch",
          }}
        >
          <div
            style={{
              backgroundColor: "#e9ae70",
              alignSelf: "center",
              width: "430px",
              height: "2.5px",
              margin: "auto 0",
            }}
          ></div>
          <span
            style={{
              color: "#1d1d1d",
              textAlign: "center",

              flexBasis: "auto",

              font: "700 46px/130% Quicksand, sans-serif",
              fontSize: "36px",
              fontWeight: "bold",
              padding: { xs: "22px 20px", md: "62px 60px" },
            }}
          >
            Sản phẩm nổi bật
          </span>

          <div
            style={{
              backgroundColor: "#e9ae70",
              alignSelf: "center",
              width: "470px",
              height: "2.5px",
              margin: "auto 0",
            }}
          ></div>
        </Title>

        {/* Button */}
        <CusButton
          onClick={() => navigate("/category-page")}
        
        >
          <Typography>Xem thêm</Typography>
        </CusButton>
      </BoxTitle>

      {/* ProductBest */}

      <Grid
        sx={{
          display: "flex",
          flexDirection: "row",
          flex: "1",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "12px",
          flexWrap: "wrap",
        }}
     
      >
        {products.map((item) => (
          <BoxProduct key={item.id} style={{
            borderRadius:"30px",
            cursor: "pointer",
          }}>
            <ProductImg src={item.src} alt={item.title}  />

            <Typography
              sx={{
                fontWeigth: "bolder",
                marginTop: "15px",
              }}
              variant="subtitle1"
            >
              {item.title}
            </Typography>
          </BoxProduct>
        ))}
      </Grid>
    </Container>
  );
}
