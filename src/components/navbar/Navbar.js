import * as React from "react";
import "./Navbar.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import { Button, ButtonGroup } from "@mui/material";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import InfoIcon from "@mui/icons-material/Info";
import FolderIcon from "@mui/icons-material/Folder";
import CallIcon from "@mui/icons-material/Call";
import { Link } from "react-router-dom";

function Navbar() {
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
            sx={{
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
            <ButtonGroup className="button-group" orientation="horizontal">
              <Button
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
            </ButtonGroup>
            <ButtonGroup style={{ cursor: "pointer" }}>
              {" "}
              {/* mouse hoover değişikliği */}
              {/* context için toggle button */}
              <ToggleOffIcon style={{ transform: "scale(2.0)" }} />{" "}
              {/* toggle icon boyutu */}
            </ButtonGroup>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
