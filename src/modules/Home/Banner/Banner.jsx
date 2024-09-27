import React from "react";
import { Container, Img } from "./Banner.style";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { getBanners } from "../../../apis/bannersAPI";
import Loading from "../../../components/Loading/Loading";
import banners from "./../../../data/banners.json";

export default function Banner(props) {
  // call api banners data
  // const {
  //   data: banners = [],
  //   isLoading,
  //   error,
  // } = useQuery({ queryKey: ["banners"], queryFn: getBanners });

  // if (isLoading) {
  //   <Loading />;
  // }

  return (
    <Container>
      <Carousel
        animation="slide"
        autoPlay={false}
        indicatorContainerProps={{
          style: {
            position: "absolute",
            bottom: "15px", // Điều chỉnh vị trí theo ý muốn
            zIndex: 1,
            color: "#e9ae70",
          },
        }}
      >
        {banners.map((item) => (
          <Img key={item.name} loading="lazy" srcSet={item.src} />
        ))}
      </Carousel>
    </Container>
  );
}
