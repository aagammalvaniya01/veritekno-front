// @mui material components
import Icon from "@mui/material/Icon";

// @mui icons
// import GitHubIcon from "@mui/icons-material/GitHub";

// Pages
import AboutUs from "layouts/pages/landing-pages/about-us";
import ContactUs from "layouts/pages/landing-pages/contact-us";
import FaqPage from "layouts/pages/landing-pages/faq";
// import Author from "layouts/pages/landing-pages/author";
// import SignIn from "layouts/pages/authentication/sign-in";
import Home from "./layouts/pages/home";
import Service from "pages/LandingPages/Service";
import Career from "pages/LandingPages/Career";

// Sections
// import PageHeaders from "layouts/sections/page-sections/page-headers";
// import Features from "layouts/sections/page-sections/featuers";
// import Navbars from "layouts/sections/navigation/navbars";
// import NavTabs from "layouts/sections/navigation/nav-tabs";
// import Pagination from "layouts/sections/navigation/pagination";
// import Inputs from "layouts/sections/input-areas/inputs";
// import Forms from "layouts/sections/input-areas/forms";
// import Alerts from "layouts/sections/attention-catchers/alerts";
// import Modals from "layouts/sections/attention-catchers/modals";
// import TooltipsPopovers from "layouts/sections/attention-catchers/tooltips-popovers";
// import Avatars from "layouts/sections/elements/avatars";
// import Badges from "layouts/sections/elements/badges";
// import BreadcrumbsEl from "layouts/sections/elements/breadcrumbs";
// import Buttons from "layouts/sections/elements/buttons";
// import Dropdowns from "layouts/sections/elements/dropdowns";
// import ProgressBars from "layouts/sections/elements/progress-bars";
// import Toggles from "layouts/sections/elements/toggles";
// import Typography from "layouts/sections/elements/typography";

const routes = [
  {
    name: "Home",
    icon: <Icon>home</Icon>,
    route: "/",
    component: <Home />,
  },
  {
    name: "About",
    icon: <Icon>info</Icon>,
    route: "/about-us",
    component: <AboutUs />,
  },
  // {
  //   name: "Blogs",
  //   icon: <Icon>auto_awesome_motion</Icon>,
  //   route: "/about-us",
  //   component: <AboutUs />,
  // },
  {
    name: "Services",
    icon: <Icon>settings</Icon>,
    collapse: [
      {
        name: "All Services",
        route: "/services",
        component: <Service />,
      },
      {
        name: "Migration",
        route: "/services",
        id: "migration",
      },
      {
        name: "Data Engineering",
        route: "/services",
        id: "data-engineering",
      },
      {
        name: "SAP",
        route: "/services",
        id: "sap",
      },
      {
        name: "Cloud computing",
        route: "/services",
        id: "cloud-computing",
      },
      {
        name: "NAS/SAN",
        route: "/services",
        id: "nas-san",
      },
      {
        name: "Alteryx",
        route: "/services",
        id: "alteryx",
      },
      {
        name: "PowerBI",
        route: "/services",
        id: "power-bi",
      },
      {
        name: "Informatica",
        route: "/services",
        id: "informatica",
      },
      {
        name: "Jenkins ",
        route: "/services",
        id: "jenkins",
      },
      {
        name: "Docker and Kubernetes for Deployment ",
        route: "/services",
        id: "docker-kubernetes-for-deployment",
      },
    ],
  },
  {
    name: "Contact us",
    icon: <Icon>contact_phone</Icon>,
    route: "/contact-us",
    component: <ContactUs />,
  },
  {
    name: "FAQ",
    icon: <Icon>help</Icon>,
    route: "/faq",
    component: <FaqPage />,
  },
  {
    name: "Career",
    icon: <Icon>schools</Icon>,
    route: "/career",
    component: <Career />,
  },
  // {
  //   name: "github",
  //   icon: <GitHubIcon />,
  //   href: "https://www.github.com/creativetimofficial/material-kit-react",
  // },
];

export default routes;
