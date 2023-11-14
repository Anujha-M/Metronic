import { Suspense } from "react";
import { Outlet } from "react-router";
import { Loader, Stepper } from "../components";
import { StyledContainer } from "./MainLayout";
import { Box, styled } from "@mui/material";
import EffectsImage from "../assets/auth-bg.png";
import Logo from "../assets/svgIcons/Logo.svg";
import { StyledStepperWrapper } from "../components/Stepper";

const StyledLeftContainer = styled(Box)(({ theme }) => ({
  width: 500,
  backgroundColor: "#006CEA",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundImage: `url(${EffectsImage})`,
  backgroundRepeat: "no-repeat",
  height: "100%",
  backgroundPosition: "center",
  backgroundSize: "cover",
}));

export const StyledRightContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const Layout = () => {
  return (
    <StyledContainer maxWidth="xl">
      <Box
        sx={{
          height: "100vh",
          display: "flex",
        }}
      >
        <StyledLeftContainer>
          <Box
            flex={1}
            style={{
              padding: "140px 125px 35px 125px",
              overflowY: "scroll",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 120,
            }}
          >
            <img src={Logo} />
            <StyledStepperWrapper>
              <Stepper
                title="Account Type"
                subTitle="Select your account type"
                isActive
                isCompletedStep
                isFinalIndex
                stepIndex={1}
              />
            </StyledStepperWrapper>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 39,
              }}
            >
              <a target="_blank" class="link">
                Terms
              </a>
              <a target="_blank" class="link">
                Plans
              </a>
              <a target="_blank" class="link">
                Contact Us
              </a>
            </div>
          </Box>
        </StyledLeftContainer>
        <StyledRightContainer flex={1}>
          <Suspense fallback={() => <Loader />}>
            <Outlet />
          </Suspense>
        </StyledRightContainer>
      </Box>
    </StyledContainer>
  );
};

export default Layout;
