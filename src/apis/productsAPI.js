
import {fetcherOfProducts} from "./fetcher";


export const getProducts = async () => {
  try {
    const response = await fetcherOfProducts.get('/products'); 
    if (response.data) {
      return response.data;
    } else {
      throw new Error('No data found');
    }
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};


// export async function getMovie() {
//   try {
//     const response = await fetcher.get("/QuanLyPhim/LayDanhSachPhim", {
//       params: {
//         maNhom: "GP01",
//       },
//     });
//     return response.data.content;
//   } catch (error) {
//     throw error.response.data.content;
//   }
// }

// export async function getMovieDetails(movieId) {
//   try {
//     const response = await fetcher.get("/QuanLyPhim/LayThongTinPhim", {
//       params: {
//         MaPhim: movieId,
//       },
//     });
//     return response?.data.content;
//   } catch (error) {
//     throw error.response.data?.content;
//   }
// }

// export async function addMovie(movie) {
//   try {
//     const response = await fetcher.post(
//       "/quanlyphim/themphimuploadhinh",
//       movie
//     );
//     return response.data?.content;
//   } catch (error) {
//     throw error.response.data?.content;
//   }
// }

// export async function editMovie(movie) {
//   try {
//     const response = await fetcher.post("/QuanLyPhim/CapNhatPhimUpload", movie);
//     return response.data?.content;
//   } catch (error) {
//     throw error.response.data?.content;
//   }
// }

// export async function deleteMovie(movie) {
//   try {
//     const response = await fetcher.delete("/QuanLyPhim/XoaPhim/",  {
//       params: {
//         MaPhim: movie,
//       },
//     });
//     return response.data?.content;
//   } catch (error) {
//     throw error.response.data?.content;
//   }
// }
