import React from "react";
import {
  Container,BoxTitle,Title,CusButton,
  StyledGallery,StyledMainImage,StyledImageGroup,StyledImageRow,StyledSmallImage
} from "./Collection.style";
import {
  Typography,
 
} from "@mui/material";

export default function Collection() {
  
    const imageData = [
        { src: "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/Home/Collection/collection-1.png?raw=true", aspectRatio: "0.71", width: "336px" },
        { src: "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/Home/Collection/collection-2.png?raw=true", aspectRatio: "1.23", width: "224px" },
        { src: "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/Home/Collection/collection-3.png?raw=true", aspectRatio: "1.23", width: "224px" },
        { src: "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/Home/Collection/collection-4.png?raw=true", aspectRatio: "1.23", width: "224px" },
        { src: "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/Home/Collection/collection-5.png?raw=true", aspectRatio: "1.23", width: "224px" },
        { src: "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/Home/Collection/collection-6.png?raw=true", aspectRatio: "0.71", width: "336px" },
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
              width: "396px",
              height: "2.5px",
              margin: "auto 40px",
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
            Miniwood's Collection
          </span>

          <div
            style={{
              backgroundColor: "#e9ae70",
              alignSelf: "center",
              width: "396px",
              height: "2.5px",
              margin: "auto 40px",
            }}
          ></div>
        </Title>

        {/* Button */}
        <CusButton
        
        >
          <Typography>Xem thêm</Typography>
        </CusButton>
      </BoxTitle>

      {/* Collection */}
     
      <StyledGallery>
      <StyledMainImage src={imageData[0].src} alt={imageData[0].alt} loading="lazy" />
      <StyledImageGroup>
        <StyledImageRow>
          {imageData.slice(1, 3).map((img, index) => (
            <StyledSmallImage key={index} src={img.src} alt={img.alt} loading="lazy" />
          ))}
        </StyledImageRow>
        <StyledImageRow>
          {imageData.slice(3, 5).map((img, index) => (
            <StyledSmallImage key={index} src={img.src} alt={img.alt} loading="lazy" />
          ))}
        </StyledImageRow>
      </StyledImageGroup>
      <StyledMainImage src={imageData[5].src} alt={imageData[5].alt} loading="lazy" />
    </StyledGallery>
        
            
         
     
    
    </Container>
  );
}
//////////////////////////////////////








