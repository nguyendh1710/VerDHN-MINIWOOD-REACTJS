import React from "react";
import { CusCardMedia, CusCardContent, CardName ,RatingBox} from "./BlogItem.style";
import {Star} from '@mui/icons-material';
import {  Rating } from "@mui/material";
import { useState } from "react";





export default function BlogItem({ title, thumbnail }) {


  // Rating star

  const [value, setValue] = useState(2);


  return (
    <>
      <CusCardMedia
        component="img"
        image={thumbnail}
        alt={title}
        sx={{
          borderRadius: "15px 15px 0 0",
          aspectRatio: "1",
          objectFit: "cover",
          height: "80%",
       
          width: "100%",
        }}
      />
      <CusCardContent>
        <CardName variant="h6" component="h2">
          {title}
        </CardName>
        {/* <RatingBox sx={{
                  
                   
                    
                  }}>
                <Rating
                name="half-rating" defaultValue={1} precision={0.5}
                icon={<Star sx={{
                  color: "yellow",
                 fontsize:"5px"
                  
                }} />}
                emptyIcon={<Star  sx={{
                  color: "white",
                 fontsize:"5px"
                  
                }} />}
                
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                  
                />
              </RatingBox> */}
      </CusCardContent>

   
    </>
  );
}
