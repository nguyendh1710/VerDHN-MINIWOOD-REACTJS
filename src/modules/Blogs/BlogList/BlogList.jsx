import React from "react";
import BlogItem from "./BlogItem/BlogItem";
import { Grid, Box } from "@mui/material";
import { BlogsCard } from "./BlogList.style";
export default function BlogList({ blogs }) {
  return (
    <>
      <Box
        sx={{
          // marginTop: "10px",
          // marginBottom: "100px",
          // marginLeft: "60px",
          marginLeft: "160px",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-end",
          rowGap: "33px",
          columnGap: "24px",
        }}
      >
        {blogs.map((blog) => (
          <BlogsCard>
            <BlogItem title={blog.title} thumbnail={blog.thumbnail} />
          </BlogsCard>
        ))}
      </Box>
    </>
  );
}
