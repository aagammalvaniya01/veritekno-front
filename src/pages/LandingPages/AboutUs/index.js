import { Box } from "@mui/material";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import routes from "../../../routes";
import Container from "@mui/material/Container";
import Title from "pages/common/Title";
import DefaultFooter from "examples/Footers/DefaultFooter";
import MKBox from "components/MKBox";
import footerRoutes from "../../../footer.routes";
import MKTypography from "components/MKTypography";
import Grid from "@mui/material/Grid";
import aboutDescImage from "../../../assets/images/aboutUs/aboutDesc.svg";
import AboutFeatures from "./sections/Features";
import Banner from "pages/common/Banner";
import Animation from "animation";
import HeadTag from "../../../components/common/HeadSeo";

function AboutUs() {
  return (
    <>
      <HeadTag
        title="About Veritekno - Your Trusted Partner for Innovation"
        description="Discover the story behind Veritekno, where innovation meets excellence. Learn about our commitment to delivering top-tier solutions, fostering creativity, and building lasting partnerships. Join us on our journey of transforming ideas into success."
      />

      <Box bgcolor={"#fff"}>
        <DefaultNavbar routes={routes} sticky />
        <Banner title="About Us" />
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={12}
            flexDirection="column"
            alignItems="center"
            sx={{ textAlign: "center", my: 6, mx: "auto", px: 0.75 }}
          >
            <Title
              title="About Us"
              description={`We are Veritekno's, where technology meets innovation. We're a passionate team
              dedicated to crafting transformative IT solutions that drive success. With a
              commitment to excellence and a focus on user-centric experiences, we leverage
              cutting-edge technology to propel businesses into the future.`}
              isImageBottom
              align="center"
              maxWidth="750px"
            />
          </Grid>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            flexDirection={{ xs: "column-reverse", lg: "row" }}
          >
            <Grid item xs={12} lg={6} display={"flex"} justifyContent={"center"}>
              <Animation>
                <Box
                  component={"img"}
                  src={aboutDescImage}
                  alt={aboutDescImage}
                  width={{ xs: "100%", xm: "auto" }}
                />
              </Animation>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Animation direction="right">
                <Box
                  height={"100%"}
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                >
                  <MKTypography variant="h4" fontWeight="bold" mb={1}>
                    Welcome to <span style={{ color: "#004FD2" }}>Veritekno</span> - Building{" "}
                    {"Tomorrow's"} Solutions Today!
                  </MKTypography>
                  <MKTypography
                    variant="body2"
                    fontWeight="regular"
                    color="secondary"
                    my={1}
                    textAlign={"justify"}
                  >
                    At Veritekno, we are passionate about leveraging technology to craft innovative
                    solutions that transform businesses and elevate user experiences. With a strong
                    commitment to excellence, we bring together a team of skilled professionals
                    driven by a shared goal: to empower our clients and drive their success through
                    technology.
                  </MKTypography>
                  <MKTypography
                    variant="body2"
                    fontWeight="regular"
                    color="secondary"
                    my={1}
                    textAlign={"justify"}
                  >
                    We believe in a collaborative approach, working closely with our clients to
                    understand their unique challenges and craft tailored solutions. Through agile
                    methodologies and best practices, we ensure timely delivery without compromising
                    on quality.
                  </MKTypography>
                  <MKTypography
                    variant="body2"
                    fontWeight="regular"
                    color="secondary"
                    my={1}
                    textAlign={"justify"}
                  >
                    With a diverse portfolio of services, we specialize in delivering end-to-end
                    software development, robust mobile applications, user-centric web solutions,
                    cloud-based services, and more. Our expertise spans across multiple industries,
                    allowing us to cater to various business needs.
                  </MKTypography>
                </Box>
              </Animation>
            </Grid>
          </Grid>
        </Container>
        <AboutFeatures />
        <MKBox pt={6} px={1} mt={6}>
          <DefaultFooter content={footerRoutes} />
        </MKBox>
      </Box>
    </>
  );
}

export default AboutUs;
