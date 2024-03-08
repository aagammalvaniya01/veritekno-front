// Material Kit 2 React components
import MKBox from "components/MKBox";
import Grid from "@mui/material/Grid";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import Container from "@mui/material/Container";
import Title from "pages/common/Title";

// Routess
import routes from "routes";
import footerRoutes from "footer.routes";
import Banner from "pages/common/Banner";
import { Box } from "@mui/material";
import Animation from "animation";
import data from "./data";
import careerDescImage from "../../../assets/images/career/career.svg";
import MKTypography from "components/MKTypography";
import DevelopmentProcessCard from "../../Home/components/DevelopmentProcessCard";
import HeadTag from "../../../components/common/HeadSeo";

const Career = () => {
  return (
    <>
      <HeadTag
        title="Join Our Team at Veritekno: Explore Exciting Career Opportunities"
        description="Find your passion and purpose at Veritekno. Explore diverse career paths, competitive benefits, and a culture that values your unique skills and contributions."
      />
      <Box bgcolor="#fff">
        <DefaultNavbar routes={routes} sticky />
        <Banner title="Career" />
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
              title="CAREER"
              description={`Explore Your Future with Veritekno, Join Us on a Journey of Innovation and Growth.`}
              isImageBottom
              align="center"
              maxWidth="550px"
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
                  src={careerDescImage}
                  alt={"careerDescImage"}
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
                    Opportunities don&apos;t happen, you create them.
                  </MKTypography>
                  <MKTypography
                    variant="body2"
                    fontWeight="regular"
                    color="#454E58"
                    my={1}
                    textAlign={"justify"}
                  >
                    Opportunities don&apos;t just materialize; they are products of initiative, hard
                    work, and determination. At Hornbook Technologies, we believe in the power of
                    creation—crafting innovative solutions, fostering collaborations, and pushing
                    boundaries. We empower you to seize the moment and shape your own success story.
                  </MKTypography>
                  <MKTypography
                    variant="body2"
                    fontWeight="regular"
                    color="#454E58"
                    my={1}
                    textAlign={"justify"}
                  >
                    We believe in a culture that values innovation, transparency, and a relentless
                    pursuit of excellence. Veritekno encourages an open and inclusive environment
                    where every team member&apos;s voice is heard and respected. We celebrate
                    diversity and believe it is crucial for driving creativity and success.
                  </MKTypography>
                  <MKTypography
                    variant="body2"
                    fontWeight="regular"
                    color="#454E58"
                    my={1}
                    textAlign={"justify"}
                  >
                    At Veritekno, we foster a culture of creativity, collaboration, and continuous
                    learning. Our team is comprised of passionate individuals who thrive in a
                    fast-paced and challenging environment. We value diversity and inclusion,
                    recognizing that our collective strength lies in the unique perspectives and
                    talents each team member brings.
                  </MKTypography>
                </Box>
              </Animation>
            </Grid>
          </Grid>
        </Container>
        <Box component="section" py={8} my={10} sx={{ background: "rgba(0, 79, 210, 0.20)" }}>
          <Container>
            <Box textAlign={"center"} maxWidth={"800px"} margin={"auto"}>
              <Animation direction="right">
                <MKTypography variant="h2" fontWeight="bold" color="#000">
                  We&apos;re Hiring!
                </MKTypography>
              </Animation>
              <Animation direction="left">
                <MKTypography
                  variant="body1"
                  fontWeight="regular"
                  color="#454E58"
                  my={3}
                  textAlign={"center"}
                >
                  Explore our current job openings and join us on this exciting journey of
                  innovation and growth. We are seeking individuals who are passionate,
                  forward-thinking, and ready to make a difference.
                </MKTypography>
              </Animation>
            </Box>
          </Container>
        </Box>
        <Box component="section" sx={{ background: "#fff" }}>
          <Container>
            <Box textAlign={"center"} maxWidth={"800px"} margin={"auto"}>
              <Animation direction="right">
                <MKTypography variant="h3" fontWeight="bold" color="#000">
                  Process of <span style={{ color: "#004FD2" }}>Interview</span>
                </MKTypography>
              </Animation>
              <Animation direction="left">
                <MKTypography
                  variant="body2"
                  fontWeight="regular"
                  color="#454E58"
                  my={1}
                  textAlign={"center"}
                >
                  At Veritekno, our interview process is a collaborative journey designed to unveil
                  your potential and align your skills with our innovative culture. Experience a
                  thorough yet engaging selection process that seeks to discover the best in you and
                  welcomes talent ready to thrive in the dynamic world of technology and innovation.
                </MKTypography>
              </Animation>
            </Box>
            <Grid container spacing={5} justifyContent="center" mt={2.5} mb={14}>
              {data.map((items) => (
                <Grid item xs={12} md={6} lg={4} sx={{ mb: 2 }} key={items.name}>
                  <DevelopmentProcessCard
                    image={items.icon}
                    name={items.name}
                    description={items.description}
                    background={"rgba(217, 217, 217, 0.30)"}
                    padding={5}
                  />
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
        <MKBox pt={6} px={1} mt={6}>
          <DefaultFooter content={footerRoutes} />
        </MKBox>
      </Box>
    </>
  );
};

export default Career;
