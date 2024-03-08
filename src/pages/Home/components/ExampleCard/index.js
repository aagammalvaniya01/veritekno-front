/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
// import Tooltip from "@mui/material/Tooltip";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import { Link } from "react-router-dom";

function ExampleCard({ image, name, description, route, ...rest }) {
  const imageTemplate = (
    <MKBox
      bgColor="white"
      borderRadius="xl"
      shadow="lg"
      height="50px"
      minWidth="50px"
      {...rest}
      sx={{
        overflow: "hidden",
        // transform: "perspective(999px) rotateX(0deg) translate3d(0, 0, 0)",
        // transformOrigin: "50% 0",
        // backfaceVisibility: "hidden",
        // willChange: "transform, box-shadow",
        // transition: "transform 200ms ease-out",

        // "&:hover": {
        //   transform: "perspective(999px) rotateX(7deg) translate3d(0px, -4px, 5px)",
        // },
      }}
    >
      <MKBox
        component="img"
        src={image}
        alt={name}
        width="50px"
        height="50px"
        my="auto"
        opacity={1}
      />
    </MKBox>
  );

  return (
    <MKBox
      position="relative"
      shadow="lg"
      borderRadius="xl"
      p={2}
      sx={{
        overflow: "hidden",
        transform: "perspective(999px) rotateX(0deg) translate3d(0, 0, 0)",
        transformOrigin: "50% 0",
        backfaceVisibility: "hidden",
        willChange: "transform, box-shadow",
        transition: "transform 200ms ease-out",

        "&:hover": {
          transform: "perspective(999px) rotateX(0deg) translate3d(0px, -4px, 20px)",
        },
      }}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      height="100%"
    >
      <MKBox>
        <MKBox display="flex" gap={2} alignItems="center">
          {imageTemplate}
          {name && (
            <MKTypography variant="h5" fontWeight="bold">
              {name}
            </MKTypography>
          )}
        </MKBox>
        <MKBox mt={2} ml={1} lineHeight={1}>
          <MKTypography variant="body2" fontWeight="regular" color="secondary">
            {description}
          </MKTypography>
        </MKBox>
      </MKBox>
      <MKBox mt={4} ml={1} lineHeight={1}>
        <MKButton component={Link} color="info" to={route}>
          Learn more
        </MKButton>
      </MKBox>
    </MKBox>
  );
}

// Setting default props for the ExampleCard
ExampleCard.defaultProps = {
  name: "",
  count: 0,
  pro: false,
};

// Typechecking props for the ExampleCard
ExampleCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string,
  description: PropTypes.string,
  // count: PropTypes.number,
  route: PropTypes.string,
};

export default ExampleCard;
