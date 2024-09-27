import React from "react";

import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import { ContactForm, SocialLinks, ContactInfo } from "./ContactPage.style";
import Footer from "../../components/Footer/Footer";
// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// const mapContainerStyle = {
//   height: "400px",
//   width: "100%",
//   marginTop: "24px",
// };

// const center = {
//   lat: 10.762622,
//   lng: 106.660172,
// };

export default function ContactPage() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: " #f9f9f9",
        }}
      >
        {/* Contact */}
        <Container
          maxWidth="sm"
          sx={{
            height: "auto",
            width: "50%",
            paddingRight: "20px",
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            sx={{
              fontWeight: "bold",
              marginTop:"20px",
            }}
            gutterBottom
          >
            CONNECT WITH US
          </Typography>
          <ContactForm>
            <TextField label="Tên" variant="outlined" fullWidth required />
            <TextField label="Email" variant="outlined" fullWidth required />
            <TextField
              label="Tin nhắn"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              required
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#381D02",
                color: "white",
                "&:hover": {
                  backgroundColor: "#e9ae70",
                },
              }}
              type="submit"
            >
              Gửi
            </Button>
          </ContactForm>
          {/* <ContactInfo>
  <Typography variant="h6" component="h2">
    Thông tin liên hệ
  </Typography>
  <Typography variant="body1">
    Địa chỉ: 123 Đường ABC, Quận 1, TP. Hồ Chí Minh
  </Typography>
  <Typography variant="body1">
    Điện thoại: (012) 345-6789
  </Typography>
  <Typography variant="body1">
    Email: contact@example.com
  </Typography>
</ContactInfo> */}
        </Container>
        {/* Info */}
        <Box
          sx={{
            height: "auto",
            width: "50%",
            paddingRight: "20px",
          }}
        >
          {/* <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={center}
              zoom={15}
            >
              <Marker position={center} />
            </GoogleMap>
          </LoadScript> */}
          <Box   sx={{
             
              marginTop:"20px",
            }}>




          <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "60vh", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>





          </Box>
          
          <SocialLinks>
            <IconButton
              color="white"
              size="60px"
              href="https://facebook.com"
              target="_blank"
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              color="white"
              size="60px"
              href="https://twitter.com"
              target="_blank"
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              color="white"
              size="60px"
              href="https://linkedin.com"
              target="_blank"
            >
              <LinkedInIcon />
            </IconButton>
          </SocialLinks>
        </Box>
      </Box>

      <Footer />
    </>
  );
}
