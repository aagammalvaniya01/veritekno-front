import { Box } from "@mui/material";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import routes from "../../../routes";
import Container from "@mui/material/Container";
import Title from "pages/common/Title";
import DefaultFooter from "examples/Footers/DefaultFooter";
import MKBox from "components/MKBox";
import footerRoutes from "../../../footer.routes";
import Grid from "@mui/material/Grid";
import Banner from "pages/common/Banner";
import data from "../../Home/sections/data/servicesData";
import ServiceCard from "../../Home/components/ServiceCard";
import Animation from "animation";
import HeadTag from "../../../components/common/HeadSeo";

function Service() {
  return (
    <>
      <HeadTag
        title={"Cutting-Edge Solutions and Services | Veritekno"}
        description={
          "Unlock the potential of your business with Veritekno's comprehensive services. From consulting to implementation, we offer innovative solutions to drive your growth and success."
        }
      />
      <Box bgcolor={"#fff"}>
        <DefaultNavbar routes={routes} sticky />
        <Banner title="Services" />
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
              title="Services"
              subTitle="Software Development Services"
              description={`Veritekno delivers expert training and bespoke software solutions, driving success through knowledge and technology`}
              isImageBottom
              align="center"
              maxWidth="750px"
            />
          </Grid>
          <Animation>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              {data.map(({ image, name, description: sub_desc, route }) => (
                <Grid item xs={12} md={4} sx={{ mb: 2 }} key={name}>
                  <ServiceCard
                    image={image}
                    name={name}
                    description={sub_desc}
                    route={route}
                    bgcolor="rgba(0, 79, 210, 0.19)"
                  />
                </Grid>
              ))}
            </Grid>
          </Animation>
        </Container>
        <MKBox pt={6} px={1} mt={6}>
          <DefaultFooter content={footerRoutes} />
        </MKBox>
      </Box>
    </>
  );
}

export default Service;
