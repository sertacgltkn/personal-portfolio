import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";

const item = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};

function Skills() {
  return (
    <Box component="section" sx={{ display: "flex", overflow: "hidden" }}>
      <Container sx={{ mt: 8, mb: 18, display: "flex", position: "relative" }}>
        <Box />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="https://www.datocms-assets.com/45470/1631110818-logo-react-js.png"
                alt="suitcase"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                REACT
              </Typography>
              <Typography variant="h5">
                {
                  "From the latest trendy boutique hotel to the iconic palace with XXL pool"
                }

                {
                  ", go for a mini-vacation just a few subway stops away from your home."
                }
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="https://velog.velcdn.com/images/khy226/post/814c11ee-0626-4947-90a2-3be78a1bb92d/image.jpeg"
                alt="graph"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Next js
              </Typography>
              <Typography variant="h5">
                {
                  "Privatize a pool, take a Japanese bath or wake up in 900m2 of garden… "
                }

                {"your Sundays will not be alike."}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
                alt="clock"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                JavaScript
              </Typography>
              <Typography variant="h5">
                {"By registering, you will access specially negotiated rates "}
                {"that you will not find anywhere else."}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="https://www.tutorialsteacher.com/Content/images/home/typescript.svg"
                alt="clock"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                TypeScript
              </Typography>
              <Typography variant="h5">
                {"By registering, you will access specially negotiated rates "}
                {"that you will not find anywhere else."}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="https://cdn-icons-png.flaticon.com/512/919/919826.png"
                alt="clock"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
               CSS
              </Typography>
              <Typography variant="h5">
                {"By registering, you will access specially negotiated rates "}
                {"that you will not find anywhere else."}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="https://www.stanleyulili.com/assets/images/posts/node-featured-image/featured-image.jpg"
                alt="clock"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                NODE JS
              </Typography>
              <Typography variant="h5">
                {"By registering, you will access specially negotiated rates "}
                {"that you will not find anywhere else."}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png"
                alt="clock"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                HTML5
              </Typography>
              <Typography variant="h5">
                {"By registering, you will access specially negotiated rates "}
                {"that you will not find anywhere else."}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="data:image/png;base64,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"
                alt="clock"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                REDUX
              </Typography>
              <Typography variant="h5">
                {"By registering, you will access specially negotiated rates "}
                {"that you will not find anywhere else."}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="data:image/jpeg;base64,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"
                alt="clock"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                EXPRESS
              </Typography>
              <Typography variant="h5">
                {"By registering, you will access specially negotiated rates "}
                {"that you will not find anywhere else."}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="https://miro.medium.com/max/910/1*Wjxx83j-qyiNvFBy1yOA1w.jpeg"
                alt="clock"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                git
              </Typography>
              <Typography variant="h5">
                {"By registering, you will access specially negotiated rates "}
                {"that you will not find anywhere else."}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="data:image/jpeg;base64,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"
                alt="clock"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Bootstrap
              </Typography>
              <Typography variant="h5">
                {"By registering, you will access specially negotiated rates "}
                {"that you will not find anywhere else."}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png"
                alt="clock"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Mongo DB
              </Typography>
              <Typography variant="h5">
                {"By registering, you will access specially negotiated rates "}
                {"that you will not find anywhere else."}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="data:image/png;base64,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"
                alt="clock"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Material UI
              </Typography>
              <Typography variant="h5">
                {"By registering, you will access specially negotiated rates "}
                {"that you will not find anywhere else."}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="data:image/jpeg;base64,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"
                alt="clock"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Chakra UI
              </Typography>
              <Typography variant="h5">
                {"By registering, you will access specially negotiated rates "}
                {"that you will not find anywhere else."}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="data:image/png;base64,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"
                alt="clock"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Wordpress
              </Typography>
              <Typography variant="h5">
                {"By registering, you will access specially negotiated rates "}
                {"that you will not find anywhere else."}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="data:image/png;base64,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"
                alt="clock"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
               GitHub
              </Typography>
              <Typography variant="h5">
                {"By registering, you will access specially negotiated rates "}
                {"that you will not find anywhere else."}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Skills;
