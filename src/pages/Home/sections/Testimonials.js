// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

// Material Kit 2 React examples
import DefaultReviewCard from "examples/Cards/ReviewCards/DefaultReviewCard";
import testBgBanner from "../../../assets/images/home/test-bg-banner.svg";
import Animation from "animation";

import Title from "pages/common/Title";

function Information() {
  return (
    <Box bgcolor="#fff">
      <Box
        component="section"
        py={12}
        sx={{ background: `url(${testBgBanner}), rgb(248, 248, 248) 80% / cover no-repeat;` }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={6}
            justifyContent="center"
            sx={{ mx: "auto", textAlign: "center" }}
          >
            <Title
              title="Our Testimonials"
              description="Discover the impact of Veritekno through the words of our clients, sharing stories of innovation, collaboration, and success."
              align="center"
              titleJustify={"center"}
              isImageBottom
            />
          </Grid>
          <Animation>
            <Grid container spacing={3} sx={{ mt: 8 }}>
              <Grid item xs={12} md={6} lg={4}>
                <DefaultReviewCard
                  name="Nick Willever"
                  date="1 day ago"
                  review="This is an excellent product, the documentation is excellent and helped me get things done more efficiently."
                  rating={5}
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <DefaultReviewCard
                  color="info"
                  name="Shailesh Kushwaha"
                  date="1 week ago"
                  review="I found solution to all my design needs from Creative Tim. I use them as a freelancer in my hobby projects for fun! And its really affordable, very humble guys !!!"
                  rating={5}
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <DefaultReviewCard
                  name="Samuel Kamuli"
                  date="3 weeks ago"
                  review="Great product. Helped me cut the time to set up a site. I used the components within instead of starting from scratch. I highly recommend for developers who want to spend more time on the backend!."
                  rating={5}
                />
              </Grid>
            </Grid>
          </Animation>
        </Container>
      </Box>
    </Box>
  );
}

export default Information;
