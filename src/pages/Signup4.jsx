import { Avatar, Grid, TextField, Typography, Button } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Box, Container, flexbox } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import { lightBlue } from "@mui/material/colors";

// sx ={자바스크립트{객체}}
export default function Signup4() {
  return (
    <Container component="main" maxwidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "60vh",
        }}
      >
        <Avatar sx={{ m: 3, bgcolor: lightBlue[900] }}>#</Avatar>
        <Typography component="h1" variant="h5">
          회원가입
        </Typography>
        <Box component="form" noValidate sx={{ mt: 3 }}>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <TextField
                name="email"
                required
                fullWidth
                label="이메일"
                autoFocus
                autoComplete="off"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="password"
                required
                fullWidth
                label="비밀번호"
                type="password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="confirmPassword"
                required
                fullWidth
                label="비밀번호 확인"
                autoComplete="off"
                type="password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="nickname"
                required
                fullWidth
                label="닉네임"
                autoComplete="off"
              />
            </Grid>
          </Grid>
          <LoadingButton
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, bgcolor: lightBlue[700], height: "3.5em" }}
          >
            회원 가입
          </LoadingButton>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to="/login">이미 계정이 있나요? 로그인으로 이동</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
