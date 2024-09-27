import {
  Container,
  BoxTitle,
  Title,
  TextTitle,
  CusButton,
  ProductImg,
  BoxProduct,
  FeedbackList,
  FeedbackImg,
  FeedbackComment,
  RatingBox,
} from "./Feedback.style";
import { Star } from "@mui/icons-material";
import { useState } from "react";
import { Typography, Box, Rating } from "@mui/material";

export default function Feedback() {
  const feedbackData = [
    {
      imgSrc:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/Home/Feedback/feedback-1.png?raw=true",
      comment:
        "Mình từng đặt ốp lưng gỗ tại Miniwwood, sản phẩm xinh, giá phải chăng, mifh rất ưng...",
      isReversed: false,
    },
    {
      imgSrc:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/Home/Feedback/feedback-2.png?raw=true",
      comment:
        "Miniwood luôn là lựa chọn của mình mỗi khi mình cần quà tặng ý nghĩa mà độc đáo để tặng bạn bè, người thân vào những dịp đặc biệt, sẵn sàng chop Shop 5 sao!",
      isReversed: true,
    },
    {
      imgSrc:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/Home/Feedback/feedback-3.png?raw=true",
      comment:
        'Mình là kiểu người thích những món đồ "không đụng hàng". Tại Miniwood, mình được thỏa sức sáng tạo nhiều "kiệt tác", thời gian giao hàng cũng khá nhanh nữa.',
      isReversed: false,
    },
    {
      imgSrc:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/Home/Feedback/feedback-4.png?raw=true",
      comment:
        "Sản phẩm thiết kế tại Miniwood khá đẹp và tinh tế, Tuy nhiên, mình góp ý Shop nên cải thiện thêm tính năng tự thiết kế cho phong phú hơn nhé!",
      isReversed: true,
    },
  ];

  // Rating star

  const [value, setValue] = useState(2);

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
            Feedback khách hàng
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

      {/* ProductBest */}

      {feedbackData.map((feedback, index) => (
        <FeedbackList>
          <FeedbackComment key={index} reverse={feedback.isReversed}>
            <div>
              <FeedbackImg
                src={feedback.imgSrc}
                alt="User avatar"
                loading="lazy"
              />{" "}
            </div>
            <div>
              <p>{feedback.comment}</p>
              <RatingBox
                sx={{
                  backgroundColor: "#381D02",
                }}
              >
                <Rating
                  name="half-rating"
                  defaultValue={2.5}
                  precision={0.5}
                  icon={<Star fontSize="inherit" />}
                  emptyIcon={
                    <Star
                      fontSize="inherit"
                      sx={{
                        color: "white",
                      }}
                    />
                  }
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
              </RatingBox>
            </div>
          </FeedbackComment>
        </FeedbackList>
      ))}
    </Container>
  );
}
////////////////////////////////////////////
