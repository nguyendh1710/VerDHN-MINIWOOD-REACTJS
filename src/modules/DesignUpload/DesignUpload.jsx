import { useState, useEffect, useRef } from "react";

import {
  Logo,
  Image,
  CusButton,
  CusBox,
  ContentBox,
  CusContainer,
  MenuTool,
  MenuRight,
  MenuStudioItem,
  DesignArea,
  FileUploadSection,
  FileUploadTypography,
  FileUploadButton,
  NoteSection,
  PhotoTransferSection,
  TransferButton,
  SaveDesignButton,
  ProductDisplay,
  ProductImage,
  ColorSelection,
  ActionButtons,
  ContentRight,
  FontToolbar,
  FontSelector,
  ImageContainer,
  CusUploadButton,
  FilterImage,
  DeleteButton,
  ImagePreview,
  CusReactQuill,
} from "./DesignUpload.style";
import {
  Container,
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Close } from "@mui/icons-material";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useLocation } from 'react-router-dom';
import DroppableArea from "./DroppableArea/DroppableArea";
import DraggableImage from "./DraggableImage/DraggableImage";
import DnDContext from "./../../context/DnDContext";
import { actionIcons,menuItems } from "./../../components/Assets/iconSvg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
export default function DesignUpload({ background, type, color}) {


// lay item tu Navigate cua component ProductColor

const location = useLocation();
// goi useLocation lay du lieu item ve
  const { item } = location.state || {};

console.log("kiem", item.id)

  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState(null);
  const handleButtonClick = (index) => {
    if (selectedIndex === index) {
      setSelectedIndex(null); // Đóng object nếu đã được chọn
    } else {
      setSelectedIndex(index); // Mở object nếu chưa được chọn
    }
  };


  const colorOptions = [
    {
      name: "Cherry",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/74babd8a883a6778efe4910b86a7338cb21ac1f3230f2ccc6c8ee1a3b03b5dc3?placeholderIfAbsent=true&apiKey=8cf726bd15044deb901dee42a95b28fe",
    },
    {
      name: "Maple",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/3aabd2d538e2fe7bae396082a46c3f1719a5d0fe855ae61661a6ee986c99e1ec?placeholderIfAbsent=true&apiKey=8cf726bd15044deb901dee42a95b28fe",
    },
    {
      name: "Walnul",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ca046a62429c37a5d23bb1958ac42ad182f0ee37fd489e5948612e413e1fc012?placeholderIfAbsent=true&apiKey=8cf726bd15044deb901dee42a95b28fe",
    },
  ];

  //

  const [image, setImage] = useState(null);

  const handleChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      setImage(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveImage = () => {
    setImage(null);
  };
  // Transfer

  const [isBlack, setIsBlack] = useState(false);

  const toggleColor = () => {
    setIsBlack(!isBlack);
  };

  //-------

  // Darg drop icon
  const [droppedImageId, setDroppedImageId] = useState(null);

  const handleDrop = (id) => {
    setDroppedImageId(id);
  };

  //
  //

  // Edit text
  const [text, setText] = useState("");

  return (
    <>
      {/* Header */}
      {/* <Box
        sx={{
          height: "80px",

          width: "100%",
        }}
      >
        <AppBar position="static" color="transparent" elevation={0}>
          <Toolbar>
            <Container>
              <Logo
                srcSet="https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/components/Header/logo.png?raw=true"
                alt="Logo"
                onClick={() => navigate("/")}
              />
            </Container>
          </Toolbar>
        </AppBar>
      </Box> */}
      {/* Content */}
      <Button
          disabled={false}
          variant="filledTonal"
          onClick={() => {
            navigate(`/product-studio/${item.id}`);
          }}
          sx={{ width: { sx: 1.0, sm: 50, md: 170, lg: 190, xl: 200 } }}
        >
          <Box sx={{ m: 1 }}><FontAwesomeIcon icon={faArrowCircleLeft}/></Box>
          
          <Box>Quay lại</Box>
        </Button>
      <CusContainer>
        {/* ContentLeft */}
        <ContentBox>
          <MenuTool>
            <MenuRight component="nav">
              {menuItems.map((item, index) => (
                <MenuStudioItem
                  onClick={() => handleButtonClick(index)}
                  key={index}
                  sx={{
                    backgroundColor: `${item.isActive}
            ? 'rgba(248, 234, 205, 1)'
            : isUpload
            ? 'rgba(241, 148, 38, 1)'
            : 'transparent'`,
                    fontWeight: `${item.isActive} || ${item.isUpload} ? "700" : "400"`,
                    color: `${item.isUpload}  ? 'var(--Text-Black, #1d1d1d)' : 'inherit'`,
                  }}
                >
                  {selectedIndex === index && (
                    <ul>
                      {item.listItem?.map((image, idx) => (
                        <li
                          key={idx}
                          style={{
                            listStyleType: "none",
                          }}
                        >
                          <div
                            style={{
                              width: "30px",
                              height: "30px",
                              borderRadius: "50%",
                            }}
                          >
                            {image}
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}

               
                  <Box>{item.icon}</Box>
                  <Box
                    sx={{
                      marginTop: "10px",
                      marginBottom: "20px",
                      width: "100%",
                      paddingLeft: "30px",
                    }}
                  >
                    {item.text}
                  </Box>
                </MenuStudioItem>
              ))}
            </MenuRight>

            <DesignArea component="section">
              <FileUploadSection>
                <Typography
                  variant="h2"
                  sx={{ fontSize: "20px", fontWeight: 700, lineHeight: 1.3 }}
                >
                  File ảnh
                </Typography>
                <FileUploadTypography sx={{ lineHeight: 1.3 }}>
                  Click vào nút bên dưới để tải hình ảnh.
                </FileUploadTypography>

                <Box
                  sx={{
                    display: "flex",
                    marginTop: "24px",
                    width: "100%",
                    flexDirection: "column",
                    fontSize: "16px",
                    color: "var(--Piper-Text, #fff)",
                    fontWeight: 700,
                    lineHeight: 1,
                    justifyContent: "center",
                    paddingtop: "10px",
                    paddingLeft: "4px",
                    "@media (max-width: 991px)": {
                      padding: "0 20px",
                    },
                  }}
                >
                  <label htmlFor="file-upload">
                    <FileUploadButton
                      variant="contained"
                      component="span"
                      sx={{
                        "&:hover": {
                          backgroundColor: "#dcc6a5",
                        },
                      }}
                    >
                      Tải ảnh lên
                    </FileUploadButton>
                  </label>

                  <input
                    id="file-upload"
                    variant="contained"
                    type="file"
                    onChange={handleChange}
                    style={{ display: "none" }}
                  />
                </Box>
                {image && (
                  <div
                    style={{ position: "relative", display: "inline-block" }}
                  >
                    <IconButton
                      onClick={handleRemoveImage}
                      sx={{
                        width: "10px",
                        height: "10px",
                        position: "absolute",
                        top: 0,
                        right: 10,
                        backgroundColor: "rgba(255, 255, 255, 0.7)",
                        "&:hover": {
                          backgroundColor: "rgba(255, 255, 255, 1)",
                        },
                      }}
                    >
                      <Close />
                    </IconButton>

                    <ImagePreview
                      src={image}
                      alt="Uploaded image preview"
                      style={{
                        width: "160px",
                        height: "auto",
                        objectFit: "contain",
                        marginTop: "20px",
                        marginLeft: "30px",
                      }}
                    />
                  </div>
                )}
              </FileUploadSection>

              <NoteSection>
                <Typography>
                  <Box component="span" sx={{ color: "rgba(251,55,55,1)" }}>
                    Lưu ý
                  </Box>
                  : Hình ảnh tải lên nên là ảnh trắng đen, không có phông nền,
                  kích thươc lớn hơn 500px x 500px để mẫu in đạt chất lượng cao
                  nhất.
                </Typography>
                <Typography sx={{ marginTop: "40px" }}>
                  Bạn có thể chuyển đổi hình ảnh tải lên về định dạng in tiêu
                  chuẩn tại đây:
                </Typography>
              </NoteSection>

              <PhotoTransferSection>
                <TransferButton variant="contained" onClick={toggleColor}>
                  {isBlack ? "Giữ lại màu ảnh" : "Chuyển ảnh trắng đen"}
                </TransferButton>
                {image && (
                  <FilterImage
                    src={image}
                    alt="Transferred image preview"
                    style={{
                      width: "160px",
                      height: "auto",
                      objectFit: "contain",
                      marginTop: "20px",
                      filter: isBlack ? "grayscale(100%)" : "none",

                      backgroundColor: isBlack ? "transparent" : "initial",
                    }}
                  />
                )}
                <Typography
                  sx={{
                    color: "var(--Text-Red, #fb3737)",
                    textAlign: "center",
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "18px",
                    marginTop: "24px",
                  }}
                >
                  Click vào ảnh vừa chuyển đổi để đưa hình vào mẫu thiết kế
                </Typography>
              </PhotoTransferSection>
            </DesignArea>
          </MenuTool>

          <SaveDesignButton
            variant="contained"
            sx={{
              "&:hover": {
                backgroundColor: "#dcc6a5",
              },
            }}
          >
            LƯU THIẾT KẾ
          </SaveDesignButton>
        </ContentBox>

        {/* ContentRight */}

        <ContentRight component="main" gap={1}>
          {/* ProductDisplay */}
          <ProductDisplay
            component="section"
            display="flex"
            flexDirection="column"
            alignSelf="flex-start"
            position="relative"
            justifyContent="center"
            width={340}
          >
            {/* ProductImage */}
            <ProductImage
              sx={{
                width: "400px",
                height: "600px",
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                marginBottom: "38px",
                position: "relative",
              }}
            >
              {image && (
                <FilterImage
                  src={image}
                  alt="Transferred image preview"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "120px",
                    height: "120px",
                    objectFit: "contain",
                    filter: isBlack
                      ? "invert(90%) sepia(10%) saturate(10%) hue-rotate(280deg) brightness(60%) contrast(100%)"
                      : "none",
                    opacity: isBlack ? "0.8" : "none",
                    backgroundColor: isBlack ? "transparent" : "initial",
                  }}
                />
              )}
            </ProductImage>

            {/* ActionButtons */}
            <ActionButtons
              position="relative"
              alignSelf="center"
              display="flex"
              top="-20px"
              left="34px"
              alignItems="flex-start"
              justifyContent="flex-start"
            >
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                borderRadius={1}
                bgcolor="var(--Text-White, #fefefe)"
                boxShadow="0px 4px 15px 0px rgba(0, 0, 0, 0.1)"
                gap={1}
              >
                {actionIcons.map((icon, index) => (
                  <IconButton
                    key={index}
                    sx={{
                      borderRadius: "5px",
                      alignSelf: "stretch",
                      display: "flex",
                      minHeight: 40,
                      alignItems: "center",
                      justifyContent: "center",
                      width: 40,
                      margin: "auto 0",
                      padding: "4px",
                      "& img": {
                        aspectRatio: 1,
                        objectFit: "contain",
                        objectPosition: "center",
                        width: index === 1 ? 26 : 32,
                        alignSelf: "stretch",
                        margin: "auto 0",
                        padding: index === 1 ? "3px 0" : 0,
                      },
                    }}
                  >
                  
                    <Box>{icon.src}</Box>
                  </IconButton>
                ))}
              </Box>
            </ActionButtons>
          </ProductDisplay>

          {/*  ProductPrice */}

          <Box
            component="section"
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            color="#000"
            textAlign="center"
            justifyContent="flex-start"
            width={193}
            fontFamily="Quicksand, sans-serif"
            fontWeight={700}
            fontSize={20}
            lineHeight={1.3}
            sx={{
              paddingBottom: "200px",
              paddingLeft: "104px",
            }}
          >
            <Typography
              variant="h1"
              fontSize={32}
              fontWeight={700}
              lineHeight={1}
            >
              {type}
            </Typography>
            <Typography variant="body1" marginTop={2}>
              250.000VNĐ
            </Typography>

            <ColorSelection
              display="flex"
              marginTop={2}
              width={132}
              maxWidth="100%"
              flexDirection="column"
              whiteSpace="nowrap"
              justifyContent="center"
            >
              <Box
                key={color}
                display="flex"
                width="100%"
                alignItems="center"
                gap={2}
                justifyContent="flex-start"
                sx={{
                  "@media (max-width: 991px)": {
                    whiteSpace: "initial",
                  },
                  "&:last-child": {
                    fontSize: 18,
                    lineHeight: 1,
                  },
                }}
              >
                <img
                  src={item.image}
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                  }}
                />
                <Typography variant="body1" alignSelf="stretch" margin="auto 0">
                  {item.text}
                </Typography>
              </Box>
            </ColorSelection>
          </Box>
        </ContentRight>

        {/* FontToolbar */}

        {/* <CusReactQuill value={text} onChange={setText} /> */}

        {/* <DnDContext>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <DraggableImage src="https://s3-alpha-sig.figma.com/img/7122/e626/43ac1e134c06615170ae3529d090e7ec?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i2zj783kXtu1Ocfi5BMrKZ99516rnZSDkqpsX2vTwcQuF4SB9MzAtgVClYe0v3-us6NjyKiCDmhQ4kZWkysq~bYeKUMD2Prf561dgMk7WAGK5S~ogE9VRXumh~GC9HwZsIgcMPawOZ5ygoH6tEiRM7l1rwhno25ImQRWZPyKH~G6UxIZ3kgWjZ1c3Ch0oEw1vcQeYIr13MOgF6Cd-DuIIW950EESF62UoBHekiQCNHJCujefqKX30qObu3s7F9pVZA7cLrj8gaFnAkoYysS4yUgrf33xmozgPlh6OHj3wSoyIniHZ~xDaNbKH6ZW05Vo0iHWRviq9PvSRYawy5~xBw__" id="image1" />
        <DroppableArea onDrop={handleDrop} />
      </div>
      {droppedImageId && <img src=""/>}
    </DnDContext> */}
      </CusContainer>
    </>
  );
}
//////////////////////////
