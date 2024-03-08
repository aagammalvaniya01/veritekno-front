import PropTypes from "prop-types";

// @mui material components
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Typography";
import Button from "@mui/material/Button";
// import SendIcon from "@mui/icons-material/Send";

// Material Kit 2 React components
import MKBox from "components/MKBox";
// import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import { Link } from "react-router-dom";
import RightArrow from "../../../../assets/images/common/RightArrow.svg";

function ServiceCard({ image, name, description, route, bgcolor, ...rest }) {
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
        // width="84px"
        // height="96px"
        my="auto"
        opacity={1}
      />
    </Box>
  );

  return (
    <Box
      position="relative"
      shadow="lg"
      borderRadius="10px"
      boxShadow="-1px 6px 9px 0px rgba(0, 0, 0, 0.25)x"
      bgcolor={bgcolor}
      p={4}
      sx={{
        transform: "perspectivse(999px) rotateX(0deg) translate3d(0, 0, 0)",
        transformOrigin: "50% 0",
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
        <MKBox display="flex" alignItems="center">
          {imageTemplate}
        </MKBox>
        <Typography variant="h5" fontWeight="bold" mt={2}>
          {name}
        </Typography>
        <MKBox mt={2} lineHeight={1}>
          <MKTypography variant="body2" fontWeight="regular" color="secondary" textAlign="justify">
            {description}
          </MKTypography>
        </MKBox>
      </MKBox>
      <MKBox mt={4} lineHeight={1}>
        <Button
          sx={{ textTransform: "unset", fontSize: "18px", color: "#004FD2", paddingLeft: 0 }}
          component={Link}
          color="info"
          to={route}
          endIcon={<Box component={"img"} src={RightArrow} />}
        >
          Read more
        </Button>
      </MKBox>
    </Box>
  );
}

// Setting default props for the ExampleCard
ServiceCard.defaultProps = {
  name: "",
  bgcolor: "#fff",
};

// Typechecking props for the ExampleCard
ServiceCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  route: PropTypes.string,
  bgcolor: PropTypes.string,
};

export default ServiceCard;
