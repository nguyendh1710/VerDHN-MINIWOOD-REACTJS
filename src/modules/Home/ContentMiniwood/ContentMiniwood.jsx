import React from "react";
import Carousel from "react-material-ui-carousel";
import {
  SectionBox,
  CusContainer,
  GalleryWrapper,
  BackgroundImage,
  DotContainer,
  Dot,
  BoxWrapper,
  Content,
  Title,
  Description,
  CtaButton,ContentBox
} from "./ContentMiniwood.style";
import { Box} from "@mui/material";
export default function ContentMiniwood() {
  const items = [
    {
      name: "image1",
      description: "image#1",
      src: "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/Home/ContentMiniwood/contentminiwood-2.png?raw=true",
      title:"ĐỘC ĐÁO",
      text:" Hãy để bạn trở nên độc nhất tại Miniwood",
    
    },
    {
      name: "image2",
      description: "image#2",
      src: "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/Home/ContentMiniwood/contentminiwood-3.png?raw=true",
      title:"CÁ TÍNH",
      text:" Thể hiện phong cách riêng không giới hạn",
    },
    {
      name: "image3",
      description: "image#3",
      src: "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/Home/ContentMiniwood/contentminiwood-1.png?raw=true",
      title:"SANG TRỌNG",
      text:" Nét thanh lịch ẩn chứa trong từng vân gỗ",
    },
    {
      name: "image4",
      description: "image#4",
      src: "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/Home/ContentMiniwood/contentminiwood-1.png?raw=true",
      title:"YÊU THƯƠNG",
      text:" Gửi trao yêu thương từ món quà gỗ đặc biệt",
    
    
    },
  ];

  return (
    <SectionBox>
      <CusContainer sx={{ display: "flex" }}>
        {/* GalleryWrapper */}
        <GalleryWrapper>
          <Carousel indicators={false} animation="slide" autoPlay={false}>
            {items.map((item) => (


<ContentBox>


  <Box> <BackgroundImage
                key={item.name}
                loading="lazy"
                srcSet={item.src}
                alt="Background"
              /></Box>
             
              
        <BoxWrapper>
        <Content>
          <Title>{item.title}</Title>
          <Description>
          {item.text}
          </Description>
          <CtaButton tabIndex="0" role="button">
            Xem chi tiết
          </CtaButton>
        </Content>
      </BoxWrapper>
      </ContentBox>

            ))}
                



          </Carousel>
        </GalleryWrapper>
      
    
      </CusContainer>
    </SectionBox>
  );
}


