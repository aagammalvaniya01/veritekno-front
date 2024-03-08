// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "assets/images/home/aboutus.png";
import Title from "pages/common/Title";
import { Box } from "@mui/material";
import Animation from "animation";

function AboutUs() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid
          container
          item
          xs={12}
          alignItems="center"
          gap={"20px"}
          flexDirection={{ xs: "column-reverse", lg: "row" }}
        >
          <Grid item xs={12} lg={5} sx={{ mx: "auto" }}>
            <Animation>
              <Box component="img" src={bgFront} alt="about-us" height="100%" width={"100%"} />
            </Animation>
          </Grid>
          <Grid item xs={12} lg={6} sx={{ ml: "auto" }} pt={2}>
            <Grid container>
              <Grid item xs={12} md={12}>
                <Animation direction="right">
                  <Title
                    title="ABOUT US"
                    justify={{ xs: "center", lg: "flex-start" }}
                    align={{ xs: "center", lg: "flex-start" }}
                  />
                  <DefaultInfoCard
                    // icon="info"
                    direction="left"
                    title="Empowering Innovation: Discover the Veritekno Story"
                    description={`<div style="margin-top:35px">Welcome to <span style="font-weight: bold">Veritekno</span>, where technology meets innovation to shape a better future. At Veritekno, we are passionate about driving positive change through cutting-edge solutions and a commitment to excellence.<br/>
                    <span style="font-weight: bold">Veritekno</span> is more than just a technology company; we are a collective of dedicated professionals, thinkers, and problem solvers. Our diverse team brings together a wealth of expertise, creativity, and a shared commitment to pushing the boundaries of what's possible.</div>`}
                  />
                </Animation>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default AboutUs;
