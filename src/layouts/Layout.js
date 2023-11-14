import { Suspense } from "react";
import { Outlet } from "react-router";
import { Loader } from "../components";
import { StyledContainer } from "./MainLayout";
import { Box, styled } from "@mui/material";
import EffectsImage from "../assets/svgIcons/Effects.svg";
import Logo from "../assets/svgIcons/Logo.svg";

const StyledLeftContainer = styled(Box)(({ theme }) => ({
  width: 500,
  backgroundColor: "#006CEA",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundImage: `url(${EffectsImage})`,
  backgroundRepeat: "no-repeat",
  height: "100%",
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
          <img src={Logo} />
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
