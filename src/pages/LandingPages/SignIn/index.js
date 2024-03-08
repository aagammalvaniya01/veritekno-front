import { useState, useContext, useEffect } from "react";

import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import { AppContext } from "../../../context";
import { useNavigate } from "react-router-dom";
import * as userServices from "../../../services/user";
import { ACTION } from "../../../context/constant";
import * as tokenService from "../../../services/token";

import bgImage from "assets/images/bg-sign-in-basic.jpeg";

function SignInBasic() {
  const { setIsAuthenticated, dispatch, state } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (state?.userInfo) {
      navigate("/admin/dashboard");
    }
  }, [state?.userInfo]);

  const handleClick = async () => {
    try {
      const payloadData = {
        email,
        password,
      };
      const res = await userServices.login(payloadData);
      if (res?.status === "Success") {
        const userInfo = {
          authData: res.authData,
          token: res?.token,
        };
        dispatch({
          type: ACTION.ADMIN_LOGIN_SUCCESS,
          payload: userInfo,
        });
        tokenService.setToken(userInfo);
        setIsAuthenticated(true);
        navigate("/admin/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <MKBox
        position="absolute"
        top={0}
        left={0}
        zIndex={1}
        width="100%"
        minHeight="100vh"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <MKBox px={1} width="100%" height="100vh" mx="auto" position="relative" zIndex={2}>
        <Grid container spacing={1} justifyContent="center" alignItems="center" height="100%">
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
            <Card>
              <MKBox
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
                mx={2}
                mt={-3}
                p={2}
                mb={1}
                textAlign="center"
              >
                <MKTypography variant="h4" fontWeight="medium" color="white" mt={1}>
                  Admin sign in
                </MKTypography>
              </MKBox>
              <MKBox pt={4} pb={3} px={3}>
                <MKBox component="form" role="form">
                  <MKBox mb={2}>
                    <MKInput
                      type="email"
                      label="Email"
                      fullWidth
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </MKBox>
                  <MKBox mb={2}>
                    <MKInput
                      type="password"
                      label="Password"
                      fullWidth
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </MKBox>
                  <MKBox mt={4} mb={1}>
                    <MKButton variant="gradient" color="info" fullWidth onClick={handleClick}>
                      sign in
                    </MKButton>
                  </MKBox>
                </MKBox>
              </MKBox>
            </Card>
          </Grid>
        </Grid>
      </MKBox>
    </>
  );
}

export default SignInBasic;
