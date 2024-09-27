import { fetcherOfUsers } from "./fetcher";

// Hàm để lay thông tin giỏ hàng lên API

export const getCartFromSignin = async () => {
  const cartIdfromUser = JSON.parse(localStorage.getItem("currentUser"));
  const idCartOfUser = cartIdfromUser.map((item) => {
    return item.id;
  });
  console.log(idCartOfUser);
  try {
    if (cartIdfromUser) {
      // lien ket voi gio hang cua nguoi dung
      const cartResponse = await fetcherOfUsers.get(
        `/carts/${Number(idCartOfUser)}`
      );

      return cartResponse.data;
    }
  } catch (error) {
    throw error.response.data;
  }
};
// Hàm để lưu thông tin giỏ hàng lên API
export const saveCartToAPI = async (id, cart) => {
  if (!Array.isArray(cart) || cart.length === 0) return; // Kiểm tra nếu không phải mảng hoặc mảng rỗng thì không gọi API
  try {
    const response = await fetcherOfUsers.put(`/carts/${id}`, {
      items: cart,
    });
    console.log(response);
    return response.data;
  } catch (error) {
    throw error;
  }
};

