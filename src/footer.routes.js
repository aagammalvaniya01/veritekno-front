// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

// Material Kit 2 React components
import { Typography } from "@mui/material";

// Images
import logoCT from "assets/images/footer/logo.png";
import typography from "assets/theme/base/typography";

const date = new Date().getFullYear();
const { size } = typography;

export default {
  brand: {
    name: "www.Veritekno.com",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/CreativeTim/",
    },
    {
      icon: <TwitterIcon />,
      link: "https://twitter.com/creativetim",
    },
  ],
  menus: [
    {
      name: "company",
      items: [
        { name: "Home", href: "/" },
        { name: "About us", href: "/about-us" },
        { name: "career", href: "/career" },
      ],
    },
    {
      name: "Services",
      items: [
        { name: "Migration", href: "/services/migration" },
        { name: "Data Engineering", href: "/services/data-engineering" },
        { name: "SAP", href: "/services/sap" },
        { name: "Cloud Computing", href: "/services/cloud-computing" },
        { name: "NAS/SAN", href: "/services/nas-san" },
        { name: "Alteryx", href: "/services/alteryx" },
        { name: "PowerBI", href: "/services/power-bi" },
        { name: "Informatica", href: "/services/informatica" },
        { name: "Jenkins", href: "/services/jenkins" },
        {
          name: "Docker and Kubernetes for Deployment",
          href: "/services/docker-kubernetes-for-deployment",
        },
      ],
    },
    {
      name: "help & support",
      items: [
        { name: "contact us", href: "/contact-us" },
        { name: "FAQ", href: "/faq" },
      ],
    },
  ],
  copyright: (
    <Typography color={"#fff"} fontSize={size.sm} fontWeight="regular">
      © Copyright {date} Veritekno. All rights reserved
    </Typography>
  ),
};
