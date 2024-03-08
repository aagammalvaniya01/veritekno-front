import PropTypes from "prop-types";
import React from "react";
import { Box, Typography, Container, Breadcrumbs } from "@mui/material";
import bgImage from "../../../assets/images/common/banner.png";
import bgImageAfter from "../../../assets/images/home/banner-after.png";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link } from "react-router-dom";

const Banner = ({ title }) => {
  return (
    <Box
      height="600px"
      width="100%"
      sx={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        display: "grid",
        placeItems: "center",
        position: "relative",
        alignItems: "start",
        "&::after": {
          backgroundImage: `url(${bgImageAfter})`,
          content: "''",
          position: "absolute",
          bottom: -2,
          height: "350px",
          width: "100%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        },
      }}
    >
      <Container sx={{ zIndex: 1 }}>
        <Box display={"flex"} justifyContent={"center"} mt={20}>
          <Typography
            align="center"
            variant="h1"
            color={"#fff"}
            width={{ xs: "100%", lg: "500px" }}
            fontSize={{ xs: "24px", lg: "48px" }}
          >
            {title}
          </Typography>
        </Box>
        <Box mt={2}>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="medium" sx={{ color: "#fff" }} />}
            aria-label="breadcrumb"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            {[
              <Box component={Link} to="/" key="home" color="#fff">
                Home
              </Box>,
              <Typography key={title} color="#fff">
                {title}
              </Typography>,
            ]}
          </Breadcrumbs>
        </Box>
      </Container>
    </Box>
  );
};

Banner.defaultProps = {};

Banner.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Banner;
