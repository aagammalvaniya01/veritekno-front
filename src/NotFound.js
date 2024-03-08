// NotFound.js
import React from "react";
import { Box, Typography } from "@mui/material";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import routes from "routes";
import DefaultFooter from "examples/Footers/DefaultFooter";
import footerRoutes from "./footer.routes";
import NotFoundIMG from "./assets/images/notFound/not-found.svg";
import { Link } from "react-router-dom";
import MKButton from "components/MKButton";

const NotFound = () => {
  return (
    <div>
      <Box bgcolor={"#fff"}>
        <DefaultNavbar routes={routes} sticky />
        <Box py={10} display={"flex"} flexDirection={"column"} alignItems={"center"} gap={1}>
          <Box
            component={"img"}
            height={{ xs: "100%", lg: 450 }}
            src={NotFoundIMG}
            alt="not found img"
          />
          <Typography
            align="center"
            variant="h1"
            color={"#000"}
            width={{ xs: "100%", lg: "500px" }}
          >
            Oops!
          </Typography>
          <Typography align="center" variant="h3" width={{ xs: "100%", lg: "500px" }}>
            Sorry, the page you were looking for cannot be found.
          </Typography>
          <MKButton
            sx={{ textTransform: "unset", fontSize: "18px" }}
            component={Link}
            variant="gradient"
            color="info"
            to={"/"}
          >
            Back to home page
          </MKButton>
        </Box>
        <Box mt={10}>
          <DefaultFooter content={footerRoutes} />
        </Box>
      </Box>
    </div>
  );
};

export default NotFound;
