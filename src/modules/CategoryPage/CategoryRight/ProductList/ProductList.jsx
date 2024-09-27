import React from "react";
import {
  ProductBox,
  BoxTitle,
  Title,
  TextTitle,
  CusButton,
  ProductCard,
  CusCardMedia,
  CusCardContent,
  CardName,
  CardPrice,
} from "./ProductList.style";
import { Typography, Grid, Button, Box } from "@mui/material";

export default function ProductList({ data, dataCategory }) {
  return (
    <>
      <ProductBox>
        {/* Title */}
        <BoxTitle>
          <Title>
            <TextTitle>{dataCategory}</TextTitle>

            {/* Button */}
            <CusButton
              sx={{
                backgroundColor: "#381D02",
                color: "white",
                "&:hover": {
                  backgroundColor: "#e9ae70",
                },
              }}
            >
              <Typography>Xem thêm</Typography>
            </CusButton>
          </Title>
        </BoxTitle>

        {/* Products */}

        <Grid container spacing={4} sx={{ padding: "0px" }} columnGap={6}>
          {data.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={2.4} key={product.id}>
              <ProductCard sx={{}}>
                <CusCardMedia
                  component="img"
                  image={product.image}
                  alt={product.name}
                  sx={{
                    borderRadius: "15px 15px 0 0",
                    aspectRatio: "1",
                    objectFit: "cover",
                    height: "190px",
                  }}
                />
                <CusCardContent>
                  <CardName variant="h6" component="h2">
                    {product.name}
                  </CardName>
                  {/* <CardCategory
                      variant="body2"
                      color="text.secondary"
                      sx={{}}
                    >
                      {product.category}
                    </CardCategory> */}
                  <CardPrice variant="body1">{product.price}</CardPrice>
                </CusCardContent>
              </ProductCard>
            </Grid>
          ))}
        </Grid>
      </ProductBox>
    </>
  );
}
