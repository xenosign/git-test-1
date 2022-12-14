import { Avatar, Grid, TextField, Typography, Button } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Box, Container } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import { lightBlue } from "@mui/material/colors";

export default function Signup1() {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignitems: "center",
          justifyContent: "center",
          height: "80vh",
        }}
      >
        <Avatar sx={{ m: 3, bgcolor: "primary.main" }}>π€¦ββοΈ</Avatar>
        <Typography component="h1" variant="h5">
          νμκ°μ
        </Typography>
        <Box component="form" noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="email"
                required
                fullWidth
                label="μ΄λ©μΌ"
                autoFocus
                autoComplete="off"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="password"
                required
                fullWidth
                label="λΉλ°λ²νΈ"
                type="password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="confirmPassword"
                required
                fullWidth
                label="λΉλ°λ²νΈ νμΈ"
                type="password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField name="nickname" required fullWidth label="λλ€μ" />
            </Grid>
          </Grid>
          <LoadingButton
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, bgcolor: lightBlue[700], height: "3.5em" }}
          >
            νμ κ°μ
          </LoadingButton>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to="/login">μ΄λ―Έ κ³μ μ΄ μλμ? λ‘κ·ΈμΈμΌλ‘ μ΄λ</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
