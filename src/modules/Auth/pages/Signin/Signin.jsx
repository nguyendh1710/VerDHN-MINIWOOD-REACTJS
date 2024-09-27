import { React, useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import LockIcon from "@mui/icons-material/Lock";

import { AccountCircle } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { yupResolver } from "@hookform/resolvers/yup";
import { Navigate, useSearchParams,  } from "react-router-dom";
import { object, string } from "yup";
import { signin } from "../../../../apis/userAPI";
import { useUserContext } from "../../../../context/UserContext";
import avt from "./../../../../components/Assets/logo.png";
import bg from "./../../../../components/Assets/bg-signin.png";
import Swal from "sweetalert2";
import {
  Grid,
  Paper,
  Typography,
  TextField,
  IconButton,
  Box,
  Button,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import {
  CusAlert,
  CusBackGr,
  CusButton,
  CusImage,
  CusPaper,
} from "./Signin.styles";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// create signinSchema
const signinSchema = object({
  taiKhoan: string().required("Tài khoản không được để trống"),
  matKhau: string().required("Mật khẩu không được để trống"),
  // .matches(
  //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
  //   "Mật khẩu ít nhất 8 kí tự, 1 kí tự hoa, 1 kí tự thường và 1 số"
  // ),
});

export default function Signin() {
  const [searchParams] = useSearchParams();

  // useNavigate

  const navigate = useNavigate();
  // dat de tranh trung ten voi ham chuan bị dat ben duoi la handleSignin
  const { currentUser, handleSignin: onSigninSuccess } = useUserContext();
 
 
  // useState manage show password and show ConfirmPassword

  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
    },
    resolver: yupResolver(signinSchema),
    mode: "onTouched",
  });
// ham nay goi den ham onSubmit se chay vo goi ham handleSignin ben trong -> ham nay lai goi api va truyen cai payload qua cho ham signin ben user api de lay du lieu nguoi dung 
  const {
    mutate: handleSignin,
    isLoading,
    error,
  } = useMutation({
    mutationFn: (payload) => signin(payload),
    onSuccess: (data) => {
      // -> sau khi da lay duoc se lay du lieu do se dem gui qua 1 ban cho context thong qua ham onSigninSuccess de ben context su dung de set bien state va luu vao localstograte
      onSigninSuccess(data);
      toast.success("Đăng nhập thành công!", {
        // position: toast.POSITION.TOP_CENTER,
      });
    },
  
    onError: () => {
      Swal.fire("Vui lòng thử lại!");
    },

  });
 
  const onSubmit = (values) => {
   

    handleSignin(values);
    console.log(values);
  };

  // currentUser khác null => user đã đăng nhập => điều hướng về component họ chọn nếu họ không chọn gì thì tự động điều hướng về trang home

  // currentUser khác null => user đã đăng nhập => điều hướng về Home
  if (currentUser) {
    const redirectTo = searchParams.get("redirectTo");
    return <Navigate to={redirectTo || "/"} replace />;
  }


  ////////////////////////////////////////////////////////////
  return (
    <Grid container component="main">
      <Grid item xs={12} sm={4} md={7}>
        <CusBackGr variant="square" src={bg} />
      </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <CusPaper>
          <CusImage src={avt} />
          <Typography component="h1" variant="h5">
            Đăng Nhập
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              placeholder="Tài khoản"
              name="taiKhoan"
              autoFocus
              {...register("taiKhoan")}
              InputProps={{
                startAdornment: <AccountCircle />,
              }}
            />
            {errors.taiKhoan && (
              <CusAlert variant="a">{errors.taiKhoan.message}</CusAlert>
            )}
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="matKhau"
              placeholder="Mật khẩu"
              type={showPassword ? "text" : "passWord"}
              id="matKhau"
              autoComplete="current-password"
              {...register("matKhau")}
              InputProps={{
                endAdornment: (
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                ),
                startAdornment: <LockIcon />,
              }}
            />
            {errors.matKhau && (
              <CusAlert variant="a">{errors.matKhau.message}</CusAlert>
            )}
            <CusButton type="submit" fullWidth variant="contained">
              Đăng nhập
            </CusButton>
            {error && <CusAlert variant="a">{errors}</CusAlert>}

            {/* Button Signgup */}
            <Box
              display={"flex"}
              justifyContent={"center"}
              mt={2}
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={6}
            >
              <Typography fontSize={13}>
                Do not have an account?
                <Button
                  type="button"
                  onClick={() => {
                    navigate("/signup");
                  }}
                >
                  <Typography fontSize={13} textTransform={"none"}>
                    {" "}
                    Signup now
                  </Typography>
                </Button>
              </Typography>
            </Box>
            {/* Button Login with Social */}

            <Box
              display={"flex"}
              justifyContent={"center"}
              mt={2}
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={6}
            >
              <Button
                type="button"
                onClick={() => {
                  navigate("/loginfb");
                }}
              >
                <FacebookIcon />
              </Button>

              <Button
                type="button"
                onClick={() => {
                  navigate("/loginfb");
                }}
              >
                <TwitterIcon />
              </Button>
            </Box>
          </form>
        </CusPaper>
      </Grid>
      <ToastContainer />
    </Grid>
  );
}
