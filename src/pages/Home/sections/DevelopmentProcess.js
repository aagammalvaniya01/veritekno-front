import { Box, Container, Grid } from "@mui/material";
import React from "react";
import Title from "pages/common/Title";
import data from "./data/developmentData";
import DevelopmentProcessCard from "../components/DevelopmentProcessCard";
import Animation from "animation";
const DevelopmentProcess = () => {
  const renderData = data.map((items) => (
    <Grid item xs={12} md={6} lg={3} sx={{ mb: 2 }} key={items.name}>
      <DevelopmentProcessCard
        image={items.image}
        name={items.name}
        description={items.description}
      />
    </Grid>
  ));

  return (
    <Box component="section" py={8}>
      <Container>
        <Grid
          item
          xs={12}
          lg={6}
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: "center", my: 6, mx: "auto", px: 0.75 }}
        >
          <Title
            title="Development Process We Follow"
            titleJustify="center"
            description="Our design process follows a proven approach. We begin with a deep understanding of your needs and create a planning template."
            isImageBottom
            align="center"
            maxWidth="600px"
          />
        </Grid>
        <Animation>
          <Grid container spacing={3} justifyContent="center">
            {renderData}
          </Grid>
        </Animation>
      </Container>
    </Box>
  );
};

export default DevelopmentProcess;
