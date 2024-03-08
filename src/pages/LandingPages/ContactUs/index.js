// Material Kit 2 React components
import MKBox from "components/MKBox";
import Grid from "@mui/material/Grid";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import Container from "@mui/material/Container";
import Title from "pages/common/Title";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";
import Banner from "pages/common/Banner";
import { Box, Typography } from "@mui/material";
import Animation from "animation";
import data from "./data";
import HeadTag from "../../../components/common/HeadSeo";
import ContactForm from "./contactForm";
import testBgBanner from "../../../assets/images/home/test-bg-banner.svg";

function ContactUs() {
  return (
    <>
      <HeadTag
        title="Get in Touch with Veritekno - Reach Out for Innovative Solutions"
        description="Contact Veritekno for cutting-edge technology solutions and personalized services. Reach out to us for collaboration, inquiries, or any assistance you may need. Let's connect and explore new possibilities together."
      />
      <Box bgcolor="#fff">
        <DefaultNavbar routes={routes} sticky />
        <Banner title="Contact us" />
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
              title="CONTACT US"
              description={`Connect with Veritekno effortlessly through our Contact Us page. Whether you have inquiries, collaboration proposals, or simply want to say hello, we look forward to hearing from you. Reach out and let's start a conversation!`}
              isImageBottom
              align="center"
              maxWidth="550px"
            />
          </Grid>
          <MKBox mb={10}>
            <Animation>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                gap={5}
                justifyContent={"center"}
              >
                {data.map(({ icon, title, desc1, desc2 }) => (
                  <Grid item xs={12} md={3.5} sx={{ mb: 2 }} key={title}>
                    <Box
                      display={"flex"}
                      flexDirection={"column"}
                      alignItems={"center"}
                      border={"1px solid #004FD2"}
                      borderRadius={"10px"}
                      padding={"24px 18px"}
                    >
                      <Box component={"img"} src={icon} alt={title} mb="20px"></Box>
                      <Typography variant="h5" color={"#000"} fontSize={"22px"} mb="10px">
                        {title}
                      </Typography>
                      <Typography color={"#454E58"} fontSize={"18px"}>
                        {desc1}
                      </Typography>
                      <Typography color={"#454E58"} fontSize={"18px"}>
                        {desc2}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Animation>
          </MKBox>
        </Container>
        <MKBox
          component="section"
          py={12}
          mb={10}
          sx={{ background: `url(${testBgBanner}), rgb(248, 248, 248) 80% / cover no-repeat;` }}
        >
          <Container>
            <ContactForm />
          </Container>
        </MKBox>
        <MKBox>
          <Box
            component={"iframe"}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3339.6073018889256!2d-96.49473222439819!3d33.17193496369953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c09533ad9278f%3A0x9273027d288da998!2s514%20E%20Hazelwood%20St%20d%2C%20Princeton%2C%20TX%2075407%2C%20USA!5e0!3m2!1sen!2sin!4v1705662890789!5m2!1sen!2sin"
            width="100%"
            height="450px"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></Box>
        </MKBox>
        <MKBox pt={6} px={1} mt={6}>
          <DefaultFooter content={footerRoutes} isHideMap />
        </MKBox>
      </Box>
    </>
  );
}

export default ContactUs;
