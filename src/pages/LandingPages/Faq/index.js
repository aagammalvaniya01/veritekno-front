import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import DefaultFooter from "examples/Footers/DefaultFooter";
import routes from "routes";
import footerRoutes from "footer.routes";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import { Box, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import faqIllistature from "../../../assets/images/faq/faqIllistature.svg";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Banner from "pages/common/Banner";
import HeadTag from "../../../components/common/HeadSeo";

function FAQComponent() {
  const faqsec = [
    {
      id: 1,
      title: "What is Veritekno's project development process?",
      desc: "At Veritekno, our project development process is collaborative and iterative. We engage closely with clients from ideation to delivery, ensuring transparent communication and regular milestones. Our process integrates agile methodologies, fostering adaptability and responsiveness to changing requirements.",
    },
    {
      id: 2,
      title: "How long does Veritekno take to complete a project?",
      desc: "Project timelines vary depending on the scope and complexity. We tailor our approach to meet individual project needs, ensuring quality and meeting deadlines. Our team provides realistic estimates and maintains open communication to keep you updated throughout the development lifecycle.",
    },
    {
      id: 3,
      title: "What kind of quality assurance and support does Veritekno provide post-launch?",
      desc: "Veritekno is committed to delivering top-notch quality. We conduct rigorous testing throughout development to ensure robustness and reliability. Post-launch, we offer ongoing support, maintenance, and updates to guarantee smooth functioning and address any arising concerns promptly.",
    },
    {
      id: 4,
      title: "How long does Veritekno take to complete a project?",
      desc: "Project timelines vary depending on the scope and complexity. We tailor our approach to meet individual project needs, ensuring quality and meeting deadlines. Our team provides realistic estimates and maintains open communication to keep you updated throughout the development lifecycle.",
    },
    {
      id: 5,
      title: "How does Veritekno ensure data security?",
      desc: "Security is paramount at Veritekno. We employ industry best practices, including encryption, secure coding standards, regular security audits, and compliance with data protection regulations. Our team is committed to safeguarding your sensitive information throughout the development process.",
    },
    {
      id: 5,
      title: "How does Veritekno determine project costs and pricing?",
      desc: "Veritekno provides transparent pricing based on project scope, complexity, and requirements. We offer competitive rates and strive to deliver value-driven solutions within agreed-upon budgets. Our team ensures cost clarity and feasibility before commencing any project.",
    },
  ];
  return (
    <>
      <HeadTag
        title="Veritekno FAQ - Answers to Your Common Queries about Our Services"
        description="Find comprehensive answers to frequently asked questions about Veritekno's services, solutions, and offerings. Get clarity on our processes, expertise, and how we can cater to your needs."
      />
      <Box bgcolor={"#fff"}>
        <DefaultNavbar routes={routes} sticky />
        <Banner title="FAQ" />

        <Container>
          <Grid
            pt={4}
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            rowGap={5}
            flexDirection={{ xs: "column", lg: "row" }}
          >
            <Grid item xs={12} lg={6}>
              <Box
                height={"100%"}
                // display={"flex"}
                // flexDirection={"column"}
                // justifyContent={"center"}
              >
                <Typography align="center" variant="h1" fontSize={{ xs: "24px", lg: "40px" }}>
                  Explore Our Frequently Asked <span style={{ color: "#004FD2" }}>Questions</span>
                </Typography>
                <Box pt={3}>
                  {faqsec.map((item, key) => (
                    <Accordion key={key} sx={{ marginTop: "15px" }}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id={item.id}
                        sx={{
                          background: "rgba(0, 79, 210, 0.35) !important",
                        }}
                      >
                        <Typography fontWeight="500">{item.title}</Typography>
                      </AccordionSummary>
                      <AccordionDetails
                        sx={{
                          background: "rgba(0, 79, 210, 0.19) !important",
                        }}
                      >
                        <Typography>{item.desc}</Typography>
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6} display={"flex"}>
              <Box component={"img"} src={faqIllistature} alt={"faqIllistature"} width="100%" />
            </Grid>
          </Grid>
        </Container>
        <MKBox pt={6} px={1} mt={6}>
          <DefaultFooter content={footerRoutes} />
        </MKBox>
      </Box>
    </>
  );
}

export default FAQComponent;
