// react-router-dom components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Box, Button } from "@mui/material";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import footerBg from "../../../assets/images/footer/footer-bg.png";

function DefaultFooter({ content, isHideMap }) {
  const { brand, menus, copyright } = content;

  return (
    <Box component="footer" sx={{ backgroundImage: `url(${footerBg})`, color: "#fff" }}>
      <Container>
        <Grid container spacing={12} pb={0}>
          <Grid item xs={12} md={3} sx={{ ml: "auto", mb: 3 }}>
            <MKBox>
              <Box component={Link} to={brand.route} height="100%" width="100%" display="block">
                <MKBox
                  component="img"
                  height="100%"
                  width="100%"
                  src={brand.image}
                  alt={brand.name}
                />
              </Box>
            </MKBox>
            <MKBox display="flex" alignItems="center" mt={3}>
              <Box display={"flex"} gap={"20px"} flexDirection={"column"} justifyContent={"center"}>
                <Link to={"/contact-us"}>
                  <Button variant="contained" sx={{ backgroundColor: "#90E0EF", color: "#fff" }}>
                    Get Started
                  </Button>
                </Link>
                {!isHideMap && (
                  <Box
                    component={"iframe"}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3339.6073018889256!2d-96.49473222439819!3d33.17193496369953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c09533ad9278f%3A0x9273027d288da998!2s514%20E%20Hazelwood%20St%20d%2C%20Princeton%2C%20TX%2075407%2C%20USA!5e0!3m2!1sen!2sin!4v1705662890789!5m2!1sen!2sin"
                    width="100%"
                    height="200px"
                    style={{ border: 0, borderRadius: "8px" }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></Box>
                )}
              </Box>
            </MKBox>
          </Grid>
          {menus.map(({ name: title, items }) => (
            <Grid key={title} item xs={6} md={3} sx={{ mb: 3 }}>
              <MKTypography
                display="block"
                variant="button"
                fontWeight="bold"
                textTransform="capitalize"
                color="#fff"
                mb={1}
              >
                {title}
              </MKTypography>
              <MKBox component="ul" p={0} m={0} sx={{ listStyle: "none" }}>
                {items.map(({ name, route, href }) => (
                  <MKBox key={name} component="li" p={0} m={0} lineHeight={1.25} color="#fff">
                    {href ? (
                      <MKTypography
                        component={Link}
                        to={href}
                        rel="noreferrer"
                        variant="button"
                        fontWeight="regular"
                        textTransform="capitalize"
                        color="#fff"
                      >
                        {name}
                      </MKTypography>
                    ) : (
                      <MKTypography
                        component={Link}
                        to={route}
                        variant="button"
                        fontWeight="regular"
                        textTransform="capitalize"
                        color="#fff"
                      >
                        {name}
                      </MKTypography>
                    )}
                  </MKBox>
                ))}
              </MKBox>
            </Grid>
          ))}
          <Grid item xs={12} sx={{ textAlign: "center", my: 3, paddingTop: "0 !important" }}>
            {copyright}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

// Typechecking props for the DefaultFooter
DefaultFooter.defaultProps = {
  isHideMap: false,
};

DefaultFooter.propTypes = {
  content: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.object, PropTypes.array])).isRequired,
  isHideMap: PropTypes.bool,
};

export default DefaultFooter;
