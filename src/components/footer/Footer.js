import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <Box
        sx={{
          py: 4,
          position: "sticky",
          display: { xs: "block", sm: "flex" },
          alignItems: { sm: "center" },
          justifyContent: { sm: "space-between" },
          backgroundColor: "rgb(79, 139, 255)",
          color: "white",
          boxShadow: "none",
          borderBottom: "1px solid #333",
          backgroundImage: "linear-gradient(to top, #4E8FFF, #002E94)",
        }}
      >
        <Typography
          className="typography"
          color="text.secondary"
          variant="body2"
          style={{ color: "#edf5f3" }}
        >
          Copyright © {new Date().getFullYear()} <h9>sertacgltkn</h9>
        </Typography>
        <Box sx={{ py: { xs: 2, sm: 0 } }}>
          <Stack spacing={2} direction="row" sx={{ textAlign: "center" }}>
            <p
              style={{
                fontWeight: "bold",
                fontFamily: "auto",
                color: "#edf5f3",
              }}
            >
              <h9> Contact Me: </h9>
            </p>
            <IconButton
              target="_blank"
              rel="noopener noreferrer"
              href="Tel no"
              aria-label="github"
              title="GitHub"
              size="medium"
            >
              <WhatsAppIcon fontSize="small" sx={{ color: "white" }} />
            </IconButton>
            <IconButton
              target="_blank"
              rel="noopener noreferrer"
              href="sertacgltkn@gmail.com"
              aria-label="github"
              title="email"
              size="medium"
            >
              <EmailIcon fontSize="small" sx={{ color: "white" }} />
            </IconButton>
            <IconButton
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/sertacgltkn"
              aria-label="github"
              title="GitHub"
              size="medium"
            >
              <GitHubIcon fontSize="small" sx={{ color: "white" }} />
            </IconButton>
            <IconButton
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/"
              aria-label="twitter"
              title="Twitter"
              size="medium"
            >
              <TwitterIcon fontSize="small" sx={{ color: "white" }} />
            </IconButton>
            <IconButton
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/sertacgultekin/"
              aria-label="linkedin"
              title="LinkedIn"
              size="medium"
            >
              <LinkedInIcon fontSize="small" sx={{ color: "white" }} />
            </IconButton>
          </Stack>
        </Box>
      </Box>
    </>
  );
}
