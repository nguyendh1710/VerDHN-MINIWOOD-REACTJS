
import { Typography, Grid, Button, Box } from "@mui/material";
import {
  Container,
  ProductBox,
  BoxTitle,
  Title,
  TextTitle,
  CusButton,
  ProductCard,
  CusCardMedia,
  CusCardContent,
  CardName,
  CardCategory,
  CardPrice,
  Header,
  Content,
  CusPrintButton,  CusPopup,
  ContentWrapper,
  ConfirmationMessage,
  ConfirmationButton,
  ButtonGroup,
  CloseButton,
} from "./CategoryRight.style";
import ProductList from "./ProductList/ProductList";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";













export default function CategoryRight() {
  

  const products1 = [
    {
      id: 1,
      name: "Lọ bút gỗ",
      category: "Sổ gỗ",
      price: "280.000 VND",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/CategoryPage/CategoryRight/sogo-1.png?raw=true",
    },
    {
      id: 2,
      name: "Sổ tay gỗ gáy da PU A7",
      category: "Sổ gỗ",
      price: "120.000 VND",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/CategoryPage/CategoryRight/sogo-2.png?raw=true",
    },
    {
      id: 3,
      name: "Bút thân gỗ trơn",
      category: "Sổ gỗ",
      price: "150.000 VND",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/CategoryPage/CategoryRight/sogo-3.png?raw=true",
    },
    {
      id: 4,
      name: "Bút thân gỗ chạm khắc",
      category: "Sổ gỗ",
      price: "265.000 VND",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/CategoryPage/CategoryRight/sogo-4.png?raw=true",
    },
  ];
  const products2 = [
    {
      id: 1,
      name: "Lọ bút gỗ",
      category: "Hộp gỗ",
      price: "280.000 VND",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/CategoryPage/CategoryRight/hopgo-1.png?raw=true",
    },
    {
      id: 2,
      name: "Sổ tay gỗ gáy da PU A7",
      category: "Hộp gỗ",
      price: "120.000 VND",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/CategoryPage/CategoryRight/hopgo-2.png?raw=true",
    },
    {
      id: 3,
      name: "Bút thân gỗ trơn",
      category: "Hộp gỗ",
      price: "150.000 VND",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/CategoryPage/CategoryRight/hopgo-3.png?raw=true",
    },
    {
      id: 4,
      name: "Bút thân gỗ chạm khắc",
      category: "Hộp gỗ",
      price: "265.000 VND",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/CategoryPage/CategoryRight/hopgo-4.png?raw=true",
    },
  ];

  const products3 = [
    {
      id: 1,
      name: "Lọ bút gỗ",
      category: "Hộp đựng thẻ",
      price: "280.000 VND",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/CategoryPage/CategoryRight/hopthe-1.png?raw=true",
    },
    {
      id: 2,
      name: "Sổ tay gỗ gáy da PU A7",
      category: "Hộp đựng thẻ",
      price: "120.000 VND",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/CategoryPage/CategoryRight/hopthe-2.png?raw=true",
    },
    {
      id: 3,
      name: "Bút thân gỗ trơn",
      category: "Hộp đựng thẻ",
      price: "150.000 VND",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/CategoryPage/CategoryRight/hopthe-3.png?raw=true",
    },
    {
      id: 4,
      name: "Bút thân gỗ chạm khắc",
      category: "Hộp đựng thẻ",
      price: "265.000 VND",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/CategoryPage/CategoryRight/hopthe-4.png?raw=true",
    },
  ];

  const products4 = [
    {
      id: 1,
      name: "Lọ bút gỗ",
      category: "Thước kẻ",
      price: "280.000 VND",
      image:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/CategoryPage/CategoryRight/thuocke-1.png?raw=true",
    },
  ];
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const handlePopup = (close) => {
    navigate("/custom-studio");
    close();
  };

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Container>
        <ProductList dataCategory={"Sổ gỗ"} data={products1} />
        <ProductList dataCategory={"Hộp gỗ"} data={products2} />
        <ProductList dataCategory={"Hộp đựng thẻ"} data={products3} />
        <ProductList dataCategory={"Thước kẻ"} data={products4} />

        {/* Print*/}

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: { xs: 2, md: 4 },
            gap: "24px",
          }}
        >
          <Header align="center" sx={{ marginTop: 2 }}>
            IN HÌNH THEO YÊU CẦU - CÁ NHÂN HÓA
          </Header>
          <Content
            variant="h5"
            color="text.primary"
            align="center"
            sx={{ marginTop: 2 }}
          >
            In hình ốp lưng điện thoại theo yêu cầu - Thiết kế riêng theo phong
            cách của bạn
          </Content>

          <Button>
            <CusPrintButton align="center" sx={{ marginTop: 0 }} onClick={togglePopup}>
              TỰ TAY THIẾT KẾ
            </CusPrintButton>
          </Button>
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
        </Box>
      </Container>
    </>
  );
}
