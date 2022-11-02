import * as React from "react";
import "./Navbar.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import { Button, ButtonGroup } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import FolderIcon from "@mui/icons-material/Folder";
import CallIcon from "@mui/icons-material/Call";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Navbar() {
  const notify = () =>
    toast.info("🦄 Yükleniyor...", {
      position: "top-right",
      autoClose: 800,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        className="navbar"
        position="static"
        colors={["#00a8c3", "#00373f"]}
        sx={{
          backgroundColor: "rgb(79, 139, 255)", // navbar rengi
          color: "white", // navbar içi yazı rengi
          boxShadow: "none", // navbar gölgesi
          borderBottom: "1px solid #333", // navbar alt çizgisi
          backgroundImage: "linear-gradient(to top, #4E8FFF, #002E94)", // gradient color for navbar
        }}
      >
        <Toolbar>
          <Link exact to="/"></Link> {/* RRDOMV6 ile linkleme işlemi */}
          <Typography // Mui'dan gelen typography
            variant="h6"
            noWrap // yazıyı sığdırmak için
            component="div"
            onClick={notify}
            sx={{
              justifyContent: "left",
              alignContent: "flex-start",
              marginBlockStart: "1.05em", // Sertaç Gültekin yazısı için üste veya alta doğru kayma
              display: {
                xs: "none", // xs ekran boyutu için
                sm: "block", // sm ekran boyutu için
                color: "black",
                fontFamily: "Georgia, 'Times New Roman', Times, serif", // yazı tipi
                fontStyle: "italic",
                textDecoration: "none", // yazının altındaki çizgiyi kaldırır
              },
            }}
          >
            <Link
              exact
              to="/"
              style={{ textDecoration: "none", color: "white" }}
            >
              <h4 className="name">Sertaç Gültekin</h4>
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <ButtonGroup
              className="button-group"
              orientation="horizontal"
              sx={{
                justifyContent: "right",
                alignContent: "flex-end",
              }}
            >
              <Button
                onClick={notify}
                color="primary"
                variant="contained"
                size="small"
                textDecoration="none"
                sx={{ margin: 1, backgroundColor: "#25316D" }}
              >
                <Link
                  exact
                  to="/"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <HomeIcon />
                  Home
                </Link>
              </Button>
              <Button
                onClick={notify}
                color="primary"
                variant="contained"
                size="small"
                sx={{ margin: 1, backgroundColor: "#25316D" }}
              >
                <Link
                  exact
                  to="/about"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <InfoIcon />
                  About
                </Link>
              </Button>
              <Button
                onClick={notify}
                color="primary"
                variant="contained"
                size="small"
                sx={{ margin: 1, backgroundColor: "#25316D" }}
              >
                <Link
                  exact
                  to="/projects"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <FolderIcon />
                  Projects
                </Link>
              </Button>
              <Button
                color="primary"
                variant="contained"
                size="small"
                onClick={notify}
                sx={{ margin: 1, backgroundColor: "#25316D" }}
              >
                <Link
                  exact
                  to="/contact"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <CallIcon />
                  Contact
                </Link>
              </Button>
              <ToastContainer
                position="bottom-right"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
              />
            </ButtonGroup>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
