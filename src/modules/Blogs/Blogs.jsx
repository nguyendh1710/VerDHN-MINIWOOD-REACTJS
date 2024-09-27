import React, { useState } from "react";
import BlogList from "./BlogList/BlogList";
import BlogPagination from "./BlogPagination/BlogPagination";
import Footer from "../../components/Footer/Footer";
import { Typography } from "@mui/material";
import { Title, CusBoxPagination, CusBoxBlogsList } from "./Blogs.style";

export default function Blogs() {
  const [page, setPage] = useState(1);
  const blogsPerPage = 10;
  const handleChange = (event, value) => {
    setPage(value);
  };

  const blogs = [
    {
      title: `Ốp Lưng Điện Thoại Bằng Gỗ: Sự Kết Hợp Hoàn Hảo Giữa Thiên Nhiên và Công Nghệ`,
      thumbnail:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/Blogs/blog-1.png?raw=true",
    },
    {
      title: `Tại Sao Nên Chọn Ốp Lưng Điện Thoại Bằng Gỗ?`,
      thumbnail:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/Blogs/blog-2.png?raw=true",
    },
    {
      title: `Cách Bảo Quản Ốp Lưng Điện Thoại Bằng Gỗ Để Luôn Mới`,
      thumbnail:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/Blogs/blog-3.png?raw=true",
    },
    {
      title: `Top 5 Mẫu Ốp Lưng Điện Thoại Bằng Gỗ Đẹp Nhất Năm 2024`,
      thumbnail:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/Blogs/blog-4.png?raw=true",
    },
    {
      title: `Lợi Ích Của Việc Sử Dụng Ốp Lưng Điện Thoại Bằng Gỗ`,
      thumbnail:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/Blogs/blog-5.png?raw=true",
    },
    {
      title: `Hướng Dẫn Tự Làm Ốp Lưng Điện Thoại Bằng Gỗ Tại Nhà`,
      thumbnail:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/Blogs/blog-6.png?raw=true",
    },
    {
      title: `Ốp Lưng Điện Thoại Bằng Gỗ: Xu Hướng Thời Trang Mới`,
      thumbnail:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/Blogs/blog-7.png?raw=true",
    },
    {
      title: `So Sánh Ốp Lưng Điện Thoại Bằng Gỗ và Ốp Lưng Nhựa`,
      thumbnail:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/Blogs/blog-8.png?raw=true",
    },
    {
      title: `Những Điều Cần Biết Trước Khi Mua Ốp Lưng Điện Thoại Bằng Gỗ`,
      thumbnail:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/Blogs/blog-6.png?raw=true",
    },

    ,
    {
      title: `Câu Chuyện Đằng Sau Những Chiếc Ốp Lưng Điện Thoại Bằng Gỗ Thủ Công`,
      thumbnail:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/Blogs/blog-4.png?raw=true",
    },

    {
      title: `Ốp Lưng Điện Thoại Bằng Gỗ: Sự Kết Hợp Hoàn Hảo Giữa Thiên Nhiên và Công Nghệ`,
      thumbnail:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/Blogs/blog-3.png?raw=true",
    },
    {
      title: `Tại Sao Nên Chọn Ốp Lưng Điện Thoại Bằng Gỗ?`,
      thumbnail:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/Blogs/blog-6.png?raw=true",
    },
    {
      title: `Cách Bảo Quản Ốp Lưng Điện Thoại Bằng Gỗ Để Luôn Mới`,
      thumbnail:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/Blogs/blog-8.png?raw=true",
    },
    {
      title: `Top 5 Mẫu Ốp Lưng Điện Thoại Bằng Gỗ Đẹp Nhất Năm 2024`,
      thumbnail:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/Blogs/blog-2.png?raw=true",
    },
    {
      title: `Lợi Ích Của Việc Sử Dụng Ốp Lưng Điện Thoại Bằng Gỗ`,
      thumbnail:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/Blogs/blog-7.png?raw=true",
    },
    {
      title: `Hướng Dẫn Tự Làm Ốp Lưng Điện Thoại Bằng Gỗ Tại Nhà`,
      thumbnail:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/Blogs/blog-8.png?raw=true",
    },
    {
      title: `Ốp Lưng Điện Thoại Bằng Gỗ: Xu Hướng Thời Trang Mới`,
      thumbnail:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/Blogs/blog-4.png?raw=true",
    },
    {
      title: `So Sánh Ốp Lưng Điện Thoại Bằng Gỗ và Ốp Lưng Nhựa`,
      thumbnail:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/Blogs/blog-2.png?raw=true",
    },
    {
      title: `Những Điều Cần Biết Trước Khi Mua Ốp Lưng Điện Thoại Bằng Gỗ`,
      thumbnail:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/Blogs/blog-6.png?raw=true",
    },

    ,
    {
      title: `Câu Chuyện Đằng Sau Những Chiếc Ốp Lưng Điện Thoại Bằng Gỗ Thủ Công`,
      thumbnail:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/Blogs/blog-7.png?raw=true",
    },
    {
      title: `Ốp Lưng Điện Thoại Bằng Gỗ: Sự Kết Hợp Hoàn Hảo Giữa Thiên Nhiên và Công Nghệ`,
      thumbnail:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/Blogs/blog-1.png?raw=true",
    },
    {
      title: `Tại Sao Nên Chọn Ốp Lưng Điện Thoại Bằng Gỗ?`,
      thumbnail:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/Blogs/blog-6.png?raw=true",
    },
    {
      title: `Cách Bảo Quản Ốp Lưng Điện Thoại Bằng Gỗ Để Luôn Mới`,
      thumbnail:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/Blogs/blog-4.png?raw=true",
    },
    {
      title: `Top 5 Mẫu Ốp Lưng Điện Thoại Bằng Gỗ Đẹp Nhất Năm 2024`,
      thumbnail:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/Blogs/blog-2.png?raw=true",
    },
    {
      title: `Lợi Ích Của Việc Sử Dụng Ốp Lưng Điện Thoại Bằng Gỗ`,
      thumbnail:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/Blogs/blog-1.png?raw=true",
    },
    {
      title: `Hướng Dẫn Tự Làm Ốp Lưng Điện Thoại Bằng Gỗ Tại Nhà`,
      thumbnail:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/Blogs/blog-7.png?raw=true",
    },
    {
      title: `Ốp Lưng Điện Thoại Bằng Gỗ: Xu Hướng Thời Trang Mới`,
      thumbnail:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/Blogs/blog-2.png?raw=true",
    },
    {
      title: `So Sánh Ốp Lưng Điện Thoại Bằng Gỗ và Ốp Lưng Nhựa`,
      thumbnail:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/Blogs/blog-1.png?raw=true",
    },
    {
      title: `Những Điều Cần Biết Trước Khi Mua Ốp Lưng Điện Thoại Bằng Gỗ`,
      thumbnail:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/Blogs/blog-4.png?raw=true",
    },

    ,
    {
      title: `Câu Chuyện Đằng Sau Những Chiếc Ốp Lưng Điện Thoại Bằng Gỗ Thủ Công`,
      thumbnail:
        "https://github.com/nguyendh-xp97/VerDHN-MINIWOOD-PROJECT-REACTJS/blob/main/src/modules/Blogs/blog-7.png?raw=true",
    },
  ];

  const displayedBlogs = blogs.slice(
    (page - 1) * blogsPerPage,
    page * blogsPerPage
  );

  return (
    <div>
      <Title>
        {" "}
        <Typography sx={{ fontSize: "50px", fontWeight: "700" }}>
          {" "}
          Blogs{" "}
        </Typography>
      </Title>

      <CusBoxBlogsList>
        <BlogList blogs={displayedBlogs} />
      </CusBoxBlogsList>

      <CusBoxPagination>
        {" "}
        <BlogPagination
          page={page}
          count={Math.ceil(blogs.length / blogsPerPage)}
          onChange={handleChange}
        />
      </CusBoxPagination>

      <Footer />
    </div>
  );
}
