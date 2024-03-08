/**
 * Application wide configuration
 */
const config = {
  // baseURI: 'http://localhost:5001/api/v1',
  baseURI: "https://veriteknoserver-gray.vercel.app/api/v1",

  apiEndPoint: {
    user: {
      login: "/auth/login",
      create: "/auth/register",
      addUser: "/auth/register",
    },
    contactUs: {
      create: "/contact-us",
    },
  },
};

export default config;
