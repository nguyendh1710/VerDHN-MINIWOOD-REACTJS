import React, { useState, useEffect, useRef } from "react";
import {
  Typography,
  Button,
  Box,
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

import Footer from "../../components/Footer/Footer";

// import { removeItemToCart } from "./../../apis/cartsAPI";
import {
  ContainerBox,
  CartTitleContainer,
  CusImg,
  ItemContentBox,
  ContentBox,
  ListItemBox,
  CheckoutBox,
  RemoveButton,
  CheckoutButton,
  CustomButton,
} from "./Cart.style";
// import { useContext } from 'react';
// import { CartContext } from './../../context/CartContext';
import { useCart } from "react-use-cart";
import { useUserContext } from "../../context/UserContext.jsx";
import { useQuery } from "@tanstack/react-query";
import Loading from "./../../components/Loading/Loading.jsx";
import { saveCartToAPI, getCartFromSignin } from "./../../apis/cartsAPI";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
export default function Cart() {
  // ma giam gia
  const [selectedValue, setSelectedValue] = useState("1");
  //-------------------------------------

  const { currentUser } = useUserContext();
  // goi useCart -----------------------------------------
  // Cách 1:day du lieu vao context de dung cho component Cart ==> dung  context

  // const { cart } = useContext(CartContext);
  // Cách 2: Gọi hàm  từ useCart để dùng => dung  react-use-cart

  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    cartTotal,
    setItems = [],
  } = useCart();
  const idCartOfCurrentUser = currentUser.map((item) => {
    return item.id;
  });
  console.log(idCartOfCurrentUser);
  //---------- Sử dụng useEffect để tự động lưu thông tin giỏ hàng khi items thay đổi
  useEffect(() => {
    //gui id nguoi dung  + mang items moi khi tung san pham thay doi cua react-use-cart qua cho cart api

    if (items.length === 0 || isEmpty) {
      saveCartToAPI(idCartOfCurrentUser, []);
    }
    if (idCartOfCurrentUser === null) {
      console.log(idCartOfCurrentUser);
      return;
    } else {
      // chuyen thanh so khong de oject bi loi
      saveCartToAPI(Number(idCartOfCurrentUser), items);
    }
  }, [items]);

  //------- khi bam vao bieu tuong gio hang thi nhung lenh duoi day moi thuc hien (component Cart duoc mount)

  //------lay du lieu tu api de goi ham setItems de set lai mang items cua react use cart khi nguoi dung dang nhap----------------

  const {
    data: cartUser = [],
    isLoading,
    error,
  } = useQuery({ queryKey: ["cartUser"], queryFn: getCartFromSignin });
  console.log(cartUser);
  const arraycartUser = cartUser.items;

  // Ham useEffect se lay du lieu truoc khi component Cart duoc khoi tao de tranh truong hop ham setItem bao loi do khong co du lieu de set vao neu tao dong thoi khi component duoc mount

  useEffect(() => {
    // dong lenh nay tranh truong hop mang rong nen ham map loi

    if (!Array.isArray(arraycartUser)) return; // Kiểm tra nếu không phải mảng hoặc mảng rỗng thì không gọi

    if (arraycartUser || items.length === 0) {
      setItems(arraycartUser);

      console.log(items);
    }
  }, [arraycartUser]);

  //----------------------------------
  if (isLoading) {
    return <Loading />;
  }

  //-----------------------------------
  if (isEmpty) {
    return <p>Your cart is empty</p>;
  }

  //-----------------------------------

  // ma giam gia

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  //----------------------------

  return (
    <>
      {/* Title */}
      <CartTitleContainer>
        <LocalGroceryStoreIcon fontSize="large" />
        <Typography
          sx={{
            fontWeight: "700",
            fontSize: "20px",
            marginBottom: "7px",
          }}
        >
          Giỏ hàng ({totalUniqueItems} sản phẩm)
        </Typography>
      </CartTitleContainer>
      <ContainerBox>
        {/* Product Display */}

        <Grid container direction="column" spacing={2}>
          {items.map((item, index) => (
            <Grid item key={index}>
              <Box sx={{ marginBottom: "10px" }}>
                <ListItemBox key={item.id}>
                  <CusImg src={item.image} alt={item.name} />
                  <ItemContentBox>
                    <ContentBox>
                      {/* Text */}
                      <Typography
                        sx={{
                          fontSize: "20px",
                          fontWeight: "700",
                        }}
                      >
                        {item.name}
                      </Typography>
                      <Typography color="textSecondary">
                        Color:{item.color}
                      </Typography>

                      <Box>
                        <button
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity - 1)
                          }
                        >
                          -
                        </button>
                        <input
                          type="number"
                          value={item.quantity}
                          // onChange={handleUpdateQuantity}
                          readOnly
                          style={{
                            width: "30px",
                          }}
                        />
                        <button
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                      </Box>

                      <Box
                        style={{
                          paddingTop: "7px",
                          display: "flex",

                          flexDirection: "row",
                          justifyContent: "start",
                        }}
                      >
                        <Box
                          style={{
                            paddingRight: "10px",
                          }}
                        >
                          {" "}
                          <RemoveButton onClick={() => removeItem(item.id)}>
                            Xóa
                          </RemoveButton>
                        </Box>
                        <Box>
                          {" "}
                          <CustomButton>Custom</CustomButton>
                        </Box>
                      </Box>
                    </ContentBox>

                    {/* Thành tiền */}
                    <Box
                      sx={{
                        paddingLeft: "7px",
                        width: "400px",
                        paddingTop: "64px",
                      }}
                    >
                      <Typography
                        variant="h2"
                        sx={{
                          fontSize: "20px",
                          fontWeight: "700",
                          color: "#a1461c",
                        }}
                      >
                        Thành tiền:{item.quantity * item.price} VND
                      </Typography>
                    </Box>
                  </ItemContentBox>
                </ListItemBox>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Checkout*/}

        <CheckoutBox>
          <Typography
            variant="h2"
            sx={{
              fontSize: "30px",
              fontWeight: "700",
              color: "#a1461c",
              paddingBottom: "24px",
            }}
          >
            Tạm tính: {cartTotal} VND
          </Typography>
          <Box
            sx={{
              height: "20px",
            }}
          >
            <Box
              component="span"
              sx={{ color: "rgba(251,55,55,1)", marginBottom: "10px" }}
            >
              * Mời bạn chọn voucher
            </Box>
            <FormControl fullWidth>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectedValue}
                placeholder="Mời bạn chọn voucher"
                onChange={handleChange}
              >
                <MenuItem
                  value={10}
                  sx={{
                    fontSize: "30px",
                    fontWeight: "700",
                    color: "#a1461c",
                  }}
                >
                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: "20px",
                      fontWeight: "700",
                      color: "#a1461c",
                    }}
                  >
                    10%
                  </Typography>
                </MenuItem>
                <MenuItem
                  value={20}
                  sx={{
                    fontSize: "30px",
                    fontWeight: "700",
                    color: "#a1461c",
                  }}
                >
                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: "20px",
                      fontWeight: "700",
                      color: "#a1461c",
                    }}
                  >
                    20%
                  </Typography>
                </MenuItem>
                <MenuItem
                  value={30}
                  sx={{
                    fontSize: "30px",
                    fontWeight: "700",
                    color: "#a1461c",
                  }}
                >
                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: "20px",
                      fontWeight: "700",
                      color: "#a1461c",
                    }}
                  >
                    30%
                  </Typography>
                </MenuItem>
              </Select>
            </FormControl>

            <Typography
              variant="h2"
              sx={{
                fontSize: "30px",
                fontWeight: "700",
                color: "#a1461c",
                paddingTop: "24px",
              }}
            >
              Tổng tiền: {cartTotal - cartTotal * ((100 - selectedValue) / 100)}{" "}
              VND
            </Typography>

            <CheckoutButton>Thanh toán</CheckoutButton>
          </Box>
        </CheckoutBox>
      </ContainerBox>

      <Footer />
    </>
  );
}
