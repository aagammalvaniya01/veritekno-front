import React, { useEffect, useState } from "react";
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
import { useParams } from "react-router-dom";
import HeadTag from "../../../components/common/HeadSeo";
import ServiceContain from "./ServiceContain";

const ServicePage = () => {
  const { name } = useParams();
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    const data1 = data.filter((item) => item.id === name);
    setFilterData(data1);
  }, [name]);
  console.log("filterData", filterData);
  return (
    <>
      <HeadTag title={filterData[0]?.seoTitle} description={filterData[0]?.seoDescription} />
      <Box bgcolor={"#fff"}>
        <DefaultNavbar routes={routes} sticky />
        <Banner title={filterData[0]?.breadcumTitle} />
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={12}
            flexDirection="column"
            alignItems="center"
            sx={{ textAlign: "center", mx: "auto", px: 0.75 }}
          >
            <Title
              title="Service"
              subTitle={filterData[0]?.name}
              description={filterData[0]?.description}
              // isImageBottom
              align="center"
              maxWidth="750px"
            />
          </Grid>
          <Box container mb={20}>
            {filterData.map(({ pageImage, name, pageDescription }) => (
              <ServiceContain
                key={name}
                image={pageImage}
                name={name}
                pageDescription={pageDescription}
              />
            ))}
          </Box>
        </Container>
        <MKBox pt={6} px={1} mt={6}>
          <DefaultFooter content={footerRoutes} />
        </MKBox>
      </Box>
    </>
  );
};

export default ServicePage;
