import { Box, Container, Grid } from "@mui/material";
import React from "react";
import Title from "pages/common/Title";
import data from "./data/industriesData";
import Animation from "animation";
const Industries = () => {
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
            title="INDUSTRIES"
            titleJustify="center"
            description="Veritekno extends its expertise across diverse industries, from finance and healthcare to manufacturing, empowering businesses with tailored technology solutions."
            isImageBottom
            align="center"
          />
        </Grid>
        <Animation direction="right">
          <Box display="flex" flexWrap="wrap" rowGap="90px">
            {data.map((item, index) => (
              <Box key={index} width={{ xs: "50%", md: "20%" }} textAlign="center">
                <Box component="img" alt={item.img} src={item.img} />
              </Box>
            ))}
          </Box>
        </Animation>
      </Container>
    </Box>
  );
};

export default Industries;
