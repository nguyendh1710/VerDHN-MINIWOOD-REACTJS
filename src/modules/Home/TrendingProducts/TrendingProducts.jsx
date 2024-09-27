import { Grid, IconButton, Tooltip } from "@mui/material";

import {
  Container,
  BoxTitle,
  Title,
  CusCardContent,
  BoxCategory,
  CategoryButton,
  ProductCard,
  Overlay,
  CusCardMedia,
  CardName,
  CardCategory,
  CardPrice,
  BoxBuy,
  ButtonBuy,
} from "./TrendingProducts.style";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../../apis/productsAPI";

import Loading from "../../../components/Loading/Loading";
// import { CartContext } from '../../../context/CartContext';
import Carousel from "react-material-ui-carousel";
import { useCart } from "react-use-cart";
import { useUserContext } from "./../../../context/UserContext";

import { useNavigate } from "react-router-dom";

const categories = [
  "Văn phòng phẩm",
  "Set quà tặng",
  "Phụ kiện",
  "Sản phẩm tự thiết kế",
];

export default function TrendingProducts() {
  // call api products data
  const {
    data: products = [],
    isLoading,
    error,
  } = useQuery({ queryKey: ["products"], queryFn: getProducts });

  if (isLoading) {
    <Loading />;
  }

  // Cart -----------------------------------------

  // Cách 1:day du lieu vao context de dung cho component Cart ==> dung  context

  // const { addToCart } = useContext(CartContext);

  // Cách 2: Gọi hàm addItem từ useCart để dùng => dung  react-use-cart
  const { addItem } = useCart();

  // them san pham vao gio hang

  const navigate = useNavigate();

  const { currentUser } = useUserContext();

  // tao bien state gio hang de luu san pham vao khi nguoi dung add to cart tam thoi trươc khi gui len api

  const handleAddToCart = (product) => {
    if (!currentUser) {
      navigate("/signin");
    } else {
      // them number vao bieu tuong gio hang
      addItem(product);
    }
  };

  // chia slide cho carousel--------------------------

  const chunkSize = 5;
  const slides = [];

  for (let i = 0; i < products.length; i += chunkSize) {
    slides.push(products.slice(i, i + chunkSize));
  }

  return (
    <Container>
      {/* Title */}

      <BoxTitle>
        <Title
          variant="h1"
          sx={{
            fontSize: { xs: "40px", md: "46px" },

            display: "flex",
            flexDirection: "row",

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
              width: "436px",
              height: "2.5px",
              margin: "auto 50px",
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
            Hot Trend 2023
          </span>

          <div
            style={{
              backgroundColor: "#e9ae70",
              alignSelf: "center",
              width: "436px",
              height: "2.5px",
              margin: "auto 50px",
            }}
          ></div>
        </Title>
      </BoxTitle>

      {/* Category */}

      <BoxCategory
        sx={{
          padding: { xs: "0 20px", md: "16px 24px" },

          flexWrap: { xs: "wrap", md: "nowrap" },
        }}
      >
        {categories.map((category, index) => (
          <CategoryButton
            variant={index === 0 ? "contained" : ""}
            sx={{
              backgroundColor:
                index === 0 ? "var(--Secondary, #e9ae70)" : "#fff",
              color: "black",
              fontWeight: "bold",
              padding: { xs: "22px 60px", md: "22px 60px" },

              "&:hover": {
                backgroundColor:
                  index === 0 ? "var(--Secondary, #e9ae70)" : "#f5f5f5",
              },
            }}
            key={index}
          >
            {category}
          </CategoryButton>
        ))}
      </BoxCategory>

      {/* Products */}

      <Carousel
        indicators={false}
        animation="slide"
        autoPlay={false}
        navButtonsAlwaysVisible={true}
      >
        {slides.map((slide, index) => (
          <Grid container spacing={2} sx={{ padding: "0 20px" }}>
            {slide.map((product, i) => (
              <Grid item xs={12} sm={6} md={4} lg={2.4} key={product.id}>
                <ProductCard item={product}>
                  <Overlay className="overlay">
                    <Tooltip title="Thêm vào giỏ hàng" placement="top">
                      <IconButton color="white">
                        {/* Cách 1 */}
                        {/* <ShoppingCartIcon onClick={() => addToCart(product)}/> */}
                        {/* Cách 2 */}

                        <ShoppingCartIcon
                          onClick={() => handleAddToCart(product)}
                        />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Xem sản phẩm" placement="top">
                      <IconButton color="white">
                        <VisibilityIcon />
                      </IconButton>
                    </Tooltip>
                  </Overlay>
                  <CusCardMedia
                    component="img"
                    image={product.image}
                    alt={product.name}
                    sx={{
                      borderRadius: "15px 15px 0 0",
                      aspectRatio: "1",
                      objectFit: "cover",
                    }}
                  />
                  <CusCardContent>
                    <CardName variant="h6" component="h2">
                      {product.name}
                    </CardName>
                    <CardCategory variant="body2" color="text.secondary">
                      {product.category}
                    </CardCategory>
                    <CardPrice variant="body1">
                      {product.price} <span>VND</span>{" "}
                    </CardPrice>
                    <BoxBuy>
                      <ButtonBuy
                        variant="contained"
                        fullWidth
                        sx={{
                          backgroundColor: "var(--Background-1, #dcc6a5)",
                          "&:hover": {
                            backgroundColor: "#c4ae8c",
                          },
                        }}
                      >
                        Mua ngay
                      </ButtonBuy>
                    </BoxBuy>
                  </CusCardContent>
                </ProductCard>
              </Grid>
            ))}
          </Grid>
        ))}
      </Carousel>
    </Container>
  );
}

////////////////////////////
