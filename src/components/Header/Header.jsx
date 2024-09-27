import React from "react";

import {
  Logo,
  Image,
  CusButton,
  CusBox,
  CusPopup,
  ContentWrapper,
  ConfirmationMessage,
  ConfirmationButton,
  ButtonGroup,
  CloseButton,
  CusFormControl,
  CartIconContainer,
  BadgeCart,
  SigninAndSignup,
  SpanHeader,
} from "./Header.style";
import {
  Container,
  Box,
  AppBar,
  Toolbar,
  MenuItem,
  FormControl,
  Select,
  InputLabel,
  Button,
  CssBaseline,
  IconButton,
  Menu,
  Tooltip,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { useState } from "react";
import {
  listNation,
  searchIcon,
  cartIcon,
  userIcon,
} from "./../Assets/iconSvg";

// import { useContext } from "react";
// import { CartContext } from "./../../context/CartContext";
import { useCart } from "react-use-cart";
import { useUserContext } from "../../context/UserContext";
import {
  AccountCircle,
  ExitToApp,
  Search,
  AccountBox,
} from "@mui/icons-material";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
export default function Header() {
  //
  const settings = ["Profile", "Account", "Dashboard", "Logout"];



  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (setting) => {
    setAnchorElUser(null);
    if (setting === "Logout") {
      handleSignout();
    }
  };

  //tranlates

  const handleLanguageChange = (lang) => {
    const googleTranslateElement = document.querySelector(".goog-te-combo");
    if (googleTranslateElement) {
      googleTranslateElement.value = lang;
      googleTranslateElement.dispatchEvent(new Event("change"));
    }
  };

  //nation
  // console.log(listNational)

  const [selectedImage, setSelectedImage] = useState(listNation[0].image);

  const handleChange = (event) => {
    setSelectedImage(event.target.value);
  };

  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const handlePopup = (close) => {
    navigate("/custom-studio");
    close();
  };

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  // cart bage (gio hang icon)


  const { currentUser, handleSignout } = useUserContext();
  // phai them ? neu khong se bao loi khi khong co nguoi dung dang nhap
  const varietyOfCurrentUser = currentUser?.map((item) => {
    return item.loaiNguoiDung;
  });
  const varietyOfCurrentUserString = varietyOfCurrentUser?.join(", ");
  // console.log(varietyOfCurrentUserString);
  const avatarCurrentUser = currentUser?.map((item) => {
    return item.avatar;
  });
  // Cách 1:day du lieu vao context de dung cho component Cart ==> dung  context
  // const { totalItems } = useContext(CartContext);
  // console.log(totalItems);

  // Cách 2: Gọi dữ liệu từ useCart để dùng => dung  react-use-cart

  const { isEmpty, totalUniqueItems,emptyCart  } = useCart();

  const handleLogout = () => {

  
      handleSignout();
   
      emptyCart();
  
  };



  return (
    <Box>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              // gap: "20px",
              // padding: "0 80px",
              "@media (max-width: 991px)": {
                flexWrap: "wrap",
                padding: "0 20px",
              },
            }}
          >
            <Box  sx={{
              
                width: "130px",
              }}>  <Logo
              srcSet="https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/components/Header/logo.png?raw=true"
              alt="Logo"
              onClick={() => navigate("/")}
             
            /></Box>
          
            {/* Navbar */}
            <Box
              sx={{
                display: "flex",
                alignSelf: "stretch",
                paddingLeft: "60px",
              }}
            >
              <CusButton
                color="inherit"
                onClick={() => navigate("/")}
                sx={{
                  width: "150px",
                }}
              >
                Giới thiệu
              </CusButton>
              <CusButton
                sx={{
                  width: "150px",
                }}
                color="inherit"
                onClick={() => navigate("/category-page")}
              >
                Sản Phẩm
              </CusButton>
              <CusButton
                color="inherit"
                sx={{
                  width: "150px",
                }}
              >
                Best-Seller
              </CusButton>
              <CusButton
                color="inherit"
                onClick={togglePopup}
                sx={{
                  width: "160px",
                }}
              >
                Tự thiết kế
              </CusButton>

              {/* Popup */}

              <CusPopup
                open={isOpen}
                onClose={togglePopup}
                modal
                style={{
                  borderRadius: "15px 15px 0 0",
                }}
                position=" center"
              >
                {(close) => (
                  <div>
                    <ContentWrapper style={{ position: "relative" }}>
                      <CloseButton onClick={close}>X</CloseButton>
                      <ConfirmationMessage>
                        Bạn chắc chắn muốn chuyển sang trang Tự thiết kế chứ?
                      </ConfirmationMessage>
                      <ButtonGroup>
                        <ConfirmationButton onClick={() => handlePopup(close)}>
                          Chắc chắn
                        </ConfirmationButton>
                        <ConfirmationButton onClick={close}>
                          Ở lại trang này
                        </ConfirmationButton>
                      </ButtonGroup>
                    </ContentWrapper>
                  </div>
                )}
              </CusPopup>

              <CusButton color="inherit" onClick={() => navigate("/blogs")}>
                Blogs
              </CusButton>
              <CusButton color="inherit" onClick={() => navigate("/contact")}>
                Liên hệ
              </CusButton>
            </Box>
            {/* Icon */}
            <Box
              sx={{
                display: "flex",
                gap: "10px",
                flexDirection: "row",
                justifyContent: "center",
                paddingLeft: "94px",
              }}
            >
              {/* IconTranlaste */}
              <Tooltip title="Ngôn ngữ" placement="top">
                <FormControl>
                  <Select
                    labelId="svg-select-label"
                    id="svg-select"
                    value={selectedImage}
                    onChange={handleChange}
                    style={{
                      backgroundColor: "transparent",
                      border: "none",
                      width: "78px",
                      height: "36px",
                      marginBottom: "4px",
                    }}
                  >
                    {listNation.map((item, index) => (
                      <MenuItem key={index} value={item.image}>
                        <div onClick={() => handleLanguageChange(item.nation)}>
                          {item.image}
                        </div>
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Tooltip>

              {/* IconFind */}
              <Tooltip title="Tìm kiếm" placement="top">
                <Box
                  sx={{
                    p: 0,
                    "&:hover": {
                      color: "#e9ae70",
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  <Search fontSize="large" />
                  {/* {searchIcon.image} */}
                </Box>
              </Tooltip>
              {/* IconCart */}
              {/* Cách 1 */}

              {/* <CartIconContainer>
                <Box onClick={() => navigate("/cart-page")}>
                  {cartIcon.image}
                </Box>
                {totalItems > 0 && <Badge>{totalItems}</Badge>}
              </CartIconContainer> */}

              {/* Cách 2 */}
              <Tooltip title="Giỏ hàng" placement="top">
                <CartIconContainer>
                  <Box
                    onClick={() => navigate("/cart")}
                    sx={{
                      p: 0,
                      "&:hover": {
                        color: "#e9ae70",
                        backgroundColor: "transparent",
                      },
                    }}
                  >
                    <LocalGroceryStoreIcon fontSize="large" />
                    {/* {cartIcon.image} */}
                  </Box>
                  {totalUniqueItems > 0 && currentUser && (
                    <BadgeCart>{totalUniqueItems}</BadgeCart>
                  )}
                </CartIconContainer>
              </Tooltip>
              {/* IconSigninAndSignup */}

             
              {/* Account */}
              {currentUser ? (
                <>
                <Box >
                  <Box
                    sx={{ flexGrow: 0, borderRight: 1 }}
                    display={"inline-block"}
                  >
                    <Tooltip title="User" placement="top">
                      <IconButton
                        onClick={handleOpenUserMenu}
                        sx={{
                          p: 0,
                          "&:hover": {
                            color: "#e9ae70",
                            backgroundColor: "transparent",
                          },
                        }}
                      >
                        {/* <img src={avatarCurrentUser} width={20} height={20}  style={{
                      borderRadius : "50%"
                    }}  alt="" /> */}
                    <img src="https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/components/Header/logo.png?raw=true" width={20} height={20}  style={{
                      borderRadius : "50%"
                    }}  alt="" />
                    
                        <Typography sx={{ color: "#a1461c", fontWeight: 700 }}>
                          {" "}
                          Welcome {currentUser.hoTen} !
                        </Typography>
                      </IconButton>
                    </Tooltip>
                    <Menu
                      sx={{ mt: "45px" }}
                      id="menu-appbar"
                      anchorEl={anchorElUser}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      open={Boolean(anchorElUser)}
                      onClose={handleCloseUserMenu}
                    >
                      {settings.map((setting) => (
                        <MenuItem
                          key={setting}
                          onClick={() => handleCloseUserMenu(setting)}
                        >
                          <Typography textAlign="center">{setting}</Typography>
                        </MenuItem>
                      ))}
                    </Menu>
                    
                  </Box>
                  {currentUser &&  <IconButton
                    sx={{
                      "&:hover": {
                        color: "#e9ae70",
                        backgroundColor: "transparent",
                      },
                    }}
                    onClick={handleLogout}
                  >
                    <ExitToApp />
                    <Typography>Đăng xuất</Typography>
                  </IconButton>} 
                
                  </Box>
                </>
              ) : (
                <>
                  {/* Signin */}
                  <Box sx={{ flexGrow: 0 }}>
                    <SigninAndSignup
                      onClick={() => navigate(`/signin`)}
                      borderRight="1px solid #9e9e9e"
                    >
                      <Tooltip title="Đăng nhập" placement="top">
                        <AccountCircle fontSize="large" />
                      </Tooltip>
                      <SpanHeader>Đăng nhập</SpanHeader>
                    </SigninAndSignup>
                  </Box>

                  {/* Signup */}
                  <Box sx={{ flexGrow: 0 }}>
                    <SigninAndSignup onClick={() => navigate(`/signup`)}>
                      <Tooltip title="Đăng kí" placement="top">
                        {/* {userIcon.image} */}
                      </Tooltip>
                      <AccountBox fontSize="large" />
                      <SpanHeader>Đăng kí</SpanHeader>
                    </SigninAndSignup>
                  </Box>
                </>
              )}
               {varietyOfCurrentUserString === "QuanTriVien" && (
        

                navigate(`/admin`)


              )}

            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
