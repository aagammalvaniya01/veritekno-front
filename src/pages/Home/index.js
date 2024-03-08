// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// import Card from "@mui/material/Card";
import { Box, Button, Typography } from "@mui/material";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Presentation page sections
// import Counters from "./sections/Counters";
import AboutUs from "./sections/AboutUs";
import Services from "./sections/Services";
import Testimonials from "./sections/Testimonials";

// Presentation page components

// Routes
import routes from "../../routes";
import footerRoutes from "../../footer.routes";

// Images
import bgImage from "../../assets/images/home/banner-2.png";
import bgImageAfter from "../../assets/images/home/banner-after.png";
import bannerSubImage from "../../assets/images/home/banner-sub.svg";
import Industries from "./sections/Industries";
import DevelopmentProcess from "./sections/DevelopmentProcess";
import HeadTag from "../../components/common/HeadSeo";

function Home() {
  // useEffect(() => {
  //   document.title = "Homepage | Veritekno";
  // }, []);

  return (
    <>
      <HeadTag
        title="Empowering Success with Innovative Solutions | Veritekno"
        description="Unlock potential with Veritekno's cutting-edge services. We offer innovative solutions tailored to elevate your business. Explore our expertise and drive your success today."
      />
      <Box bgcolor={"#fff"}>
        <DefaultNavbar routes={routes} sticky />
        <Box
          width="100%"
          sx={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
            display: "grid",
            placeItems: "center",
            padding: "172px 0 100px",
            position: "relative",
            "&::after": {
              backgroundImage: `url(${bgImageAfter})`,
              content: "''",
              position: "absolute",
              bottom: -1,
              height: "318px",
              width: "100%",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            },
          }}
        >
          <Container sx={{ zIndex: 1 }}>
            <Grid container justifyContent="center" mx="auto" alignItems="center">
              <Grid item xs={12} lg={6}>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  gap="20px"
                  alignItems={"center"}
                >
                  <Typography
                    align="center"
                    variant="h1"
                    color={"#fff"}
                    width={{ xs: "100%", lg: "500px" }}
                    fontSize={{ xs: "24px", lg: "40px" }}
                  >
                    Empowering <span style={{ color: "#90E0EF" }}>Growth</span> Through IT
                    Consultancy and Training
                    {/* {/* Empowering Your Digital Future: Expert</span> IT Consultancy and Training Services */}
                  </Typography>
                  <Box display={"flex"} gap={"10px"} justifyContent={"center"}>
                    <Button variant="contained" sx={{ backgroundColor: "#90E0EF", color: "#fff" }}>
                      Get Started
                    </Button>
                    <Button variant="contained" sx={{ backgroundColor: "#90E0EF", color: "#fff" }}>
                      Our Services
                    </Button>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} lg={6} textAlign={"center"}>
                <Box component={"img"} src={bannerSubImage} alt="banner-home" width="80%" />
              </Grid>
            </Grid>
          </Container>
        </Box>
        <AboutUs />
        <Services />
        {/* <Pages /> */}
        <Testimonials />
        <Industries />
        <DevelopmentProcess />
        <MKBox pt={6} px={1} mt={6}>
          <DefaultFooter content={footerRoutes} />
        </MKBox>
      </Box>
    </>
  );
}

export default Home;
