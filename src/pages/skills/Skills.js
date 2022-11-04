import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import "./Skills.css"

const item = {
  borderBox: "box-sizing",
  borderColor : "primary.main",
  borderRadius : "40px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  p: 5,
  m : 1,
  maxWidth : "350px",
  maxHeight : "450px"
};

const imageReact = ["https://www.datocms-assets.com/45470/1631110818-logo-react-js.png" ]
const imageNextJS = ["https://velog.velcdn.com/images/khy226/post/814c11ee-0626-4947-90a2-3be78a1bb92d/image.jpeg" ]
const imageJavascript = ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" ]
const imageTypescript = ["https://www.tutorialsteacher.com/Content/images/home/typescript.svg" ]
const imageCss = ["https://cdn-icons-png.flaticon.com/512/919/919826.png" ]
const imageNodejs = ["https://www.stanleyulili.com/assets/images/posts/node-featured-image/featured-image.jpg" ]
const imageHtml = ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png" ]
const imageRedux = ["https://miro.medium.com/max/1200/1*Uov-TfA20xfGqeIZyLWfnA.png" ]
const imageExpressJs = ["https://bs-uploads.toptal.io/blackfish-uploads/components/skill_page/content/logo_file/logo/195562/express_js-161052138fa79136c0474521906b55e2.png" ]
const imageGit = ["https://miro.medium.com/max/910/1*Wjxx83j-qyiNvFBy1yOA1w.jpeg" ]
const imageBootstrap = ["https://avatars.githubusercontent.com/u/2918581?s=280&v=4" ]
const imageMongoDB = ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png" ]
const imageMaterial = ["https://mui.com/static/logo.png" ]
const imageChakra = ["https://jquery-plugins.net/image/plugin/chakra-ui-simple-modular-accessible-ui-components-for-react-applications.png" ]
const imageWordpress = ["https://orptech.com/storage/11/1638720708.png" ]
const imageGithub = ["https://tr.wizcase.com/wp-content/uploads/2022/03/GitHub-Logo.png" ]
const imageGitlab = ["https://about.gitlab.com/nuxt-images/open-graph/open-graph-gitlab.png" ]

function Skills() {
  return (
    <Box component="section" sx={{ display: "flex", overflow: "hidden" }}>
      <Container sx={{ mt: 8, mb: 18, display: "flex", position: "relative" }}>
        <Box />
        <Grid container spacing={5}  className="box">
          <Grid className="box-content" item xs={12} md={4} sx={{cursor: "pointer", boxSizing:"border-box", position: "static"}}>
            <Box sx={item}>
              <Box
                component="img"
                src={imageReact}
                alt="react"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                REACT
              </Typography>
              <Typography variant="h5">
              {"By registering, you will access specially negotiated rates "}
                {"that you will not find anywhere else."}
              </Typography>
            </Box>
          </Grid>
          <Grid className="box-content" item xs={12} md={4} sx={{cursor: "pointer"}}>
            <Box sx={item}>
              <Box
                component="img"
                src={imageNextJS}
                alt="next"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Next js
              </Typography>
              <Typography variant="h5">
              {"By registering, you will access specially negotiated rates "}
                {"that you will not find anywhere else."}
              </Typography>
            </Box>
          </Grid>
          <Grid className="box-content" item xs={12} md={4} sx={{cursor: "pointer"}}>
            <Box sx={item}>
              <Box
                component="img"
                src={imageJavascript}
                alt="javascript"
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
          <Grid className="box-content" item xs={12} md={4} sx={{cursor: "pointer"}}>
            <Box sx={item}>
              <Box
                component="img"
                src={imageTypescript}
                alt="typescript"
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
          <Grid className="box-content" item xs={12} md={4} sx={{cursor: "pointer"}}>
            <Box sx={item}>
              <Box
                component="img"
                src={imageCss}
                alt="css"
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
          <Grid className="box-content" item xs={12} md={4} sx={{cursor: "pointer"}}>
            <Box sx={item}>
              <Box
                component="img"
                src={imageNodejs}
                alt="nodejs"
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
          <Grid className="box-content" item xs={12} md={4} sx={{cursor: "pointer"}}>
            <Box sx={item}>
              <Box
                component="img"
                src={imageHtml}
                alt="html"
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
          <Grid className="box-content" item xs={12} md={4} sx={{cursor: "pointer"}}>
            <Box sx={item}>
              <Box
                component="img"
                src={imageRedux}
                alt="redux"
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
          <Grid className="box-content" item xs={12} md={4} sx={{cursor: "pointer"}}>
            <Box sx={item}>
              <Box
                component="img"
                src={imageExpressJs}
                alt="express"
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
          <Grid className="box-content" item xs={12} md={4} sx={{cursor: "pointer"}}>
            <Box sx={item}>
              <Box
                component="img"
                src={imageGit}
                alt="git"
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
          <Grid className="box-content" item xs={12} md={4} sx={{cursor: "pointer"}}>
            <Box sx={item}>
              <Box
                component="img"
                src={imageBootstrap}
                alt="bootstrap"
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
          <Grid className="box-content" item xs={12} md={4} sx={{cursor: "pointer"}}>
            <Box sx={item}>
              <Box
                component="img"
                src={imageMongoDB}
                alt="mongodb"
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
          <Grid className="box-content" item xs={12} md={4} sx={{cursor: "pointer"}}>
            <Box sx={item}>
              <Box
                component="img"
                src={imageMaterial}
                alt="material"
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
          <Grid className="box-content" item xs={12} md={4} sx={{cursor: "pointer"}}>
            <Box sx={item}>
              <Box
                component="img"
                src={imageChakra}
                alt="chakra"
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
          <Grid className="box-content" item xs={12} md={4} sx={{cursor: "pointer"}}>
            <Box sx={item}>
              <Box
                component="img"
                src={imageWordpress}
                alt="wordpress"
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
          <Grid className="box-content" item xs={12} md={4} sx={{cursor: "pointer"}}>
            <Box sx={item}>
              <Box
                component="img"
                src={imageGithub}
                alt="github"
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
          <Grid className="box-content" item xs={12} md={4} sx={{cursor: "pointer"}}>
            <Box sx={item}>
              <Box
                component="img"
                src={imageGitlab}
                alt="gitlab"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
               GitLab
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
