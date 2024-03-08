import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "assets/theme";
import Home from "./layouts/pages/home";
import FaqPage from "./layouts/pages/landing-pages/faq";
import routes from "routes";
import ServicePage from "pages/LandingPages/Service/ServicePage";
import PrivateRoute from "./PrivateRoute";
import SignInPage from "layouts/pages/authentication/sign-in";
import Dashboard from "pages/admin/dashboard";
import Test from "pages/admin/test";
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";
import "./app.css";
import NotFound from "NotFound";
export default function App() {
  const { pathname } = useLocation();

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.flatMap((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        // Use query parameters if available
        const queryParams = route.queryParams
          ? `?${new URLSearchParams(route.queryParams).toString()}`
          : "";
        const fullPath = `${route.route}${queryParams}`;

        return <Route exact path={fullPath} element={route.component} key={route.key} />;
      }

      return null;
    });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        {getRoutes(routes)}
        <Route path="/" element={<FaqPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/services/:name" element={<ServicePage />} />
        <Route exact path="/admin" element={<SignInPage />} />
        <Route
          exact
          path="/admin/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/admin/test"
          element={
            <PrivateRoute>
              <Test />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <NotificationContainer />
    </ThemeProvider>
  );
}
