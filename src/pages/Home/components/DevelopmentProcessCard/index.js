import PropTypes from "prop-types";

// @mui material components
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Typography";

// Material Kit 2 React components
import MKBox from "components/MKBox";
// import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

function ServiceCard({ image, name, description, background, padding, ...rest }) {
  const imageTemplate = (
    <Box
      bgcolor="transparent"
      borderRadius="xl"
      {...rest}
      sx={{
        overflow: "hidden",
      }}
    >
      <MKBox component="img" alt={image} src={image} my="auto" opacity={1} />
    </Box>
  );

  return (
    <Box
      position="relative"
      shadow="lg"
      borderRadius="15px"
      border="2px solid transparent"
      boxShadow="0 0 7px 2px rgba(0, 0, 0, 0.5) inset"
      p={padding}
      sx={{
        background: background,
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
        <Typography color="#000" variant="h5" fontWeight="bold" mt={2}>
          {name}
        </Typography>
        <MKBox mt={2} lineHeight={1}>
          <MKTypography variant="body2" fontWeight="regular" color="#454E58">
            {description}
          </MKTypography>
        </MKBox>
      </MKBox>
    </Box>
  );
}

// Setting default props for the ExampleCard
ServiceCard.defaultProps = {
  name: "",
  background: "rgba(0, 79, 210, 0.10)",
  padding: 3,
};

// Typechecking props for the ExampleCard
ServiceCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  background: PropTypes.string,
  padding: PropTypes.number,
};

export default ServiceCard;
