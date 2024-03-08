// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Presentation page components
import ServiceCard from "../components/ServiceCard";
import Title from "pages/common/Title";

// Data
import data from "./data/servicesData";
import MKButton from "components/MKButton";
import Animation from "animation";

function Services() {
  const renderData = () => (
    <Animation direction="left">
      <Grid spacing={3} sx={{ mb: 5 }}>
        <Grid container spacing={3}>
          {data?.slice(0, 3).map(({ image, name, description: sub_desc, route }) => (
            <Grid item xs={12} md={4} sx={{ mb: 2 }} key={name}>
              <ServiceCard image={image} name={name} description={sub_desc} route={route} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Animation>
  );

  return (
    <Box component="section" py={6} sx={{ background: "rgba(0, 79, 210, 0.20)" }}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: "center", my: 6, mx: "auto", px: 0.75 }}
        >
          <Animation direction="left">
            <Title title="SERVICES" />
          </Animation>
          <Animation direction="right">
            <MKTypography variant="h3" fontWeight="bold">
              Software Development Services
            </MKTypography>
          </Animation>
          <Animation direction="left">
            <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
              Veritekno delivers expert training and bespoke software solutions, driving success
              through knowledge and technology
            </MKTypography>
          </Animation>
        </Grid>
      </Container>
      <Container sx={{ mt: 6 }}>
        {renderData()}
        <Box display={"flex"} justifyContent={"center"}>
          <MKButton
            sx={{ textTransform: "unset", fontSize: "18px" }}
            component={Link}
            variant="gradient"
            color="info"
            to={"/services"}
          >
            Read more
          </MKButton>
        </Box>
      </Container>
    </Box>
  );
}

export default Services;
