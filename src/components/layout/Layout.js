import React from "react";
import "./Layout.css";
import PP from "../../assets/PP.png";
import { Box, Grid, Typography } from "@mui/material";

const item = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};

const number = {
  fontSize: 24,
  fontFamily: "default",
  color: "#8D9EFF",
  fontWeight: "medium",
};

const image = {
  height: 55,
  my: 4,
};

const Layout = () => {
  return (
    <>
      <div className="layout">
        <div className="layout__right">
          <div className="layout__right__top">
            <img className="profile_pic" src={PP} alt="profile pic" />
          </div>
          <div className="layout__right__bottom">
            <h2>Personal Portfolio Project</h2>
            <h1>Sertaç Gültekin</h1>
            <h3>Jr. Frontend Developer</h3>
          </div>
        </div>
        <Grid className="grid" container spacing={5} padding={4}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box sx={number}>1.</Box>
              <Box
                component="img"
                src="https://cdn-icons-png.flaticon.com/512/5249/5249375.png"
                alt="suitcase"
                sx={image}
              />
              <Typography variant="h5" align="center">
                Lorem ipsum dolor sit.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box sx={number}>2.</Box>
              <Box
                component="img"
                src="https://cdn-icons-png.flaticon.com/512/1057/1057118.png"
                alt="graph"
                sx={image}
              />
              <Typography variant="h5" align="center">
                Lorem ipsum dolor sit amet.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box sx={number}>3.</Box>
              <Box
                component="img"
                src="https://cdn-icons-png.flaticon.com/512/5603/5603881.png"
                alt="clock"
                sx={image}
              />
              <Typography variant="h5" align="center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, molestiae.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Layout;
