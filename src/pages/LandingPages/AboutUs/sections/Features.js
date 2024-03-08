import React from "react";
import { Box, Grid, Container } from "@mui/material";
import MKTypography from "components/MKTypography";
import aboutUsFeatures from "../../../../assets/images/aboutUs/aboutUsFeatures.svg";
import Innovative from "../../../../assets/images/aboutUs/Innovative.svg";
import ExpertTeam from "../../../../assets/images/aboutUs/ExpertTeam.svg";
import approach from "../../../../assets/images/aboutUs/approach.svg";
import agilescalable from "../../../../assets/images/aboutUs/agilescalable.svg";
import Animation from "animation";

const AboutFeatures = () => {
  return (
    // background: rgba(0, 79, 210, 0.16);
    <Box my={12} bgcolor={"rgba(0, 79, 210, 0.16)"}>
      <Container>
        <Box py={12}>
          <Grid
            container
            rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            justifyContent="space-between"
          >
            <Grid item xs={12} lg={8}>
              <Animation>
                <Grid container rowGap={5}>
                  <Grid item xs={12} md={6}>
                    <Box
                      display={"flex"}
                      flexDirection="column"
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <Box component={"img"} src={Innovative} alt={"Innovative"} />
                      <MKTypography
                        variant="h6"
                        fontWeight="bold"
                        mb={1}
                        fontSize="22px"
                        textAlign="center"
                      >
                        Innovative Solutions
                      </MKTypography>
                      <MKTypography
                        variant="body2"
                        fontWeight="regular"
                        color="#454E58"
                        my={1}
                        pr={2}
                        textAlign="center"
                        textSize="16px"
                      >
                        We specialize in crafting cutting-edge and innovative solutions that
                        transform businesses and drive growth.
                      </MKTypography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box
                      display={"flex"}
                      flexDirection="column"
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <Box component={"img"} src={approach} alt={"approach"} />
                      <MKTypography
                        variant="h6"
                        fontWeight="bold"
                        mb={1}
                        fontSize="22px"
                        textAlign="center"
                      >
                        Client-Centric Approach
                      </MKTypography>
                      <MKTypography
                        variant="body2"
                        fontWeight="regular"
                        color="#454E58"
                        my={1}
                        pr={2}
                        textAlign="center"
                        textSize="16px"
                      >
                        We strive to understand your unique needs and deliver tailor-made solutions
                        that exceed expectations, ensuring your success is our top priority.
                      </MKTypography>
                    </Box>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Box
                      display={"flex"}
                      flexDirection="column"
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <Box component={"img"} src={ExpertTeam} alt={"ExpertTeam"} />
                      <MKTypography
                        variant="h6"
                        fontWeight="bold"
                        mb={1}
                        fontSize="22px"
                        textAlign="center"
                      >
                        Expert Team
                      </MKTypography>
                      <MKTypography
                        variant="body2"
                        fontWeight="regular"
                        color="#454E58"
                        my={1}
                        pr={2}
                        textAlign="center"
                        textSize="16px"
                      >
                        Backed by a team of industry experts and skilled professionals, we bring a
                        wealth of experience to the table.
                      </MKTypography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box
                      display={"flex"}
                      flexDirection="column"
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <Box component={"img"} src={agilescalable} alt={"agilescalable"} />
                      <MKTypography
                        variant="h6"
                        fontWeight="bold"
                        mb={1}
                        fontSize="22px"
                        textAlign="center"
                      >
                        Agile & Scalable Solutions
                      </MKTypography>
                      <MKTypography
                        variant="body2"
                        fontWeight="regular"
                        color="#454E58"
                        my={1}
                        pr={2}
                        textAlign="center"
                        textSize="16px"
                      >
                        We offer agile and scalable solutions that adapt to your evolving business
                        needs. Our aim is to provide robust and flexible solutions
                      </MKTypography>
                    </Box>
                  </Grid>
                </Grid>
              </Animation>
            </Grid>

            <Grid item xs={12} md={4} display={{ xs: "none", lg: "flex" }} alignItems={"center"}>
              <Animation direction="right">
                <Box component={"img"} src={aboutUsFeatures} alt={"aboutUsFeatures"} width="100%" />
              </Animation>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutFeatures;
