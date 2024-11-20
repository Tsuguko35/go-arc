import {
  AboutUs,
  ContactUs,
  LandingPage,
  MemberProfile,
  Portfolio,
  Product,
  ProductQuote,
  ProjectDetails,
  Projects,
  ProjectsShowcase,
  RequestQuote,
  ServiceCommercial,
  ServiceResidential,
  Services,
} from "../pages";

const routes = [
  {
    path: "/",
    component: <LandingPage />,
  },
  {
    path: "/*",
    component: <LandingPage />,
  },
  {
    path: "/RequestQuote",
    component: <RequestQuote />,
  },
  {
    path: "/Services",
    component: <Services />,
  },
  {
    path: "/Services/Residential",
    component: <ServiceResidential />,
  },
  {
    path: "/Services/Commercial",
    component: <ServiceCommercial />,
  },
  // {
  //   path: "/Services/:productType",
  //   component: <Product />,
  // },
  {
    path: "/Services/Quote/:productType",
    component: <ProductQuote />,
  },
  {
    path: "/Portfolio",
    component: <Portfolio />,
  },
  {
    path: "/About",
    component: <AboutUs />,
  },
  // {
  //   path: "/About/Profile/:teamMember",
  //   component: <MemberProfile />,
  // },
  {
    path: "/Contact",
    component: <ContactUs />,
  },
  {
    path: "/Portfolio/Projects/:projectType",
    component: <Projects />,
  },
  // {
  //   path: "/Portfolio/Projects-Showcase/:projectType",
  //   component: <ProjectsShowcase />,
  // },
  // {
  //   path: "/Portfolio/Projects-Showcase/Details/:projectType",
  //   component: <ProjectDetails />,
  // },
];

export default routes;
