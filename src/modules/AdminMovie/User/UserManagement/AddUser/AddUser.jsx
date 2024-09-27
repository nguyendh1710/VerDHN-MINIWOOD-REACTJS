import React from "react";
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
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addUser } from "./../../../../../apis/userAPI";
import { LargeButton } from "./../../../../../components/StylesButton.style";
import { Height } from "@mui/icons-material";


export default function AddUser({ onClose }) {
  const [openError, setOpenError] = useState(true);
  const [openSuccess, setOpenSuccess] = useState(false);

  const queryClient = useQueryClient();

  const addUserSchema = object({
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
    soDt: string()
      .required("Số điện thoại không được để trống")
      .matches(/^(0[1-9][0-9]{8})$/, "Số điện thoại không đúng"),
    loaiNguoiDung: string().required("Vui lòng loại người dùng"),
    avatar: string().required("Vui lòng them avatar"),
    
  });

  const { mutate: handleAddUser, error } = useMutation({
    mutationFn: (payload) => addUser(payload),
    onSuccess: () => {
      queryClient.invalidateQueries("customer");
      setOpenSuccess(true);
      reset({
        taiKhoan: "",
        matKhau: "",
        email: "",
        hoTen: "",
        soDt: "",
        loaiNguoiDung: "",
    
      });
    }, onError: ()=>{
       setOpenError(true)
    }
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm({
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      hoTen: "",
      soDt: "",
    
      loaiNguoiDung: "",
  
    },
    resolver: yupResolver(addUserSchema),
    mode: "onTouched",
  });

  const onSubmit = (values) => {
    console.log(values);
    // Gọi API đăng ký
    handleAddUser(values);
    // reset({
    //   taiKhoan: "",
    //   matKhau: "",
    //   email: "",
    //   soDt: "",
    //   maNhom: "GP13",
    //   maLoaiNguoiDung: "",
    //   hoTen: "",
    // });
  };

  // const handleChange = (event) => {
  //   setValue("maLoaiNguoiDung", event.target.value);
  // };

  const handleCloseError = () => {
    setOpenError(false);
  };

  const handleCloseSuccess = () => {
    setOpenSuccess(false);
    onClose();
  };
console.log(openError)
  return (
    <Box  >
      <Typography variant="h4" gutterBottom>
        🎬🎬 Thêm người dùng
      </Typography>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        mt={2}
        onSubmit={handleSubmit(onSubmit)}
        
      >
        <Grid container spacing={2}  >
          <Grid item xs={6}>
            <TextField
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
              label="Họ tên"
              variant="outlined"
              fullWidth
              error={!!errors.hoTen}
              helperText={errors.hoTen?.message}
              {...register("hoTen")}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Số điện thoại"
              variant="outlined"
              fullWidth
              error={!!errors.soDt}
              helperText={errors.soDt?.message}
              {...register("soDt")}
            />
          </Grid>
       
          <Grid item xs={6}>
            <FormControl fullWidth error={!!errors.loaiNguoiDung}>
              <InputLabel id="maLoaiNguoiDung">Loại người dùng</InputLabel>
              <Controller
                name="loaiNguoiDung"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Select
                    labelId="loaiNguoiDung"
                    id="loaiNguoiDung"
                    label="Loại người dùng"
                    {...field}
                  >
                    <MenuItem value={""}>Chọn loại người dùng</MenuItem>
                    <MenuItem value={"NguoiSuDung"}>Người sử dụng</MenuItem>
                    <MenuItem value={"QuanTriVien"}>Quản trị viên</MenuItem>
                  </Select>
                )}
              />
            </FormControl>
          </Grid>
       
        </Grid>
        <Box display={"flex"} justifyContent={"right"} sx={{
          height: "auto",
          paddingBottom:"16px"
          
         }} >
          <LargeButton variant="contained"  type="submit" >
            Thêm người dùng
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

        {/* Thông báo khi  thành công */}
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
              <img
                style={{ width: "80px", marginTop: "10px" }}
                src="/Animation_1697533657854.gif"
                alt="confirm"
              />
            </Box>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Thêm thông tin người dùng thành công
            </Typography>
          </Box>
        </Modal>
      </Box>
    </Box>
  );
}
