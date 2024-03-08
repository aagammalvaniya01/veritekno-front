import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import MKBox from "components/MKBox";

const ServiceContain = ({ image, name, pageDescription, ...rest }) => {
  console.log("console_1222", { image, pageDescription, ...rest });
  const imageTemplate = (
    <Box
      bgcolor="transparent"
      borderRadius="xl"
      shadow="lg"
      //   height="96px"
      //   minWidth="84px"
      {...rest}
      sx={{
        overflow: "hidden",
      }}
    >
      <MKBox
        component="img"
        src={image}
        alt={name}
        height={{ xs: "auto", lg: "400px" }}
        width="100%"
        my="auto"
        opacity={1}
      />
    </Box>
  );
  return (
    <Box>
      <MKBox mt={2} display="flex" justifyContent="center" alignItems="center">
        {imageTemplate}
      </MKBox>
      <Box mt={2}>
        <Typography variant="body2" fontWeight="regular" fontSize={"18px"} mb={1} pr={2}>
          <div dangerouslySetInnerHTML={{ __html: pageDescription }} />
        </Typography>
      </Box>
    </Box>
  );
};

ServiceContain.defaultProps = {
  name: "",
};

// Typechecking props for the ExampleCard
ServiceContain.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string,
  pageDescription: PropTypes.string,
};

export default ServiceContain;
