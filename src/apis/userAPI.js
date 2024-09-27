import { fetcherOfUsers } from "./fetcher";

//signup
export const signup = async (payload) => {
  try {
    const response = await fetcherOfUsers.post("/users", payload);

    // console.log("User added:", response.data);

    // dong thoi sau khi nguoi dung tao moi tai khoan thi se tu dong tao moi 1 gio hang trong cho nguoi dung tren sever

    const addCartUserNew = await fetcherOfUsers.post("/carts", []);
  } catch (error) {
    console.error("Error adding user:", error);
  }
};

//signin get người dùng (đăng nhập) gửi lên API
// đã bóc tách payload thành {taiKhoan,matKhau} trước khi xử lý trong signin
export const signin = async ({ taiKhoan, matKhau }) => {
  try {
    // khi goi api co params thi dung kieu vay chu khong dung ham find hay filter tim nhu ben duoi se de bi loi
    // const user = response.data?.find(
    //   (u) => u.taiKhoan === tK && u.matKhau === mK
    // );

    const response = await fetcherOfUsers.get("/users", {
      params: {
        taiKhoan: taiKhoan,
        matKhau: matKhau,
      },
    });

    const cartIdfromUser = response.data.map((item) => Number(item.id));
    // Chuyển đổi cartIdfromUser thành chuỗi JSON
    const jsoncartIdfromUser = JSON.stringify(cartIdfromUser);

    // Lưu chuỗi JSON cartIdfromUser vào localStorage
    localStorage.setItem("storedCartIdfromUser", jsoncartIdfromUser);

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const editUser = async (payload) => {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  try {
    const response = await fetcherOfUsers.post(
      "/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
      payload,
      {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      }
    );
    return response.data?.content;
  } catch (error) {
    throw error.response.data?.content;
  }
};

export const getInfoUser = async (username) => {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  try {
    const response = await fetcherOfUsers.post(
      "/QuanLyNguoiDung/LayThongTinNguoiDung",
      {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      },
      {
        params: {
          taiKhoan: username,
        },
      }
    );
    return response.data?.content;
  } catch (error) {
    throw error.response.data?.content;
  }
};

export const addUser = async (payload) => {


  console.log(payload)
  const user = JSON.parse(localStorage.getItem("currentUser"));
  try {
    const response = await fetcherOfUsers.post(
      "/users",
      payload,
     
    );

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const removeUser = async (username) => {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  try {
    const response = await fetcherOfUsers.delete(
      "/QuanLyNguoiDung/XoaNguoiDung",
      {
        params: {
          TaiKhoan: username || undefined,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      }
    );
    return response.data?.content;
  } catch (error) {
    throw error.response.data?.content;
  }
};

export async function getCustomer() {
  try {
    const response = await fetcherOfUsers.get(
      "/users",
     
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}
