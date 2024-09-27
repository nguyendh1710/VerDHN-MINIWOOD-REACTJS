import {
  Container,
  BoxCoop,
  BoxTitle,
  Title,
  TextTitle,
  Img,
  CusGrid,
} from "./Coop.style";
import { Star } from "@mui/icons-material";
import React, { useState } from "react";
import { Typography, Box, Rating, Paper, Grid } from "@mui/material";
import Carousel from "react-material-ui-carousel";

export default function Coop() {
  const CoopDatas = [
    {
      imgName: "anh1",
      imgSrc:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/Home/Coop/coop-1.png?raw=true",
    },
    {
      imgName: "anh2",
      imgSrc:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/Home/Coop/coop-2.png?raw=true",
    },
    {
      imgName: "anh3",
      imgSrc:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/Home/Coop/coop-3.png?raw=true",
    },
    {
      imgName: "anh4",
      imgSrc:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/Home/Coop/coop-4.png?raw=true",
    },
    {
      imgName: "anh5",
      imgSrc:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/Home/Coop/coop-5.png?raw=true",
    },
    {
      imgName: "anh6",
      imgSrc:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/Home/Coop/coop-6.png?raw=true",
    },
    {
      imgName: "anh7",
      imgSrc:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/Home/Coop/coop-7.png?raw=true",
    },
    {
      imgName: "anh8",
      imgSrc:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/Home/Coop/coop-8.png?raw=true",
    },
    {
      imgName: "anh9",
      imgSrc:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/Home/Coop/coop-9.png?raw=true",
    },
    {
      imgName: "anh10",
      imgSrc:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/Home/Coop/coop-10.png?raw=true",
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
            padding: "16px 90px",
            alignItems: "center",
            gap: "16px",
            alignSelf: "stretch",
          }}
        >
          <div
            style={{
              backgroundColor: "#e9ae70",
              alignSelf: "center",
              width: "396px",
              height: "2.5px",
              margin: "auto 20px",
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
            Doanh nghiệp đối tác
          </span>

          <div
            style={{
              backgroundColor: "#e9ae70",
              alignSelf: "center",
              width: "396px",
              height: "2.5px",
              margin: "auto 20px",
            }}
          ></div>
        </Title>
      </BoxTitle>

      {/* Coop */}

      <Carousel
      navButtonsAlwaysVisible={true}
        sx={{
          width: "1240px",
          marginLeft: "130px",
        }}
        indicatorContainerProps={{
          style: {
            position: "absolute",
            bottom: "1px", // Điều chỉnh vị trí theo ý muốn
            zIndex: 1,
          },
        }}
      >
        <Grid
          container
          spacing={1}
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {CoopDatas.map((item, index) => (
            <CusGrid item xs={1} 
            key={index}>
              <Img
                key={item.imgName}
                loading="lazy"
                srcSet={item.imgSrc}
                alt={`Ảnh ${index + 1}`}
              />
            </CusGrid>
          ))}
        </Grid>
      </Carousel>
    </Container>
  );
}
////////////////////////////////////////////
