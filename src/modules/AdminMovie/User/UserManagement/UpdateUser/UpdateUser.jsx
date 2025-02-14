import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useState } from "react";
import { Controller } from "react-hook-form";
import { editUser } from "../../../../../apis/userAPI";
import { LargeButton } from "./../../../../../components/StylesButton.style";

export default function UpdateUser({ infoUser, onClose }) {
  // const [codeUser, setCodeUser] = useState(infoUser.maLoaiNguoiDung || "");
  const [dataLoaded, setDataLoaded] = useState(false);
  const [openError, setOpenError] = React.useState(true);
  const [openSuccess, setOpenSuccess] = React.useState(false);

  const queryClient = useQueryClient();

  const editUserSchema = object({
    taiKhoan: string().required("Tài khoản không được để trống"),
    matKhau: string()
      .required("Mật khẩu không được để trống")
      .matches(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/,
        "Mật khẩu ít nhất 8 kí tự, 1 kí tự hoa, 1 kí tự thường và 1 số"
      ),
    email: string()
      .required("Email không được để trống")
      .email("Email không đúng định dạng"),
    hoTen: string().required("Họ tên không được để trống"),
    soDT: string()
      .required("Số điện thoại không được để trống")
      .matches(/^(0[1-9][0-9]{8})$/, "Số điện thoại không đúng"),
    loaiNguoiDung: string().required("Vui lòng loại người dùng"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
    setValue,
  } = useForm({
    defaultValues: infoUser,
    resolver: yupResolver(editUserSchema),
    mode: "onTouched",
  });

  const { mutate: handleChangeUser, error } = useMutation({
    mutationFn: (payload) => editUser(payload),
    onSuccess: () => {
      //   navigate("/signin");
      queryClient.invalidateQueries("customer");
      setOpenSuccess(true);
    },
  });

  const onSubmit = (values) => {
    console.log(values);
    // Giá trị đã chọn từ Select
    console.log(values.maLoaiNguoiDung);
    // Cập nhật giá trị trong infoUser
    infoUser.maLoaiNguoiDung = values.maLoaiNguoiDung;
    // Gọi API đăng ký
    if (error) {
      setOpenError(true);
    }
    handleChangeUser(values);
  };

  // const handleChange = (event) => {
  //   setCodeUser(event.target.value);
  // };

  const handleCloseError = () => {
    onClose();
    setOpenError(false);
  };

  const handleCloseSuccess = () => {
    setOpenSuccess(false);
    onClose();
  };

  // Sử dụng useEffect để đặt giá trị trường nhập khi infoUser thay đổi
  useEffect(() => {
    // Kiểm tra nếu dữ liệu đã tải xong
    if (!dataLoaded && Object.keys(infoUser).length > 0) {
      // Đặt lại form với giá trị ban đầu từ infoUser
      reset(infoUser);

      for (const key in infoUser) {
        if (infoUser.hasOwnProperty(key)) {
          // Đặt giá trị trường nhập bằng cách sử dụng setValue
          setValue(key, infoUser[key]);
        }
      }
      // Đánh dấu rằng dữ liệu đã tải xong
      setDataLoaded(true);
    }
  }, [infoUser, reset, setValue, dataLoaded]);
  if (!infoUser) {
    return null; // Hoặc thực hiện một hành động khác tùy theo trường hợp của bạn.
  }
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        🎬🎬Chỉnh sửa người dùng
      </Typography>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        mt={2}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              disabled
              label="Tài khoản"
              variant="outlined"
              fullWidth
              error={!!errors.taiKhoan}
              helperText={errors.taiKhoan?.message}
              {...register("taiKhoan")}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Mật khẩu"
              variant="outlined"
              fullWidth
              error={!!errors.matKhau}
              helperText={errors.matKhau?.message}
              {...register("matKhau")}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              error={!!errors.email}
              helperText={errors.email?.message}
              {...register("email")}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Số điện thoại"
              variant="outlined"
              fullWidth
              error={!!errors.soDT}
              helperText={errors.soDT?.message}
              {...register("soDT")}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Họ tên"
              variant="outlined"
              fullWidth
              error={!!errors.hoTen}
              helperText={errors.hoTen?.message}
              {...register("hoTen")}
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth error={!!errors.loaiNguoiDung}>
              <InputLabel id="loaiNguoiDung">Loại người dùng</InputLabel>
              <Controller
                name="loaiNguoiDung"
                control={control}
                defaultValue={infoUser.loaiNguoiDung}
                render={({ field }) => (
                  <Select
                    labelId="loaiNguoiDung"
                    id="loaiNguoiDung"
                    label="Loại người dùng"
                    {...field}
                  >
                    <MenuItem value={""}>Chọn loại người dùng</MenuItem>
                    <MenuItem value={"KhachHang"}>Khách hàng</MenuItem>
                    <MenuItem value={"QuanTri"}>Quản trị viên</MenuItem>
                  </Select>
                )}
              />
            </FormControl>
          </Grid>
        </Grid>
        <Box display={"flex"} justifyContent={"right"}>
          <LargeButton variant="contained" m="16px 0 0 0">
            Chỉnh sửa
          </LargeButton>
        </Box>

        {/* Hiện thông báo lỗi */}
        {!!error && (
          <Modal
            open={openError}
            onClose={handleCloseError}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 400,
                bgcolor: "#fff",
                border: "1px solid #fff",
                boxShadow: 24,
                p: 4,
              }}
            >
              <Box display={"flex"} justifyContent={"center"}>
                <img
                  style={{ width: "80px", marginTop: "10px" }}
                  src="/Animation_1697533657854.gif"
                  alt="confirm"
                />
              </Box>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {error}
              </Typography>
            </Box>
          </Modal>
        )}

        {/* Thông báo khi chỉnh sửa thành công */}
        <Modal
          open={openSuccess}
          onClose={handleCloseSuccess}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "#fff",
              border: "1px solid #fff",
              boxShadow: 24,
              p: 4,
            }}
          >
            <Box display={"flex"} justifyContent={"center"}>

            </Box>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Chỉnh sửa thông tin người dùng thành công
            </Typography>
          </Box>
        </Modal>
      </Box>
    </Box>
  );
}
