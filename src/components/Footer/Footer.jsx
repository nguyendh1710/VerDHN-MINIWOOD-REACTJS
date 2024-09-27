import React from "react";
import { Box, Typography, Grid, IconButton } from "@mui/material";
import {
  CusFooterBg,
  CusContentBg,
  Wrapper,
  Title,
  ImageContainer,
  LazyImage,
  Description,
  CusContentRightBg,
  InfoContainer,
  Info,
  ContactInfo,
  CusContactRightBg,
  ContactRightImage,
  ContactRightLogo,
  ContactRightContent,
  ContactRightText,
  ContactRightText2,
  MenuItem,
} from "./Footer.style";
import {
  contactRightIcon,
  instagramIcon,
  facebookIcon,
  youtubeIcon,
  tiktokIcon,
  shopeeIcon,
} from "./../Assets/iconSvg";

export default function Footer(props) {
  return (
    <CusFooterBg>
      <CusContentBg>
        <Wrapper>
          <Title variant="h5">CONNECT WITH US</Title>
          <ImageContainer>
            {instagramIcon.image}
            {facebookIcon.image}
            {youtubeIcon.image}
            {tiktokIcon.image}
            {shopeeIcon.image}
          </ImageContainer>
          <Description>
            Miniwood Design provides meaningful corporate gifts, beautifully
            packaged and delivered with utmost care. <br />
            You can buy directly at the store or order gifts online to be
            delivered directly to the recipient{" "}
            <span style={{ fontWeight: "700" }}>on the same day</span> in{" "}
            <span style={{ fontWeight: "700" }}>Hanoi</span> and 2 to 5 days for
            other areas in Vietnam.
          </Description>
        </Wrapper>

        {/* ContentRight */}

        <CusContentRightBg>
          <MenuItem>HỖ TRỢ</MenuItem>
          <MenuItem>About Us</MenuItem>
          <MenuItem>Warranty Policy</MenuItem>
          <MenuItem>Return Policy</MenuItem>
          <MenuItem>Payment Policy</MenuItem>
          <MenuItem>Shipping Policy</MenuItem>
          <MenuItem>Privacy Policy</MenuItem>
          <MenuItem>Articles - News</MenuItem>
        </CusContentRightBg>
      </CusContentBg>

      <InfoContainer>
        {/* ContactLeft */}
        <Info>
          Công ty cổ phần sản xuất thương mại và dịch vụ Hoàng Minh Việt Nam
          <br />
          Giấy chứng nhận đăng ký kinh doanh số 0109361357
          <br />
          Do Sở Kế hoạch và Đầu tư thành phố Hà Nội cấp ngày 26/01/2021
          <br />
          Trụ sở chính: 40 ngõ 379 Đội cấn, Liễu Giai, Ba Đình, Hà Nội, Việt Nam
          <br />
          <ContactInfo>
            <Typography variant="subtitle1">SĐT</Typography>
          </ContactInfo>
          <ContactInfo>
            <Typography variant="subtitle1">Email</Typography>
          </ContactInfo>
        </Info>

        {/* ContactRight */}

        <CusContactRightBg>
          <ContactRightImage
            srcSet="https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/components/Footer/footer-1.png?raw=true"
            alt="Footer Image"
          />
          <ContactRightContent>
            {contactRightIcon.image}

            <ContactRightText>Việt Nam</ContactRightText>
          </ContactRightContent>
          <ContactRightText2>
            Copyright © 2022 Miniwood Design
          </ContactRightText2>
        </CusContactRightBg>
      </InfoContainer>
    </CusFooterBg>
  );
}
