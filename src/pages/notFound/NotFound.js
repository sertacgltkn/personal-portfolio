import NextLink from "next/link";
import { Box, Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

const Page = () => (
  
  <>
    <Box
      component="main"
      sx={{
        alignItems: "center",
        display: "flex",
        flexGrow: 1,
        minHeight: "100%",
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            align="center"
            variant="h1"
            sx={{ color: "#25316D", fontWeight: "bold" }}
          >
            404: Aradığınız sayfaya ulaşılamıyor...
          </Typography>
          <Typography align="center" color="textPrimary" variant="subtitle2">
            Böyle bir sayfa bulunmuyor, anasayfaya dönmek için butona basınız.
          </Typography>
          <NextLink href="/" passHref>
            <Button
              /* onClick={notify} */
              color="primary"
              variant="contained"
              size="small"
              textDecoration="none"
              sx={{ margin: 1, backgroundColor: "#25316D" }}
            >
              <Link
                exact="true"
                to="/"
                style={{ textDecoration: "none", color: "white" }}
              >
                <HomeIcon />
                Home
              </Link>
            </Button>
          </NextLink>
          <Box sx={{ textAlign: "center" }}>
            <img
              src="https://wpklik.com/wp-content/uploads/2019/03/A-404-Page-Best-Practices-and-Design-Inspiration.jpg"
              alt="404 page"
              style={{
                marginTop: 50,
                display: "inline-block",
                maxWidth: "100%",
                height: "30vh",
                width: "100%",
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  </>
);

export default Page;
